const express = require('express');
const router = express.Router();
const { Spot, Review, SpotImage, sequelize, User } = require("../../db/models");
const { setTokenCookie, requireAuth } = require('../../utils/auth');
const { check } = require('express-validator');
const { handleValidationErrors } = require('../../utils/validation');
//Get all Spots
// router.get("/", async (req, res) => {
//     console.log(req)
//     const spots = await Spot.findAll({

//         include: [{
//             model: Review,
//             attributes: []
//         },
//         {
//             model: SpotImage,
//             attributes: ["url",]
//         }
//         ],
//         attributes: {
//             include: [
//                 [sequelize.fn("AVG", sequelize.col("stars")), "avgRating"]
//             ]
//         },
//         group: ["Spot.id"], // to return all spots
//         raw: true
//     })

//     return res.json({ Spots: spots })
// })
//Create a Spot
router.post("/", requireAuth, async (req, res) => {
    console.log(req.body)
    const { user } = req;
    const { address, city, state, country, lat, lng, name, description, price } = req.body
    const newSpot = await Spot.create({
        // include:[{model:User}],
        address, city, state, country, lat, lng, name, description, price, ownerId: user.id
    })
    if (!newSpot) {
        return res.status(400).json({
            "message": "Validation Error",
            "statusCode": 400,
            "errors": {
                "address": "Street address is required",
                "city": "City is required",
                "state": "State is required",
                "country": "Country is required",
                "lat": "Latitude is not valid",
                "lng": "Longitude is not valid",
                "name": "Name must be less than 50 characters",
                "description": "Description is required",
                "price": "Price per day is required"
            }
        })
    }
    res.statusCode = 201
    return res.json(newSpot)
})
//Add an Image to a Spot based on the Spot's id

router.post("/:spotId/images", requireAuth, async (req, res) => {
    const { url, preview } = req.body
    const { spotId } = req.params;
    const spot = await Spot.findByPk(spotId)
    const newImage = await spot.createSpotImage({ //???
        url, preview
    })
    console.log(newImage)
    if (!newImage) {
        res.statusCode = 404;
        return res.json({
        
            "message": "Spot couldn't be found",
            "statusCode": 404
        })

    }
    res.status=200
    return res.json({ id: newImage.id, url: newImage.url, preview: newImage.preview })
})

//Edit a Spot

router.put("/:spotId", requireAuth, async (req, res) => {
    const {user}=req
const {address, city, state, country, lat, lng, name, description, price} = req.body
const {spotId}=req.params;
const particularSpot = await Spot.findByPk(spotId);
if(!particularSpot){
    res.statusCode = 404
    return res.send({
        "message": "Spot couldn't be found",
        "statusCode": 404
      })
}
// if(!particularSpot){
//     return res.json({
//         "message": "Validation Error",
//         "statusCode": 400,
//         "errors": {
//           "address": "Street address is required",
//           "city": "City is required",
//           "state": "State is required",
//           "country": "Country is required",
//           "lat": "Latitude is not valid",
//           "lng": "Longitude is not valid",
//           "name": "Name must be less than 50 characters",
//           "description": "Description is required",
//           "price": "Price per day is required"
//         }
//       })
// }
particularSpot.address = address;
particularSpot.city = city;
particularSpot.state = state;
particularSpot.country = country;
particularSpot.lat = lat;
particularSpot.lng = lng;
particularSpot.name = name;
particularSpot.description = description;
particularSpot.price = price;
particularSpot.ownerId = user.id
await particularSpot.save();
res.statusCode = 200;
return res.json(particularSpot)
})

//Delete a Spot
router.delete("/:spotId", requireAuth, async (req, res) => {
const{user}=req;
const {spotId}=req.params;
const existingSpot = await Spot.findByPk(spotId);
if(!existingSpot){
    res.statusCode = 404;
    return res.json({
        "message": "Spot couldn't be found",
        "statusCode": 404
      })
}
existingSpot.destroy();
res.status(200)
return res.json({
    "message": "Successfully deleted",
    "statusCode": 200
  })

})





module.exports = router