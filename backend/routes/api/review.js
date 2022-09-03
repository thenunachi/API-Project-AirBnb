const express = require('express');
const router = express.Router();
const { Spot, Review, SpotImage, sequelize, User, ReviewImage } = require("../../db/models");
const { setTokenCookie, requireAuth } = require('../../utils/auth');
const { check } = require('express-validator');
const { handleValidationErrors } = require('../../utils/validation');

const validateError = [
    check('review')
      .exists({ checkFalsy: true })
      .withMessage("Review text is required"),
    check('stars')
      .exists({ checkFalsy: true })
      .withMessage("Stars must be an integer from 1 to 5"),
  
    handleValidationErrors
  ];



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
    
    return res.json({"Reviews":allReviews})
})



//Edit a Review
router.put("/:reviewId",validateError, requireAuth, async (req, res) => { 
const {user}=req;
const{reviewId}=req.params;
const {review,stars}=req.body;
const updateReview = await Review.findByPk(reviewId)
if(!updateReview){
    res.status (404);
    return res.json({"message": "Review couldn't be found",
    "statusCode": 404})
}
updateReview.review = review;
updateReview.stars = stars;
await updateReview.save();
res.status (200) ;
return res.json(updateReview)

})

//Delete a Review

router.delete("/:reviewId", requireAuth, async (req, res) => {

    const { user } = req;
    const { reviewId } = req.params;
    const existingReview = await Spot.findByPk(reviewId);
    if (!existingReview) {
        res.status (404);
        return res.json({
            "message": "Review couldn't be found",
            "statusCode": 404
          })
    }
    await existingReview.destroy();
    res.status(200)
    return res.json({
        "message": "Successfully deleted",
        "statusCode": 200
    })



})

//Add an Image to a Review based on the Review's id
router.post("/:reviewId/images",requireAuth,async(req,res)=>{
    // review must belong to the current user
    // cannot add more than 10 image
    const {user}=req;
    const {url} = req.body;
    const {reviewId} =req.params;
    const review = await Review.findByPk(reviewId);
    if(!review){
        res.status(404);
        return res.json({
            "message": "Review couldn't be found",
            "statusCode": 404
          })
    }
    const array = await ReviewImage.findAll();
    //console.log("LENGTH",length.length)
    if(array.length >10){
        res.status(403);
        return res.json({
            "message": "Maximum number of images for this resource was reached",
            "statusCode": 403
          })
    }
        const newImage = await ReviewImage.create({
            url,reviewId:review.id
        })
    res.status(200);
    return res.json({id: newImage.id, url: newImage.url,})
})


module.exports = router