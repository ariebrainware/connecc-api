const express = require('express');
const router = express.Router();

const controller = require('./controller')

/* ROUTES/VIEW */
router.get('/', controller.show)
router.get('/search', controller.searchByKeyword);
router.post('/', controller.add);
router.get('/:id', controller.searchByID);
router.delete('/:id', controller.delete)
router.put('/:id',controller.update)

module.exports = router;
