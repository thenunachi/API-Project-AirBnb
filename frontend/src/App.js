// frontend/src/App.js
import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Route, Switch } from "react-router-dom";
import SignupFormPage from "./components/SignupFormPage";
import * as sessionActions from "./store/session";
import Navigation from "./components/Navigation";
import { CreateSpotForm } from "./components/CreateSpotForm/CreateFormSpots";
import EditSpotForm from "./components/EditForm/EditFormSpot";
import { SingleSpotDetail } from "./components/SingleSpot/SingleSpotDetail";
import SpotsBrowser from "./components/SpotsBrowser/SpotsBrowser"
import {ReviewForm} from "./components/CreateReviewForm/CreateReview"
function App() {
  const dispatch = useDispatch();
  const [isLoaded, setIsLoaded] = useState(false);
  useEffect(() => {
    dispatch(sessionActions.restoreUser()).then(() => setIsLoaded(true));
  }, [dispatch]);

  return (
    <>
      <Navigation isLoaded={isLoaded} />
      {isLoaded && (
        <Switch>
          {/* <Route path="/signup">
            <SignupFormPage />
          </Route> */}
          <Route path='/new'>
            <CreateSpotForm />
          </Route>
          
          <Route path='/spots/:spotId'>
            <SingleSpotDetail />
          </Route>
          <Route path='/spots'>
            <SpotsBrowser />
          </Route>
        </Switch>
      )}


    </>
  );
}

export default App;