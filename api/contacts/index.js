const connection = require('../connection')

//-------------------------------------------------------
const contacts = {
  showContact: (req, res) => {
    connection
      .query('SELECT * FROM `contacts`')
      .then(rows => {
        res.status(200).send({
          rows
        })
      })
      .catch(err => {
        console.log(err)
      })
  },

  addContact: (req, res) => {
    if (
      req.body.name &&
      req.body.phone_number &&
      req.body.email &&
      req.body.address
    ) {
      connection
        .query(`INSERT INTO contacts VALUES(?,?,?,?,?)`, ['', req.body.name,
          req.body.phone_number,
          req.body.address,
          req.body.email
        ])
        .then(() => {
          res.status(200).send({
            message: 'Data saved to Database :)'
          });
        })
        .catch(err => res.status(500).send(err))
    } else {
      res.send(500).send({
        message: 'Please fill the input field! '
      })
    }
  },

  deleteContact: (req, res) => {
    const idContact = req.params.id

    connection
      .query(`DELETE FROM contacts WHERE id=${idContact}`)
      .then(() => {
        res.status(200).send({
          message: 'Data deleted from Database'
        })
      })
      .catch(err => {
        res.status(500).send(err)
      })
  },

  searchContact: (req, res) => {
    const query = req.query.q;

    if (query) {
      connection
        .query(`SELECT * FROM contacts WHERE name LIKE '%' '${query}' '%' OR address LIKE '%' '${query}' '%'`)
        .then(rows => {
          const tmpData = [rows]
          res.status(200).send({
            message: "Data found",            
            rows
          })
        })
        .catch(err => {
          res.status(500).send(err)
        })
    } else {
      res.send({
        message: "Please specify your keyword"
      })
    }
    // model.searchContact(query)   
  }
}

module.exports = contacts