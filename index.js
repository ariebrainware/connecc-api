const express = require(`express`)
const bodyParser = require(`body-parser`)
const cors = require(`cors`)
const contact = require(`./lib/api/index.js`)

const server = express()
const port = 1118

server.use(cors())
server.use(bodyParser.json());
server.use(bodyParser.urlencoded({
    extended: true
}));

server.get(`/contacts`, contact.showContact)
server.post(`/contacts`, contact.addContact)
server.delete(`/contact`), contact.deleteContact
server.post(`/contact/search`,contact.searchContact)

server.listen(port, () => console.log(`
        Contact server listening on port ${port}
        `))