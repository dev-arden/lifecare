import React, {useState, useEffect,useContext} from 'react';
import {Text, View, StyleSheet, TextInput, TouchableOpacity, Button, FlatList} from 'react-native';
import {Context} from '../context/BlessedContext';
import Feather from 'react-native-vector-icons/Feather';
import { ScrollView } from 'react-native-gesture-handler';

const blessed10 = ({navigation}) => {
  const[content, setContent] = useState('');
  const {state, addanswer} = useContext(Context);
  const id = 10;
  let sum = 0;
 

  return (
   <View> 
    
      
        <Text>메뉴 스크랩</Text>
        <Text style={styles.label}>Enter Content:</Text>
        <TextInput 
          style={styles.input} 
          value={content} 
          onChangeText={text => setContent(text)}
        />
        <Button 
          title="입력" 
          onPress={() => 
            addanswer(content, id)
          }
        />
        
        <FlatList 
          data={state}
          keyExtractor={(answer) => answer.id}
          renderItem={({ item }) => {
            //item === our individual blogpost objects
            //sum += parseInt(item.content)
            switch(item.id) {
              case '1':{
                sum = sum +  parseInt(item.content) * 4
                break
              }
              case '2':{
                sum = sum +  parseInt(item.content) * 3
                break
              }
              case '3':{
                sum = sum +  parseInt(item.content) * 3
                break
              }
              case '4':{
                sum = sum +  parseInt(item.content) * 2
                break
              }
              case '5':{
                sum = sum +  parseInt(item.content) * 2
                break
              }
              case '6':{
                sum = sum +  parseInt(item.content) * 2
                break
              }
              case '7':{
                sum = sum +  parseInt(item.content) * 4
                break
              }
              case '8':{
                sum = sum +  parseInt(item.content) * 4
                break
              }
              case '9':{
                sum = sum +  parseInt(item.content) * 4
                break
              }
              case '10':{
                sum = sum +  parseInt(item.content) * 4
                break
              }
            }
            return (
               
              <View style={styles.row}>
              <Text style={styles.title}>
                {item.content} - {item.id} - {sum} 
              </Text>
              <TouchableOpacity onPress={() => console.log(item.id)}>
                <Feather style={styles.icon} name="trash" />
              </TouchableOpacity>
            </View>
            
            );
          }}
        />

       

      
      {/* <TextInput 
          onChangeText={text => setAnswer(text)}
          value={answer}
          style={{fontSize:30,borderWidth:1, borderColor:'red',textAlign:'center',alignSelf:'stretch'}} 
          placeholder="Enter answer" 
      />
        
      <Button 
        title="next"
        onPress={() => 
          navigation.navigate('blessed2')
        }
      /> */}
    
    
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

export default blessed10;