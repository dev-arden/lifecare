import React from 'react';
import {Text, TouchableOpacity, StyleSheet,View, Image} from 'react-native';
import { withNavigation } from 'react-navigation';

const Titlelist = ({imageSource, title}) => {
  return (
    <View>
      <View style = {styles.btboxview}>
        <Text style={styles.titlestyle} >
          {title}
        </Text>
      </View>
      <View style={styles.newliststyle}>
        <Image 
          source = {imageSource} 
          style ={styles.imagestyle}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  titlestyle:{
    fontSize:25,
    fontWeight:'bold', 
    color:'black',
    // borderWidth: 1,
    // borderColor : 'black',
    alignSelf : 'center'
  },
  btboxview:{
    flexDirection : 'row',
    backgroundColor : '#FDF6E3',
    height : 60,
    margin : 15,
    borderRadius : 20,
    //alignSelf: 'center',
    justifyContent : 'center',
    // borderWidth:2,
    // borderColor: 'black'
  },
  newliststyle: {
    marginHorizontal : 20,
    marginVertical : 15,
    fontSize : 20,
    borderWidth : 1,
    borderColor : 'white',
    color : 'white',
    backgroundColor : 'white',
    paddingVertical: 10,
    paddingHorizontal : 10,
    flexDirection : 'row',
    justifyContent:'space-around'
  },
  imagestyle:{
    height : 300, 
    width : 330, 
    resizeMode:'contain'
  }
});

export default Titlelist;