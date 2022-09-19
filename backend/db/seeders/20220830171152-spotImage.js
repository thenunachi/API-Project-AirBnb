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
     await queryInterface.bulkInsert('SpotImages', [
      {
        spotId:1,
        url:"https://a0.muscache.com/im/pictures/69220a45-915f-42db-b172-30b69b430754.jpg?im_w=960",
        preview:true
      },
      {
        spotId:2,
        url:"https://a0.muscache.com/im/pictures/c88d4356-9e33-4277-83fd-3053e5695333.jpg?im_w=720",
        preview:false
      },
      {
        spotId:3,
        url:"https://a0.muscache.com/im/pictures/miso/Hosting-48089233/original/32e6234f-2f32-4b7c-8137-ee81e9f6c7d1.jpeg?im_w=320",
        preview:false
      },
      {
        spotId:4,
        url:"https://a0.muscache.com/im/pictures/1e16f2f4-1256-44cb-a0f2-85aa57672a45.jpg?im_w=320",
        preview:false
      },
      {
        spotId:5,
        url:"https://a0.muscache.com/im/pictures/miso/Hosting-51234810/original/13adc83e-212b-4471-b6e9-221a464cfc05.jpeg?im_w=320",
        preview:false
      },
      {
        spotId:6,
        url:"https://a0.muscache.com/im/pictures/6a3e485e-d276-46e4-88cd-53d0c7cfb03f.jpg?im_w=320",
        preview:false
      },
      {
        spotId:7,
        url:"https://a0.muscache.com/im/pictures/miso/Hosting-47007124/original/e8f2a7f7-5ac6-4b9d-b5b9-66b334f21ca0.jpeg?im_w=320",
        preview:false
      },
      {
        spotId:8,
        url:"https://a0.muscache.com/im/pictures/49732504/c766a14a_original.jpg?im_w=320",
        preview:false
      },
      {
        spotId:9,
        url:"https://a0.muscache.com/im/pictures/52a67a7f-d13e-47d7-8416-dd78403c4fdc.jpg?im_w=320",
        preview:false
      },
      {
        spotId:10,
        url:"https://a0.muscache.com/im/pictures/miso/Hosting-53310687/original/6cc8a56c-b72e-4d22-9b89-3a0eb122d5ed.jpeg?im_w=320",
        preview:false
      },
      {
        spotId:11,
        url:"https://a0.muscache.com/im/pictures/f0a1c44a-9db9-436a-841a-aa550b3d9f6e.jpg?im_w=320",
        preview:false
      },
      {
        spotId:12,
        url:"https://a0.muscache.com/im/pictures/miso/Hosting-47475697/original/03396c31-9f38-410f-9732-1792b0513d81.jpeg?im_w=320",
        preview:false
      },
      {
        spotId:13,
        url:"https://a0.muscache.com/im/pictures/miso/Hosting-634384398560090584/original/ed3767ff-21f4-4786-a8f5-82c0b0a13fa4.jpeg?im_w=320",
        preview:false
      },
      {
        spotId:14,
        url:"https://a0.muscache.com/im/pictures/c96c879d-6c82-4f4d-ae20-2e486c1bf320.jpg?im_w=320",
        preview:false
      }, {
        spotId:15,
        url:"https://a0.muscache.com/im/pictures/prohost-api/Hosting-604939306963522294/original/ad475d7b-8de7-4bb0-85c8-c4f90ddfa26e.jpeg?im_w=320",
        preview:false
      }, {
        spotId:16,
        url:"https://a0.muscache.com/im/pictures/prohost-api/Hosting-1945395/original/fd0cfd97-5161-4575-b67e-ed0a366dfb1e.jpeg?im_w=320",
        preview:false
      } ,{
        spotId:17,
        url:"https://a0.muscache.com/im/pictures/3e966211-6402-41b7-8d1f-f0d2e1b1c519.jpg?im_w=320",
        preview:false
      },
      {
        spotId:18,
        url:"https://a0.muscache.com/im/pictures/d6fb943b-3364-400b-b163-32734b388848.jpg?im_w=320",
        preview:false
      },
      {
        spotId:19,
        url:"https://a0.muscache.com/im/pictures/monet/Select-6603376/original/4fc04ea2-5689-44f5-b7ac-fc39ce8cc32e?im_w=320",
        preview:false
      },
      {
        spotId:20,
        url:"https://a0.muscache.com/im/pictures/28c1bd57-9833-4f31-8bcf-52a6dc1d9c06.jpg?im_w=320",
        preview:false
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
     await queryInterface.bulkDelete('SpotImages', null, {});
  }
};
