const models = require('../../models')
const User = models.User
const controller = {
    show: (req, res, next) => {
        User
            .findAll().then(users => {
                res.send({
                    users
                });
            }).catch(error => {
                res.status(400).send({
                    error
                })
            })
    },

    add: (req, res, next) => {
        if(req.body.username && req.body.password && req.body.email){
            User
                .build({                    
                    username: req.body.username,
                    password: req.body.password,
                    email: req.body.email,
                    createdAt: new Date(),
                    UpdateAt: new Date()
                })
                .save()
                .then(user => {
                    res.status(200).send(user)
                }).catch(err => {
                    res.status(500).send({
                        message: err
                    })
                })
        }
    },

    searchByID: (req, res, next) => {
        const id = Number(req.params.id)
        User
            .findById(id)
            .then(user => {
                if (user) {
                    res.send({
                        user
                    })
                } else {
                    res.send({
                        message: `User not found`
                    })
                }
            }).catch(error => {
                res.status(400).send({
                    error
                })
            })
    }
}

module.exports = controller