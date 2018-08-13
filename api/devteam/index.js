const express = require('express');
const router = express.Router();

const controller = require('./controller')

/* ROUTES/VIEW */
router.get('/', async(req, res, next) => {
    let data = await controller.listDevTeam();
    res.send({
        search: "https://connecc-api.herokuapp.com/devteam/:id",
        data
    })
})
router.get('/:id', controller.searchByID);

module.exports = router;