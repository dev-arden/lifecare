import React from 'react';
import {Text, View, StyleSheet, Button} from 'react-native';

const eduhome = ({navigation}) => {
  return (
    <View>
      <Text>교육매뉴얼 메인페이지</Text>
      <Button 
        title="팜플렛 내용"
        onPress={()=>navigation.navigate('eduinfo')}
      />
      <Button 
        title="교육 영상"
        onPress={()=>navigation.navigate('eduvideo')}
      />
      <Button 
        title="교육 문제은행"
        onPress={()=>navigation.navigate('eduquiz')}
      />
    </View>
  );
};

const styles = StyleSheet.create({});

export default eduhome;