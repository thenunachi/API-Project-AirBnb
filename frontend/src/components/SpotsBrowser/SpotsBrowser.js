import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { useParams, Route, NavLink, Switch } from 'react-router-dom'
import { getAllSpots } from '../../store/Spots';
import { CreateSpotForm } from '../CreateFormSpots';
import EditSpotForm from '../EditFormSpot';
import './SpotsBrowser.css';
import Fab from '../Fab';
import { SpotDetail } from '../SpotDetails';
import { SingleSpotDetail } from '../SingleSpot/SingleSpotDetail';
// import { NavLink } from 'react-router-dom';



const SpotsBrowser = () => {
    const dispatch = useDispatch();
    const { spotId } = useParams();
    const spot = useSelector(state => {
        return state.spot
    })//op is obj
    const spotArray = Object.values(spot);

    console.log(spot, "Spot from spotsBrowser")
    console.log(spotArray, "SpotArray")
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
            {
                spotArray.map((displayAllSpots) => {
                    return (
                        <NavLink key={displayAllSpots.address} to={`/spot/${spotId}`}>
                            <div className="allSpots">
                                <div>{displayAllSpots.address}</div>
                                <div>{displayAllSpots.city}</div>
                                <div>{displayAllSpots.price}</div>
                             
                            </div>
                        </NavLink>

                    )
                })

            },

            {(showForm) ? (<CreateSpotForm hideForm={() => setShowForm(false)} />) : (
                <Route path="/spots/:spotId">
                    <EditSpotForm />
                </Route>
            )},

            {/* <Route path='/spots/:id'>
          <SingleArticle spot={spotArray} />
        </Route>, */}
            {/* <Switch>
                <Route path ={`/spots/:spotId`}>
                <EditSpotForm />
                </Route>
                <Route path={}>

                </Route>
                <Route>

                </Route>
            </Switch> */}

        </main>
    )
}
//do spot details in line 35
export default SpotsBrowser