import { csrfFetch } from './csrf';


export const  GET_ALL_BOOKINGS = 'booking/GET_ALL_BOOKINGS';
export const GET_ALL_USER_BOOKING = 'booking/GET_ALL_USER_BOOKING'
export const CREATE_A_BOOKING = 'booking/CREATE_A_BOOKING';
export const UPDATE_BOOKING = 'booking/UPDATE_BOOKING';
export const DELETE = 'booking/DELETE';

const allBookings =(bookings)=>({
    type:GET_ALL_BOOKINGS,
    bookings
});

const userBooking = (payload)=>({
    type:GET_ALL_USER_BOOKING,
    payload
})
const newBooking = (booking)=>({
    type: CREATE_A_BOOKING,
    booking
})

const editBooking = (booking)=>({
    type:UPDATE_BOOKING,
    booking
})

const removeBooking = (id)=>({
    type: DELETE,
    id
})

export const getAllBookingsThunk = (spotId)=> async (dispatch)=>{
    const response = await csrfFetch(`/api/spots/${spotId}/bookings`);
    if(response.ok){
        const bookingList = await response.json();
        dispatch(allBookings(bookingList))
    }
    return response;
}
export const bookingOfUserThunk = ()=>async dispatch=>{
    const response = await csrfFetch(`/api/bookings/current`)
    if(response.ok){
        const data = await response.json();
        dispatch(userBooking(data))
    }
}
export const createBookingThunk = (spotId,data)=> async (dispatch)=>{
    const response = await csrfFetch(`/api/spots/${spotId}/bookings`,{
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
    if (response.ok){
        const newlyCreated = await response.json()
        dispatch(newBooking(newlyCreated));
        return newlyCreated
    }
}
export const updateBookingThunk = (payload)=>async dispatch =>{
    console.log(payload,"payload of booking put")
    const response = await csrfFetch(`/api/bookings/${payload.id}`,{
        method : 'PUT',
        headers :{
            'Content-Type': 'application/json'
        },
        body:JSON.stringify(payload)
    })
    if(response.ok){
        let editedbooking = await response.json();
        dispatch(editBooking(editedbooking));
        return editedbooking
    }
}

export const deleteBookingThunk = (id)=> async dispatch =>{
    const response = await csrfFetch(`/api/bookings/${id}`,{
        method: 'DELETE'
    })
    if (response.ok){
        dispatch(removeBooking(id))
    }
}


const initialState ={};
const bookingReducer = (state = initialState,action)=>{
    let newState={};
    switch (action.type){
        case GET_ALL_BOOKINGS:
            console.log(action.bookings,"to see what is inside the booking")
            action.bookings.Bookings.forEach((b)=>{
               // console.log(b,idx,"b","idx")
                newState[b.id] = b;
                console.log(newState,"newState")
            })
            return {...newState};
        case GET_ALL_USER_BOOKING:
            console.log(action.payload,"see what is inside payload")
           action.payload.Bookings.forEach(e=>{
            console.log(e,"e")
            newState[e.id]= e
           
           })
           
        //   newState[action.payload.id] = action.payload
        // newState(...action.payload)
            console.log(newState,"newState")
           
            return newState;
        case CREATE_A_BOOKING:
            if(!state[action.booking.id]){
                const newArr={
                    ...state,
                    [action.booking.id] : action.booking
                }
                return newArr;
            }
            return{
                ...state,
                [action.booking.id]:{
                    ...state[action.booking.id],
                    ...action.booking
                }
            }
        case UPDATE_BOOKING:
            if(!state[action.booking.id]){
                const newArr={
                    ...state,
                    [action.booking.id] : action.booking
                }
                return newArr;
            }
            return{
                ...state,
                [action.booking.id]:{
                    ...state[action.booking.id],
                    ...action.booking
                }
            };
        case DELETE:
                const newArray = {...state};
                delete newArray[action.id]
                return newArray
        default:
            return state;
    }
}




export default bookingReducer
