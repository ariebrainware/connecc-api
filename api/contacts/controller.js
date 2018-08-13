const models = require("../../models");
const contact = models.contact;

const controller = {
    showContacts: async () => {
        let result = {}
        await contact
            .findAll()
            .then(contact => {
                result = {
                    status: "success",
                    data: contact
                }
            })
            .catch(err => {
                result = {
                    status: "error",
                    data: contact
                }
            });
        return result
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
        contact
            .findAll({
                where: {
                    name: {
                        [Op.like]: `%${keyword}%`
                    }
                }
            })
            .then(contact => {
                console.log(contact)
                if (contact) {
                    res.status(200).send({
                        contact
                    });
                } else {
                    res.status(404).send({
                        message: "Data not found!"
                    })
                }
            });
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