const User = require('../schemas/user');

const createUser = async (req, res) => {
  try {
    const newUser = new User(req.body);
    const savedUser = await newUser.save();
    res.status(201).json({ success: true, message: 'User created', data: savedUser });
  } catch (error) {
    console.error('Error creating user:', error);
    res.status(500).json({ success: false, error: 'Error creating user' });
  }
};

const getUser = async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    if (!user) {
      return res.status(404).json({ success: false, error: 'User not found' });
    }
    res.json({ success: true, message: 'User retrieved', data: user });
  } catch (error) {
    console.error('Error retrieving user:', error);
    res.status(500).json({ success: false, error: 'Error retrieving user' });
  }
};

const updateUser = async (req, res) => {
  try {
    const updatedUser = await User.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!updatedUser) {
      return res.status(404).json({ success: false, error: 'User not found' });
    }
    res.json({ success: true, message: 'User updated', data: updatedUser });
  } catch (error) {
    console.error('Error updating user:', error);
    res.status(500).json({ success: false, error: 'Error updating user' });
  }
};

const deleteUser = async (req, res) => {
  try {
    const deletedUser = await User.findByIdAndDelete(req.params.id);
    if (!deletedUser) {
      return res.status(404).json({ success: false, error: 'User not found' });
    }
    res.json({ success: true, message: 'User deleted' });
  } catch (error) {
    console.error('Error deleting user:', error);
    res.status(500).json({ success: false, error: 'Error deleting user' });
  }
};

const getAllUsers = async (req, res) => {
  try {
    const users = await User.find();
    res.json({ success: true, message: 'All users retrieved', data: users });
  } catch (error) {
    console.error('Error retrieving all users:', error);
    res.status(500).json({ success: false, error: 'Error retrieving all users' });
  }
};

module.exports = {
  createUser,
  getUser,
  updateUser,
  deleteUser,
  getAllUsers
};
