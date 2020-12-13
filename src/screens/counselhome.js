import React from 'react';
import {Text, View, StyleSheet, Button, TouchableOpacity} from 'react-native';
import Navlink from '../components/Navlink';


const counselhome = ({navigation}) => {
  return (
    <View>
      <Navlink 
        text="1.상담 전 준비는 하셨나요?"
        routeName="counselready"
      />
      <Navlink 
        text="2.등록 기관 및 상담자 준비는 하셨나요?"
        routeName="counselinfo"
      />
      <Navlink 
        text="3.대상자 신분증은 확인하셨나요?"
        routeName="counselid"
      />
      <Button
        title="대상자에 따른 상담매뉴얼 선택"
        onPress={()=>navigation.navigate('counseltype')}
      />
    </View>
  );
};

const styles = StyleSheet.create({});

export default counselhome;