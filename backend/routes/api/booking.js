const express = require('express');
const router = express.Router();
const { Spot, Review, SpotImage, sequelize, User, ReviewImage,Booking } = require("../../db/models");
const { setTokenCookie, requireAuth } = require('../../utils/auth');
const { check } = require('express-validator');
const { handleValidationErrors } = require('../../utils/validation');


//Get all of the Current User's Bookings
//why is it taking null value for start date and end date
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













module.exports=router;