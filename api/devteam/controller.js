const models = require('../../models/')
const Team_member = models.team_member

const controller = {
    listDevTeam: async () => {
        let result = {};
        await Team_member
        .findAll().then(devteam => {
            result = {
                status: "success",
                devteam: devteam
            }
            devteam
        }).catch(error => {
            result = {
                status: "error",
                devteam: devteam
            }
        })

        return result;
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