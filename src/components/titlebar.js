import React from 'react';
import {View, Text, StyleSheet, TextInput} from 'react-native';
import Feather from 'react-native-vector-icons';

const titlebar = () => {
  return(
    <View style = {styles.backgroundStyle}>
      <Feather name="search" style={styles.iconStyle}/>
      <Text style={styles.inputStyle}>상담실 환경 준비</Text>
    </View>
  )
};

const styles = StyleSheet.create({
  backgroundStyle:{
    marginTop: 10,
    backgroundColor: '#F0EEEE',
    height:50,
    borderRadius:5,
    marginHorizontal: 15,
    flexDirection: 'row',
    marginBottom: 10
  },
  inputStyle:{
    flex:1,
    fontSize: 18
  },
  iconStyle:{
    fontSize: 35,
    alignSelf: 'center',
    marginHorizontal: 15
  }
});

export default titlebar;