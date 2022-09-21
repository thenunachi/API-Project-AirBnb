import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { useParams, Route, NavLink, Switch } from 'react-router-dom'
import { getAllSpots } from '../../store/SpotsReducer';
import { CreateSpotForm } from '../CreateSpotForm/CreateFormSpots';
import EditSpotForm from '../EditForm/EditFormSpot';
import './SpotsBrowser.css';
import Fab from '../Fab';
import { SpotDetail } from '../SpotDetails';
import { SingleSpotDetail } from '../SingleSpot/SingleSpotDetail';
// import { NavLink } from 'react-router-dom';


//const airbnbLogo = 'https://i.pinimg.com/736x/7f/b7/2d/7fb72d49a58ce11c03b24c9e81f85961.jpg'
const SpotsBrowser = () => {
    const dispatch = useDispatch();
    const { spotId } = useParams();
    const spot = useSelector(state => {
        return state.spot
    })//op is obj
    const spotArray = Object.values(spot);

    // console.log(spot, "Spot from spotsBrowser")
    // console.log(spotArray, "SpotArray")
    const [showForm, setShowForm] = useState(false);

    useEffect(() => {
        dispatch(getAllSpots());
    }, [dispatch])

    if (!spot) {
        return null;
    }
    return (
        <main>
            <nav>
                <Fab hidden={showForm} onClick={() => setShowForm(true)} />
            </nav>
            <div className='allSpotsDetails'>{ 
                spotArray.map((displayAllSpots) => {
                    // console.log("****************************");
                    //  console.log(displayAllSpots.id,"displayAllspotsID")
                    return (
                        <NavLink key={displayAllSpots.address} to={`/spots/${displayAllSpots.id}`}>
                            {/* <SingleSpotDetail spotArray={spotArray} /> */}
                            <div className="allSpots">
                                <div>{displayAllSpots.address}</div>
                                <div>{displayAllSpots.city}</div>
                                <div>{displayAllSpots.price}</div>
                                {/* <div><img src={"https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"}/></div> */}
                            </div>
                        </NavLink>
                        
                    )
                })

            } </div>
            

            {/* {(showForm) ? (<CreateSpotForm hideForm={() => setShowForm(false)} />) : (
                <Route path="/spots/:spotId">
                    <EditSpotForm />
                </Route>
            )}, */}

      

        </main>
    )
}
//do spot details in line 35
export default SpotsBrowser