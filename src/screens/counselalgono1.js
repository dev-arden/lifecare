import React,{useState, useContext} from 'react';
import {Text,StyleSheet, View, LogBox,FlatList} from 'react-native';
import {Button} from 'react-native-elements';
import { TouchableOpacity } from 'react-native-gesture-handler';
import NumericInput from 'react-native-numeric-input';
import {Context} from '../context/BlessedContext';

LogBox.ignoreAllLogs(true);

const counselalgono1 = ({navigation}) => {
  const[content, setContent] = useState(0);
  const {state, addanswer} = useContext(Context);
  const id = 1;

  return (
    <View style= {styles.viewstyle}>
      <View>
        <Text>
          문제 1. 올해가 몇 년도인가요?
        </Text>
      </View>
        <NumericInput 
            minValue={0}
            maxValue={1}
            value={content}
            onChange={value => setContent(value)}
        />
    
      <Button 
        title="입력"
        onPress= {() => {
          addanswer(content,id, () => {
            navigation.navigate('counselalgono2');
          });
        }}
      />
    </View>
  )
};

const styles = StyleSheet.create({
  viewstyle:{
    justifyContent : 'center',
    flex : 1
  },
  textview:{
    backgroundColor : '#FDF6E3',
    justifyContent : 'space-around',
    padding : 15,
    margin : 15,
    height : 450,
    borderRadius : 20
    // borderWidth:2,
    // borderColor: 'black' 
  }, 
  text:{
    fontSize : 23
  },
  bttext : {
    fontSize : 23,
    alignSelf : 'center',
    // borderWidth:2,
    // borderColor: 'black'
  },
  btboxview:{
    backgroundColor : 'white',
    justifyContent : 'space-around',
    padding : 15,
    height : 150,
    margin : 15,
    borderRadius : 20,
    // borderWidth:2,
    // borderColor: 'black'
  },
  btview:{
    flexDirection : 'row',
    marginHorizontal : 15,
    justifyContent : 'space-around',
    // borderWidth:2,
    // borderColor: 'black'
  },
});

export default counselalgono1;