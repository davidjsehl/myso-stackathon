import firebase from 'firebase';
import { Actions } from 'react-native-router-flux';

//ACTION TYPES

const GET_EVENTS = 'GET_EVENTS';
const ADD_EVENT = 'ADD_EVENT';


//INITIAL STATE

const initialState = {
    title: '',
    description: '',
    location: '',
    date: ''
};



//THUNKS

export const addEventThunk = (event) => {
    return (dispatch) => {
        firebase.database().ref('/events')
        .push(event)
        .then(() => {
            dispatch({ type: ADD_EVENT })
            Actions.eventList({ type: 'reset' })
        })
    }
}



export default (state = initialState, action) => {
    switch (action.type) {
        case ADD_EVENT:
            return initialState;
        default:
            return state;
    }
}