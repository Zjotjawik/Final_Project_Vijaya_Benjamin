const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');
const authController = require('../controllers/authController');
const authMiddleware = require('../utils/authMiddleware');

// Protected route (example)
router.get('/profile', authMiddleware.authenticateToken, (req, res) => {
  // Access authenticated user via req.user
  res.json({ message: 'Accessed protected route', user: req.user });
});

// Remove the POST route for creating a user
router.get('/', userController.getAllUsers);
router.get('/:id', userController.getUser);
router.put('/:id', userController.updateUser);
router.delete('/:id', userController.deleteUser);

module.exports = router;
