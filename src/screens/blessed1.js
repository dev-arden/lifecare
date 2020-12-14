import React, {useState, useEffect,useContext} from 'react';
import {Text, View, StyleSheet, TextInput, TouchableOpacity, Button, FlatList, LogBox} from 'react-native';

import {Context} from '../context/BlessedContext';
import NumericInput from 'react-native-numeric-input'
import Feather from 'react-native-vector-icons/Feather';


const blessed1 = ({navigation}) => {
  const[score, setScore] = useState(0);
  const[content, setContent] = useState('');
  const {state, addanswer, showanswer} = useContext(Context);
  const id = 1; const volume=4;
  
  return (
    
    <View>
      <Text>1. 올해가 몇 년도입니까?</Text>
      <View style={{flexDirection:'row'}}>
        <Text>최대오류 1</Text>
        <Text>오류 </Text>
        <NumericInput 
          value={content}
          onChange={value => setContent(value)}  
        />
        <Text>비중</Text>
        <Text>점수소계 - {state.score} </Text>
      </View>
      <Button 
        title="입력" 
        onPress={() => {
          showanswer(content,id,score,volume); 
        }}
      />
      <Button 
        title="다음" 
        onPress={() => navigation.navigate('blessed2')}
      />
      

      <FlatList 
        data={state}
        keyExtractor={(answer) => answer.id}
        renderItem={({ item }) => {
          //item === our individual blogpost objects
          return ( 
            <View style={styles.row}>
            <Text style={styles.title}>
              {item.content} - {item.id} - {item.score}
            </Text>
            <TouchableOpacity onPress={() => console.log(item.id)}>
              <Feather style={styles.icon} name="trash" />
            </TouchableOpacity>
          </View>
          );
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 20,
    paddingHorizontal: 10,
    borderTopWidth:1,
    borderColor: 'gray'
  },
  title: {
    fontSize: 18
  },
  icon: {
    fontSize: 24
  }, 
  input:{
    fontSize:30,
    borderWidth:1, 
    borderColor:'red',
    textAlign:'center',
    alignSelf:'stretch'
  }

});

export default blessed1;