const models = require('../../models')

const controller = {
    show: (req, res, next) => {
        models.User
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
}

module.exports = controller