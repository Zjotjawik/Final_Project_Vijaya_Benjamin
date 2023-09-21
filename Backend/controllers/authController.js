const User = require('../schemas/user');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

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

    // Check if the user already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ error: 'User already exists' });
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

    res.json({ token });
  } catch (error) {
    console.error('Error signing in:', error);
    res.status(500).json({ error: 'Error signing in' });
  }
};

const logout = (req, res) => {
  // You can implement the logout logic here, such as clearing the JWT token or session data.
  // Depending on your authentication approach, you may need to handle this differently.
  res.json({ success: true, message: 'User logged out' });
};

module.exports = { signUp, signIn, logout };