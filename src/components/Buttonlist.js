import React from 'react';
import {Text, TouchableOpacity, StyleSheet,View} from 'react-native';
import {Button} from 'react-native-elements';
import AntDesign from 'react-native-vector-icons/AntDesign';

const Buttonlist = ({title,navigation,routename}) => {
  return (
    <View>
          <Button 
            icon={
              <AntDesign
                name="right"
                size={15}
                color="#4189D6"
              />
            }
            iconRight
            type="outline"
            titleStyle = {styles.title}
            buttonStyle = {style=styles.button}
            title = {title}
            onPress = {() => navigation.navigate(routename)}
          />
        </View>
  );
};

const styles = StyleSheet.create({
  iconstyle:{
    alignSelf : 'center'
  },
  title:{
    fontSize : 23, 
    fontWeight : 'bold'
  },
  button:{
    alignSelf: 'stretch',
    marginHorizontal : 20,
    marginBottom : 15,
    borderWidth : 2,
  }
});

export default Buttonlist;