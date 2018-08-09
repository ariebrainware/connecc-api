'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkInsert('Person', [{
        name: 'John Doe',
        isBetaMember: false
      }], {});
    */
    const usersSeed = [{
        username: 'bware00',
        password: '231234',
        email: 'bware@mail.com',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        username: 'nightblade',
        password: 'redsab3r2003',
        email: 'nightblade@mail.com',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        username: 'kick455',
        password: 'lilhero',
        email: 'kick455@gmail.com',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        username: 'Arie',
        password: '12345512',
        email: 'dev_ace@protonmail.ch',
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ]
    return queryInterface.bulkInsert('Users', usersSeed)
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('Person', null, {});
    */
  }
};