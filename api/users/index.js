const express = require('express');
const router = express.Router();

const controller = require('./controller')

/* ROUTES/VIEW */
router.get('/', controller.showUser);
router.post('/', controller.addUser);
router.get('/:id', controller.searchUserByID);
router.delete('/:id', controller.deleteUser)
router.put('/:id',controller.updateUser)


module.exports = router;