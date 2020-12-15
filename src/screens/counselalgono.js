import React,{useState, useContext} from 'react';
import {Text,StyleSheet, View, LogBox,FlatList} from 'react-native';
import {Button} from 'react-native-elements';
import { TouchableOpacity } from 'react-native-gesture-handler';
import NumericInput from 'react-native-numeric-input';
import {Context} from '../context/BlessedContext';

LogBox.ignoreAllLogs(true);

const counselalgono = () => {
  const[scoreone, setScoreone] = useState(0);
  const[scoretwo, setScoretwo] = useState(0);
  const[scorethree, setScorethree] = useState(0);
  const[scorefour, setScorefour] = useState(0);
  const {state, addscore} = useContext(Context);
  const[finalscore, setFinalscore] = useState(0);
  const id = 1;

  return (
    <View>
      <Text>간이 검사 진행을 통해 표준, 인지 상담 분리</Text>
      <Text>문제 1</Text>
        <NumericInput 
            value={scoreone}
            onChange={value => setScoreone(value)}  
        />
      
      <Text>문제 2</Text>
      <NumericInput 
          value={scoretwo}
          onChange={value => setScoretwo(value)}  
      />
      <Text>문제 3</Text>
      <NumericInput 
          value={scorethree}
          onChange={value => setScorethree(value)}  
      />
      <Text>문제 4</Text>
      <NumericInput 
          value={scorefour}
          onChange={value => setScorefour(value)}  
      />
      <Button
        title="점수확인"
        onPress = {() => addscore(id, scoreone, scoretwo, scorethree, scorefour, finalscore)}
      />
      <FlatList 
        data={state}
        keyExtractor={(answer) => answer.id}
        renderItem={({ item }) => {
          //item === our individual blogpost objects
          return ( 
            <View>
            <Text>
              {item.finalscore}
            </Text>
          </View>
          );
        }}
      />
    </View>
  )
};

const styles = StyleSheet.create({});

export default counselalgono;