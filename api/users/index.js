const express = require('express');
const router = express.Router();

const controller = require('./controller')

/* ROUTES/VIEW */
router.get('/', async(req,res,next) =>{
    let data = await controller.showUser()
    res.send({
        "search_users" :"https://connecc-api.herokuapp.com/:id",
        data
    })
    });
router.post('/', controller.addUser);
router.get('/:id', controller.searchUserByID);
router.delete('/:id', controller.deleteUser)
router.put('/:id',controller.updateUser)


module.exports = router;