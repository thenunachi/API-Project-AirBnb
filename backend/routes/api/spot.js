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





router.get('/', async (req, res, next) => {
    let { page, size, minLat, maxLat, minLng, maxLng, minPrice, maxPrice } = req.query;
    //set default values
    if (page && size) {
        if (!page) page = 1;
        if (!size) size = 20;
        page = parseInt(page);
        size = parseInt(size);

        const pagination = {}
        if (page >= 1 && size >= 1) {
            pagination.limit = size;
            pagination.offset = size * (page - 1)
        }
        if (page <= 0 && size <= 0) {
            res.status(400);
            return res.json({
                "page": "Page must be greater than or equal to 0",
                "size": "Size must be greater than or equal to 0",
            })
        }
        const spotsall = await Spot.findAll({
            include: {
                model: Review,
                attributes: []
            },
            // attributes: {
            //     include: [
            //         [
            //             sequelize.fn("ROUND", sequelize.fn("AVG", sequelize.col("Reviews.stars")),2)  , "avgRating"
            //         ]
            //     ]
            // },

            group: ["Spot.id"],
            ...pagination, // need this to return ALL spots
            raw: true,
            subQuery: false

        })
        // go through spots array and see if each obj has an assoc image
        for (let spot of spotsall) {
            const spotImage = await SpotImage.findOne({
                attributes: ["url1"],
                where: {
                    preview: true,
                    spotId: spot.id
                },
                raw: true
            })
            // if image exists, then set spotImage property in obj accordingly
            if (spotImage) {
                spot.previewImage = spotImage.url1
            } else {
                spot.previewImage = null
            }
        }
        return res.json({
            Spots: spotsall, "page": page, "size": size
        })
    }
    else {
        //     if (!page) page = 1;
        // if (!size) size = 20;
        // page = parseInt(page);
        // size = parseInt(size);

        // const pagination = {}
        // if (page >= 1 && size >= 1) {
        //     pagination.limit = size;
        //     pagination.offset = size * (page - 1)
        // }
        // if (page <= 0 && size <= 0) {
        //     res.status(400);
        //     return res.json({
        //         "page": "Page must be greater than or equal to 0",
        //         "size": "Size must be greater than or equal to 0",
        //     })
        // }
        const spotsall = await Spot.findAll({
            include: {
                model: Review,
                attributes: []
            },
            attributes: {
                include: [
                    [
                        sequelize.fn("ROUND", sequelize.fn("AVG", sequelize.col("Reviews.stars")), 2), "avgRating"
                    ]
                ]
            },

            group: ["Spot.id"],
            // ...pagination, // need this to return ALL spots
            raw: true,
            //   subQuery: false

        })
        // go through spots array and see if each obj has an assoc image
        for (let spot of spotsall) {
            const spotImage = await SpotImage.findOne({
                attributes: ["url1"],
                where: {
                    preview: true,
                    spotId: spot.id
                },
                raw: true
            })
            // if image exists, then set spotImage property in obj accordingly
            if (spotImage) {
                spot.previewImage = spotImage.url1
            } else {
                spot.previewImage = null
            }
        }
        return res.json({
            Spots: spotsall
        })
    }
})
//Get all Spots owned by the Current User
router.get("/current", requireAuth, async (req, res) => {
    const { user } = req;

    const allSpots = await Spot.findAll({
        where: {
            ownerId: user.id
        },
        include: [{
            model: Review,
            attributes: []
        },

        ],
        attributes: {
            include: [
                [

                    sequelize.fn("ROUND", sequelize.fn("AVG", sequelize.col("Reviews.stars")), 2), "avgRating"
                ]
            ]
        },
        group: ["Spot.id"], // to return all spots
        raw: true
    })

    for (let spot of allSpots) {
        const spotImage = await SpotImage.findOne({
            attributes: ["url"],
            where: {
                preview: true,
                spotId: spot.id
            },
            raw: true
        })
        // if image exists, then set spotImage property in obj accordingly
        if (spotImage) {
            spot.previewImage = spotImage.url
        } else {
            spot.previewImage = null
        }
    }

    return res.json({
        Spots: allSpots
    })
})



//Get details of a Spot from an id
router.get("/:spotId", async (req, res) => {
    const { spotId } = req.params;
    const spotDetails = await Spot.findByPk(spotId);
console.log(spotDetails,"spotDetails")
    if (!spotDetails) {
        res.status(404)
        res.json({
            "message": "Spot couldn't be found",
            "statusCode": 404
        })
    }
    const owner = await User.findByPk(spotDetails.ownerId, {
        attributes: ["id", "firstName", "lastName"]
    })

    const spotImages = await SpotImage.findOne({
        where: {
            spotId: spotId
        },
        attributes: ["id", "url1", "url2","url3","url4","url5","preview"]
    })

    const numReviews = await Review.count({
        where: { spotId: spotId },
        raw: true
    })
    const averageRating = await Review.findOne({
        attributes: [[sequelize.fn('ROUND', sequelize.fn("AVG", sequelize.col("stars")), 2), "avgRating"]],
        where: { spotId: spotId },
        raw: true
    })
    const details = spotDetails.toJSON()
    details.numReviews = numReviews
    details.avgStarRating = averageRating.avgStarRating
    details.SpotImages = spotImages
    details.Owner = owner
    return res.json(details)
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
    res.status(201)
    return res.json(newSpot)
})
//Add an Image to a Spot based on the Spot's id

