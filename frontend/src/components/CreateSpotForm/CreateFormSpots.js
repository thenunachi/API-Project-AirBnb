import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { createSpot } from "../../store/SpotsReducer";
import './CreateSpotForm.css';
import logo from './bbnb.png'


export const CreateSpotForm = ({ hideForm }) => {

  const dispatch = useDispatch();
  const history = useHistory();
  // let {spotId}= useParams()
  //  let allspots = useSelector(state=> Object.values(state.spot));
  // // console.log(allspots,"ALLSPOTS FROM CREATEFORMPAGE")
  // const spot = allspots.find(spot=>spot.id === +spotId)
  // if (!spot) {
  //     return null;
  //   }

  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [country, setCountry] = useState("");
  const [lat, setLat] = useState("");
  const [lng, setLng] = useState("");
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState(1);
  const [preview, setPreview] = useState(false)
  const [url, setUrl] = useState("")
  const [validations, setValidations] = useState([])

  const updateAddress = (e) => setAddress(e.target.value);
  const updateCity = (e) => setCity(e.target.value);
  const updateState = (e) => setState(e.target.value);
  const updateCountry = (e) => setCountry(e.target.value);
  const updateLat = (e) => setLat(e.target.value);
  const updateLng = (e) => setLng(e.target.value);
  const updateName = (e) => setName(e.target.value);
  const updateDescription = (e) => setDescription(e.target.value);
  const updatePrice = (e) => setPrice(e.target.value);
  const updatePreview = (e) => setPreview(!preview);
  const updateUrl = (e) => setUrl(e.target.value)

  useEffect(() => {
    const errors = [];
    if (!address.length) errors.push("Street address is required")
    if (!city.length) errors.push("City is required")
    if (!state.length) errors.push("State is required")
    if (!country.length) errors.push("Country is required")
    if(!lat)errors.push("Lat is required")
    if(!lng)errors.push("Lng is required")
    if(!url)errors.push("URL is required")
    if (name.length < 3) errors.push("Name must be 3 or more characters");
    if (!description.length) errors.push("Description is required")
    if (price < 0) errors.push("Price per day is required")
    setValidations(errors)

  }, [address, city, state, country, name, description, price])


  const handleSubmit = async (e) => {
    e.preventDefault();
    const payload = {
      //spotId,
      address, city, state, country, lat, lng, name, description, price
    };
    const imageload = {
      preview, url
    }
    // console.log(payload, "PAYLOAD")
    //  let  = await dispatch(createSpot(payload));
    let createdSpot = await dispatch(createSpot(imageload, payload))
    // console.log("CREATED SPOT", createdSpot)
    if (createdSpot) {
      history.push(`/spots/${createdSpot.id}`);
      hideForm();
    }
  }

  const handleCancelClick = (e) => {
    e.preventDefault();
    history.push('/')
    // console.log("CANCEL CLICK")
    // e.style.display = 'none'
    hideForm();
  };

  return (
    <main>
      <div class="split left">
        <div class="centered">
          <div className="logoname"><img src={logo} /></div>
          <h2 id="host-text">What kind of place will you host?</h2>

        </div>
      </div>
      <div class="split right">
        <div class="centered">
          <section className="new-form">
            <form className="create-spot-form" onSubmit={handleSubmit}>
              {/* <ul className="errors">
                {
                  validations.length > 0 && validations.map((error, index) => (
                    <li key={index}>{error}</li>
                  ))
                }
              </ul> */}
              <input id="inputText"
                type="text"
                placeholder="Address"
                required
                value={address}
                onChange={updateAddress}

              />
              {!address.length && <div className = "errorHandling">Street address is required</div> }
              <input id="inputText"
                type="text"
                placeholder="City"
                required
                value={city}
                onChange={updateCity}
              />
               {!city.length && <div className = "errorHandling">City is required</div> }
              <input id="inputText"
                type="text"
                placeholder="State"
                required
                value={state}
                onChange={updateState}
              />
               {!state.length && <div className = "errorHandling">State is required</div> }
              <input id="inputText"
                type="text"
                placeholder="Country"
                required
                value={country}
                onChange={updateCountry}
              />
               {!country.length && <div className = "errorHandling">Country is required</div> }
              <input id="inputText"
                type="number"
                placeholder="Lat"
                required
                value={lat}
                onChange={updateLat}
              />
                {!lat && <div className = "errorHandling">Lat is required</div> }
              <input id="inputText"
                type="number"
                placeholder="Lng"
                required
                value={lng}
                onChange={updateLng}
              />
              {!lng && <div className = "errorHandling">Lng is required</div> }
              <input id="inputText"
                type="text"
                placeholder="Name"
                required
                value={name}
                onChange={updateName}
              />
               {name.length < 3 && <div className = "errorHandling">Name must be 3 or more characters</div> }
 {/* {!address.length && <div className = "errorHandling">"Street address is required"</div> } */}
              <input id="inputText"
                type="text"
                placeholder="Description"
                required
                value={description}
                onChange={updateDescription}
              />
               {!description.length && <div className = "errorHandling">Description is required</div> }
 {/* {!address.length && <div className = "errorHandling">"Street address is required"</div> } */}
              <input id="inputText"
                type="number"
                placeholder="Price"
                required
                value={price}
                onChange={updatePrice}
              />
               {price<=0 && <div className = "errorHandling">Price is required</div> }
              <input id="inputText"
                type="text"
                placeholder="url"
                required
                value={url}
                onChange={updateUrl}
              />
               {!url && <div className = "errorHandling">Url is required</div> }

<div>
              <label for="preview" id="preview-label"> Preview:</label>
              <input
                name="preview"
                type="checkbox"
                placeholder="preview"
                required
                value={preview}
                onChange={updatePreview}
                id="preview-input"
              // </label>
              />
              </div>
              {/* {!preview && <div className = "errorHandling">"Preview is required"</div> } */}
              <button className="spotButton" type="submit">Create new Spot</button>
              <button className="cancelButton" type="button" onClick={handleCancelClick}>Cancel</button>

            </form>

          </section>

        </div>
      </div>


    </main>
  )



}