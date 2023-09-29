const User = require('../schemas/user');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const nodemailer = require('nodemailer');
const cookieOptions = {
  // httpOnly: true,
  // maxAge: 3600000,
  // secure: false,
  // sameSite: 'None',
  httpOnly: true,
  maxAge: 3600000,
  domain: 'localhost',
  sameSite: 'Lax',
  secure: false,
  path: '/'
};

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.NODEMAILUSER, // Your email address
    pass: process.env.NODEMAILPASS, // Your email password or app-specific password
  },
});


const handleErrors = (error) => {
  console.log(error.message, error.code);
  let errors = { email: '', password: '' };

  if(error.code === 11000) {
    errors.email = 'that email is already registered';
    return errors;
  }

  if(error.message.includes('user validation failed')) {
    Object.values(error.errors).forEach(({properties}) => {
      errors[properties.path] = properties.message;
    }) 
  }
  return errors;
}


const signUp = async (req, res) => {
  try {
    const { username, email, password } = req.body;

    const existingEmailUser = await User.findOne({ email });

    const existingUsernameUser = await User.findOne({ username });

    if (existingEmailUser && existingUsernameUser) {
      return res.status(400).json({ error: 'Email and username are already registered' });
    }

    if (existingEmailUser) {
      return res.status(400).json({ error: 'Email is already registered' });
    }

    if (existingUsernameUser) {
      return res.status(400).json({ error: 'Username is already taken' });
    }

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create a new user
    const newUser = new User({
      username,
      email,
      password: hashedPassword,
    });

    await newUser.save();

    // Generate JWT token
    const token = jwt.sign({ id: newUser._id }, process.env.JWT_SECRET, {
      expiresIn: '1h', // Token expiration time (adjust as needed)
    });

    res.json({ token });
  } catch (error) {
    const errors = handleErrors(error);
    console.error('Error creating user:', error);
    res.status(500).json({ error: errors });
  }
};


const signIn = async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email });

    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }

    const passwordMatch = await bcrypt.compare(password, user.password);

    if (!passwordMatch) {
      return res.status(401).json({ error: 'Invalid credentials' });
    }

    // Generate JWT token
    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
      expiresIn: '1h', // Token expiration time (adjust as needed)
    });
    console.log(token)

    res.cookie('access_token', token, cookieOptions);
    console.log(res.getHeader('Set-Cookie'));

    res.json({ message : 'Sign-in successful' });
  } catch (error) {
    console.error('Error signing in:', error);
    res.status(500).json({ error: 'Error signing in' });
  }
};


const logout = (req, res) => {

  // Clear the 'access_token' cookie
  res.clearCookie('access_token');

  // Send a JSON response
  res.json({ message: 'User logged out' });
};


const forgotPassword = async (req, res) => {
  const { email } = req.body;

  try {
    // Check if the user with this email exists in your database
    const user = await User.findOne({ email }).exec();

    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }

    // Generate a unique token with a short expiration time (e.g., 1 hour)
    const token = jwt.sign({ email }, process.env.JWT_SECRET, { expiresIn: '1h' });

    // Send a password reset email with the token link
    const resetLink = `${process.env.HOSTADDRESS}/auth/reset-password/${token}`;

    // Email content
    const mailOptions = {
      from: process.env.NODEMAILUSER, // Sender email address
      to: email, // Recipient email address
      subject: 'Password Reset Request',
      html: `
        <p>You have requested a password reset for your account.</p>
        <p>Please click the following link to reset your password:</p>
        <a href="${resetLink}">${resetLink}</a>
        <p>If you did not request this reset, please ignore this email.</p>
      `,
    };

    // Send the email using Nodemailer
    await transporter.sendMail(mailOptions);
    
    res.json({ message: 'Password reset email sent' });
  } catch (error) {
    console.error('Error sending password reset email:', error);
    return res.status(500).json({ error: 'Email could not be sent' });
  }
};


const resetPassword = (req, res) => {
  const { token } = req.params;

  // Verify the token and check its expiration
  jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
    if (err) {
      return res.status(401).json({ error: 'Invalid or expired token' });
    }

    // Allow the user to reset the password here

    // Redirect to a password reset page with the token
    res.redirect(`${process.env.HOSTADDRESS}/auth/reset-password/${token}`);
  });
};

module.exports = { signUp, signIn, logout, forgotPassword, resetPassword };