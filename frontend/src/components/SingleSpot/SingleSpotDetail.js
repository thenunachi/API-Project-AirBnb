import { NavLink, useParams } from "react-router-dom";
import './SingleSpotDetail.css';
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
export const SingleSpotDetail = () => {
  const history = useHistory();


  const [showCal, setShowCal] = useState(false)
  const [date, setDate] = useState(new Date()) //created a state to store a date and passed the current date as its initial value using JavaScript’s Date object.
  // const [edate,setEdate] = useState(new Date())
  console.log(date.length)
  console.log(date, "date")
  console.log(Math.ceil((new Date(date[1]) - new Date(date[0])) / (1000 * 60 * 60 * 24)), "subtraction")
  console.log(moment(date[1]).diff(moment(date[0]), 'days'), "moment js dates")


  let allspots = useSelector(state => Object.values(state.spot))//array of spots

  let { spotId } = useParams();

  let allReviews = useSelector(state => Object.values(state.review));

  // console.log("ALL REVIEWS", allReviews)
  let user = useSelector(state => (state.session.user))

  // console.log("USER DETAILS", user)
  // const review = allReviews.find(review => review.spotId === +spotId)
  const spot = allspots.find(spot => spot.id === +spotId)
  // console.log(review, "REVIEW FORMAT")//obj
  // console.log(spot, "SPOT FROM SINGLESPOT DETAILS")
  const dispatch = useDispatch();


  useEffect(() => {
    dispatch((getAllSpots()))
    dispatch((getAllReviewsBySpotId(spotId)));
    dispatch((getAllBookingsThunk(spotId)))
    //dispatch((createReviews(spot.id)))
  }, dispatch);

  console.log(getAllReviewsBySpotId(), "GET ALL REVIEWS BY SPOT ID")

  const bookingConfirmed = async (e) => {
    const payload = { startDate: date[0], endDate: date[1] }
    console.log(spot.price * (moment(date[1]).diff(moment(date[0]), 'days'))+80+10)
    console.log(date[0].toLocaleDateString(), "tolocalstring")
    console.log(payload, "payload of booking")
    let bookSpot = dispatch(createBookingThunk(spotId, payload))
    console.log(bookSpot, "Bookspot")
    history.push('/booking')
  }
  // const bookingConfirmed = async (e) => {
  //   const payload = { startDate: date[0], endDate: edate[0] }
  //   console.log(payload, "payload of booking")
  //   let bookSpot = dispatch(createBookingThunk(spotId, payload))
  //   console.log(bookSpot, "Bookspot")
  // }

  return (
    <div className="singleSpot">
      {spot &&
        <div>

          <div className="NameSpot">{spot.name}</div>
          <div className="SpotDetails"><i class="fa-solid fa-star"></i> {spot.avgRating}  {spot.numReviews}        {spot.address}  {spot.city}  {spot.country}</div>
          <img className="previewImage" src={spot.previewImage} />
          <div className="rooms">6 guests 2 bedrooms 2 beds 1 bath</div>

          <div className="leftpart">
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

                      {e.review} {'     '}
                      {isUserReviewCreator(e, user) && <button className="delete-review"
                        onClick={async (event) => {

                          event.preventDefault()
                          await dispatch(deleteReview(e.id))
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

            {isUserOwner(spot, user) &&
              <div id="combine-button">

                {/* <button className="Edit-button"> */}
                <EditFormModal />

                {/* </button> */}
                <button className="Delete-button" onClick={() => {
                  dispatch(deleteSpot(spot.id))
                  history.push('/')
                }
                }>
                  Delete Spot
                </button>

              </div>
            }
            {/* <button onClick = {()=>dispatch(createReviews(spot.id))}>Create Review</button> */}
            {user && !isUserOwner(spot, user) && <ReviewFormModal />}
          </div>
          <div className="rightpart">
            <form className="price" >
              <span className="pricePerNight">${spot.price} night </span>
              <span className="star"><i class="fa-solid fa-star"></i>{spot.avgRating} {spot.numReviews}</span>
              {/* <div>

start:<input type="date" id="start" name="trip-start" 
value={date}
min={new Date()}
onChange={(e)=>setDate(e.target.value)} />
end:<input type="date" id="start" name="trip-start" 
value={edate}
onChange={(e)=>setEdate(e.target.value)} />
<button onClick={bookingConfirmed}>Reserve</button>
</div> */}
              <div className="calendar">
                <div className="dates" onClick={() => { setShowCal(true) }} >
                  <span >CHECK-IN :
                  </span>
                  <span> CHECKOUT:

                  </span>
                </div>
                {
                  showCal && < Calendar onChange={setDate}
                    value={date}
                    selectRange={true}
                    // maxDate={new Date()} // will not allow date later than today
                    minDate={new Date()} // will not allow date before 1st July 2015
                  />
                }

                {/*  created a state named date and passed it as a value to the Calendar component. Another prop, onChange, is passed to Calendar, which sets the date state to the value clicked by the user. */}
                {date.length > 0 && (
                  <p className='text-center'>
                    <span className='bold'>CHECK-IN :</span>{' '}
                    {date[0].toDateString()}
                    {/* checkin = date[0] */}
                    &nbsp;|&nbsp;
                    <span className='bold'>CHECKOUT:</span> {date[1].toDateString()}
                    {/* checkout = date[1] */}
                  </p>
                )}
                {/* The toDateString() method returns the date portion of a Date object interpreted in the local timezone in English. expected output: Wed Jul 28 1993 */}

                <button className="reserve" onClick={bookingConfirmed}
                // 
                >Reserve</button>
                <div className="charged">You won't be charged yet</div>
                {showCal && date.length > 0 && <div>
                  <div className="cost">
                    <span className="pricepernight"> ${spot.price} x {moment(date[1]).diff(moment(date[0]), 'days')}
                    </span>
                    <span>  ${spot.price * (moment(date[1]).diff(moment(date[0]), 'days'))}


                    </span>
                  </div>
                  <div className="charge"> Cleaning fee
                    <span className="cleaning"> $80</span>
                  </div>
                  <div className="charge">Service fee
                    <span className="service">$10</span>
                  </div>
                  <div className="total">Total to be charged : 
                    <span className="subtotal">${spot.price * (moment(date[1]).diff(moment(date[0]), 'days'))+80+10}</span>
                  </div>
                </div>
                }
              </div>



            </form>
          </div>
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
const isUserReviewCreator = (review, user) => user && user.id === review.userId;

