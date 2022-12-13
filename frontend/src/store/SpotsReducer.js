import { csrfFetch } from './csrf';

/*********************************************ACTION TYPES*****************************************************/
export const GETALL_SPOTS = "spots/ GETALL_SPOTS"; //getting all spots
export const ADD_ONE = "spots/ADD_ONE"; //creating & 
export const EDIT_SPOT = "spots/EDIT_SPOT";//updating a spot
export const REMOVE_ONE = 'spots/REMOVE_ONE'; //deleting a spot
/*********************************************ACTION CREATOR*****************************************************/
const get = (spots) => ({ //getting all spot
    type: GETALL_SPOTS,
    spots,
    // spotId
});

const addSpot = (spot) => ({
    type: ADD_ONE,
    spot
});
const editSpot = (spot) => ({
    type: EDIT_SPOT,
    spot
});
const remove = (spotId) => ({
    type: REMOVE_ONE,
    // itemId,
    spotId
})
//console.log("SPOTS",spots,load,"LOAD")

/*********************************************THUNK*****************************************************/

export const getAllSpots = () => async (dispatch) => { //getting all spots
    const response = await csrfFetch('/api/spots');
    console.log(response, "response from getall spots thunk")
    if (response.ok) {
        const list = await response.json();
        dispatch(get(list))
    }
    return response
}
export const getOneSpot = (id) => async dispatch => {
    // console.log("ID SPOT",id)
    const response = await csrfFetch(`/api/spots/${id}`);
    if (response.ok) {
        const data = await response.json();
        dispatch(addSpot(data))
    }
}
export const createSpot = (imageload, data) => async dispatch => {
    console.log("DATA FROM SPOT REDUCER", data)
    const response = await csrfFetch(`/api/spots`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    });
    // const response2 = await csrfFetch(`/api/`)
    // if (response.ok) {
    const newSpot = await response.json();
    const imageResponse = await csrfFetch(`/api/spots/${newSpot.id}/images`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(imageload)
    })

    // dispatch(addSpot(newSpot));
    // return newSpot
    // }
    if (response.ok && imageResponse.ok) {
        dispatch(addSpot(newSpot));
        return newSpot
    }
}
export const updateSpot = (payload) => async (dispatch) => {
    // console.log("DATA", data)
    const response = await csrfFetch(`/api/spots/${payload.id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(payload)
    });
    if (response.ok) {
        const spot = await response.json();
        dispatch(editSpot(spot));
        return spot;
    }
}

export const deleteSpot = (spotId) => async dispatch => {
    const response = await csrfFetch(`/api/spots/${spotId}`, {
        method: 'DELETE'
    });
    if (response.ok) {
        //const {id:deletedItemId} = await response.json();
        dispatch(remove(spotId));

    }
}
/*********************************************REDUCERS*****************************************************/
const initialState = {};


const spotsReducer = (state = initialState, action) => {
    let allSpots = {};
    switch (action.type) {
        case GETALL_SPOTS:
            action.spots.Spots.forEach(spot => {
                allSpots[spot.id] = spot;
            })
            return {
                ...state,
                ...allSpots
            };
        case ADD_ONE:
            if (!state[action.spot.id]) {
                const newState = {
                    ...state,
                    [action.spot.id]: action.spot
                }
                return newState;
            }
            return {
                ...state,
                [action.spot.id]: {
                    ...state[action.spot.id],
                    ...action.spot
                }
            };
        case EDIT_SPOT:
            if (!state[action.spot.id]) {
                const newState = {
                    ...state,
                    [action.spot.id]: action.spot
                }
                return newState;
            }
            return {
                ...state,
                [action.spot.id]: {
                    ...state[action.spot.id],
                    ...action.spot
                }
            };
        case REMOVE_ONE:
            const newState = { ...state };
            delete newState[action.spotId];
            return newState;
        default:
            return state;
    }


}

// case ADD_SPOT: {
//     const newSpot = {};
//     newSpot[action.spot.id] = action.spot
//     const newState = { ...state, ...newSpot };
//     return newState;
// }

export default spotsReducer;