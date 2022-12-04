
import { useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useEffect,useState } from "react";

import { getAllBookingsThunk, bookingOfUserThunk,deleteBookingThunk, GET_ALL_USER_BOOKING } from "../../store/bookingReducer";
import { getAllSpots } from "../../store/SpotsReducer";
import './booking.css'
import EditBookingModal from '../Booking/editbookingmodal'


export const BookingPage = () => {
    const history = useHistory();
    const dispatch = useDispatch();
const [show,setShow] = useState(false);

    let user = useSelector(state => (state.session.user));
    let bookingList = useSelector(state => Object.values(state.bookingState))
    let allSpots = useSelector(state => Object.values(state.spot))
    console.log(bookingList, "bookingList arr")
    console.log(user, "user in booking page")
    useEffect(() => {
        dispatch(bookingOfUserThunk())
        //   dispatch(getAllSpots())
    },dispatch);

    return (
        <div>
            {/* {
                bookingList.map((booking) => {
                    // console.log(e,"inside bookingList")
                    // console.log(e.Spot.address,"spot address")
                    // console.log(e.endDate - e.startDate,"time")
                    return (
                        <div>
                        <div className="details-booking"> 
                            {/* {e.endDate.getTime() - e.startDate.getTime()} in {e.Spot.state} */}
                             {/* {booking.startDate} to {booking.endDate} at   {booking.Spot.address},{booking.Spot.city},{booking.Spot.state}
                        </div>
                        <div>
                        <button onClick={async(element)=>{
                         element.preventDefault();
                         await dispatch(deleteBookingThunk(booking.id))
                            await dispatch(bookingOfUserThunk())
                        }}>Delete Booking</button>
                        <span className="color"><EditBookingModal booking={booking}/></span>
                        </div>
                        
                        </div>
                    ) */}

                {/* })
                
            } */} 
            <div className="color">
                <button onClick={()=>{
                    // futureBooking(booking.startDate,new Date(),deleteBookingThunk,bookingOfUserThunk,bookingList,dispatch)
                    

let dateObj = new Date();
let month = dateObj.getUTCMonth() + 1; //months from 1-12
let day = dateObj.getUTCDate();
let year = dateObj.getUTCFullYear();

let newdate = year + "-" + month + "-" + day;
                    bookingList.map((booking) => {
                        // console.log(e,"inside bookingList")
                        // console.log(e.Spot.address,"spot address")
                        // console.log(e.endDate - e.startDate,"time")
                        console.log("Inside upcoming funct")
                        console.log(booking,"test value coming under booking")
                        console.log(booking.startDate.split('T')[0],"startdate")
                        console.log(newdate,"check date")
                        console.log(booking.startDate.split('T')[0] >= newdate)

                         return (
                            booking.startDate.split('T')[0] >= newdate &&  
                            <div>
                            <div className="color"> 
                                {/* {e.endDate.getTime() - e.startDate.getTime()} in {e.Spot.state} */}
                                setShow(true) && {booking.startDate} to {booking.endDate} at   {booking.Spot.address},{booking.Spot.city},{booking.Spot.state}
                            </div>
                            <div>
                            <button onClick={async(element)=>{
                             element.preventDefault();
                             await dispatch(deleteBookingThunk(booking.id))
                                await dispatch(bookingOfUserThunk())
                            }}>Delete Booking</button>
                            <span className="color"><EditBookingModal booking={booking}/>
                            </span>
                            </div>
                            
                            </div>
                         )
    
                    })
                }}>Upcoming reservation</button> 
                <button onClick={()=>{
                    let dateObj = new Date();
                    let month = dateObj.getUTCMonth() + 1; //months from 1-12
                    let day = dateObj.getUTCDate();
                    let year = dateObj.getUTCFullYear();
                    
                    let newdate = year + "-" + month + "-" + day;
                                        bookingList.map((booking) => {
                                            // console.log(e,"inside bookingList")
                                            // console.log(e.Spot.address,"spot address")
                                            // console.log(e.endDate - e.startDate,"time")
                                            console.log("Inside upcoming funct")
                                            console.log(booking,"test value coming under booking")
                                            console.log(booking.startDate.split('T')[0],"startdate")
                                            console.log(newdate,"check date")
                                            console.log(booking.startDate.split('T')[0] >= newdate)
                    
                                             return (
                                                booking.startDate.split('T')[0] < newdate &&  
                                                <div>
                                                <div className="color"> 
                                                    {/* {e.endDate.getTime() - e.startDate.getTime()} in {e.Spot.state} */}
                                                    setShow(true) && {booking.startDate} to {booking.endDate} at   {booking.Spot.address},{booking.Spot.city},{booking.Spot.state}
                                                </div>
                                                <div>
                                                {/* <button onClick={async(element)=>{
                                                 element.preventDefault();
                                                 await dispatch(deleteBookingThunk(booking.id))
                                                    await dispatch(bookingOfUserThunk())
                                                }}>Delete Booking</button> */}
                                                {/* <span className="color"><EditBookingModal booking={booking}/></span> */}
                                                </div>
                                                
                                                </div>
                                             )
                        
                                        })
                }}>Past Booking</button>
            </div>

        </div>
    )
}

   