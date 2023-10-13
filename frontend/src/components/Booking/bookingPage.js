
import { useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";

import { getAllBookingsThunk, bookingOfUserThunk, deleteBookingThunk } from "../../store/bookingReducer";
import { getAllSpots } from "../../store/SpotsReducer";
import './booking.css'
import EditBookingModal from '../Booking/editbookingmodal'
import moment from 'moment';

export const BookingPage = () => {
  const dispatch = useDispatch();
  const [showPast, setShowPast] = useState(false);

  let user = useSelector(state => (state.session.user));
  let bookingList = useSelector(state => Object.values(state.bookingState))
  // console.log(bookingList, "bookingList arr")
  // console.log(user, "user in booking page")
  useEffect(() => {
    dispatch(bookingOfUserThunk())
  }, [user]);

  return (
    <div className="main">
      <div className="buttons">
        <button className="upcoming" onClick={() => { setShowPast(false) }
        }>Upcoming reservations</button>
        <button className="upcoming" onClick={() => { setShowPast(true) }}>Past Bookings</button>
      </div>
      <span>   {!showPast && futureBooking(bookingList, dispatch)}</span>
      <span>     {showPast && pastBooking(bookingList, dispatch)}</span>
    </div>
  )
}

const futureBooking = (bookingList, dispatch) => {

  let dateObj = new Date();
  let month = dateObj.getUTCMonth() + 1; //months from 1-12
  let day = dateObj.getUTCDate();
  let year = dateObj.getUTCFullYear();

  let newdate = year + "-" + month + "-" + day;
  return bookingList.map((booking) => {

    // console.log("Inside upcoming funct")
    // console.log(booking, "test value coming under booking")
    // console.log(new Date(booking.startDate), "startdate")
    // console.log(newdate, "check date")
    // console.log(booking.startDate.split('T')[0] >= newdate)
    // console.log(new Date(booking.endDate).getUTCDate() - new Date(booking.startDate).getUTCDate(), "find the date")
    // console.log(new Date(booking.endDate.getUTCDate()) - new Date(booking.startDate.getUTCDate()) ,"number of days")
    return (

      booking.startDate.split('T')[0] >= newdate &&
      <div>
        {

          (
            <div className="perbooking">
              <div className="color">
                <div className="detailsOfbookings">
                  {moment(booking.endDate).diff(moment(booking.startDate), 'days')} nights in {booking.Spot.state} at price ${Math.ceil(booking.Spot.price * (moment(booking.endDate).diff(moment(booking.startDate), 'days')) + 80 + 10)}
                </div>
                <div>
                  {booking.startDate.split('T')[0]} to {booking.endDate.split('T')[0]} at   {booking.Spot.address},{booking.Spot.city},{booking.Spot.state}
                </div>

              </div>
              <div>
                <button className="deletebooking" onClick={async (element) => {
                  element.preventDefault();
                  await dispatch(deleteBookingThunk(booking.id))
                  await dispatch(bookingOfUserThunk())
                }}>Delete Booking</button>
                <span className="color"><EditBookingModal booking={booking} />
                </span>
              </div>
            </div>
          )}
      </div>

    )

  })
}

const pastBooking = (bookingList, dispatch) => {

  let dateObj = new Date();
  let month = dateObj.getUTCMonth() + 1; //months from 1-12
  let day = dateObj.getUTCDate();
  let year = dateObj.getUTCFullYear();

  let newdate = year + "-" + month + "-" + day;
  return bookingList.map((booking) => {

    // console.log("Inside upcoming funct")
    // console.log(booking, "test value coming under booking")
    // console.log(booking.startDate.split('T')[0], "startdate")
    // console.log(newdate, "check date")
    // console.log(booking.startDate.split('T')[0] >= newdate)

    return (

      booking.startDate.split('T')[0] < newdate &&
      <div className="previousbookings">
        {

          (
            <div>
              <div className="color">
                <div className="detailsOfbookings">
                  {moment(booking.endDate).diff(moment(booking.startDate), 'days')} nights in {booking.Spot.state} at price ${Math.ceil(booking.Spot.price * (moment(booking.endDate).diff(moment(booking.startDate), 'days')) + 80 + 10)}
                </div>
                <div>
                  {booking.startDate.split('T')[0]} to {booking.endDate.split('T')[0]} at   {booking.Spot.address},{booking.Spot.city},{booking.Spot.state}
                </div>
              </div>

            </div>
          )}
      </div>

    )

  })
}