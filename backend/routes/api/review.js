const express = require('express');
const router = express.Router();
const { Spot, Review, SpotImage, sequelize, User, ReviewImage } = require("../../db/models");
const { setTokenCookie, requireAuth } = require('../../utils/auth');
const { check } = require('express-validator');
const { handleValidationErrors } = require('../../utils/validation');

//Get all Reviews of the Current User
router.get("/current", requireAuth, async (req, res) => {
    const { user } = req;
    console.log(req)
    const allReviews = await Review.findAll({
        include: [{
            model: User,
            attributes: ["id", "firstName", "lastName"]
        },
        {
            model: Spot,
            attributes: ["id", "ownerId", "address", "city", "state", "country", "lat", "lng", "name", "price"] // to include preview image
        },
        {
            model: ReviewImage,
            attributes: ["id", "url"]
        }]
    });
    return res.json(allReviews)
})



//Edit a Review
router.put("/:reviewId", requireAuth, async (req, res) => { //work on error
const {user}=req;
const{reviewId}=req.params;
const {review,stars}=req.body;
const updateReview = await Review.findByPk(reviewId)
if(!updateReview){
    res.status = 404;
    return res.json({"message": "Review couldn't be found",
    "statusCode": 404})
}
updateReview.review = review;
updateReview.stars = stars;
await updateReview.save();
res.status = 200;
return res.json(updateReview)

})

//Delete a Review

router.delete("/:reviewId", requireAuth, async (req, res) => {

    const { user } = req;
    const { reviewId } = req.params;
    const existingReview = await Spot.findByPk(reviewId);
    if (!existingReview) {
        res.statusCode = 404;
        return res.json({
            "message": "Review couldn't be found",
            "statusCode": 404
          })
    }
    existingReview.destroy();
    res.status(200)
    return res.json({
        "message": "Successfully deleted",
        "statusCode": 200
    })



})



module.exports = router