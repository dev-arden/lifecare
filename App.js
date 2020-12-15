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

import FontAwesome from 'react-native-vector-icons/FontAwesome';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import Feather from 'react-native-vector-icons/Feather';
import Ionicons from 'react-native-vector-icons/Ionicons';

import HomeScreen from "./src/screens/HomeScreen";
import counselhome from "./src/screens/counselhome";
import counselid from "./src/screens/counselid";
import counselinfo from "./src/screens/counselinfo";
import counselnormal from "./src/screens/counselnormal";
import counselready from "./src/screens/counselready";
import counselready2 from "./src/screens/counselready2";
import counselready3 from "./src/screens/counselready3";

import counseltype from "./src/screens/counseltype"; 
import counselalgo from "./src/screens/counselalgo";
import counselalgoyes from "./src/screens/counselalgoyes";
import counselalgono from "./src/screens/counselalgono";
import counselalgono1 from "./src/screens/counselalgono1";
import counselalgono2 from "./src/screens/counselalgono2";
import counselalgono3 from "./src/screens/counselalgono3";
import counselalgono4 from "./src/screens/counselalgono4";
import counselalgono5 from "./src/screens/counselalgono5";
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

const homeFlow = createStackNavigator(
  {
    Home: HomeScreen
  }, 
  {
    defaultNavigationOptions: {
      title: '홈',
      // headerStyle: {
      //   backgroundColor: "#4189D6"
      // }
      // headerStyle: {
      //   backgroundColor: "orange"
      // }
    }
  });

const counselFlow = createStackNavigator(
  {
    counselhome: counselhome,
    counselid : counselid,
    counselinfo : counselinfo,
    counselnormal : counselnormal,
    counselready : counselready,
    counselready2 : counselready2,
    counselready3 : counselready3,
    counseltype : counseltype,
    counselalgo : counselalgo,
    counselalgoyes : counselalgoyes,
    counselalgono : counselalgono,
    counselalgono1 : counselalgono1,
    counselalgono2 : counselalgono2,
    counselalgono3 : counselalgono3,
    counselalgono4 : counselalgono4,
    counselalgono5 : counselalgono5,
    manual1 : manual1,
    manual2 : manual2,
    manual3 : manual3,
    manual4 : manual4,
    manual5 : manual5,
    manual6 : manual6,
    manual7 : manual7,
    manual8 : manual8
  },
  {
    defaultNavigationOptions: {
      title: '상담매뉴얼'
    }
  });

const eduFlow = createStackNavigator(
  {
    eduhome : eduhome,
    eduinfo : eduinfo,
    eduquiz : eduquiz,
    eduvideo : eduvideo
  },
  {
    defaultNavigationOptions: {
      title: '교육매뉴얼'
    }
  }
);

const blessedFlow = createStackNavigator(
  {
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
  }, 
  {
    defaultNavigationOptions: {
      title: '간이검사'
    }
  });

homeFlow.navigationOptions = {
  tabBarLabel: '홈',
  // tabBarOptions: {
  //   labelStyle: {
  //     fontSize: 15,
  //     // margin: 0,
  //     // padding: 0,
  //   }
  // },
  tabBarIcon: ({ tintColor }) => (
    <Ionicons name="home-outline" color={tintColor} size={25} />
  ) 
};

counselFlow.navigationOptions = {
  tabBarLabel: '상담매뉴얼',
  // tabBarOptions: {
  //   labelStyle: {
  //     fontSize: 15,
  //     // margin: 0,
  //     // padding: 0,
  //   }
  // },
  tabBarIcon: ({ tintColor }) => (
    <FontAwesome name="heart-o" color={tintColor} size={25} />
  )
};

eduFlow.navigationOptions = {
  tabBarLabel: '교육매뉴얼',
  // tabBarOptions: {
  //   labelStyle: {
  //     fontSize: 15,
  //     // margin: 0,
  //     // padding: 0,
  //   }
  // },
  tabBarIcon: ({ tintColor }) => (
    <SimpleLineIcons name="book-open" color={tintColor} size={25} />
    //<Fontisto name="heart-alt" color={tintColor} size={25} />
  )
};

blessedFlow.navigationOptions = {
  tabBarLabel: '간이검사',
  // tabBarOptions: {
  //   labelStyle: {
  //     fontSize: 15,
  //     // margin: 0,
  //     // padding: 0,
  //   }
  // },
  tabBarIcon: ({ tintColor }) => (
    <Feather name="check-square" color={tintColor} size={25} />
  )
}

// const navigator = createSwitchNavigator({ 
//     mainFlow: createBottomTabNavigator({
//       homeFlow,
//       counselFlow,
//       eduFlow,
//       blessedFlow
//   })
// }); 

const navigator = createBottomTabNavigator(
  {
    homeFlow,
    counselFlow,
    eduFlow,
    blessedFlow
  },
  {
    tabBarOptions: {
      labelStyle: {
        fontSize: 15,
      },
      // style:{
      //   backgroundColor: "orange"
      // }
    }
  }); 


const App = createAppContainer(navigator);

export default () => {
  return (
    <Provider>    
      <App />
    </Provider>
  );
};


