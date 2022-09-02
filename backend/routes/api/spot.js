const express = require('express');
const router = express.Router();
const { Spot, Review, SpotImage, sequelize, User, ReviewImage, Booking } = require("../../db/models");
const { setTokenCookie, requireAuth } = require('../../utils/auth');
const { check } = require('express-validator');
const { handleValidationErrors } = require('../../utils/validation');


const validateError = [
    check('address')
        .exists({ checkFalsy: true })
        .withMessage("Street address is required"),
    check('city')
        .exists({ checkFalsy: true })
        .isLength({ min: 4 })
        .withMessage("City is required"),
    check('state')
        .exists({ checkFalsy: true })
        .withMessage("State is required"),
    check('country')
        .exists({ checkFalsy: true })
        .withMessage("Country is required"),
    check('lat')
        .exists({ checkFalsy: true })
        .withMessage("Latitude is not valid"),
    check('lng')
        .exists({ checkFalsy: true })
        .withMessage("Longitude is not valid"),
    check('name')
        .exists({ checkFalsy: true })
        .isLength({ max: 50 })
        .withMessage("Name must be less than 50 characters"),
    check('description')
        .exists({ checkFalsy: true })
        .withMessage("Description is required"),
    check('price')
        .exists({ checkFalsy: true })
        .withMessage("Price per day is required"),
    handleValidationErrors
];

const reviewvalidateError = [
    check('review')
        .exists({ checkFalsy: true })
        .withMessage("Review text is required"),
    check('stars')
        .exists({ checkFalsy: true })
        .withMessage("Stars must be an integer from 1 to 5"),

    handleValidationErrors
];




//Get all Spots
router.get("/", async (req, res) => {
    console.log(req)
    const spots = await Spot.findAll({

        include: [{
            model: Review,
            attributes: []
        },
        {
            model: SpotImage,
            attributes: ["url",]
        }
        ],
        attributes: {
            include: [
                [sequelize.fn("AVG", sequelize.col("stars")), "avgRating"]
            ]
        },
        group: ["Spot.id"], // to return all spots
        raw: true
    })

    return res.json({ Spots: spots })
})

//Get details of a Spot from an id

router.get("/:spotId", async (req, res) => {
    const { spotId } = req.params;
    const spot = await Spot.findByPk(spotId)







})






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
    const newImage = await SpotImage.create({
        url, preview, spotId: spot.id
    })
    console.log(newImage)
    if (!newImage) {
        res.statusCode = 404;
        return res.json({

            "message": "Spot couldn't be found",
            "statusCode": 404
        })

    }
    res.status = 200
    return res.json({ id: newImage.id, url: newImage.url, preview: newImage.preview })
})

//Edit a Spot

router.put("/:spotId", validateError, requireAuth, async (req, res) => {
    const { user } = req
    const { address, city, state, country, lat, lng, name, description, price } = req.body
    const { spotId } = req.params;
    const particularSpot = await Spot.findByPk(spotId);
    if (!particularSpot) {
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
    const { user } = req;
    const { spotId } = req.params;
    const existingSpot = await Spot.findByPk(spotId);
    if (!existingSpot) {
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

//Get all Reviews by a Spot's id
router.get("/:spotId/reviews", async (req, res) => {
    const { spotId } = req.params;
    const spotsofReview = await Spot.findByPk(spotId)
    //console.log("spotsofreview", spotsofReview)
    const reviewSpots = await Review.findAll({
        where: {
            spotId: spotsofReview.id
        },
        include: [
            {
                model: User,
                attribute: ["id", "firstName", "lastName"]
            },
            {
                model: ReviewImage,
                attributes: ["id", "url"]
            }]
    })
    console.log("reviewSpots", reviewSpots)
    if (!reviewSpots) {
        res.status = 404;
        return res.json({
            "message": "Spot couldn't be found",
            "statusCode": 404
        })
    }
    res.status = 200
    return res.json(reviewSpots)
})

//Create a Review for a Spot based on the Spot's id ????????????????????

router.post("/:spotId/reviews", reviewvalidateError, requireAuth, async (req, res) => {
    const { review, stars } = req.body;
    const { user } = req
    const { spotId } = req.params;
    const spot = await Spot.findByPk(spotId)
    if (!spot) { // need to write error
        res.status(404);
        return res.json({
            "message": "Spot couldn't be found",
            "statusCode": 404
        })
    }
    const newReview = await Review.create({
        review, stars, spotId: spot.id, userId: user.id
    })

    if (newReview.spotId === spot.id && newReview.userId === user.id) { //basically if both are same they have a review
        res.status(403);
        return res.json({
            "message": "User already has a review for this spot",
            "statusCode": 403
        })
    }
    res.status(201);
    return res.json(newReview)
})

//Get all Bookings for a Spot based on the Spot's id

router.get("/:spotId/bookings", requireAuth, async (req, res) => {
    const { user } = req;
    const { spotId } = req.params;
    console.log("Before finding spot");
    const spot = await Spot.findByPk(spotId);
    console.log("spot" + spot)
    if (!spot) { //error not working
        res.status(404);
        return res.json({
            "message": "Spot couldn't be found",
            "statusCode": 404
        })
    }
    const allBookings = await Booking.findAll({
        where: {
            spotId: spot.id
        },
        include: [{
            model: User,
            attributes: ["id", "firstName", "lastName"]
        }]
    })
    console.log(allBookings)
    // if(!allBookings.User){ //to work on not a owner use pagination,exclude something like that
    //     res.status=200;
    //     return res.json(allBookings)
    // }
// console.log("user.id",user.id);
// console.log("spot.ownwe.id",spot.ownerId)
    if (user.id === spot.ownerId) {
        res.status(200);
        return res.json({ "Bookings": allBookings })
    } else {
        res.status(403) ;
        return res.json({"errror": "Not authorized"});
    }


})

//Create a Booking from a Spot based on the Spot's id
router.post("/:spotIod/bokings", requireAuth, async (req, res) => {
    const { user } = req
    const { spotId } = req.params;
    const spot = await Spot.findByPk(spotId);
    const { startDate, endDate } = req.body;
    const newBooking = await Booking.create({
        spotId: spot.id, userId: user.id, startDate, endDate
    })
    res.status = 200;
    return res.json(newBooking)//errors pending
})





























module.exports = router