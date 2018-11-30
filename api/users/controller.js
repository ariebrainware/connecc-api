const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

const models = require('../../models')
const User = models.User

const controller = {
    show: (req, res, next) => {
        User
            .findAll({
                attributes: ['id', 'username', 'email', 'createdAt', 'updatedAt']
            }).then(users => {
                res.status(200).send({
                    users
                })
            }).catch(error => {
                res.status(500).send({
                    error
                })
            })
    },

    signup: (req, res) => {
        const {
            username,
            password,
            email
        } = req.body

        if (username && password && email) {
            const saltRounds = 5
            bcrypt
                .hash(password, saltRounds)
                .then(hash => {
                    console.log('HASH', hash)
                    return {
                        username,
                        password: hash,
                        email,
                        createdAt: new Date(),
                        updatedAt: new Date()
                    }
                })
                .then(newUser => {
                    User.build(newUser)
                        .save()
                        .then(user => {
                            res.status(200).send({
                                message: "User created!",
                                user: {
                                    id: user.id,
                                    username: user.username,
                                    email: user.email,
                                }
                            })
                        }).catch(err => {
                            res.status(500).send({
                                message: err
                            })
                        })
                })
        } else {
            res.status(404).send({
                message: 'Please fill the input field'
            })
        }
    },

    delete: (req, res, next) => {
        const id = Number(req.params.id)
        User
            .destroy({
                where: {
                    id: id
                }
            }).then(
                res.status(200).send({
                    message: 'Data successfully deleted'
                })
            )
    },

    update: (req, res, next) => {
        const id = Number(req.params.id)
        if (req.body.password && req.body.email) {
            User
                .update({
                    password: req.body.password,
                    email: req.body.email,
                    updatedAt: new Date()
                }, {
                        where: {
                            id: id
                        }
                    })
                .then(() => {
                    res.status(200).send({
                        message: "Updating success"
                    })
                })
        } else {
            res.status(417).send({
                message: "Please specify password field and email field!"
            })
        }
    },

    searchUserByID: (req, res) => {
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
    },
    signin: (req, res) => {
        const {
            username,
            password
        } = req.body
        if (username && password) {
            User
                .findOne({
                    where: {
                        username
                    }
                })
                .then(user => {
                    const token = jwt.sign(
                        {
                            iat: Math.floor(Date.now() / 1000) - 30,
                            data: {
                                id: user.id,
                                username: user.username,
                                email: user.email
                            }
                        },
                        process.env.JWT_SECRET,
                        {
                            expiresIn: '1d'
                        }
                    )
                    bcrypt
                        .compare(password, user.password)
                        .then(response => {
                            if (response) {
                                res.status(200).send({
                                    message: "Sign In Success",
                                    token
                                })
                            } else {
                                res.status(400).send({
                                    message: "Sign In fail!"
                                })
                            }
                        })
                })
        } else {
            res.status(400).send({
                message: "Username or password is wrong"
            })
        }
    },

    signout: (req, res, next) => {
        res.status(200).send({ message: "Successfully log out!" })
    }
}

module.exports = controller