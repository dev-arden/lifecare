/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import Fontisto from 'react-native-vector-icons/Fontisto';

import HomeScreen from "./src/screens/HomeScreen";
import counselhome from "./src/screens/counselhome";
import counselid from "./src/screens/counselid";
import counselinfo from "./src/screens/counselinfo";
import counselnormal from "./src/screens/counselnormal";
import counselready from "./src/screens/counselready";
import counseltype from "./src/screens/counseltype";
import eduhome from "./src/screens/eduhome";
import eduinfo from "./src/screens/eduinfo";
import eduquiz from "./src/screens/eduquiz";
import eduvideo from "./src/screens/eduvideo";
import scrap from "./src/screens/scrap";


/*
const HomeStack = createStackNavigator({ A });
const SettingsStack = createStackNavigator({ B });

HomeStack.navigationOptions = {
  tabBarLabel: 'Home!',
};

SettingsStack.navigationOptions = {
  tabBarLabel: 'Settings!',
};

export default createBottomTabNavigator({
  HomeStack,
  SettingsStack,
});

*/

const homeFlow = createStackNavigator({
  Home: HomeScreen
});

const counselFlow = createStackNavigator({
  counselhome: counselhome,
  counselid : counselid,
  counselinfo : counselinfo,
  counselnormal : counselnormal,
  counselready : counselready,
  counseltype : counseltype
});

const eduFlow = createStackNavigator({
  eduhome : eduhome,
  eduinfo : eduinfo,
  eduquiz : eduquiz,
  eduvideo : eduvideo
});

const scrapFlow = createStackNavigator({
  scrap : scrap
});

homeFlow.navigationOptions = {
  tabBarLabel: 'home',
  tabBarIcon: ({ tintColor }) => (
    <Fontisto name="heart-alt" color={tintColor} size={25} />
  ) 
};

counselFlow.navigationOptions = {
  tabBarLabel: 'counsel',
  tabBarIcon: ({ tintColor }) => (
    <Fontisto name="heart-alt" color={tintColor} size={25} />
  )
};

eduFlow.navigationOptions = {
  tabBarLabel: 'edu',
  tabBarIcon: ({ tintColor }) => (
    <Fontisto name="heart-alt" color={tintColor} size={25} />
  )
};

scrapFlow.navigationOptions = {
  tabBarLabel: 'scrap',
  tabBarIcon: ({ tintColor }) => (
    <Fontisto name="heart-alt" color={tintColor} size={25} />
  )
}

const navigator = createSwitchNavigator({
    homeFlow, 
    mainFlow: createBottomTabNavigator({
      counselFlow,
      eduFlow,
      scrapFlow
  })
}); 

const App = createAppContainer(navigator);

export default () => {
  return (
    <App />
  );
};
