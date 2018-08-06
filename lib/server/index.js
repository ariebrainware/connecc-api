const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

const contact = require("../api/index.js");

const server = express();
const port = 3000;

server.use(cors());

server.use(bodyParser.json());
server.use(
  bodyParser.urlencoded({
    extended: true
  })
);

server.get(`/contacts`, contact.showContact)
server.get(`/contacts/search`,contact.searchContact)
server.post(`/contacts`, contact.addContact)
server.delete(`/contacts/:id`,contact.deleteContact)

server.listen(port, () =>
  console.log(`
        Contact server listening on port ${port}
        `)
);
