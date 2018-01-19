import { combineReducers } from 'redux';
import AuthReducer from './authReducer';
import EventReducer from './eventReducer';
import ChatReducer from './chatReducer';


export default combineReducers({
    auth: AuthReducer,
    events: EventReducer,
    chat: ChatReducer
})
