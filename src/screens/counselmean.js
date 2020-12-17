import React, { useState, useEffect }  from 'react';
import {Text, View, StyleSheet, TouchableOpacity, FlatList, Image} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { ScrollView } from 'react-native-gesture-handler';
import titlebar from '../components/titlebar';
import {Button} from 'react-native-elements'

/**
 * 
 *  저는 보건복지부 지정을 받은 사전연명의료의향서 등록기관인 [기관명] 소속 상담사이며, 의향서 작성을 돕고 있습니다. 
   [상담자 신분증과 등록기관 지정서 제시
 */

const counselmean = ({navigation}) => {
  return (
    <ScrollView>
      <View style = {styles.viewstyle}>
        <View style = {styles.btboxview}>
            <Text style={styles.titlestyle} >
              [작성의미]
            </Text>
        </View>
        <View style={styles.newliststyle}>
          <Image 
            source = {require('../../assets/wonder.png')} 
            style ={{height : 330, width : 330, resizeMode:'contain'}}
          />
        </View>
        <View style={styles.liststyle}>
          <View style={{alignSelf:"center"}}>
            {/* {item.icon} */}
            <AntDesign name="check" size={25} color="blue"/>
          </View>
          <View style={{flexDirection : 'column'}}>
              <Text style={styles.textstyle}>
                사전연명의료의향서를
              </Text>
              <Text style={styles.textstyle}>
                왜 작성하려고 하시나요?
              </Text>
              <Text style={styles.textstyle}>
                어떻게 아시게 되셨나요?
              </Text>
          </View>
        </View>
  
        <View>
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
            buttonStyle = {style=styles.buttonstyle}
            title = "다음"
            onPress = {() => navigation.navigate('counselmean2')}
          />
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  titlestyle:{
    fontSize:25,
    fontWeight:'bold', 
    color:'black',
    // borderWidth: 1,
    // borderColor : 'black',
    alignSelf : 'center'
  },
  btboxview:{
    flexDirection : 'row',
    backgroundColor : '#FDF6E3',
    height : 60,
    margin : 15,
    borderRadius : 20,
    //alignSelf: 'center',
    justifyContent : 'center',
    // borderWidth:2,
    // borderColor: 'black'
  },
  viewstyle:{
    flex:1,
    justifyContent : 'center'
  },
  liststyle: {
    marginHorizontal : 20,
    marginVertical : 15,
    fontSize : 20,
    borderWidth : 1,
    borderColor : 'white',
    color : 'white',
    backgroundColor : 'white',
    paddingVertical: 30,
    paddingHorizontal : 20,
    flexDirection : 'row'
  },
  newliststyle: {
    marginHorizontal : 20,
    marginVertical : 15,
    fontSize : 20,
    borderWidth : 1,
    borderColor : 'white',
    color : 'white',
    backgroundColor : 'white',
    paddingVertical: 10,
    paddingHorizontal : 10,
    flexDirection : 'row',
    justifyContent:'space-around'
  },
  textstyle:{
    fontSize:20,
    color:'black',
    paddingHorizontal: 10,
    flex:1,
    margin : 10
    //alignSelf: 'center'
  },
  buttonstyle : {
    alignSelf: 'stretch',
    marginHorizontal : 20,
    marginBottom : 15,
    borderWidth : 2,
    // borderColor : 'black'
  }
});

export default counselmean;