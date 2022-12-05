import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import {updateBookingThunk} from '../../store/bookingReducer'
import './editbooking.css'

const EditBookingForm =({closeForm,booking})=>{
    console.log(booking,'e props')
  
const dispatch = useDispatch()
// const bookingOfUser = useSelector(state=>Object.values(state.bookingState))
// console.log(bookingOfUser,"bookingOfUser")
// new Date((new Date("2022-11-26T08:00:00.000Z")).toDateString('mm/dd/yyyy'))
// const [sdate, setSDate] = useState(booking.startDate);
console.log(new Date(booking.startDate.split('T')[0]))
console.log(new Date(booking.startDate).getUTCMonth()+1,"find out start date")
console.log(new Date(booking.startDate).getUTCDate(),"find out year date")
console.log(new Date(booking.startDate).getUTCFullYear(),"find out year date")
const [sdate, setSDate] = useState(new Date(booking.startDate).toISOString().split("T")[0]);
console.log(sdate,"sdate")
const[edate,setEDate] = useState(new Date(booking.endDate).toISOString().split("T")[0]);
console.log(edate,"edate")
console.log(booking.endDate,"booking enddate")
useEffect(()=>{

})

const bookingConfirmed = async (e) => {
    e.preventDefault();
    const payload = { id:booking.id,startDate: sdate, endDate: edate }
    console.log(payload, "payload of booking")
    let bookSpot = dispatch(updateBookingThunk( payload))
    console.log(bookSpot, "Bookspot")
//    history.push('/booking')
  }
  return(
<div>
<button onClick={closeForm}><i class="fa-solid fa-xmark"></i></button>
<div className="dates-picked">
<span className="start">CHECK-IN:{"                        "} </span>


<input type="date" id="start" name="trip-start" 
value={sdate}
// min={new Date()}
onChange={(e)=>setSDate(e.target.value)} />
</div>
<div className="dates-picked">
<span className="start">CHECK-OUT: </span>
<input type="date"  name="trip-start" 
value={edate}
onChange={(e)=>setEDate(e.target.value)} />
</div>
<button className="edit" onClick={bookingConfirmed}>Reserve</button>
</div>
    
  )
}

export default EditBookingForm;