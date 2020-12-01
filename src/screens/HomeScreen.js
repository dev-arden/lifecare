import React from 'react';
import {Text, View, StyleSheet, Button, Platform, KeyboardAvoidingView, SafeAreaView} from 'react-native';

const HomeScreen = ({navigation}) => {
  return (
    <View style={styles.homestyle}>
      <SafeAreaView>
        <Text>사전연명의료의향서</Text>
        <Text>상담매뉴얼</Text>
        <Button 
          title="시작하기"
          onPress = {() => navigation.navigate('counselhome')}
        />
      </SafeAreaView>
    </View>
  );
};

const styles = StyleSheet.create({
  homestyle:{
    borderWidth: 10,
    borderColor : 'black',
    flex: 1,
    justifyContent: 'center'
  }
});

export default HomeScreen;