var express = require('express');
var router = express.Router();

const rootUrl = "https://connecc-api.herokuapp.com/"
/* GET home page. */
router.get('/', function (req, res, next) {
  res.send({
    title: 'CONNECC-API Homepage',
    content: [{
      devteam: {
        "show-devteam": `${rootUrl}/devteam/`,

      },
      user: {        
        "show-users": `${rootUrl}/users/`
      },
      contacts: {
        "search_contact_by_name": `${rootUrl}/search?q={name}`,
        "search_contact_by_id": `${rootUrl}/search/:id`,
        "show-contacts":`${rootUrl}/contacts/`
      }
    }]
  });
});

module.exports = router;