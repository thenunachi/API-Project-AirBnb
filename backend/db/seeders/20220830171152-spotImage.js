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
        url1:"https://images.unsplash.com/photo-1600585153490-76fb20a32601?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDJ8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=600&q=60",
        url2:"https://images.unsplash.com/photo-1600585154526-990dced4db0d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1887&q=80",
        url3:"https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
        url4:"https://images.unsplash.com/photo-1600607687644-c7171b42498f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
        url5:"https://images.unsplash.com/photo-1600566753104-685f4f24cb4d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
        preview:true
      },
      {
        spotId:2,
        url1:"https://images.unsplash.com/photo-1613490493576-7fde63acd811?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80",
        url2:"https://images.unsplash.com/photo-1604014237800-1c9102c219da?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDJ8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=600&q=60",
        url3:"https://images.unsplash.com/photo-1502005229762-cf1b2da7c5d6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80",
        url4:"https://images.unsplash.com/photo-1502005097973-6a7082348e28?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDF8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
        url5:"https://images.unsplash.com/photo-1600494448868-9fbd1ac2d9f5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MTF8MTY2NzYxNXx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=1000&q=60",
        preview:true
      },
      {
        spotId:3,
        url1:"https://images.unsplash.com/photo-1523217582562-09d0def993a6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80",
        url2:"https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
        url3:"https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
        url4:"https://images.unsplash.com/photo-1600607687644-c7171b42498f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
        url5:"https://images.unsplash.com/photo-1600566753104-685f4f24cb4d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
        preview:true
      },
      {
        spotId:4,
        url1:"https://images.unsplash.com/photo-1513584684374-8bab748fbf90?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1165&q=80",
        url2:"https://images.unsplash.com/photo-1600585154526-990dced4db0d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1887&q=80",
        url3:"https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
        url4:"https://images.unsplash.com/photo-1600607687644-c7171b42498f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
        url5:"https://images.unsplash.com/photo-1600566753104-685f4f24cb4d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
        preview:true
      },
      {
        spotId:5,
        url1:"https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDd8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=600&q=60",
        url2:"https://images.unsplash.com/photo-1593696140826-c58b021acf8b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
        url3:"https://images.unsplash.com/photo-1560184897-6cdec21b9962?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE3fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=600&q=60",
        url4:"https://images.unsplash.com/photo-1600210491741-a69593e43133?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8NHw2MDY4Njc0NXx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=1000&q=60",
        url5:"https://images.unsplash.com/photo-1491357492920-d2979986a84e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8aG9tZXN8ZW58MHx8MHx8&auto=format&fit=crop&w=1000&q=60",
        preview:true
      },
      {
        spotId:6,
        url1:"https://images.unsplash.com/photo-1600607688960-e095ff83135c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
        url2:"https://images.unsplash.com/photo-1516455590571-18256e5bb9ff?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fGhvbWVzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=1000&q=60",
        url3:"https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fGhvbWVzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=1000&q=60",
        url4:"https://images.unsplash.com/photo-1600585154363-67eb9e2e2099?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTR8fGhvbWVzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=1000&q=60",
        url5:"https://images.unsplash.com/photo-1565538810643-b5bdb714032a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fGhvbWVzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=1000&q=60",
        preview:true
      },
      {
        spotId:7,
        url1:"https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
        url2:"https://images.unsplash.com/photo-1663811397219-c572550dffc5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MXw5OTc3MTk3OHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=1000&q=60",
        url3:"https://images.unsplash.com/photo-1571425046056-cfc17c664e57?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8M3w5OTc3MTk3OHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=1000&q=60",
        url4:"https://images.unsplash.com/photo-1631545086981-30550f1ab63a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MXxyMFFhcEM1Y1Z6SXx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=1000&q=60",
        url5:"https://images.unsplash.com/photo-1664347759774-aff97954de48?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8M3xyMFFhcEM1Y1Z6SXx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=1000&q=60",
        preview:true
      },
      {
        spotId:8,
        url1:"https://images.unsplash.com/photo-1600047509358-9dc75507daeb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
        url2:"https://images.unsplash.com/photo-1615876063860-d971f6dca5dc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8NXxyMFFhcEM1Y1Z6SXx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=1000&q=60",
        url3:"https://images.unsplash.com/photo-1599202937077-3f7cdc53f2e1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8N3xyMFFhcEM1Y1Z6SXx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=1000&q=60",
        url4:"https://images.unsplash.com/photo-1556910591-c01184bb213a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MTB8cjBRYXBDNWNWekl8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=60",
        url5:"https://images.unsplash.com/photo-1460533893735-45cea2212645?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MTN8cjBRYXBDNWNWekl8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=60",
        preview:true
      },
      {
        spotId:9,
        url1:"https://images.unsplash.com/photo-1580587771525-78b9dba3b914?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80",
        url2:"https://images.unsplash.com/photo-1606744888344-493238951221?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MTd8cjBRYXBDNWNWekl8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=60",
        url3:"https://images.unsplash.com/photo-1594317307537-d3983788f2f8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MTh8cjBRYXBDNWNWekl8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=60",
        url4:"https://images.unsplash.com/photo-1616594039964-ae9021a400a0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MXxkZFR6UE5NR214NHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=1000&q=60",
        url5:"https://images.unsplash.com/photo-1554971517-f21bd29c09af?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MnwxMTE4ODk0fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=60",
        preview:true
      },
      {
        spotId:10,
        url1:"https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
        url2:"https://images.unsplash.com/photo-1556912173-3bb406ef7e77?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8M3wxMTE4ODk0fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=60",
        url3:"https://images.unsplash.com/photo-1558211583-03ed8a0b3d5f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8NHwxMTE4ODk0fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=60",
        url4:"https://images.unsplash.com/photo-1556593825-c11de986cb0b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8NXwxMTE4ODk0fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=60",
        url5:"https://images.unsplash.com/photo-1556020685-ae41abfc9365?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8OHwxMTE4ODk0fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=60",
        preview:true
      },
      {
        spotId:11,
        url1:"https://images.unsplash.com/photo-1542718610-a1d656d1884c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
        url2:"https://images.unsplash.com/photo-1554967918-4485c27dfc6c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8OXwxMTE4ODk0fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=60",
        url3:"https://images.unsplash.com/photo-1533779283484-8ad4940aa3a8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MTB8MTExODg5NHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=1000&q=60",
        url4:"https://images.unsplash.com/photo-1551133990-396631946d2a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MTR8MTExODg5NHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=1000&q=60",
        url5:"https://images.unsplash.com/photo-1550252225-69800809ba78?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MTZ8MTExODg5NHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=1000&q=60",
        preview:true
      },
      {
        spotId:12,
        url1:"https://images.unsplash.com/photo-1510798831971-661eb04b3739?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
        url2:"https://images.unsplash.com/photo-1549488497-5a2119c98479?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MTd8MTExODg5NHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=1000&q=60",
        url3:"https://images.unsplash.com/photo-1549488497-256795402cc0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MTh8MTExODg5NHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=1000&q=60",
        url4:"https://images.unsplash.com/photo-1631545117864-2273c31ad8d7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MnxyMFFhcEM1Y1Z6SXx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=1000&q=60",
        url5:"https://images.unsplash.com/photo-1453861533556-9f57ebe61c76?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8NHwxMDIwNzYyfHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=60",
        preview:true
      },
      {
        spotId:13,
        url1:"https://images.unsplash.com/photo-1610928290695-64e621f6a2f8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80",
        url2:"https://images.unsplash.com/photo-1484636373136-1920fca36757?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8NXwxMDIwNzYyfHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=60",
        url3:"https://images.unsplash.com/photo-1559767949-0faa5c7e9992?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8OHwxMDIwNzYyfHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=60",
        url4:"https://images.unsplash.com/photo-1522444195799-478538b28823?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8NXw4ODI2Njl8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=60",
        url5:"https://images.unsplash.com/photo-1502005229762-cf1b2da7c5d6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8N3w4ODI2Njl8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=60",
        preview:true
      },
      {
        spotId:14,
        url1:"https://images.unsplash.com/photo-1439362204303-f36d565c4186?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80",
        url2:"https://images.unsplash.com/photo-1519974719765-e6559eac2575?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8OHw4ODI2Njl8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=60",
        url3:"https://images.unsplash.com/photo-1600494448655-ae58f58bb945?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MXw5NTAyOTkxfHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=60",
        url4:"https://images.unsplash.com/photo-1598295094949-829796d200d1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8Mnw5NTAyOTkxfHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=60",
        url5:"https://images.unsplash.com/photo-1544212437-67d59d0d2875?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8NHw5NTAyOTkxfHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=60",
        preview:true
      }, {
        spotId:15,
        url1:"https://images.unsplash.com/photo-1430285561322-7808604715df?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
        url2:"https://images.unsplash.com/photo-1579656592043-a20e25a4aa4b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8NXw5NTAyOTkxfHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=60",
        url3:"https://images.unsplash.com/photo-1571164860029-856acbc24b4a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8Nnw5NTAyOTkxfHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=60",
        url4:"https://images.unsplash.com/photo-1600585153782-37009a1dbbe6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8N3w5NTAyOTkxfHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=60",
        url5:"https://images.unsplash.com/photo-1560184897-502a475f7a0d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8OHw5NTAyOTkxfHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=60",
        preview:true
      }, {
        spotId:16,
        url1:"https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1175&q=80",
        url2:"https://images.unsplash.com/photo-1597937838647-5e3109768dd3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MTB8OTUwMjk5MXx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=1000&q=60",
        url3:"https://images.unsplash.com/photo-1581209410127-8211e90da024?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MTF8OTUwMjk5MXx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=1000&q=60",
        url4:"https://images.unsplash.com/photo-1505773278895-5efa7b11679a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MTZ8OTUwMjk5MXx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=1000&q=60",
        url5:"https://images.unsplash.com/photo-1594317307537-d3983788f2f8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MTh8cjBRYXBDNWNWekl8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=60",
        preview:true
      } ,{
        spotId:17,
        url1:"https://a0.muscache.com/im/pictures/3e966211-6402-41b7-8d1f-f0d2e1b1c519.jpg?im_w=320",
        url2:"https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MXwyMzMwNDU3fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=60",
        url3:"https://images.unsplash.com/photo-1507652313519-d4e9174996dd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MnwyMzMwNDU3fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=60",
        url4:"https://images.unsplash.com/photo-1521782462922-9318be1cfd04?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8NXwyMzMwNDU3fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=60",
        url5:"https://images.unsplash.com/photo-1502005097973-6a7082348e28?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8N3wyMzMwNDU3fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=60",
        preview:true
      },
      {
        spotId:18,
        url1:"https://images.unsplash.com/photo-1537864525618-16464c6def22?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8NHwzNzg2ODN8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=60",
        url2:"https://images.unsplash.com/photo-1554967918-4485c27dfc6c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8OXwxMTE4ODk0fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=60",
        url3:"https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8OHwyMzMwNDU3fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=60",
        url4:"https://images.unsplash.com/photo-1524758631624-e2822e304c36?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8NnwyMzMwNDU3fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=60",
        url5:"https://images.unsplash.com/photo-1505577058444-a3dab90d4253?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MTl8MTExODg5NHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=1000&q=60",
        preview:true
      },
      {
        spotId:19,
        url1:"https://images.unsplash.com/photo-1608058204446-1cf0f7d11d38?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
        url2:"https://images.unsplash.com/photo-1546540749-1642fed507fc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MTN8MTExODg5NHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=1000&q=60",
        url3:"https://images.unsplash.com/photo-1550921082-c282cdc432d6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MTV8MTExODg5NHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=1000&q=60",
        url4:"https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MXwxNjY3NjE1fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=60",
        url5:"https://images.unsplash.com/photo-1608235343218-64f99c70baba?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MnwxNjY3NjE1fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=60",
        preview:true
      }
      // {
      //   spotId:20,
      //   url1:"https://images.unsplash.com/photo-1580587771525-78b9dba3b914?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80",
      //   url2:"",
      //   url3:"",
      //   url4:"",
      //   url5:"",
      //   preview:true
      // },
      // {
      //   spotId:21,
      //   url:"https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
      //   preview:true
      // }
      // ,
      // {
      //   spotId:22,
      //   url:"https://images.unsplash.com/photo-1512915922686-57c11dde9b6b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1473&q=80",
      //   preview:true
      // }
      // ,
      // {
      //   spotId:23,
      //   url:"https://images.unsplash.com/photo-1492889971304-ac16ab4a4a5a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1174&q=80",
      //   preview:true
      // }
      // ,
      // {
      //   spotId:24,
      //   url:"https://images.unsplash.com/photo-1623005329287-0848374575d3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
      //   preview:true
      // }
      // ,
      // {
      //   spotId:25,
      //   url:"https://images.unsplash.com/photo-1489370321024-e0410ad08da4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
      //   preview:true
      // }
      // ,
      // {
      //   spotId:26,
      //   url:"https://images.unsplash.com/photo-1615354310157-c78b1be66eed?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80",
      //   preview:true
      // }
      // ,
      // {
      //   spotId:27,
      //   url:"https://images.unsplash.com/photo-1626290131022-4e5a5e167173?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
      //   preview:true
      // }
      // ,
      // {
      //   spotId:28,
      //   url:"https://images.unsplash.com/photo-1604004218771-05c55db4f9f4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
      //   preview:true
      // }
      // ,
      // {
      //   spotId:29,
      //   url:"https://images.unsplash.com/photo-1560557102-b14bfc6b1988?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=685&q=80",
      //   preview:true
      // }
      // ,
      // {
      //   spotId:30,
      //   url:"https://images.unsplash.com/photo-1560706499-e97fab36aec9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
      //   preview:true
      // }
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
