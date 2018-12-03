const express = require('express');
const router = express.Router();

const controller = require('./controller')

/* ROUTES/VIEW */
router.get('/', controller.show)
router.post('/signup', controller.signup);
router.post('/signin', controller.signin);
// router.post('/logout',controller.logout);
router.get('/:id', controller.searchUserByID);
router.delete('/:id', controller.delete)
router.put('/:id',controller.update)


module.exports = router;