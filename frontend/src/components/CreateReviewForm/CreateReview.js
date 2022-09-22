import { useEffect,useState } from "react";
import { useHistory } from "react-router-dom";
import { useDispatch,useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { createReviews, deleteReview, getAllReviewsBySpotId } from "../../store/ReviewsReducer";
export const ReviewForm = ()=>{
    const dispatch = useDispatch();
    const history = useHistory();

    let allspots = useSelector(state=>Object.values(state.spot))//array of spots
    let {spotId} = useParams();

   const spot = allspots.find(spot=>spot.id === +spotId)
console.log("SPOT FROM CREATE REVIEW",spot)
   //const [comments,setComments] = useState("");
   const [review,setReview] = useState("");
   const [stars,setStars] = useState(0);
   const updateReviews = (e)=>setReview(e.target.value);
   const updateStars = (e)=>setStars(e.target.value);
   useEffect(() => {
    dispatch((getAllReviewsBySpotId(spot.id)));
    //dispatch((createReviews(spot.id)))
  }, [dispatch]);

  const handleSubmit = async (e)=>{
    e.preventDefault();
    const payload = {
      review,stars
    };
  
     let createdReview = await dispatch(createReviews(spot.id,payload));

     

    }
    const handleCancelClick = (e) => {
      e.preventDefault();
      
    };
    if (!spot) {
      return null;
    }
    return (
<form className="create-review-text" onSubmit = {handleSubmit}>
<input 
type="text"
placeholder="Write a review"
required
value={review}
onChange={updateReviews}
/>
<input 
type="number"
placeholder="rating"
min="0"
max="5"
value={stars}
onChange={updateStars}
/>
<button type="submit">Submit review</button>
 <button type="button" onClick={handleCancelClick}>Cancel</button>
 
        </form>
    )
}