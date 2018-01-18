import firebase from 'firebase';
import { Actions } from 'react-native-router-flux';

//INITIAL STATE

const initialState = {
    email: '',
    password: '',
    user: null,
    error: '',
    loading: false
}


// ACTION TYPES
const EMAIL_CHANGED = 'EMAIL_CHANGED';
const PASSWORD_CHANGED = 'PASSWORD_CHANGED';
const LOGIN_USER_SUCCESS = 'LOGIN_USER_SUCCESS';
const LOGIN_USER_FAIL = 'LOGIN_USER_FAIL';
const LOGIN_USER_START = 'LOGIN_USER_START';

//ACTION CREATOR

export const emailChanged = (text) => {
    const action = { type: EMAIL_CHANGED, text };
    return action;
}

export const passwordChanged = (text) => {
    const action = { type: PASSWORD_CHANGED, text };
    return action;
}

const loginUserSuccess = (dispatch, user) => {
    dispatch({
        type: LOGIN_USER_SUCCESS,
        user
    })
    Actions.eventList();
}

const loginUserFail = (dispatch, user) => {
    dispatch({
        type: LOGIN_USER_FAIL,
        user
    })
}

//THUNKS


export const loginUserThunk = ({ email, password }) => {
    return (dispatch) => {
        dispatch({ type: LOGIN_USER_START })
        firebase.auth().signInWithEmailAndPassword(email, password)
            .then(user => loginUserSuccess(dispatch, user))
            .catch((error) => {
                console.log(error)

                firebase.auth().createUserWithEmailAndPassword(email, password)
                    .then(user => loginUserSuccess(dispatch, user))
                    .catch(user => loginUserFail(dispatch, user))
            })
    }
}
// export const loginUserThunk = ({ email, password }) => async dispatch => {
//     dispatch({ type: LOGIN_USER_START })
//     let user = await firebase.auth().signInWithEmailAndPassword(email, password);
//     if (user) {
//         return loginUserSuccess(dispatch, user)
//     }
//     let newUser = await firebase.auth().createUserWithEmailAndPassword(email, password)
//     return loginUserSuccess(dispatch, user)        
// }


//REDUCER

export default (state = initialState, action) => {
    switch (action.type) {
        case EMAIL_CHANGED:
            return { ...state, email: action.text };
        case PASSWORD_CHANGED:
            return { ...state, password: action.text };
        case LOGIN_USER_START:
            return { ...state, loading: true, error: '' }
        case LOGIN_USER_SUCCESS:
            return {
                ...state,
                ...initialState,
                user: action.user,
            }
        case LOGIN_USER_FAIL:
            return {
                ...state,
                error: 'Authentication failed',
                password: '',
                loading: false
            }
        default:
            return state;
    }
}


// import { AsyncStorage } from 'react-native';
// import { Facebook } from 'expo';

// //ACTION TYPES

// const FACEBOOK_LOGIN_SUCCESS = 'FACEBOOK_LOGIN_SUCCESS';
// const FACEBOOK_LOGIN_FAIL = 'FACEBOOK_LOGIN_FAIL';


// //ACTION CREATOR

// //THUNKS

// export const facebookLoginThunk = () => async dispatch => {
//     let userToken = await AsyncStorage.getItem('user_fb_token');
//     //if there is a token for this user in storage
//     if (userToken) {
//         dispatch({ type: FACEBOOK_LOGIN_SUCCESS, userToken })
//     } else {
//         intitiateFacebookLogin(dispatch)
//     }
// }


// //HELPER METHODS

// const intitiateFacebookLogin = async dispatch => {
//     //pass in the facebook app id and permissions we want from the user
//     let result = await Facebook.logInWithReadPermissionsAsync('403984723392225', { permissions: ['public_profile'] });
//     //if request fails...
//     if (result.cancel === 'cancel') {
//         return dispatch({ type: FACEBOOK_LOGIN_FAIL })
//     }
//     //request succeeds...
//     await AsyncStorage.setItem('user_fb_token', result.token);
//     dispatch({ type: FACEBOOK_LOGIN_SUCCESS, userToken: result.token })
// }