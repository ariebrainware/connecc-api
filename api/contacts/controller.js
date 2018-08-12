const models = require("../../models");
const contact = models.contact;

const controller = {
    showContacts: (req, res, next) => {
        contact
            .findAll()
            .then(contact => {
                res.status(200).send({
                    contact
                });
            })
            .catch(err => {
                res.status(500).send(err);
            });
    },

    searchByID: (req, res, next) => {
        const id = req.params.id;
        contact
            .findById(id)
            .then(contact => {
                if (contact)
                    res.status(200).send({
                        contact
                    });
                else
                    res.status(404).send({
                        message: "Contact not found"
                    });
            })
            .catch(err => {
                res.status(400).send(err);
            });
    },

    searchByKeyword: (req, res, next) => {
        const keyword = req.query.q;
        const Sequelize = require('sequelize');
        const Op = Sequelize.Op
        // if (keyword) {
            contact
                .findAll({
                    where: {
                        name: {
                            [Op.like]: `%${keyword}%`
                        }
                    }
                })
                .then(result => {
                    console.log(result)
                    if (result) {
                        res.status(200).send({
                            
                            result
                        });
                    } else {
                        res.status(404).send({
                            message: "Data not found!"
                        })
                    }
                });
        // } else {
        //     res.status(400).send({
        //         message: "Please specify your keyword!"
        //     });
        // }
    },

    addContact: (req, res, next) => {
        if (
            (req.body.name, req.body.phone_number, req.body.email, req.body.address)
        ) {
            contact
                .build({
                    name: req.body.name,
                    phone_number: req.body.phone_number,
                    email: req.body.email,
                    address: req.body.address,
                    createdAt: new Date(),
                    updatedAt: new Date()
                })
                .save()
                .then(contact => {
                    res.status(200).send({
                        message: "Contact saved!"
                    });
                });
        } else
            res.send({
                message: "Please fill the input fieild!"
            });
    },

    deleteContact: (req, res, next) => {
        const id = req.params.id;
        if (id) {
            const check = contact.findById(id);
            if (check) {
                contact
                    .destroy({
                        where: {
                            id: id
                        }
                    })
                    .then(() => {
                        res.status(200).send({
                            message: "Contact deleted!"
                        });
                    });
            } else {
                res.send({
                    message: "Contact doesnt exist"
                });
            }
        } else
            res.send({
                message: "Please specify contact id"
            });
    },

    updateContact: (req, res, next) => {
        const id = req.params.id;
        if (id) {
            const check = contact.findById(id);
            if (check) {
                contact
                    .update({
                        name: req.body.name,
                        phone_number: req.body.phone_number,
                        email: req.boy.email,
                        address: req.body.address
                    }, {
                        where: {
                            id: id
                        }
                    })
                    .then({
                        message: "Contact deleted!"
                    });
            } else {
                res.send({
                    message: "Contact doesnt exist"
                });
            }
        } else
            res.send({
                message: "Please specify contact id"
            });
    }
};
module.exports = controller;