const express = require('express');
const router = express.Router();

const controller = require('./controller')

/* ROUTES/VIEW */
router.get('/', controller.show);
router.post('/add', controller.add);
router.get('/:id', controller.searchByID);


module.exports = router;