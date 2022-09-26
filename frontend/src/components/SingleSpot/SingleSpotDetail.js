import { NavLink, useParams } from "react-router-dom";
import './SingleSpotDetail.css';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { getAllSpots, deleteSpot, getOneSpot } from "../../store/SpotsReducer";
import { createReviews, deleteReview, getAllReviewsBySpotId } from "../../store/ReviewsReducer";
import EditFormModal from '../EditForm';
import ReviewFormModal from "../CreateReviewForm";
import { useHistory } from "react-router-dom";
export const SingleSpotDetail = () => {
  const history = useHistory();

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
 

  useEffect(() => {
    dispatch((getAllSpots()))
    dispatch((getAllReviewsBySpotId(spotId)));
    //dispatch((createReviews(spot.id)))
  }, dispatch);

  console.log(getAllReviewsBySpotId(), "GET ALL REVIEWS BY SPOT ID")

  return (
    <div className="singleSpot">
      { spot && 
      <div> 
      <div className="NameSpot">{spot.name}</div>
      <div className="SpotDetails"><i class="fa-solid fa-star"></i> {spot.avgRating}  {spot.numReviews}        {spot.address}  {spot.city}  {spot.country}</div>
      <img className="previewImage" src={spot.previewImage} />
      <div className="rooms">6 guests 2 bedrooms 2 beds 1 bath</div>
     
      <form className="price" >
        <div>${spot.price} night </div>
        <div><i class="fa-solid fa-star"></i>{spot.avgRating} {spot.numReviews}</div>
       
      </form>
      <div className="AirCover">
        <div className="title">
        <span id="t-color">t</span>
        <span id="cover-color">Cover</span>
          </div>
        <p className="cover">Every booking includes free protection from Host cancellations, listing inaccuracies, and other issues like trouble checking in.</p>
        
        <div className="description">{spot.description}</div>
        <div className="second-form"><i class="fa-solid fa-star"></i>{spot.avgRating} {spot.numReviews}Reviews</div>
        <div className="review-details">{
          
          allReviews.map((e) => {
            return (
              
              <div id="reviewList">
               
              {e.review}
               {isUserOwner(spot, user) &&<button onClick={ async(e) => {
               
                e.preventDefault()
                 await dispatch(deleteReview(review.id))
               await dispatch(getAllReviewsBySpotId(spotId))
               return history.push(`/spots/${spot.id}`)
              }}>
          Delete Review

        </button>}
              </div>

            )

          })
        }


        </div>

      </div>
      {/* <div>{spot.Owner}</div> */}

      { isUserOwner(spot, user) &&
            <div id="combine-button">

        <button className="Edit-button">
          <EditFormModal />
          
        </button>
        <button className="Delete-button" onClick={() =>{ dispatch(deleteSpot(spot.id))
        history.push('/')
        } 
       }>
          Delete Spot
        </button>
        
        </div>
        }
         {/* <button onClick = {()=>dispatch(createReviews(spot.id))}>Create Review</button> */}
         { !isUserOwner(spot, user) &&
        <button className="Review-button"><ReviewFormModal /></button>}
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

const isUserOwner = (spot, user) => spot && user && spot.ownerId === user.id;
