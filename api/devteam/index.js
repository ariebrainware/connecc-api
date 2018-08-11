

const express = require('express');
const router = express.Router();

const controller = require('./controller')

/* ROUTES/VIEW */
router.get('/', controller.showDevTeam);
router.get('/:id', controller.searchByID);

module.exports = router;