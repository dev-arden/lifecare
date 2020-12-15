import React, {Component, useState} from 'react';
import {Text,StyleSheet, View} from 'react-native';
import {Button, ButtonGroup} from 'react-native-elements';
import { ScrollView } from 'react-native-gesture-handler';
import AntDesign from 'react-native-vector-icons/AntDesign';

const counselalgo = ({navigation}) => {
  return (
    <ScrollView>
      <View style={{flex : 1, justifyContent : 'center'}}>
        <View style={styles.textview}>
          <Text style={styles.text}>
            저희는 OOO님께서
          </Text>
          <Text style={styles.text}>
            편안하게 상담받으시도록
          </Text>
          <Text style={styles.text}>
          다양한 방법으로
          </Text>
          <Text style={styles.text}>
          맞춤형 상담을 드리고 있습니다.
          </Text>
          <Text style={styles.text}>
          앞이 잘 안보이시거나,
          </Text>
          <Text style={styles.text}>
          소리가 잘 안들리시거나,
          </Text>
          <Text style={styles.text}>
          글을 잘 읽으실 수 없거나,
          </Text>
          <Text style={styles.text}>
          무엇이든지 불편한 점이 있으시면
          </Text>
          <Text style={styles.text}>
          알려주시기 바랍니다.
          </Text>
        </View>
        <View style= {styles.btboxview}>
          <View style={{marginBottom : 5}}>
            <Text style={styles.bttext}>
              환자에게 불편한 점이 있습니까?
            </Text>
          </View>
          <View style={styles.btview}> 
            <Button 
              icon={
                <AntDesign
                  name="right"
                  size={15}
                  color="#4189D6"
                />
              }
              iconRight
              title="있음"
              type="outline"
              onPressIn = {() => navigation.navigate('counselalgoyes')}
              buttonStyle = {styles.btyes}
              titleStyle = {{fontSize : 23, fontWeight : 'bold'}}
            />
            <Button 
              icon={
                <AntDesign
                  name="right"
                  size={15}
                  color="#4189D6"
                />
              }
              iconRight
              title="없음"
              type="outline"
              onPressIn = {() => navigation.navigate('counselalgono')}
              buttonStyle = {styles.btno}
              titleStyle = {{fontSize : 23 , fontWeight : 'bold'}}
            />
          </View>
        </View>
      </View>
    </ScrollView>
    )
};

/*
저희는 OOO님께서 편안하게 상담받으시도록 다양한 방법으로 맞춤형 상담을 드리고 있습니다. 
앞이 잘 안보이시거나, 소리가 잘 안들리시거나, 글을 잘 읽으실 수 없거나 
무엇이든지 불편한 점이 있으시면 알려주시기 바랍니다.

*/

const styles = StyleSheet.create({
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
  btyes :{
    // height : 100,
    // width : 150,
    borderWidth : 2,
    
  },
  btno : {
    // height : 100,
    // width : 150,
    borderWidth : 2
  }
});

export default counselalgo;