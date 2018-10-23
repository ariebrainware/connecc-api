'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    const devTeamSeed = [{
      name: "Abba Yosua Siagian",
      gender: "M",
      title: "Front End Developer",
      email: "abbasiagian@gmail.com",
      github: "",
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      name: "Indro lie",
      gender: "M",
      title: "Backend Developer",
      email: "indrolie@gmail.com/indrolie",
      github: "https://github.com/indrolie",
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      name: "Arie Brainware",
      gender: "M",
      title: "Fullstack Developer",
      email: "dev_ace@protonmail.ch",
      github: "https://github.com/ariebrainware",
      createdAt: new Date(),
      updatedAt: new Date()
    }]
    return queryInterface.bulkInsert('team_members', devTeamSeed)
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('team_members', null, {});
  }
};