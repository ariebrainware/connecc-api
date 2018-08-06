const express = require(`express`);
const bodyParser = require(`body-parser`);
const cors = require(`cors`);

const contact = require(`./api/index.js`);

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
server.post(`/contacts`, contact.addContact);
server.delete(`/contacts/:id`, contact.deleteContact);
server.get(`/contact/search`, contact.searchContact);

server.listen(port, () =>
  console.log(`
        Contact server listening on port ${port}
        `)
);
