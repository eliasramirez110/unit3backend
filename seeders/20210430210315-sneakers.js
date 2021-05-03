'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    
     
      await queryInterface.bulkInsert('sneakers', 
      [
        {
          name: "AIR JORDAN BANNED",
          image:'../assets/images/airjordanbanned.jpeg',
          price: 250,
          description:'filler info',
          createdAt: new Date(), 
          updatedAt: new Date()
        },
        {
          name: "Yeezy Boost 350 V2 'ZEBRA'",
          image:'img',
          price: 900,
          description:'none',
          createdAt: new Date(), 
          updatedAt: new Date()
        },
        {
          name: "Yeezy Boost 350 V2 'ZEBRA'",
          image:'img',
          price: 300,
          description:'none',
          createdAt: new Date(), 
          updatedAt: new Date()
        },
      ], {});
    
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
