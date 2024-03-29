import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { useParams, Route, NavLink, Switch, Link } from 'react-router-dom'
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
    const spot = useSelector(state => {
        return state.spot
    })//op is obj
    const spotArray = Object.values(spot);

    const [showForm, setShowForm] = useState(false);

    useEffect(() => {
        dispatch(getAllSpots());
    }, [])

    if (!spot) {
        return null;
    }
    return (
        <main>
            {/* <nav>
                <Fab hidden={showForm} onClick={() => setShowForm(true)} />
            </nav> */}

            <div className='allSpotsDetails'>{
                spotArray.map((displayAllSpots) => {
                    //  console.log("****************************");
                    //  console.log(displayAllSpots,"displayAllspotsID")
                    //  console.log(displayAllSpots.avgRating,"AVERAGERATING",displayAllSpots.numReviews,"NUM REVIEWS")
                    return (
                        <Link key={displayAllSpots.address} to={`/spots/${displayAllSpots.id}`}>
                            {/* <SingleSpotDetail spotArray={spotArray} /> */}
                            <div className="allSpots">

                                <div ><img className="spotimages" src={displayAllSpots.previewImage} /></div>
                                <div className='details'>
                                    <div id="address-rating">
                                        <span> {displayAllSpots.address} </span>
                                        {/* {displayAllSpots.city}  */}
                                        <span className="rating-star"><i class="fa-solid fa-star"></i> {displayAllSpots.avgRating}

                                        </span>
                                    </div>

                                    <div id="address-rating">{displayAllSpots.state}, {displayAllSpots.country}</div>
                                    {/* <div><i class="fa-solid fa-star"></i> {displayAllSpots.avgRating} */}

                                    <div>${displayAllSpots.price} night</div>
                                    {/* <div>{displayAllSpots.city}</div> */}

                                    {/* <div>{displayAllSpots.numReviews}</div> */}
                                    {/* <div>{displayAllSpots.avgRating}</div> */}
                                    {/* <div>{displayAllSpots.url}</div> */}
                                </div>



                            </div>
                        </Link>

                    )
                })

            } </div>


            {/* {(showForm) ? (<CreateSpotForm hideForm={() => setShowForm(false)} />) : (
                <Route path="/spots/:spotId">
                    <EditSpotForm />
                </Route>
            )}, */}
            <footer>
                <div class="footer">
                    <p className="footer-code">© 2022 Airbnb, Inc.</p>
                </div>
            </footer>
        </main>



    )
}
//do spot details in line 35
export default SpotsBrowser