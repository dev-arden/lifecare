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
import {Provider} from './src/context/BlessedContext';

import Fontisto from 'react-native-vector-icons/Fontisto';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import Feather from 'react-native-vector-icons/Feather';

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

import manual1 from "./src/screens/manual1";
import manual2 from "./src/screens/manual2";
import manual3 from "./src/screens/manual3";
import manual4 from "./src/screens/manual4";
import manual5 from "./src/screens/manual5";
import manual6 from "./src/screens/manual6";
import manual7 from "./src/screens/manual7";
import manual8 from "./src/screens/manual8";

import blessedmain from "./src/screens/blessedmain";
import blessedmain2 from "./src/screens/blessedmain2";
import blessed1 from "./src/screens/blessed1";
import blessed2 from "./src/screens/blessed2";
import blessed3 from "./src/screens/blessed3";
import blessed4 from "./src/screens/blessed4";
import blessed5 from "./src/screens/blessed5";
import blessed6 from "./src/screens/blessed6";
import blessed7 from "./src/screens/blessed7";
import blessed8 from "./src/screens/blessed8";
import blessed9 from "./src/screens/blessed9";
import blessed10 from "./src/screens/blessed10";


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
  counseltype : counseltype,
  manual1 : manual1,
  manual2 : manual2,
  manual3 : manual3,
  manual4 : manual4,
  manual5 : manual5,
  manual6 : manual6,
  manual7 : manual7,
  manual8 : manual8
});

const eduFlow = createStackNavigator({
  eduhome : eduhome,
  eduinfo : eduinfo,
  eduquiz : eduquiz,
  eduvideo : eduvideo
});

const blessedFlow = createStackNavigator({
  blessedmain: blessedmain,
  blessedmain2: blessedmain2,
  blessed1 : blessed1,
  blessed2 : blessed2,
  blessed3 : blessed3,
  blessed4 : blessed4,
  blessed5 : blessed5,
  blessed6 : blessed6,
  blessed7 : blessed7,
  blessed8 : blessed8,
  blessed9 : blessed9,
  blessed10 : blessed10
});

// homeFlow.navigationOptions = {
//   tabBarLabel: 'home',
//   tabBarIcon: ({ tintColor }) => (
//     <Fontisto name="heart-alt" color={tintColor} size={25} />
//   ) 
// };

counselFlow.navigationOptions = {
  tabBarLabel: '상담매뉴얼',
  tabBarIcon: ({ tintColor }) => (
    <Fontisto name="heart-alt" color={tintColor} size={25} />
  )
};

eduFlow.navigationOptions = {
  tabBarLabel: '교육매뉴얼',
  tabBarIcon: ({ tintColor }) => (
    <SimpleLineIcons name="book-open" color={tintColor} size={25} />
    //<Fontisto name="heart-alt" color={tintColor} size={25} />
  )
};

blessedFlow.navigationOptions = {
  tabBarLabel: '간이검사',
  tabBarIcon: ({ tintColor }) => (
    <Feather name="check-square" color={tintColor} size={25} />
  )
}

const navigator = createSwitchNavigator({
    homeFlow, 
    mainFlow: createBottomTabNavigator({
      counselFlow,
      eduFlow,
      blessedFlow
  })
}); 

const App = createAppContainer(navigator);

export default () => {
  return (
    <Provider>    
      <App />
    </Provider>
  );
};


