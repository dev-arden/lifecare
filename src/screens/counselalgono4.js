import React,{useState, useContext} from 'react';
import {Text,StyleSheet, View, LogBox,FlatList} from 'react-native';
import {Button} from 'react-native-elements';
import { TouchableOpacity } from 'react-native-gesture-handler';
import NumericInput from 'react-native-numeric-input';
import {Context} from '../context/BlessedContext';

const counselalgono4 = ({navigation}) => {
  const[content, setContent] = useState(0);
  const {state, addanswer} = useContext(Context);
  const id = 4;

  return (
    <View>
      <Text>간이 검사 진행을 통해 표준, 인지 상담 분리</Text>
      <Text>문제 4</Text>
        <NumericInput 
            minValue={0}
            maxValue={1}
            value={content}
            onChange={value => setContent(value)}
        />
    
      <Button 
        title="입력"
        onPress= {() => {
          addanswer(content, id,() => {
            navigation.navigate('counselalgono5');
          });
        }}
      />
    </View>
  )
};

const styles = StyleSheet.create({});

export default counselalgono4;