const connection = require('../connection')

const devTeam = {
    showDevTeam: (req, res) => {
        connection
            .query('SELECT * FROM team_members')
            .then(rows => {
                res.status(200).send(rows)
            })
            .catch(err => {
                res.status(500).send(err)
            })
    }
}

module.exports = devTeam