import React from 'react';
import { Scene, Router, Actions } from 'react-native-router-flux';
import LoginForm from './components/LoginForm';
import EventList from './components/EventsList';
import AddEventForm from './components/AddEventForm';
import SingleEvent from './components/SingleEvent';
import ChatView from './components/ChatView';

const RouterComponent = () => {
    return (
        <Router>
            <Scene key="root" hideNavBar>
                <Scene key="auth">
                    <Scene
                        key="login"
                        component={LoginForm}
                        title="Please Log In"
                        initial
                    />
                </Scene>

                <Scene key="main">
                    <Scene
                        key="eventList"
                        component={EventList}
                        title="All Events"
                        rightTitle="Add Event"
                        onRight={() => Actions.addEventForm()}
                        initial
                    />
                    <Scene
                        key="chatView"
                        component={ChatView}
                        title="Single Court"
                    />
                    <Scene
                        key="addEventForm"
                        component={AddEventForm}
                        title="Add Event"
                    />
                    <Scene 
                        key="singleEvent"
                        component={SingleEvent}
                        title="Event"
                    />
                </Scene>
            </Scene>
        </Router>
    )
}

export default RouterComponent;