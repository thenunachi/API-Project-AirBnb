const express = require('express');
const router = express.Router();
const { Spot, Review, SpotImage, sequelize, User, ReviewImage,Booking } = require("../../db/models");
const { setTokenCookie, requireAuth } = require('../../utils/auth');
const { check } = require('express-validator');
const { handleValidationErrors } = require('../../utils/validation');

const validateError = [
    check('endDate')
      .exists({ checkFalsy: true })
      .withMessage("endDate cannot come before startDate"),//should I use is after constraint in booking start end column?
    
  
    handleValidationErrors
  ];

//Get all of the Current User's Bookings

router.get("/current",requireAuth,async(req,res)=>{
const {user}=req;
const allBookings = await Booking.findAll({
include:[{
    model:Spot,
    attributes:["id", "ownerId", "address", "city", "state", "country", "lat", "lng", "name", "price"] // to include preview image
}]
})
res.json({"Bookings":allBookings})

})


//Edit a Booking
router.put("/:bookingId",validateError,requireAuth,async(req,res)=>{
const {user}=req;
const {bookingId}=req.params;
const {startDate,endDate}=req.body;
const updateBooking = await Booking.findByPk(bookingId)
console.log("UP",updateBooking)
if(!updateBooking){
    res.status(404);
    return res.json({
      "message": "Booking couldn't be found",
      "statusCode": 404
    })
}
if(updateBooking.endDate < new Date()){
  res.status(403);
  return res.json({
    "message": "Past bookings can't be modified",
    "statusCode": 403
  })
}
if(updateBooking.spotId){//need to update
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
updateBooking.startDate = startDate;
updateBooking.endDate = endDate;
await updateBooking.save()
res.status(200);
return res.json(updateBooking)//error pending

})
//Delete a Booking

router.delete("/:bookingId", requireAuth, async (req, res) => {

    const { user } = req;
    const { bookingId } = req.params;
    const existingBooking = await Spot.findByPk(bookingId);
    if (!existingBooking) {
        res.status(404);
        return res.json({
            "message": "Booking couldn't be found",
            "statusCode": 404
          })
    }
    let bookingSD = new Date (existingBooking.startDate)
    console.log("date",bookingSD)
    console.log(bookingSD < new Date())
    if(bookingSD < new Date()){//test it out
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








module.exports=router;