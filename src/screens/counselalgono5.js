import React,{useState, useContext} from 'react';
import {Text,StyleSheet, View, LogBox,FlatList} from 'react-native';
import {Button} from 'react-native-elements';
import { TouchableOpacity } from 'react-native-gesture-handler';
import NumericInput from 'react-native-numeric-input';
import {Context} from '../context/BlessedContext';

const counselalgono5 = ({navigation}) => {
  const {state, addcount, addsum} = useContext(Context);
  let count = 0; let sum = 0;
  function init() {
    count = 0;
    sum = 0;
  };
  // const [count, setCount] = useState(0);
  // const [sum, setSum] = useState(0);

  return (
    <View>
      <Text>간이 검사 진행을 통해 표준, 인지 상담 분리</Text>
      <Text>문제 5</Text>
      <Button
        title = "다시 테스트하기" 
        onPress={() => init}
      />

      <FlatList 
        data={state}
        keyExtractor={(score) => score.id}
        renderItem={({ item }) => {
            count++            
            sum += parseInt(item.content)
            if(count === 4){
              return(
                <View>
                  <Text>{sum}</Text>
                </View>
              )
            }
          }
          //   return(
          //     <View>
          //       <Text>{item.content}  </Text>
          //       </View>
          //   )
          // }
        }
      />
    </View>
  )
};

const styles = StyleSheet.create({});

export default counselalgono5;