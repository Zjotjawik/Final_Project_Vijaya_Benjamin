const ExistingUser = require('../schemas/existingUser');

// Controller functions for existing user CRUD operations
const createExistingUser = async (req, res) => {
  try {
    const newExistingUser = new ExistingUser(req.body);
    const savedUser = await newExistingUser.save();
    res.json(savedUser);
  } catch (error) {
    console.error('Error creating existing user:', error);
    res.status(500).json({ error: 'Error creating existing user' });
  }
};

const getExistingUser = async (req, res) => {
  try {
    const user = await ExistingUser.findById(req.params.id);
    if (!user) {
      return res.status(404).json({ error: 'Existing user not found' });
    }
    res.json(user);
  } catch (error) {
    console.error('Error retrieving existing user:', error);
    res.status(500).json({ error: 'Error retrieving existing user' });
  }
};

const updateExistingUser = async (req, res) => {
  try {
    const updatedUser = await ExistingUser.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    if (!updatedUser) {
      return res.status(404).json({ error: 'Existing user not found' });
    }
    res.json(updatedUser);
  } catch (error) {
    console.error('Error updating existing user:', error);
    res.status(500).json({ error: 'Error updating existing user' });
  }
};

const deleteExistingUser = async (req, res) => {
  try {
    const deletedUser = await ExistingUser.findByIdAndDelete(req.params.id);
    if (!deletedUser) {
      return res.status(404).json({ error: 'Existing user not found' });
    }
    res.json({ message: 'Existing user deleted' });
  } catch (error) {
    console.error('Error deleting existing user:', error);
    res.status(500).json({ error: 'Error deleting existing user' });
  }
};

module.exports = {
  createExistingUser,
  getExistingUser,
  updateExistingUser,
  deleteExistingUser,
};
