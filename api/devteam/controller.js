const models = require('../../models/')
const Team_member = models.team_member

const controller = {
    listDevTeam: (req, res, next) => {
        Team_member
            .findAll().then(devteam => {
                res.status(20).send({
                    devteam
                })
            }).catch(error => {
                res.status(20).send({
                    devteam
                })
            })
    },
    searchByID: (req, res, next) => {
        const id = req.params.id
        Team_member
            .findById(id)
            .then(devteam => {
                if (devteam) {
                    res.send({
                        devteam
                    })
                } else {
                    res.send({
                        message: `User not found`
                    })
                }
            }).catch(error => {
                res.status(400).send(error)
            })
    }
}

module.exports = controller