const express = require('express');
const router = express.Router();
const { Spot, Review, SpotImage, sequelize, User, ReviewImage, Booking } = require("../../db/models");
const { setTokenCookie, requireAuth } = require('../../utils/auth');
const { check } = require('express-validator');
const { handleValidationErrors } = require('../../utils/validation');

const validateError = [
  check('endDate')
    .exists({ checkFalsy: true })
    .withMessage("endDate cannot come before startDate"),//should I use is after constraint in booking start end column?
  check('startDate')
    .exists({ checkFalsy: true })
    .withMessage("startDate cannot come before startDate"),
  handleValidationErrors
];

//Get all of the Current User's Bookings

router.get("/current", requireAuth, async (req, res) => {
  const { user } = req;
  const allBookings = await Booking.findAll({
    where: {
      userId: user.id
    },
    include: [{
      model: Spot,
      attributes: ["id", "ownerId", "address", "city", "state", "country", "lat", "lng", "name", "price"]
    }]
  })
  let newArray = [];
  let bookingObj;
  for (let i = 0; i < allBookings.length; i++) {
    bookingObj = allBookings[i].toJSON();
    const previewImage = await SpotImage.findByPk(allBookings[i].id, {
      where: { preview: true },
      attributes: ["url1"],
      raw: true
    })
    if (!previewImage) {
      bookingObj.Spot.previewImage = ""
    }
    if (previewImage) {
      bookingObj.Spot.previewImage = previewImage.url
    }
    newArray.push(bookingObj)
  }
  res.json({ "Bookings": newArray })

})


//Edit a Booking
router.put("/:bookingId", validateError, requireAuth, async (req, res) => {
  
  const { user } = req;
  const { bookingId } = req.params;
  console.log(bookingId)
  const { startDate, endDate } = req.body;
  const existingBooking = await Booking.findByPk(bookingId)
  // console.log("UP", existingBooking.userId)
  // console.log("USER",user)
  // if (user.id !== existingBooking.userId) {
  //   res.status(403);
  //   return res.json({
  //     "message": "Forbidden",
  //     "statusCode": 403
  //   })
  // }
  if (!existingBooking) {
    res.status(404);
    return res.json({
      "message": "Booking couldn't be found",
      "statusCode": 404
    })
  }
  if (new Date(endDate) < new Date()) {
    res.status(403);
    return res.json({
      "message": "Past bookings can't be modified",
      "statusCode": 403
    })
  }
  
  if (new Date(startDate) > new Date(endDate)) {
    
    res.status(400);
    return res.json({
      "message": "Validation error",
      "statusCode": 400,
      "errors": {
        "endDate": "endDate cannot come before startDate"
      }
    })
  }
  const bookingsInSpot = await Booking.findAll({
    where: {
      spotId: existingBooking.spotId
    }
  })
  //console.log("BC", bookingsInSpot)
  const isOverLap = (bookingsInSpot, startDate, endDate) => {
    //console.log("OVERLAP")
    let bookingStart = new Date(bookingsInSpot.startDate);
    let bookingEnd = new Date(bookingsInSpot.endDate);
    let userStart = new Date(startDate);
    let userEnd = new Date(endDate);
    if ((bookingStart <= userStart && userStart < bookingEnd) || (userEnd > bookingStart && userEnd <= bookingEnd)) {
      //console.log("OVERLAP TRUE")
      return true
    }
  }


  for (let e of bookingsInSpot) {
   //nsole.log("COMPARISON", e.id !== existingBooking.id)
    if (isOverLap(e, startDate, endDate) && e.id !== existingBooking.id) {
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

  if (existingBooking.userId === user.id) {
    existingBooking.startDate = startDate;
    existingBooking.endDate = endDate;
    await existingBooking.save()
    res.status(200);
    return res.json(existingBooking)
  }


})
//Delete a Booking

router.delete("/:bookingId", requireAuth, async (req, res) => {
// res.json(req.params.bookingId)
  const { user } = req;
  const { bookingId } = req.params;
  const existingBooking = await Booking.findByPk(bookingId);
  if (!existingBooking) {
    res.status(404);
    return res.json({
      "message": "Booking couldn't be found",
      "statusCode": 404
    })
  }
  let bookingSD = new Date(existingBooking.startDate)
  console.log("date", bookingSD)
  console.log(bookingSD < new Date())
  if (bookingSD < new Date()) {//test it out
    res.status(403);
    return res.json({
      "message": "Bookings that have been started can't be deleted",
      "statusCode": 403
    })
  }
  await existingBooking.destroy();
  res.status(200)
  return res.json({
    "message": "Successfully deleted",
    "statusCode": 200
  })

})








module.exports = router;