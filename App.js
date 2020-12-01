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

const navigator = createSwitchNavigator({
    HomeFlow : createStackNavigator({
      Home: HomeScreen
    }),
    //Home: HomeScreen,
    mainFlow: createBottomTabNavigator({
      HomeFlow : createStackNavigator({
        Home: HomeScreen
      }),
      counselFlow: createStackNavigator({
        counselhome : counselhome,
        counselid : counselid,
        counselinfo : counselinfo,
        counselnormal : counselnormal,
        counselready : counselready,
        counseltype : counseltype
      }),
      eduFlow: createStackNavigator({
        eduhome : eduhome,
        eduinfo : eduinfo,
        eduquiz : eduquiz,
        eduvideo : eduvideo
      }),
      scrapFlow: createStackNavigator({
        scrap : scrap
      })
  })
}); 

const App = createAppContainer(navigator);

export default () => {
  return (
    <App />
  );
};
