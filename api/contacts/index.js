const express = require('express');
const router = express.Router();

const controller = require('./controller')

/* ROUTES/VIEW */
router.get('/', async(req,res,next)=>{
    let data = await controller.showContacts()
    res.send({
        "search_contact_by_name": "https://connecc-api.herokuapp.com/search?q={name}",
        "search_contact_by_id": "https://connecc-api.herokuapp.com/search/:id",
        data
    })
});
router.get('/search', controller.searchByKeyword);
router.post('/', controller.addContact);
router.get('/:id', controller.searchByID);
router.delete('/:id', controller.deleteContact)
router.put('/:id',controller.updateContact)

module.exports = router;