import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { updateSpot } from '../../store/SpotsReducer'
import './EditForm.css'
import { useHistory } from "react-router-dom";
// const EditSpotForm =({hideForm}) =>{
const EditSpotForm = ({ spot,closeForm }) => {
    // console.log(spot,"EDITFORMPAGE SPOT")
    const dispatch = useDispatch();
    console.log("**************************************BEFORE***************************")
    // let { spotId } = useParams()
    // console.log("SPOTID", spotId) //18
    // console.log("**************************************AFTER***************************")
    // spotId = parseInt(spotId)
    const history = useHistory();
    // let spot = useSelector(state => state.spot[spotId]);
    //  console.log("STATE",state)
    //  console.log(spot,"SpotsDETAILS")
    // const mySpots = Object.values(spot).find(spot=>spot.id === spotId)

    const [address, setAddress] = useState(spot.address);
    const [city, setCity] = useState(spot.city);
    const [state, setState] = useState(spot.state);
    const [country, setCountry] = useState(spot.country);
    const [lat, setLat] = useState(spot.lat);
    const [lng, setLng] = useState(spot.lng);
    const [name, setName] = useState(spot.name);
    const [description, setDescription] = useState(spot.description);
    const [price, setPrice] = useState(spot.price);
    const [validations, setValidations] = useState([])
    const [url, setUrl] = useState("")
    const updateAddress = (e) => setAddress(e.target.value);
    const updateCity = (e) => setCity(e.target.value);
    const updateState = (e) => setState(e.target.value);
    const updateCountry = (e) => setCountry(e.target.value);
    const updateLat = (e) => setLat(e.target.value);
    const updateLng = (e) => setLng(e.target.value);
    const updateName = (e) => setName(e.target.value);
    const updateDescription = (e) => setDescription(e.target.value);
    const updatePrice = (e) => setPrice(e.target.value);
    const updateUrl = (e) => setUrl(e.target.value)
    // console.log("SPOTS IN EDIT FORM ",spots)
    useEffect(() => {
        const errors = [];
        if (!address.length) errors.push("Street address is required")
        if (!city.length) errors.push("City is required")
        if (!state.length) errors.push("State is required")
        if (!country.length) errors.push("Country is required")
        if (name.length < 3) errors.push("Name must be 3 or more characters");
        if (!description.length) errors.push("Description is required")
        if (price < 0) errors.push("Price per day is required")
        if(!lat)errors.push("Lat is required")
    if(!lng)errors.push("Lng is required")
    if(!url)errors.push("URL is required")
        setValidations(errors)
    
      }, [address, city, state, country, name, description, price])


    const handleSubmit = async (e) => {
        e.preventDefault();
        const payload = {
            id: spot.id, address, city, state, country, lat, lng, name, description, price //spreading already created spot
        };
        // console.log(payload.id, "PAYLOAD")
        let updatedSpot = await dispatch(updateSpot(payload));
        if (updatedSpot) {
            closeForm();
        };
    }

    return (
        <section className="edit-form">
            <form className="update-spot-form" onSubmit={handleSubmit}>
                {/* <label className="label" for="html" onClick={showLabel}>HTML</label> */}
                <input
id="inputEdit"
                    type="text"
                    placeholder="Address"

                    value={address}
                    onChange={updateAddress}
                />
                {!address.length && <div className = "errorHandlings">Street address is required</div> }
                <input id="inputEdit"
                    type="text"
                    placeholder="City"

                    value={city}
                    onChange={updateCity}
                />
                {!city.length && <div className = "errorHandlings">City is required</div> }
                <input id="inputEdit"
                    type="text"
                    placeholder="State"

                    value={state}
                    onChange={updateState}
                />
                {!state.length && <div className = "errorHandlings">State is required</div> }
                <input id="inputEdit"
                    type="text"
                    placeholder="Country"

                    value={country}
                    onChange={updateCountry}
                />
                 {!country.length && <div className = "errorHandlings">Country is required</div> }
                <input id="inputEdit"
                    type="number"
                    placeholder="Lat"

                    value={lat}
                    onChange={updateLat}
                /> {!lat && <div className = "errorHandling">Lat is required</div> }
                <input id="inputEdit"
                    type="number"
                    placeholder="Lng"

                    value={lng}
                    onChange={updateLng}
                /> {!lng && <div className = "errorHandling">Lng is required</div> }
                <input id="inputEdit"
                    type="text"
                    placeholder="Name"

                    value={name}
                    onChange={updateName}
                />
{name.length < 3 && <div className = "errorHandlings">Name must be 3 or more characters</div> }
                <input id="inputEdit"
                    type="text"
                    placeholder="Description"

                    value={description}
                    onChange={updateDescription}
                />
 {!description.length && <div className = "errorHandlings">Description is required</div> }
                <input
                    type="number"
                    placeholder="Price"

                    value={price}
                    onChange={updatePrice}
                />
{price<=0 && <div className = "errorHandlings">Price is required</div> }
                <button id="UpdateSpot" type="submit">Update Spot</button>
                <button className="CancelEdit" type="button" onClick={closeForm}>Cancel</button>

            </form>

        </section>
    )

}
export default EditSpotForm;