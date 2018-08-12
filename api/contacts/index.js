const express = require('express');
const router = express.Router();

const controller = require('./controller')

/* ROUTES/VIEW */
router.get('/', controller.showContacts);
router.post('/', controller.addContact);
router.get('/:id', controller.searchByID);
router.delete('/:id', controller.deleteContact)
router.put('/:id',controller.updateContact)

module.exports = router;