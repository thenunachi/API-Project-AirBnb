import { useParams } from "react-router-dom";
import './SingleSpotDetail.css';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import {  getAllSpots } from "../../store/SpotsReducer";

export const SingleSpotDetail =() =>{
 
  let allspots = useSelector(state=>Object.values(state.spot))//array of spots
    let {spotId} = useParams();

   const spot = allspots.find(spot=>spot.id === +spotId)
    const dispatch = useDispatch();
   // const singleSpot = spotArray.find(spot=>spot.id === spotId);
    //useEffect
// useEffect(() => {
//   dispatch(getOneSpot(spotId))
// }, [dispatch]);
// let details = await dispatch(getOneSpot(spotId));
// if(details){
//   history.push(`/spots/${details.id}`)
// }
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
      <div>{spot.SpotImages}</div>
      <div>{spot.Owner}</div>
        </div>
    )
}