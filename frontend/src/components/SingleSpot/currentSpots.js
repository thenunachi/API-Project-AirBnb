import { NavLink, useParams } from "react-router-dom";
import './currentspots.css'
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { getAllSpots, deleteSpot, getOneSpot } from "../../store/SpotsReducer";
import { createReviews, deleteReview, getAllReviewsBySpotId } from "../../store/ReviewsReducer";
import EditFormModal from '../EditForm';
import ReviewFormModal from "../CreateReviewForm";
import { useHistory } from "react-router-dom";
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import { createBookingThunk, getAllBookingsThunk } from "../../store/bookingReducer";
import { Redirect } from "react-router-dom";
import Moment from 'react-moment';
import moment from 'moment';

export const CurrentSpots = () => {
    const dispatch = useDispatch();
    const history = useHistory();


    let allspots = useSelector(state => Object.values(state.spot))
    // console.log(allspots, "allSpots")
    let user = useSelector(state => state.session.user)


    useEffect(() => {
        dispatch(getAllSpots())
    }, dispatch)
    return (
        <div>
            <h1>My Spots</h1>
        <div className="topdiv">
            
            {allspots.map((spot) => {
                // console.log(spot.ownerId === user.id, "spot")
                return (

                    spot.ownerId === user.id &&
                    <div>
                        <div>
                            <img className="images" src={spot.previewImage} />
                            <div className="detailsS">
                            <span> {spot.address} </span>
                            <span className="rating-star"><i class="fa-solid fa-star"></i> {spot.avgRating}</span>
                            </div>

                        </div>
                        <span className="editing">
                            {<EditFormModal spot={spot}/>}


                            <button className="Delete-button" onClick={() => {
                                dispatch(deleteSpot(spot.id))
                                // history.push('/')
                            }
                            }>
                                Delete Spot
                            </button>
                        </span>
                    </div>
                )
            })}


</div>
        </div>
    )
}
const isUserOwner = (spot, user) => spot && user && spot.ownerId === user.id;