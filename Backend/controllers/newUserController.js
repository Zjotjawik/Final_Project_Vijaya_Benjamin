const NewUser = require('../schemas/newUser');

// Controller functions for new user CRUD operations
const createNewUser = async (req, res) => {
  try {
    const newNewUser = new NewUser(req.body);
    const savedUser = await newNewUser.save();
    res.json(savedUser);
  } catch (error) {
    console.error('Error creating new user:', error);
    res.status(500).json({ error: 'Error creating new user' });
  }
};

const getNewUser = async (req, res) => {
  try {
    const user = await NewUser.findById(req.params.id);
    if (!user) {
      return res.status(404).json({ error: 'New user not found' });
    }
    res.json(user);
  } catch (error) {
    console.error('Error retrieving new user:', error);
    res.status(500).json({ error: 'Error retrieving new user' });
  }
};

const updateNewUser = async (req, res) => {
  try {
    const updatedUser = await NewUser.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    if (!updatedUser) {
      return res.status(404).json({ error: 'New user not found' });
    }
    res.json(updatedUser);
  } catch (error) {
    console.error('Error updating new user:', error);
    res.status(500).json({ error: 'Error updating new user' });
  }
};

const deleteNewUser = async (req, res) => {
  try {
    const deletedUser = await NewUser.findByIdAndDelete(req.params.id);
    if (!deletedUser) {
      return res.status(404).json({ error: 'New user not found' });
    }
    res.json({ message: 'New user deleted' });
  } catch (error) {
    console.error('Error deleting new user:', error);
    res.status(500).json({ error: 'Error deleting new user' });
  }
};

module.exports = {
  createNewUser,
  getNewUser,
  updateNewUser,
  deleteNewUser,
};
