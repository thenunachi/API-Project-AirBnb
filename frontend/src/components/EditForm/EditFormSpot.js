import { useEffect,useState } from "react";
import { useDispatch,useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { updateSpot } from '../../store/SpotsReducer'
import './EditForm.css'

// const EditSpotForm =({hideForm}) =>{
  const EditSpotForm =() =>{
  // console.log(spot,"EDITFORMPAGE SPOT")
const dispatch = useDispatch();
console.log("**************************************BEFORE***************************")
let{spotId} = useParams()
console.log("SPOTID",spotId) //18
console.log("**************************************AFTER***************************")
// spotId = parseInt(spotId)

 let spot = useSelector(state=>state.spot[spotId]);
//  console.log("STATE",state)
//  console.log(spot,"SpotsDETAILS")
// const mySpots = Object.values(spot).find(spot=>spot.id === spotId)

const [address,setAddress] = useState(spot.address);
const [city,setCity] = useState(spot.city);
const [state,setState] = useState(spot.state);
const [country,setCountry] = useState(spot.country);
const [lat,setLat] = useState(spot.lat);
const [lng,setLng] = useState(spot.lng);
const [name,setName] = useState(spot.name);
const [description,setDescription] = useState(spot.description);
const [price,setPrice] = useState(spot.price);

const updateAddress =(e)=>setAddress(e.target.value);
const updateCity =(e)=>setCity(e.target.value);
const updateState =(e)=>setState(e.target.value);
const updateCountry =(e)=>setCountry(e.target.value);
const updateLat =(e)=>setLat(e.target.value);
const updateLng =(e)=>setLng(e.target.value);
const updateName =(e)=>setName(e.target.value);
const updateDescription =(e)=>setDescription(e.target.value);
const updatePrice =(e)=>setPrice(e.target.value);
// console.log("SPOTS IN EDIT FORM ",spots)

const handleSubmit = async(e)=>{
    e.preventDefault();
    const payload ={
        id:spotId, address,city,state,country,lat,lng,name,description,price //spreading already created spot
    };
console.log(payload.id,"PAYLOAD")
    let updatedSpot = await dispatch(updateSpot(payload));
    if(updatedSpot){
        // hideForm();
    };
}

const handleCancelClick = (e) => {
    e.preventDefault();
    // hideForm();
  };

return(
<section className="edit-form">
<form className="update-spot-form" onSubmit={handleSubmit}>
{/* <label className="label" for="html" onClick={showLabel}>HTML</label> */}
<input 

type="text"
placeholder="Address"

value={address}
onChange={updateAddress}
/>
<input 
type="text"
placeholder="City"

value={city}
onChange={updateCity}
/>
<input 
type="text"
placeholder="State"

value={state}
onChange={updateState}
/>
<input 
type="text"
placeholder="Country"

value={country}
onChange={updateCountry}
/>
<input 
type="number"
placeholder="Lat"

value={lat}
onChange={updateLat}
/>
<input 
type="number"
placeholder="Lng"

value={lng}
onChange={updateLng}
/>
<input 
type="text"
placeholder="Name"

value={name}
onChange={updateName}
/>

<input 
type="text"
placeholder="Description"

value={description}
onChange={updateDescription}
/>

<input 
type="number"
placeholder="Price"

value={price}
onChange={updatePrice}
/>

<button className="UpdateSpot" type="submit">Update Spot</button>
     <button className="CancelEdit" type="button" onClick={handleCancelClick}>Cancel</button>

</form>

    </section>
  )

}
export default EditSpotForm;