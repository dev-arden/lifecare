import React from 'react';
import {Text, TouchableOpacity, StyleSheet,View} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';

const Checkicon = () => {
  return (
    <View style={styles.iconstyle}>
      <AntDesign name="check" size={25} color="blue"/>
    </View>
  );
};

const styles = StyleSheet.create({
  iconstyle:{
    alignSelf : 'center'
  }
});

export default Checkicon;