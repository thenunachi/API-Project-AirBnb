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
  let allReviews = useSelector(state => Object.values(state.review));
  console.log("ALL REVIEWS", allReviews)
  let user = useSelector (state=>(state.session.user))
  console.log("USER DETAILS",user)
  const review = allReviews.find(review => review.spotId === +spotId)
  const spot = allspots.find(spot => spot.id === +spotId)
  console.log(review, "REVIEW FORMAT")//obj
  // console.log(spot, "SPOT FROM SINGLESPOT DETAILS")
  const dispatch = useDispatch();
  // const singleSpot = spotArray.find(spot=>spot.id === spotId);
  //useEffect

  useEffect(() => {
    dispatch((getAllSpots()))
    dispatch((getAllReviewsBySpotId(spotId)));
    //dispatch((createReviews(spot.id)))
  }, [dispatch]);

  console.log(getAllReviewsBySpotId(), "GET ALL REVIEWS BY SPOT ID")

  return (
    <div className="singleSpot">
      { spot && 
      <div> 
      <div className="NameSpot">{spot.name}</div>
      <div className="SpotDetails"><i class="fa-solid fa-star"></i> {spot.avgRating}  {spot.numReviews}        {spot.address}  {spot.city}  {spot.country}</div>
      {/* <div >{spot.address}</div>
    <div>{spot.city}</div>
    <div>{spot.state}</div>
    <div>{spot.country}</div> */}
      {/* <div>{spot.lat}</div>
    <div>{spot.lng}</div> */}

      {/* <div>{spot.description}</div> */}
      {/* <div>{spot.price}</div> */}
      {/* <img src={'https://media.istockphoto.com/vectors/five-point-star-vector-icon-isolated-gold-star-rating-flat-symbol-vector-id1295967422?k=20&m=1295967422&s=612x612&w=0&h=6G6WYoO_3MCi6ILsC2GWwTf9hxIDXyWainB21GU0gjw='}/> */}
      {/* <div>{spot.avgRating}{spot.numReviews}</div> */}
      {/* <div></div> */}
      <img className="previewImage" src={spot.previewImage} />
      <div className="rooms">6 guests 2 bedrooms 2 beds 1 bath</div>
     
      <form className="price" >
        <div>${spot.price} night </div>
        <div><i class="fa-solid fa-star"></i>{spot.avgRating} {spot.numReviews}</div>
       
      </form>
      <div className="AirCover">
        <div className="title">tCover</div>
        <p className="cover">Every booking includes free protection from Host cancellations, listing inaccuracies, and other issues like trouble checking in.</p>
        
        <div className="description">{spot.description}</div>
        <div className="second-form"><i class="fa-solid fa-star"></i>{spot.avgRating} {spot.numReviews}Reviews</div>
        <div className="review-details">{
          
          allReviews.map((e) => {
            return (
              
              <div>
               
              {e.review}
               {spot.ownerId === user.id &&<button onClick={() => dispatch(deleteReview(review.id))}>
          Delete Review
        </button>}
              </div>

            )

          })
        }


        </div>

      </div>
      {/* <div>{spot.Owner}</div> */}

      { spot.ownerId === user.id &&
            <div>

        <button className="Edit-button">
          <EditFormModal />
          Edit Spot
        </button>
        <button className="Delete-button" onClick={() => dispatch(deleteSpot(spot.id))}>
          Delete Spot
        </button>
        
        </div>
        }
         {/* <button onClick = {()=>dispatch(createReviews(spot.id))}>Create Review</button> */}
        <button className="Review-button"><ReviewFormModal /></button>
        </div>
        }
        
      <footer>
      <div id="footer">
        <p className="footerSingle">© 2022 Airbnb, Inc.</p>
      </div>
</footer>

    </div>
      
  )
}