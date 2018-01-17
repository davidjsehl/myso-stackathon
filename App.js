import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { TabNavigator, StackNavigator } from 'react-navigation';
import AuthScreen from './src/components/AuthScreen';
import WelcomeScreen from './src/components/WelcomeScreen';
import ChatScreen from './src/components/ChatScreen';
import AllEventsScreen from './src/components/AllEventsScreen';


export default class App extends React.Component {
  render() {
    const MainNavigator = TabNavigator({
      Welcome: { screen: WelcomeScreen },
      Auth: { screen: AuthScreen },
      Main: {
        screen: TabNavigator({
          ChatScreen: { screen: ChatScreen },
          AllEventsScreen: { screen: AllEventsScreen }
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