router.post("/:spotId/images", requireAuth, async (req, res) => {
    const { url, preview } = req.body
    const { spotId } = req.params;
    const spot = await Spot.findByPk(spotId)
    if (!spot) {
        res.status(404);
        return res.json({

            "message": "Spot couldn't be found",
            "statusCode": 404
        })

    }
    const newImage = await SpotImage.create({
        url, preview, spotId: spot.id
    })
    console.log(newImage)

    res.status(200)
    return res.json({ id: newImage.id, url: newImage.url, preview: newImage.preview })
})

//Edit a Spot

router.put("/:spotId", validateError, requireAuth, async (req, res) => {
    const { user } = req
    const { address, city, state, country, lat, lng, name, description, price } = req.body
    const { spotId } = req.params;
    const particularSpot = await Spot.findByPk(spotId);
    
    if (!particularSpot) {
        res.status(404)
        return res.send({
            "message": "Spot couldn't be found",
            "statusCode": 404
        })
    }
if(user.id === particularSpot.ownerId){
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
    res.status(200);
    return res.json(particularSpot)
}
else{
    //res.status(403)
    return res.send({
        "message": "User not authorized",
        "statusCode": 403
    })
}
    

    
})

//Delete a Spot
router.delete("/:spotId", requireAuth, async (req, res) => {

    const { spotId } = req.params;
    const existingSpot = await Spot.findByPk(spotId);
    if (!existingSpot) {
        res.status(404);
        return res.json({
            "message": "Spot couldn't be found",
            "statusCode": 404
        })
    }
    await existingSpot.destroy();
    res.status(200)
    return res.json({
        "message": "Successfully deleted",
        "statusCode": 200
    })

})

//Get all Reviews by a Spot's id
router.get("/:spotId/reviews", async (req, res) => {
    const { spotId } = req.params;
    const spotsofReview = await Spot.findByPk(spotId);
    if (!spotsofReview) {
        res.status(404);
        return res.json({
            "message": "Spot couldn't be found",
            "statusCode": 404
        })
    }
    const reviewSpots = await Review.findAll({
        where: {
            spotId: spotsofReview.id
        },
        include: [
            {
                model: User,
                attributes: ["id", "firstName", "lastName"]
            },
            {
                model: ReviewImage,
                attributes: ["id", "url"]
            }]
    })
    console.log("reviewSpots", reviewSpots)


    if (!spotsofReview) {
        res.status(404);
        return res.json({
            "message": "Spot couldn't be found",
            "statusCode": 404
        })
    }


    res.status(200)
    return res.json({ "Reviews": reviewSpots })

})

//Create a Review for a Spot based on the Spot's id 

router.post("/:spotId/reviews", reviewvalidateError, requireAuth, async (req, res) => {
    const { review, stars } = req.body;
    const { user } = req
    const { spotId } = req.params;
    const spot = await Spot.findByPk(spotId)
    if (!spot) {
        res.status(404);
        return res.json({
            "message": "Spot couldn't be found",
            "statusCode": 404
        })
    }
    const reviewSpot = await Review.findAll({
        where: {
            userId: user.id,
            spotId: spot.id
        }
    })
    console.log("REV", reviewSpot)

    if (reviewSpot.length > 0) { //basically if both are same they have a review
        res.status(403);
        return res.json({
            "message": "User already has a review for this spot",
            "statusCode": 403
        })
    }
    const newReview = await Review.create({
        review, stars, spotId: spot.id, userId: user.id
    })


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
    if (!spot) {
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
            attributes: {
                exclude: ["username", "email", "hashedPassword", "createdAt", "updatedAt"]
            }
        }]
    })
    if (spot) {//owner
        if (user.id === spot.ownerId) {
            res.status(200);
            return res.json({ "Bookings": allBookings })
        }
        else {//not owner
            let allBookings = await Booking.findAll({
                where: {
                    spotId: spot.id
                },
                attributes: {
                    exclude: ["userId", "id", "createdAt", "updatedAt"]
                }
            })
            res.status(200);
            return res.json({ "Bookings": allBookings })
        }
    }

})

//Create a Booking from a Spot based on the Spot's id
router.post("/:spotId/bookings", requireAuth, async (req, res) => {
    console.log(req.params.spotId)
    const { user } = req
    const { spotId } = req.params;
    const spot = await Spot.findByPk(spotId);
    const { startDate, endDate } = req.body;
    if (!spot) {
        res.status(404);
        return res.json({
            "message": "Spot couldn't be found",
            "statusCode": 404
        })
    }
    const bookingConflict = await Booking.findAll({
        where: {
            spotId: spot.id,
        }
    })
    const isOverLap = (bookingConflict, startDate, endDate) => {
        let bookingStart = new Date(bookingConflict.startDate);
        let bookingEnd = new Date(bookingConflict.endDate);
        let userStart = new Date(startDate);
        let userEnd = new Date(endDate);
        if ((bookingStart <= userStart && userStart < bookingEnd) || (userEnd > bookingStart && userEnd <= bookingEnd)) {
            return true
        }
    }


    for (let e of bookingConflict) {
        if (isOverLap(e, startDate, endDate)) {
            res.status(403);
            return res.json({
                "message": "Sorry, this spot is already booked for the specified dates",
                "statusCode": 403,
                "errors": {
                    "startDate": "Start date conflicts with an existing booking",
                    "endDate": "End date conflicts with an existing booking"
                }
            })
        }
    }
    if (user.id === spot.ownerId) {
        res.status(400);
        return res.json({
            "statusCode": 400,
            "message": "Cant create booking in own spot",
        })
    }

    const newBooking = await Booking.create({
       spotId: spot.id, userId: user.id, startDate, endDate
    })
    res.status(200);
    return res.json(newBooking)



})





























module.exports = router