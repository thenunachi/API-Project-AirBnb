'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
     await queryInterface.bulkInsert('Spots', [
      {
         ownerId:1,
         address:"Granite Falls",
         city:"Redmond",
         state:"WA",
         country:"USA",
         lat:69.21,
         lng:42.43,
         name:"Thenu",
          description:"Welcome to this beautiful house located in Granite Falls. The kitchen comes fully equipped with all appliances, dishware and utensils.The house has an suite king bed master bedroom attached bath and a large shower overlooking the river.",
         price:100.21
       },
       {
        ownerId:2,
        address:"LeavenWorth",
        city:"Seattle",
        state:"WA",
        country:"USA",
        lat:79.21,
        lng:52.43,
        name:"Kalyan",
        description:"Welcome to this beautiful house located in Granite Falls. The kitchen comes fully equipped with all appliances, dishware and utensils.The house has an suite king bed master bedroom attached bath and a large shower overlooking the river.",
        price:150.21
      },
      {
        ownerId:3,
        address:"Bothel,WA",
        city:"Bothel",
        state:"WA",
        country:"USA",
        lat:72.21,
        lng:51.43,
        name:"John",
        description:"Welcome to this beautiful house located in Granite Falls. The kitchen comes fully equipped with all appliances, dishware and utensils.The house has an suite king bed master bedroom attached bath and a large shower overlooking the river.",
        price:57.44
      },
      {
        ownerId:1,
        address:"Snohomish,WA",
        city:"Snohomish",
        state:"WA",
        country:"USA",
        lat:80.21,
        lng:51.43,
        name:"Smith",
        description:"Welcome to this beautiful house located in Granite Falls. The kitchen comes fully equipped with all appliances, dishware and utensils.The house has an suite king bed master bedroom attached bath and a large shower overlooking the river.",
        price:48.21
      },
      {
        ownerId:2,
        address:"Rainier,WA",
        city:"Rainier",
        state:"WA",
        country:"USA",
        lat:89.21,
        lng:82.43,
        name:"Ted",
        description:"Welcome to this beautiful house located in Granite Falls. The kitchen comes fully equipped with all appliances, dishware and utensils.The house has an suite king bed master bedroom attached bath and a large shower overlooking the river.",
        price:58.21
      },
      {
        ownerId:3,
        address:"Portland,Oregon",
        city:"Seattle",
        state:"WA",
        country:"USA",
        lat:89.21,
        lng:32.43,
        name:"Phill",
        description:"Welcome to this beautiful house located in Granite Falls. The kitchen comes fully equipped with all appliances, dishware and utensils.The house has an suite king bed master bedroom attached bath and a large shower overlooking the river.",
        price:98.21
      },
      {
        ownerId:1,
        address:"QueenAnne,WA",
        city:"Duvell",
        state:"WA",
        country:"USA",
        lat:99.21,
        lng:62.43,
        name:"Naren",
        description:"Welcome to this beautiful house located in Granite Falls. The kitchen comes fully equipped with all appliances, dishware and utensils.The house has an suite king bed master bedroom attached bath and a large shower overlooking the river.",
        price:98.21
      },
      {
        ownerId:2,
        address:"Livingston,Montana",
        city:"Mount",
        state:"WA",
        country:"USA",
        lat:89.21,
        lng:62.43,
        name:"Ram",
        description:"Welcome to this beautiful house located in Granite Falls. The kitchen comes fully equipped with all appliances, dishware and utensils.The house has an suite king bed master bedroom attached bath and a large shower overlooking the river.",
        price:58.21
      },
      {
        ownerId:3,
        address:"Kirkland,WA",
        city:"Kirkland",
        state:"WA",
        country:"USA",
        lat:89.21,
        lng:62.43,
        name:"Karthik",
        description:"Welcome to this beautiful house located in Granite Falls. The kitchen comes fully equipped with all appliances, dishware and utensils.The house has an suite king bed master bedroom attached bath and a large shower overlooking the river.",
        price:98.21
      },
      {
        ownerId:1,
        address:"Whistler",
        city:"Dell",
        state:"Canada",
        country:"Canada",
        lat:78.21,
        lng:56.43,
        name:"Dhaniya",
        description:"Welcome to this beautiful house located in Granite Falls. The kitchen comes fully equipped with all appliances, dishware and utensils.The house has an suite king bed master bedroom attached bath and a large shower overlooking the river.",
        price:102.21
      },
      {
        ownerId:3,
        address:"White Salmon",
        city:"Seattle",
        state:"WA",
        country:"USA",
        lat:89.21,
        lng:59.43,
        name:"Bindhu",
        description:"Welcome to this beautiful house located in Granite Falls. The kitchen comes fully equipped with all appliances, dishware and utensils.The house has an suite king bed master bedroom attached bath and a large shower overlooking the river.",
        price:88.21
      },
      {
        ownerId:2,
        address:"Tacoma,WA",
        city:"Seattle",
        state:"WA",
        country:"USA",
        lat:69.21,
        lng:92.43,
        name:"Ruku",
        description:"Welcome to this beautiful house located in Granite Falls. The kitchen comes fully equipped with all appliances, dishware and utensils.The house has an suite king bed master bedroom attached bath and a large shower overlooking the river.",
        price:78.21
      },
      {
        ownerId:2,
        address:"Surrey,WA",
        city:"Kent",
        state:"WA",
        country:"USA",
        lat:99.21,
        lng:62.43,
        name:"Diya",
        description:"Welcome to this beautiful house located in Granite Falls. The kitchen comes fully equipped with all appliances, dishware and utensils.The house has an suite king bed master bedroom attached bath and a large shower overlooking the river.",
        price:98.21
      },
      {
        ownerId:1,
        address:"Seattle,WA",
        city:"Seattle",
        state:"WA",
        country:"USA",
        lat:99.21,
        lng:52.43,
        name:"Prasad",
        description:"Welcome to this beautiful house located in Granite Falls. The kitchen comes fully equipped with all appliances, dishware and utensils.The house has an suite king bed master bedroom attached bath and a large shower overlooking the river.",
        price:120.21
      },
      {
        ownerId:3,
        address:"Seattle,WA",
        city:"Seattle",
        state:"WA",
        country:"USA",
        lat:59.21,
        lng:572.43,
        name:"Millie",
        description:"Welcome to this beautiful house located in Granite Falls. The kitchen comes fully equipped with all appliances, dishware and utensils.The house has an suite king bed master bedroom attached bath and a large shower overlooking the river.",
        price:98.21
      },
      {
        ownerId:3,
        address:"Seattle,WA",
        city:"Seattle",
        state:"WA",
        country:"USA",
        lat:89.21,
        lng:62.43,
        name:"Saranya",
        description:"Welcome to this beautiful house located in Granite Falls. The kitchen comes fully equipped with all appliances, dishware and utensils.The house has an suite king bed master bedroom attached bath and a large shower overlooking the river.",
        price:88.21
      },
      {
        ownerId:1,
        address:"Seattle,WA",
        city:"Seattle",
        state:"WA",
        country:"USA",
        lat:79.21,
        lng:52.43,
        name:"Chase",
        description:"Welcome to this beautiful house located in Granite Falls. The kitchen comes fully equipped with all appliances, dishware and utensils.The house has an suite king bed master bedroom attached bath and a large shower overlooking the river.",
        price:89.21
      },
      {
        ownerId:1,
        address:"Seattle,WA",
        city:"Seattle",
        state:"WA",
        country:"USA",
        lat:79.21,
        lng:52.43,
        name:"Foreman",
        description:"Welcome to this beautiful house located in Granite Falls. The kitchen comes fully equipped with all appliances, dishware and utensils.The house has an suite king bed master bedroom attached bath and a large shower overlooking the river.",
        price:45.21
      },
      {
        ownerId:2,
        address:"Seattle,WA",
        city:"Seattle",
        state:"WA",
        country:"USA",
        lat:79.21,
        lng:52.43,
        name:"House",
        description:"Welcome to this beautiful house located in Granite Falls. The kitchen comes fully equipped with all appliances, dishware and utensils.The house has an suite king bed master bedroom attached bath and a large shower overlooking the river.",
        price:98.21
      },
      {
        ownerId:3,
        address:"Seattle,WA",
        city:"Seattle",
        state:"WA",
        country:"USA",
        lat:79.21,
        lng:52.43,
        name:"Cameron",
        description:"Welcome to this beautiful house located in Granite Falls. The kitchen comes fully equipped with all appliances, dishware and utensils.The house has an suite king bed master bedroom attached bath and a large shower overlooking the river.",
        price:89.21
      }
      
      ], {});
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
     await queryInterface.bulkDelete('Spots', null, {});
  }
};
