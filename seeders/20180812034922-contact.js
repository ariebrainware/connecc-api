'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
   const contacts =[
     {
       name:"Tony Stark",
       phone_number:"+3 32122 223",
       email:"tony@starkindustries.net",
       address:"10880 Malibu Point, 90265",
       createdAt: new Date(),
       updatedAt: new Date()
    },{
      name:"Brainware",
      phone_number:"+56 911 2212",
      email:"Nowhere",
      address:"jenkins@fbi.gov",
      createdAt: new Date(),
      updatedAt: new Date()
    }
   ]
   return queryInterface.bulkInsert('contacts',contacts)
  },

  down: (queryInterface, Sequelize) => {
   return queryInterface.bulkDelete('contacts', null, {});
  }
};
