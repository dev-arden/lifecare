import React from 'react';
import {Text, View, StyleSheet, Button} from 'react-native';

const HomeScreen = ({navigation}) => {
  return (
    <View>
      <Text>HomeScreen</Text>
      <Button 
        title="start"
        onPress = {() => navigation.navigate('counselhome')}
      />
    </View>
  );
};

const styles = StyleSheet.create({});

export default HomeScreen;