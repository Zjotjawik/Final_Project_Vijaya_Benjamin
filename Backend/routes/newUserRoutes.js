const express = require('express');
const router = express.Router();
const newUserController = require('../controllers/newUserController');

// Define routes for new user CRUD operations
router.post('/', newUserController.createNewUser);
router.get('/:id', newUserController.getNewUser);
router.put('/:id', newUserController.updateNewUser);
router.delete('/:id', newUserController.deleteNewUser);

module.exports = router;
