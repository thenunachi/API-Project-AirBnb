import { useEffect,useState } from "react";
import { useHistory } from "react-router-dom";
import { useDispatch,useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { createSpot } from "../../store/SpotsReducer";
import './CreateSpotForm.css';
export const CreateSpotForm = ({hideForm}) =>{
    
    const dispatch = useDispatch();
    const history = useHistory();
// let {spotId}= useParams()
//  let allspots = useSelector(state=> Object.values(state.spot));
// // console.log(allspots,"ALLSPOTS FROM CREATEFORMPAGE")
// const spot = allspots.find(spot=>spot.id === +spotId)
// if (!spot) {
//     return null;
//   }

const [address,setAddress] = useState("");
const [city,setCity] = useState("");
const [state,setState] = useState("");
const [country,setCountry] = useState("");
const [lat,setLat] = useState("");
const [lng,setLng] = useState("");
const [name,setName] = useState("");
const [description,setDescription] = useState("");
const [price,setPrice] = useState(1);

const updateAddress =(e)=>setAddress(e.target.value);
const updateCity =(e)=>setCity(e.target.value);
const updateState =(e)=>setState(e.target.value);
const updateCountry =(e)=>setCountry(e.target.value);
const updateLat =(e)=>setLat(e.target.value);
const updateLng =(e)=>setLng(e.target.value);
const updateName =(e)=>setName(e.target.value);
const updateDescription =(e)=>setDescription(e.target.value);
const updatePrice =(e)=>setPrice(e.target.value);

///useEffect   ?????????????????????????????????

const handleSubmit = async(e)=>{
    e.preventDefault();
    const payload = {
       //spotId,
        address,city,state,country,lat,lng,name,description,price
    };

    console.log(payload,"PAYLOAD")
    let createdSpot = await dispatch(createSpot(payload));
    console.log("CREATED SPOT",createdSpot)
    if(createdSpot){
        history.push(`/spots/${createdSpot.id}`);
        hideForm();
    }
}

const handleCancelClick = (e) => {
    e.preventDefault();
    hideForm();
  };

  return(
    <section className="new-form">
<form className="create-spot-form" onSubmit={handleSubmit}>
<input 
type="text"
placeholder="Address"
required
value={address}
onChange={updateAddress}
/>
<input 
type="text"
placeholder="City"
required
value={city}
onChange={updateCity}
/>
<input 
type="text"
placeholder="State"
required
value={state}
onChange={updateState}
/>
<input 
type="text"
placeholder="Country"
required
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
required
value={name}
onChange={updateName}
/>

<input 
type="text"
placeholder="Description"
required
value={description}
onChange={updateDescription}
/>

<input 
type="number"
placeholder="Price"
required
value={price}
onChange={updatePrice}
/>

<button type="submit">Create new Spot</button>
 <button type="button" onClick={handleCancelClick}>Cancel</button>
 <button type="button" >Delete Spot</button>
</form>

    </section>
  )



 }