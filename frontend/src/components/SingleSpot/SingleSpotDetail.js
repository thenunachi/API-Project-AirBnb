import { NavLink, useParams } from "react-router-dom";
import './SingleSpotDetail.css';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { getAllSpots, deleteSpot, getOneSpot } from "../../store/SpotsReducer";
import { createReviews, deleteReview, getAllReviewsBySpotId } from "../../store/ReviewsReducer";
import EditFormModal from '../EditForm';
import ReviewFormModal from "../CreateReviewForm";
export const SingleSpotDetail = () => {

  let allspots = useSelector(state => Object.values(state.spot))//array of spots
  let { spotId } = useParams();
 let allReviews = useSelector(state=> Object.values(state.review));
 console.log("ALL REVIEWS",allReviews)
 
 const review = allReviews.find(review =>review.spotId === +spotId)
  const spot = allspots.find(spot => spot.id === +spotId)
  console.log(review,"REVIEW FORMAT")//obj
  // console.log(spot, "SPOT FROM SINGLESPOT DETAILS")
  const dispatch = useDispatch();
  // const singleSpot = spotArray.find(spot=>spot.id === spotId);
  //useEffect

  useEffect(() => {
    dispatch((getAllReviewsBySpotId(spot.id)));
    //dispatch((createReviews(spot.id)))
  }, [dispatch]);

console.log(getAllReviewsBySpotId(),"GET ALL REVIEWS BY SPOT ID")


return (
  <div className="singleSpot">
  
 
    <div>{spot.address}</div>
    <div>{spot.city}</div>
    <div>{spot.state}</div>
    <div>{spot.country}</div>
    <div>{spot.lat}</div>
    <div>{spot.lng}</div>
    <div>{spot.name}</div>
    <div>{spot.description}</div>
    <div>{spot.price}</div>

    <div>{spot.numReviews}</div>
    <div className="previewImage"><img src={spot.previewImage} /></div>
    <div>{spot.Owner}</div>
<div className="review-details">{
  allReviews.map((e)=>{
return(
  <div>Review:{e.review}</div>
  
)

  })
}


</div>
    <div>
      <button>
        <EditFormModal />
        Edit Spot
      </button>
      <button onClick={() => dispatch(deleteSpot(spot.id))}>
        Delete Spot
      </button>



      <button onClick={() => dispatch(deleteReview(review.id))}>
        Delete Review
      </button>
      <button><ReviewFormModal /></button>
      {/* <button onClick = {()=>dispatch(createReviews(spot.id))}>Create Review</button> */}
    </div>
  </div>
)
}