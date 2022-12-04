import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import {updateBookingThunk} from '../../store/bookingReducer'


const EditBookingForm =({closeForm,booking})=>{
    console.log(booking,'e props')
const dispatch = useDispatch()
// const bookingOfUser = useSelector(state=>Object.values(state.bookingState))
// console.log(bookingOfUser,"bookingOfUser")
// new Date((new Date("2022-11-26T08:00:00.000Z")).toDateString('mm/dd/yyyy'))
// const [sdate, setSDate] = useState(booking.startDate);
const [sdate, setSDate] = useState(new Date(booking.startDate).getUTCMonth()+"/"+new Date(booking.startDate).getUTCDate()+"/"+new Date(booking.startDate).getUTCFullYear());
console.log(new Date(sdate).getUTCDate(),"date")
console.log(new Date(sdate).getUTCMonth(),"month")
console.log(new Date(sdate).getUTCFullYear(),"year")
console.log(new Date(sdate).getUTCMonth()+"/"+new Date(sdate).getUTCDate()+"/"+new Date(sdate).getUTCFullYear())
console.log(new Date(booking.startDate).getUTCMonth()+"/"+new Date(booking.startDate).getUTCDate()+"/"+new Date(booking.startDate).getUTCFullYear(),"useing props.booking")
const[edate,setEDate] = useState(new Date(booking.endDate).getUTCMonth()+"/"+new Date(booking.endDate).getUTCDate()+"/"+new Date(booking.endDate).getUTCFullYear());

useEffect(()=>{

})

const bookingConfirmed = async (e) => {
    e.preventDefault();
    const payload = { startDate: sdate, endDate: edate }
    console.log(payload, "payload of booking")
    let bookSpot = dispatch(updateBookingThunk( payload))
    console.log(bookSpot, "Bookspot")
//    history.push('/booking')
  }
  return(
<div>
<button onClick={closeForm}><i class="fa-solid fa-xmark"></i></button>
start:<input type="date" id="start" name="trip-start" 
value={sdate}
min={new Date()}
onChange={(e)=>setSDate(e.target.value)} />
end:<input type="date" id="start" name="trip-start" 
value={edate}
onChange={(e)=>setEDate(e.target.value)} />
<button onClick={bookingConfirmed}>Reserve</button>
</div>
    
  )
}

export default EditBookingForm;