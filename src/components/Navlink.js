import React from 'react';
import {Text, TouchableOpacity, StyleSheet,View} from 'react-native';
import Spacer from './Spacer';
import { withNavigation } from 'react-navigation';
import AntDesign from 'react-native-vector-icons/AntDesign';

const Navlink = ({navigation, text, routeName}) => {
  return (
    /*
    <TouchableOpacity 
        onPress={()=>navigation.navigate('Show',{id:item.id})}
      >
        <View style={styles.row}>
          <Text style={styles.title}>
            {item.title} - {item.id}
          </Text>
          <TouchableOpacity onPress={() => {deleteBlogPost(item.id), console.log(item.id)}}>
            <Feather style={styles.icon} name="trash" />
          </TouchableOpacity>
        </View>
      </TouchableOpacity>
    */
    <TouchableOpacity onPress={() => navigation.navigate(routeName)}>
      
       <View style={styles.row}>
          <Text style={styles.link}>
            {text}
          </Text>
          {/* <TouchableOpacity>
            onPress={() => {deleteBlogPost(item.id), console.log(item.id)}}
            <AntDesign style={styles.icon} name="staro" />
          </TouchableOpacity> */}
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