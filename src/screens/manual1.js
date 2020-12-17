import React from 'react';
import {Text, View, StyleSheet,TouchableOpacity, FlatList} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const manual1 = ({navigation}) => {
  const type = [
    {
      id: '1',
      title : '상담 전 준비',
      nav : 'ready',
      icon : <MaterialCommunityIcons name="numeric-1-box" size={25} color="orange"/>
    },
    {
      id: '2',
      title: '상담자 소개',
      nav : 'info',
      icon : <MaterialCommunityIcons name="numeric-2-box" size={25} color="orange"/>
    },
    {
      id: '3',
      title: '대상자 확인',
      nav : 'id',
      icon : <MaterialCommunityIcons name="numeric-3-box" size={25} color="orange"/>
    },
    {
      id: '4',
      title: '사전연명의료의향서 작성의미',
      nav : 'mean',
      icon : <MaterialCommunityIcons name="numeric-4-box" size={25} color="orange"/>
    },
    {
      id: '5',
      title: '사전연명의료의향서 내용설명',
      nav : 'talk',
      icon : <MaterialCommunityIcons name="numeric-5-box" size={25} color="orange"/>
    },
    {
      id: '6',
      title: '사전연명의료의향서 작성',
      nav : 'write',
      icon : <MaterialCommunityIcons name="numeric-6-box" size={25} color="orange"/>
    },
    {
      id: '7',
      title: '등록, 보관 및 통보',
      nav : 'enter',
      icon : <MaterialCommunityIcons name="numeric-7-box" size={25} color="orange"/>
    },
    {
      id: '8',
      title: '사전연명의료의향서 완료안내',
      nav : 'finish',
      icon : <MaterialCommunityIcons name="numeric-8-box" size={25} color="orange"/>
    }
  ];

  return (
    <View style={{flex:1}}>
      <View style = {styles.btboxview}>
        <Text style={styles.titlestyle} >
          상담 과정
        </Text>
      </View>
        <FlatList 
          keyExtractor = {(item)=> item.id}
          data = {type}
          renderItem={({item}) => 
            <TouchableOpacity onPress={() => navigation.navigate('counsel'+`${item.nav}`)}>
              <View style={styles.liststyle}>
                  <View style={{alignSelf:"center"}}>
                    {item.icon}
                  </View>
                  <Text style={{fontSize:18, color:'black', paddingHorizontal: 10, flex:1, alignSelf: 'center'}}>
                    {item.title}
                  </Text>
                  <View style={{alignSelf:"center"}}>
                    <AntDesign name="rightcircleo" size={20} color="grey"/>
                  </View>
              </View>
            </TouchableOpacity>
          }
        />
    </View>
  );
};

const styles = StyleSheet.create({
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
  titlestyle:{
    fontSize:25,
    fontWeight:'bold', 
    color:'black',
    // borderWidth: 1,
    // borderColor : 'black',
    alignSelf : 'center'
  },
});

export default manual1;