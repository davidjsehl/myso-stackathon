import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Button } from 'react-native-elements'
import { TabNavigator, StackNavigator } from 'react-navigation';
import { Provider } from 'react-redux';
import firebase from 'firebase';
import store from './src/store';
// import LoginForm from './src/components/LoginForm';
// import WelcomeScreen from './src/components/WelcomeScreen';
// import ChatScreen from './src/components/ChatScreen';
// import AllEventsScreen from './src/components/AllEventsScreen';
// import AddEventForm from './src/components/AddEventForm';
// import MyChatsScreen from './src/components/MyChatsScreen';
import Router from './src/Router';



export default class App extends React.Component {

  componentDidMount() {
    var config = {
      apiKey: "AIzaSyAAVCxAGlyFFz0HSR8hS2dlABOdPYdAXlc",
      authDomain: "myso-stackathon.firebaseapp.com",
      databaseURL: "https://myso-stackathon.firebaseio.com",
      projectId: "myso-stackathon",
      storageBucket: "myso-stackathon.appspot.com",
      messagingSenderId: "601069676391"
    };
    firebase.initializeApp(config);
    const storage = firebase.storage();
  }

  render() {
    // const MainNavigator = TabNavigator({
    //   Auth: { screen: LoginForm },

    // })
    return (
      <Provider store={store}>
          <Router />
        {/* <View style={styles.container}>
          <MainNavigator />
        </View> */}
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
