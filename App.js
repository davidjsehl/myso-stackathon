import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { TabNavigator, StackNavigator } from 'react-navigation';
import AuthScreen from './src/components/AuthScreen';
import WelcomeScreen from './src/components/WelcomeScreen';
import ChatScreen from './src/components/ChatScreen';
import AllEventsScreen from './src/components/AllEventsScreen';
import AddEventForm from './src/components/AddEventForm';
import MyChatsScreen from './src/components/MyChatsScreen';


export default class App extends React.Component {
  render() {
    const MainNavigator = TabNavigator({
      Welcome: { screen: WelcomeScreen },
      Auth: { screen: AuthScreen },
      Main: {
        screen: TabNavigator({
          ChatScreen: { screen: ChatScreen },
          MyChatsScreen: { screen: MyChatsScreen },
          Events: {
            screen: StackNavigator({
              AllEventsScreen: { screen: AllEventsScreen },
              AddEventForm : { screen: AddEventForm }
            })
          }
        })
      }
    })
    return (
      <View style={styles.container}>
        <MainNavigator />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
