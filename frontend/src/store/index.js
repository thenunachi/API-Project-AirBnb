import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import reviewsReducer from "./ReviewsReducer";
import sessionReducer from './session';
import spotsReducer from "./SpotsReducer";
import bookingReducer from "./bookingReducer";


const rootReducer = combineReducers({
  session: sessionReducer,// add reducer functions here
  spot: spotsReducer,
  review : reviewsReducer,
  bookingState : bookingReducer
});


let enhancer;

if (process.env.NODE_ENV === "production") {
  enhancer = applyMiddleware(thunk);
} else {
  const logger = require("redux-logger").default;
  const composeEnhancers =
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  enhancer = composeEnhancers(applyMiddleware(thunk, logger));
}

const configureStore = (preloadedState) => {
  return createStore(rootReducer, preloadedState, enhancer);
};

export default configureStore;
