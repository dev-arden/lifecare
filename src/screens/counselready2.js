import React, { useState, useEffect }  from 'react';
import {Text, View, StyleSheet, TouchableOpacity, FlatList} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { ScrollView } from 'react-native-gesture-handler';
import titlebar from '../components/titlebar';
import {Button} from 'react-native-elements'

const counselready2 = ({navigation}) => {
  return (
    <ScrollView>
      <View style = {styles.viewstyle}>
        <View style = {styles.btboxview}>
          <Text style={styles.titlestyle} >
            2 - 사전연명의료의향서 서식 준비
          </Text>
        </View>
        <View style={styles.liststyle}>
          <View style={{alignSelf:"center"}}>
            {/* {item.icon} */}
            <AntDesign name="check" size={25} color="blue"/>
          </View>
          <Text style={{fontSize:18, color:'black', paddingHorizontal: 10, flex:1, alignSelf: 'center'}}>
            문서 혹은 태블릿 PC(공동인증서)
          </Text>
        </View>

        <View style = {styles.btboxview}>
          <Text style={styles.titlestyle} >
            3 - 상담자용 물품 준비
          </Text>
        </View>
        <View style={styles.liststyle}>
          <View style={{alignSelf:"center"}}>
            {/* {item.icon} */}
            <AntDesign name="check" size={25} color="blue"/>
          </View>
          <Text style={{fontSize:18, color:'black', paddingHorizontal: 10, flex:1, alignSelf: 'center'}}>
            직원증(상담증)
          </Text>
        </View>

        <View style={styles.liststyle}>
          <View style={{alignSelf:"center"}}>
            {/* {item.icon} */}
            <AntDesign name="check" size={25} color="blue"/>
          </View>
          <Text style={{fontSize:18, color:'black', paddingHorizontal: 10, flex:1, alignSelf: 'center'}}>
            등록기관 지정서
          </Text>
        </View>

        <View style={styles.liststyle}>
          <View style={{alignSelf:"center"}}>
            {/* {item.icon} */}
            <AntDesign name="check" size={25} color="blue"/>
          </View>
          <Text style={{fontSize:18, color:'black', paddingHorizontal: 10, flex:1, alignSelf: 'center'}}>
            상담매뉴얼
          </Text>
        </View>

        <View style={styles.liststyle}>
          <View style={{alignSelf:"center"}}>
            {/* {item.icon} */}
            <AntDesign name="check" size={25} color="blue"/>
          </View>
          <Text style={{fontSize:18, color:'black', paddingHorizontal: 10, flex:1, alignSelf: 'center'}}>
            상담일지와 그림카드
          </Text>
        </View>

        <View style={styles.liststyle}>
          <View style={{alignSelf:"center"}}>
            {/* {item.icon} */}
            <AntDesign name="check" size={25} color="blue"/>
          </View>
          <Text style={{fontSize:18, color:'black', paddingHorizontal: 10, flex:1, alignSelf: 'center'}}>
            필기류
          </Text>
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
            onPress = {() => navigation.navigate('counselready3')}
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
  backgroundStyle:{
    marginTop: 10,
    backgroundColor: '#F0EEEE',
    height:50,
    borderRadius:5,
    marginHorizontal: 15,
    flexDirection: 'row',
    marginBottom: 10
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
  titleview:{
    backgroundColor : 'white',
    justifyContent : 'space-around',
    padding : 15,
    margin : 15,
    height : 80,
    borderRadius : 20
  },
  viewstyle:{
    flex:1,
    justifyContent : 'center'
  },
  link:{
    color: 'blue',
    fontSize : 20,
    //fontWeight : 'bold'
  },
  icon: {
    fontSize:25
  },
  btstyle:{
    fontSize:20
    //fontWeight: 'bold'
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
  buttonstyle : {
    alignSelf: 'stretch',
    marginHorizontal : 20,
    marginBottom : 15,
    borderWidth : 2,
    // borderColor : 'black'
  },
});

export default counselready2;