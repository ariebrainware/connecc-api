const models = require("../../models");
const contact = models.contact;

const controller = {
    show: (req, res, next) => {
        contact
            .findAll()
            .then(contacts => {
                res.status(200).send({
                    contacts
                })
            })
            .catch(err => {
                res.status(500).send({
                    contacts
                })
            });
    },
    searchByID: (req, res, next) => {
        const id = req.params.id;
        contact
            .findById(id)
            .then(contacts => {
                if (contacts)
                    res.status(200).send({
                        contacts
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
            .then(contacts => {
                console.log(contacts)
                if (contacts) {
                    res.status(200).send({
                        contacts
                    });
                } else {
                    res.status(404).send({
                        message: "Data not found!"
                    })
                }
            });
    },
    add: (req, res, next) => {
        if (
            (req.body.name, req.body.phoneNumber, req.body.email, req.body.address)
        ) {
            contact
                .build({
                    name: req.body.name,
                    phone_number: req.body.phoneNumber,
                    email: req.body.email,
                    address: req.body.address,
                    createdAt: new Date(),
                    updatedAt: new Date()
                })
                .save()
                .then(contact => {
                    res.status(200).send(
                        contact
                    );
                });
        } else
            res.send({
                message: "Please fill the input fieild!"
            });
    },
    delete: (req, res) => {
        const id = Number(req.params.id);
        if (id) {
            const check = contact.findById(id) || false;
            console.log(check)
            if (check) {
                contact
                    .destroy({
                        where: {
                            id
                        }
                    })
                    .then(() => {
                        res.status(200).send({
                            message: `ID = ${id} deleted`
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
    update: (req, res, next) => {
        const id = req.params.id;
        if (id) {
            const check = contact.findById(id);
            if (check) {
                contact
                    .update({
                        name: req.body.name,
                        phone_number: req.body.phone_number,
                        email: req.body.email,
                        address: req.body.address
                    }, {
                        where: {
                            id: id
                        }
                    })
                    .then(contact => {
                        res.status(200).send({
                            message:"Contact updated!"
                        })
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