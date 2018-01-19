// //ACTION TYPES


const CHAT_MESSAGE_SUCCESS = 'CHAT_MESSAGE_SUCCESS';
const CHAT_MESSAGE_FAIL = 'CHAT_MESSAGE_FAIL';
const UPDATE_MESSAGE = 'UPDATE_MESSAGE';
const FETCH_MESSAGES_SUCCESS = 'FETCH_MESSAGES_SUCCESS';
const FETCH_MESSAGES_FAIL = 'FETCH_MESSAGES_FAIL';


// //INITIAL STATE 

const initialState = {
    message: '',
    messages: {},
    sendError: null
};


// //ACTION CREATORS

export const updateMessage = text => {
    return (dispatch) => {
        dispatch({ type: UPDATE_MESSAGE, text })
    }
}


// //THUNKS

// export const fetchMessagesThunk = (event) => {
//     return 
// }




export const sendMessageThunk = (message, eventId) => {
    return (dispatch) => {
        let currentUser = firebase.auth().currentUser;
        let createdAt = new Date().getTime();
        let chatMessage = {
            text: message,
            createdAt: createdAt,
            user: {
                id: currentUser.uid,
                email: currentUser.email
            }
        }
        firebase.database().ref(`/events/${eventId}/messages`)
        .push(chatMessage).set(chatMessage, (error) => {
            if (error) {
                dispatch({ type: CHAT_MESSAGE_FAIL, error })
            } else {
                dispatch({ type: CHAT_MESSAGE_SUCCESS })
            }
        })
    }
}

//REDUCER

export default (state = initialState, action) => {
    switch(action.type) {
        case UPDATE_MESSAGE:
            return { ...state, message: action.text, sendingError: null }
        case CHAT_MESSAGE_SUCCESS:
            return { ...state, sendingError: null, message: '' }
        case CHAT_MESSAGE_FAIL:
            return { ...state, sendingError: action.error }
        default:
            return state;
    }
}
