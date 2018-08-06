const fs = require(`fs`);

const JSON_FILE = './data/contact.json';
const DATA = JSON.parse(fs.readFileSync(JSON_FILE, `utf8`));

const errorMsg = (req, res) => {
  res.status(404).send({
    message: 'Error, Not found!!'
  });
};

const file = {
  read: () => {
    const JSON_FILE = './data/contact.json';
    const DATA = JSON.parse(fs.readFileSync(JSON_FILE, `utf8`));
    return DATA;
  },

  write: DATA => {
    const contactString = JSON.stringify(DATA, null, 2);
    fs.writeFileSync(JSON_FILE, contactString, 'utf-8');
  }
};

const contacts = {
  showContact: (req, res) => {
    const DATA = file.read();
    res.status(200).send(DATA);
  },

  addContact: (req, res) => {
    if (
      req.body.name &&
      req.body.phoneNumber &&
      req.body.email &&
      req.body.address
    ) {
      const newData = {
        id: DATA.counter++,
        name: req.body.name,
        phoneNumber: req.body.phoneNumber,
        email: req.body.email,
        address: req.body.address
      };

      DATA.contacts.push(newData);

      const contactString = JSON.stringify(DATA, null, 2);
      fs.writeFileSync(JSON_FILE, contactString, 'utf-8');

      res.status(200).send(newData);
    } else {
      errorMsg();
    }
  },

  deleteContact: (req, res) => {
    DATA.contacts = DATA.contacts.filter(item => {
      return item.id !== Number(req.params.id);
    });

    console.log(DATA.contacts);

    const contactString = JSON.stringify(DATA, null, 2);
    fs.writeFileSync(JSON_FILE, contactString, 'utf-8');

    res.status(200).send({
      message: 'Successfully deleted!'
    });
  },

  searchContact: (req, res) => {
    const query = req.query;

    res.status(200).send(DATA);
  }
};
module.exports = contacts;
