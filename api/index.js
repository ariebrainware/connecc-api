const mariadb = require('mariadb');

// const JSON_FILE = './data/contact.json';
// const DATA = JSON.parse(fs.readFileSync(JSON_FILE, `utf8`));

// Connection stuff
const pool = mariadb.createPool({
  host: 'localhost',
  user: 'brainware',
  password: 'root',
  database: 'connecc',
  connectionLimit: 5
});

const devTeam = {
  showDevTeam: (req, res) => {
    pool
      .query('SELECT * FROM team_members')
      .then(rows => {
        res.status(200).send(rows)
      })
      .catch(err => {
        console.error(err)
      })
    
  }
}
//-------------------------------------------------------
const contacts = {
  showContact: (req, res) => {
    pool
      .query('SELECT * FROM contacts')
      .then(rows => {
        res.status(200).send(rows)
      })
      .catch(err => {
        console.error(err)
      })
    
  },

  addContact: (req, res) => {
    if (
      req.body.name &&
      req.body.phone_number &&
      req.body.email &&
      req.body.address
    ) {
      pool
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
        message: 'ERROR!'
      })
      
    }
  },

  deleteContact: (req, res) => {
    const idContact = req.params.id
    
    pool
      .query(`DELETE FROM contacts WHERE id=${idContact}`)
      .then(() => {
        res.status(200).send({
          message: 'Data deleted from Database :)'
        })
      })
      .catch(err => {
        res.status(500).send(err)  
      })
  },

  searchContact: (req, res) => {
    const query = req.query.q;

    if(query){
      pool
      .query(`SELECT * FROM contacts WHERE name LIKE '%' '${query}' '%' OR address LIKE '%' '${query}' '%'`)
      .then(rows => {
        const tmpData = [rows]
        res.status(200).send({
          message: "Data found",
          "total_count": tmpData.length,
          rows
        })
      })
      .catch(err => {
        res.status(500).send(err)
      })  
    }else{
      res.send({
        message:"Please specify your keyword!! :/"
      })
    }
    
  }
}
module.exports = {
  contacts,
  devTeam
};