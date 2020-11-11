'use strict';
const fs = require('fs');

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
   const parseData = JSON.parse(fs.readFileSync('./data2.json'));
   const movieData = [];
   
   parseData.forEach(data => {  
     const { budget,title, director, category,synopsis,poster,trailer,release_date } = data;
     movieData.push({
      title,
      director,
      category,
      synopsis,
      poster,
      budget,
      trailer,
      release_date,
       createdAt : new Date(),
       updatedAt : new Date()
     })
   })
  await queryInterface.bulkInsert('movies', movieData, {});
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
