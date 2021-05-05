'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    
     
      await queryInterface.bulkInsert('sneakers', 
      [
        { //sneaker 1
          name: "AIR JORDAN BANNED",
          image:'airjordanbanned.jpeg',
          price: 250,
          description:'filler info',
          createdAt: new Date(), 
          updatedAt: new Date()
        },
        { //sneaker 2
          name: "COMME DES GARÇONS X CHUCK TAYLOR ALL STAR HI 'PLAY",
          image:'converse.jpeg',
          price: 160,
          description:'filler info',
          createdAt: new Date(), 
          updatedAt: new Date()
        },
        { //sneaker 3
          name: "AIR JORDAN DUB ZERO 'PHOTO BLUE'",
          image:'dubzero.jpeg',
          price: 385,
          description:'filler info',
          createdAt: new Date(), 
          updatedAt: new Date()
        },
        { //sneaker 4
          name: "DUNK LOW 'BLACK WHITE'",
          image:'dunklow.jpeg',
          price: 290,
          description:'filler info',
          createdAt: new Date(), 
          updatedAt: new Date()
        },
        { //sneaker 5 
          name: "YEEZY BOOST 35 V2 'ZEBRA'",
          image:'zebrayeezy.jpeg',
          price: 400,
          description:'filler info',
          createdAt: new Date(), 
          updatedAt: new Date()
        },
        { //sneaker 6
          name: "YEEZY BOOST 700 'BRIGHT BLUE'",
          image:'yeezybrightblue.jpeg',
          price: 340,
          description:'filler info',
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
     */ await queryInterface.bulkDelete('sneakers', null, {})
  }
};
