const express = require('express');
const router = express.Router();
const existingUserController = require('../controllers/existingUserController');

// Define routes for existing user CRUD operations
router.post('/', existingUserController.createExistingUser);
router.get('/:id', existingUserController.getExistingUser);
router.put('/:id', existingUserController.updateExistingUser);
router.delete('/:id', existingUserController.deleteExistingUser);

module.exports = router;
