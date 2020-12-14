import React from 'react';
import {Text,View,StyleSheet,Button} from 'react-native';

const blessedmain = ({navigation}) => {
  return(
    <View style={styles.viewstyle}>
      <Text style={styles.third}>"이제 당신의 기억력과 집중력을 알아보기 위해 몇 개의 질문을 하겠습니다. 그 중에는 쉬운 것도 있고 어려운 것도 있습니다."</Text>
      <Text style={styles.fourth}>(환자가 즉시 그리고 암시 없이 스스로 잘못을 고치지 않는 한 첫번째 응답만을 기록한다. 모든 항목에 대한 무반응은 최대 실점으로 평가된다. 총점 0점은 실수가 없다는 것이고 총 28점은 최대 장애를 가리킨다.)</Text>
      <Button 
        title="다음"
        onPress={() => navigation.navigate('blessed1')}
      />
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
  third: {
    borderWidth: 1,
    borderColor: 'black',
    fontSize: 25
  },
  fourth: {
    borderWidth: 1,
    borderColor: 'black',
    fontSize: 25
  }
});

export default blessedmain;