import React from 'react';
import {Text, View, StyleSheet, Button, Platform, KeyboardAvoidingView, SafeAreaView} from 'react-native';

const HomeScreen = ({navigation}) => {
  return (
      <SafeAreaView style={{flex:1}}>
        <View>
          <Text>사전연명의료의향서</Text>
          <Text>상담매뉴얼</Text>
          <Button 
            title="시작하기"
            onPress = {() => navigation.navigate('counselhome')}
          />
        </View>
      </SafeAreaView>
  );
};

const styles = StyleSheet.create({});

export default HomeScreen;