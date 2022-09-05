const express = require('express');
const router = express.Router();
const { Spot, Review, SpotImage, sequelize, User, ReviewImage,Booking } = require("../../db/models");
const { setTokenCookie, requireAuth } = require('../../utils/auth');
const { check } = require('express-validator');
const { handleValidationErrors } = require('../../utils/validation');


router.delete("/:imageId", requireAuth, async (req, res) => {

    const { user } = req;
    const { imageId } = req.params;
    const existingImage = await ReviewImage.findByPk(imageId);
    if (!existingImage) {
        res.status (404);
        return res.json({
            "message": "Review Image couldn't be found",
            "statusCode": 404
          })
    }
  
    await existingImage.destroy();
    res.status(200)
    return res.json({
        "message": "Successfully deleted",
        "statusCode": 200 
    })

})















module.exports = router;