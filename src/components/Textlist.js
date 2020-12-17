import React from 'react';
import {Text, TouchableOpacity, StyleSheet,View} from 'react-native';
import { withNavigation } from 'react-navigation';

const Textlist = ({text,icon}) => {
  return (
    <Text style={styles.textstyle}>
      {text}
    </Text>
  );
};

const styles = StyleSheet.create({
  textstyle:{
    fontSize:20,
    color:'black',
    paddingHorizontal: 10,
    flex:1,
    margin : 5
    //alignSelf: 'center'
  },
});

export default Textlist;