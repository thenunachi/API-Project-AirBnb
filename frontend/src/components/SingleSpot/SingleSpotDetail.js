import { NavLink, useParams } from "react-router-dom";
import './SingleSpotDetail.css';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import {  getAllSpots,deleteSpot,getOneSpot } from "../../store/SpotsReducer";
import { createReviews,deleteReview,getAllReviewsBySpotId } from "../../store/ReviewsReducer";
import EditFormModal from '../EditForm';
export const SingleSpotDetail =() =>{
 
  let allspots = useSelector(state=>Object.values(state.spot))//array of spots
    let {spotId} = useParams();

   const spot = allspots.find(spot=>spot.id === +spotId)
   console.log(spot,"SPOT FROM SINGLESPOT DETAILS")
    const dispatch = useDispatch();
   // const singleSpot = spotArray.find(spot=>spot.id === spotId);
    //useEffect
    const [comments,setComments] = useState("");
    const [reviews,setReviews] = useState("");
    const [stars,setStars] = useState(0);
    const updateComments = (e)=>setComments(e.target.value);
useEffect(() => {
  dispatch((getAllReviewsBySpotId(spot.id)));
  //dispatch((createReviews(spot.id)))
}, [dispatch]);
// let details = await dispatch(getOneSpot(spotId));
// if(details){
//   history.push(`/spots/${details.id}`)
// }
const handleSubmit = async (e)=>{
  e.preventDefault();
  const payload = {
    reviews,stars
  };

   let createdReview = await dispatch(createReviews(spot.id,payload));
  // // if(createdReview){

  // // }
  
}
const handleCancelClick = (e) => {
  e.preventDefault();
  
};
if (!spot) {
  return null;
}
    return(
        <div className="singleSpot">
            {/* <h1>{singleSpot.title}</h1> */}
 {/* <img
        src={singleSpot.imageUrl}
        alt={singleSpot.title}
      /> */}
     
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
      <div className="previewImage"><img src={spot.previewImage}/></div>
      <div>{spot.Owner}</div>

      <div>
        <button>
          <EditFormModal/>
         Edit Spot
        </button>
        <button onClick={()=>dispatch(deleteSpot(spot.id))}>
          Delete Spot
        </button>
       
      
        <form className="create-review-text" onSubmit = {handleSubmit}>
<input 
type="text"
placeholder="Write a review"
required
value={comments}
onChange={updateComments}
/>
<button type="submit">Submit review</button>
 <button type="button" onClick={handleCancelClick}>Cancel</button>
 
        </form>
        <button onClick={()=>dispatch(deleteReview(spot.id))}>
          Delete Review
        </button>
        {/* <button onClick = {()=>dispatch(createReviews(spot.id))}>Create Review</button> */}
      </div>
        </div>
    )
}