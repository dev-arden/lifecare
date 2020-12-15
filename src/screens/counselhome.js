import React from 'react';
import {Text, View, StyleSheet,TouchableOpacity, FlatList} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const counselhome = ({navigation}) => {
  const type = [
    {
      id: '1',
      title : '상담 전 준비',
      nav : 'ready',
      icon : <MaterialCommunityIcons name="numeric-1-box" size={25} color="orange"/>
    },
    {
      id: '2',
      title: '등록기관 및 상담자 소개',
      nav : 'info',
      icon : <MaterialCommunityIcons name="numeric-2-box" size={25} color="orange"/>
    },
    {
      id: '3',
      title: '대상자 신분증 확인',
      nav : 'id',
      icon : <MaterialCommunityIcons name="numeric-3-box" size={25} color="orange"/>
    },
    {
      id: '4',
      title: '맞춤 상담 알고리즘',
      nav : 'algo',
      icon : <MaterialCommunityIcons name="numeric-4-box" size={25} color="orange"/>
    },
    {
      id: '5',
      title: '대상자에 따른 상담매뉴얼 선택',
      nav : 'type',
      icon : <MaterialCommunityIcons name="numeric-5-box" size={25} color="orange"/>
    }
  ];

  return (
    <View style = {styles.viewstyle}>
      <View>
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
  }
});

export default counselhome;