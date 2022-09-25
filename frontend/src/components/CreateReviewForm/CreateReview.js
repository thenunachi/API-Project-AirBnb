import { useEffect,useState } from "react";
import { useHistory } from "react-router-dom";
import { useDispatch,useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { createReviews, deleteReview, getAllReviewsBySpotId } from "../../store/ReviewsReducer";
import './createReview.css'
export const ReviewForm = ({onCancel})=>{
    const dispatch = useDispatch();
    const history = useHistory();

    let allspots = useSelector(state=>Object.values(state.spot))//array of spots
    let {spotId} = useParams();

   const spot = allspots.find(spot=>spot.id === +spotId)
console.log("SPOT FROM CREATE REVIEW",spot)
   //const [comments,setComments] = useState("");
   const [review,setReview] = useState("");
   const [stars,setStars] = useState(0);
   const [validations,setValidations] = useState([])

   const updateReviews = (e)=>setReview(e.target.value);
   const updateStars = (e)=>setStars(e.target.value);

   useEffect(() => {
    dispatch((getAllReviewsBySpotId(spot.id)));
    //dispatch((createReviews(spot.id)))
  }, [dispatch]);

  useEffect(()=>{
    const errors = [];
    if(!review.length)errors.push("Review text is required");
    if(stars <= 0 )errors.push("Stars must between 1 to 5");
    setValidations(errors)
  },[review, stars]);

  const handleSubmit = async (e)=>{
    e.preventDefault();
    const payload = {
      review,stars
    };
    let createdReview = await dispatch(createReviews(spot.id,payload));
    dispatch((getAllReviewsBySpotId(spot.id)));
    if(createdReview){
      history.push(`/spots/${spot.id}`);
    }
    }
    // const handleCancelClick = (e) => {
    //   e.preventDefault();
      
    // };
    if (!spot) {
      return null;
    }
    return (
<form className="create-review-text" onSubmit = {handleSubmit}>
<ul className="errorsReview">
        {
          validations.map((error,index)=> (
            <li key={index}>{error}</li>
          ))
        }
      </ul>
<input id="reviewInput"
type="text"
placeholder="Write a review"
required
value={review}
onChange={updateReviews}
/>
<input  id="reviewInput"
type="number"
placeholder="rating"
min="0"
max="5"
value={stars}
onChange={updateStars}
/>
<button className="editButton" type="submit">Submit review</button>
 <button className="cancelEdit" type="button" onClick={onCancel}>Cancel</button>
 
        </form>
    )
}