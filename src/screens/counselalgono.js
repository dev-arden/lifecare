import React,{useState, useContext} from 'react';
import {Text,StyleSheet, View, LogBox,FlatList} from 'react-native';
import {Button} from 'react-native-elements';
import { ScrollView } from 'react-native-gesture-handler';
import AntDesign from 'react-native-vector-icons/AntDesign';


const counselalgono = ({navigation}) => {
  /**
   * 다음은 간편하게 OOO님의 판단력을 알아보겠습니다. 다음의 질문에 대답해주세요.
   * 
   * 
   */
  return (
    <ScrollView>
    <View style={styles.viewstyle}>
      <View style = {styles.textview}>
        <Text style = {styles.text}>다음은 간편하게</Text>
        <Text style = {styles.text}>OOO님의 판단력을</Text>
        <Text style = {styles.text}>알아보겠습니다.</Text>
        <Text style = {styles.text}>다음의 질문에 대답해주세요.</Text>
      </View>
      <View style={styles.btboxview}>
        <View style={{marginBottom : 5}}>
          <Text style={styles.bttext}>
            검사하시겠습니까?
          </Text>
        </View>
        <View style={{alignContent:'center'}}>
          <Button 
            icon={
              <AntDesign
                name="right"
                size={15}
                color="#4189D6"
              />
            }
            iconRight
            type="outline"
            titleStyle = {{fontSize : 23, fontWeight : 'bold'}}
            buttonStyle = {{alignSelf : 'center', borderWidth :2}}
            title = "검사하기"
            onPress = {() => navigation.navigate('counselalgono1')}
          />
        </View>
      </View>
    </View>
  </ScrollView>
  )
};

const styles = StyleSheet.create({
  viewstyle:{
    justifyContent : 'center',
    flex : 1
  },
  textview:{
    backgroundColor : '#FDF6E3',
    justifyContent : 'space-around',
    padding : 15,
    margin : 15,
    height : 450,
    borderRadius : 20
    // borderWidth:2,
    // borderColor: 'black' 
  }, 
  text:{
    fontSize : 23
  },
  bttext : {
    fontSize : 23,
    alignSelf : 'center',
    // borderWidth:2,
    // borderColor: 'black'
  },
  btboxview:{
    backgroundColor : 'white',
    justifyContent : 'space-around',
    padding : 15,
    height : 150,
    margin : 15,
    borderRadius : 20,
    // borderWidth:2,
    // borderColor: 'black'
  },
  btview:{
    flexDirection : 'row',
    marginHorizontal : 15,
    justifyContent : 'space-around',
    // borderWidth:2,
    // borderColor: 'black'
  },
});

export default counselalgono;