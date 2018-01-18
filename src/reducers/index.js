import { combineReducers } from 'redux';
import AuthReducer from './authReducer';
import EventReducer from './eventReducer';


export default combineReducers({
    auth: AuthReducer,
    events: EventReducer
})
