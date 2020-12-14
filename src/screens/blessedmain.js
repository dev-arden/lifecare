import React from 'react';
import {Text,View,StyleSheet,Button,TouchableOpacity} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';

const blessedmain = ({navigation}) => {
  return(
    <View style={styles.viewstyle}>
      {/* <View>
        <Text style={styles.first}>한국어판 간이 Blessed 검사</Text>
      </View>
      <View>
        <Text style={styles.second}>(The Korean version of Short Blessed Test : SBT -K)</Text>
      </View>
      <View>
        <Text>"이제 당신의 기억력과 집중력을 알아보기 위해 몇 개의 질문을 하겠습니다. 그 중에는 쉬운 것도 있고 어려운 것도 있습니다."</Text>
      </View>
      <View>
      <Text>(환자가 즉시 그리고 암시 없이 스스로 잘못을 고치지 않는 한 첫번째 응답만을 기록한다. 모든 항목에 대한 무반응은 최대 실점으로 평가된다. 총점 0점은 실수가 없다는 것이고 총 28점은 최대 장애를 가리킨다.)</Text>
      </View> */}
      <Text style={styles.first}>한국어판 간이 Blessed 검사</Text>
      <Text style={styles.second}>(The Korean version of Short Blessed Test : SBT -K)</Text>
      <Button 
        title="다음"
        onPress={() => navigation.navigate('blessedmain2')}
      />
      <View style = {styles.buttonstyle}>
        <TouchableOpacity
          onPress={() => navigation.navigate('blessedmain2')}
          //style = {}
        >
          <Text style={styles.textstyle}>다음</Text>
          <AntDesign name="right" size={25}/>
        </TouchableOpacity>
      </View>
      {/* <Text style={styles.third}>"이제 당신의 기억력과 집중력을 알아보기 위해 몇 개의 질문을 하겠습니다. 그 중에는 쉬운 것도 있고 어려운 것도 있습니다."</Text>
      <Text style={styles.fourth}>(환자가 즉시 그리고 암시 없이 스스로 잘못을 고치지 않는 한 첫번째 응답만을 기록한다. 모든 항목에 대한 무반응은 최대 실점으로 평가된다. 총점 0점은 실수가 없다는 것이고 총 28점은 최대 장애를 가리킨다.)</Text> */}
    </View>
  )
};

const styles = StyleSheet.create({
  viewstyle: {
    flex:1,
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: 'red'
  },
  first:{
    alignSelf: 'center',
    borderWidth: 1,
    borderColor: 'black',
    fontSize : 25
  },
  second : {
    alignSelf: 'center',
    borderWidth: 1,
    borderColor: 'black',
    fontSize : 15
  },
  buttonstyle:{
    borderWidth: 1,
    borderColor: 'black',
    backgroundColor: '#F0EEEE',
    height:50,
    borderRadius:5,
    marginHorizontal: 15,
    flexDirection: 'row',
    marginBottom: 10
  },
  textstyle:{
    fontSize: 25
  }
});

export default blessedmain;