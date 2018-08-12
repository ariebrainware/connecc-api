const models = require('../../models/')
const Team_member = models.team_member

const controller = {
    showDevTeam: (req, res) => {
        Team_member
            .findAll().then(devteam => {
                res.send({
                    devteam
                });
            }).catch(error => {
                res.status(400).send({
                    error
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