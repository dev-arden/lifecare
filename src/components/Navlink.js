import React from 'react';
import {Text, TouchableOpacity, StyleSheet,View} from 'react-native';
import Spacer from './Spacer';
import { withNavigation } from 'react-navigation';
import AntDesign from 'react-native-vector-icons/AntDesign';

const Navlink = ({navigation, text, routeName}) => {
  return (
    <TouchableOpacity onPress={() => navigation.navigate(routeName)}>
       <View style={styles.row}>
          <Text style={styles.link}>
            {text}
          </Text>
        </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  link:{
    color: 'blue'
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 20,
    paddingHorizontal: 10,
    borderTopWidth:1,
    borderColor: 'gray'
  },
  icon: {
    fontSize: 24
  }
});

export default withNavigation(Navlink);