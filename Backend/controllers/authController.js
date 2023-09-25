const User = require('../schemas/user');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
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
  res.clearCookie('access_token');
  res.json({  message: 'User logged out' });
};

module.exports = { signUp, signIn, logout };