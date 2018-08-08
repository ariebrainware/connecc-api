const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const devTeam = require('./api/devteam')
const contact = require('./api/contacts')

const server = express();
const port = 3000;

server.use(cors());
server.use(bodyParser.json());
server.use(
  bodyParser.urlencoded({
    extended: true
  })
);

server.get(`/contacts`, contact.showContact);
server.get(`/contacts/search`, contact.searchContact);
server.post(`/contacts`, contact.addContact);
server.delete(`/contacts/:id`, contact.deleteContact);
server.get(`/devteam`, devTeam.showDevTeam);

server.listen(port, () =>
  console.log(`
        Server listening on port ${port}
        `)
);