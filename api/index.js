var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
  res.send({
    title: 'CONNECC-API Homepage',
    content: [{
      devteam: "https://connecc-api.herokuapp.com/devteam/",
      user: "https://connecc-api.herokuapp.com/users/",
      contacts: "https://connecc-api.herokuapp.com/contacts/"
    }]
  });
});

module.exports = router;