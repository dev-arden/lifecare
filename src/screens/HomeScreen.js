import React from 'react';
import {Text, View, StyleSheet, Platform, KeyboardAvoidingView, SafeAreaView} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import {Button} from 'react-native-elements';

const HomeScreen = ({navigation}) => {
  return (
      <SafeAreaView style={{flex : 1}}>        
        <View style={styles.viewstyle}>
          <View>
            <Text style={styles.textstyle}>사전연명의료의향서</Text>
            <Text style={styles.textstyle}>상담매뉴얼</Text>
          </View>
          <View style={styles.buttonstyle}>
            <Button
              icon={
                <AntDesign
                  name="right"
                  size={15}
                  color="#4189D6"
                />
              }
              iconRight
              onPress={() => navigation.navigate('counseltype')}
              //raised
              title="시작하기"
              type="outline"
              titleStyle={styles.bttextstyle}
              buttonStyle={{borderWidth:1}}
            />
          </View>
        </View>
        </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  viewstyle: {
    flex :1,
    alignItems : 'center',
    justifyContent : 'center',
    // borderWidth : 2,
    // borderColor : 'red'
  },
  textstyle:{
    fontSize: 40,
    fontWeight : 'bold',
    alignSelf: 'center',
    marginBottom : 10,
    // borderWidth : 2,
    // borderColor : 'black'
  },
  buttonstyle : {
    marginTop: 100,
    alignSelf: 'stretch',
    marginHorizontal : 35
    // borderWidth : 2,
    // borderColor : 'black'
  },
  bttextstyle:{
    fontSize : 25,
    alignSelf:'center',
   
  }
});

export default HomeScreen;