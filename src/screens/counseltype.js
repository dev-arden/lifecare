import React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

const counseltype = ({navigation}) => {
  return (
    <View>
      <Text>상담매뉴얼 4 - 대상자 선택</Text>
      <TouchableOpacity onPress={()=>navigation.navigate('counselnormal')}>
        <Text>일반 상담 매뉴얼</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({});

export default counseltype;