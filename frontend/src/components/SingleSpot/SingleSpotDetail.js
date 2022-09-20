import { useParams } from "react-router-dom";
import './SingleSpotDetail.css';


export const SingleSpotDetail =({spotArray}) =>{
    const {spotId} = useParams();
    const singleSpot = spotArray.find(spot=>spot.id === spotId);
    return(
        <div className="singleSpot">
            <h1>{SingleSpotDetail.title}</h1>
 <img
        src={SingleSpotDetail.imageUrl}
        alt={SingleSpotDetail.title}
      />
      <p>
        {SingleSpotDetail.body}
      </p>
        </div>
    )
}