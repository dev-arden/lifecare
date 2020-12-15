import React, { useState, useEffect }  from 'react';
import {Text, View, StyleSheet, TouchableOpacity, FlatList} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { ScrollView } from 'react-native-gesture-handler';
import titlebar from '../components/titlebar';
import {Button} from 'react-native-elements'

/**
 * 
 * ◾ 상담실 환경: 개인상담전용실(2~5평), 테이블과 부드러운 등받이 의자(3~5개), 냉난방기와 온도점검, 소음점검, 따뜻한 조명과 밝은 계열의 커튼과 벽지, 정리정돈과 청결유지, 상담실 문 앞에 상담 중 표시      
◾ 사전연명의료의향서 서식: 문서 혹은 태블릿 PC(공동인증서)
◾ 상담자용 물품: 직원증(상담증), 등록기관 지정서, 상담매뉴얼, 상담일지와 그림카드, 필기류 
◾ 내담자용 물품: 안내책자, 리플릿
◾ 상담 전 다짐: 나는 내담자가 사전연명의료의향서를 충분히 이해하고 자발적으로 의사결정할 수 있도록 내담자의 특성을 반영한 맞춤형 상담을 제공할 것이다.
#D3CBB7 
*/

const counselready = ({navigation}) => {
  const type = [
    // {
    //   id: '1',
    //   title : '상담실 환경 준비',
    //   icon : <MaterialCommunityIcons name="numeric-1-box" size={25} color="orange"/>
    // },
    {
      id: '1',
      title : '개인상담전용실(2~5평)',
      icon : <MaterialCommunityIcons name="numeric-1-box" size={25} color="orange"/>
    },
    {
      id: '2',
      title: '테이블과 부드러운 등받이 의자(3~5개)',
      icon : <MaterialCommunityIcons name="numeric-2-box" size={25} color="orange"/>
    },
    {
      id: '3',
      title: '냉난방기와 온도점검',
      icon : <MaterialCommunityIcons name="numeric-3-box" size={25} color="orange"/>
    },
    {
      id: '4',
      title: '소음점검',
      icon : <MaterialCommunityIcons name="numeric-4-box" size={25} color="orange"/>
    },
    {
      id: '5',
      title: '따뜻한 조명과 밝은 계열의 커튼과 벽지',
      icon : <MaterialCommunityIcons name="numeric-5-box" size={25} color="orange"/>
    },
    {
      id: '6',
      title: '정리정돈과 청결유지',
      icon : <MaterialCommunityIcons name="numeric-6-box" size={25} color="orange"/>
    },
    {
      id: '7',
      title: '상담실 문 앞에 상담 중 표시',
      icon : <MaterialCommunityIcons name="numeric-7-box" size={25} color="orange"/>
    }
  ];


  return (
    <ScrollView>
      {/* <View style={styles.viewstyle}>
        <View style={styles.titleview}>
          <Text style={styles.texttitle}>1. 상담실 환경</Text>
        </View>
        <View style={styles.textview}>
          <Text style={styles.text}>개인 상담 전용실(2~5평)</Text>
          <Text style={styles.text}>테이블과 부드러운 등받이 의자(3~5개)</Text>
          <Text style={styles.text}>냉난방기와 온도점검</Text>
          <Text style={styles.text}>소음 점검</Text>
          <Text style={styles.text}>따뜻한 조명과 밝은 계열의 커튼과 벽지</Text>
          <Text style={styles.text}>정리 정돈과 청결 유지</Text>
          <Text style={styles.text}>문 앞에 상담 중 표시</Text>
        </View>
        <View style={styles.btboxview}>
        </View>
      </View> */}
    
    <View style = {styles.viewstyle}>
      <View style = {styles.btboxview}>
        <Text style={styles.titlestyle} >
          1 - 상담실 환경 준비
        </Text>
      </View>
      <View style={styles.liststyle}>
        <View style={{alignSelf:"center"}}>
          {/* {item.icon} */}
          <AntDesign name="check" size={25} color="blue"/>
        </View>
        <Text style={{fontSize:18, color:'black', paddingHorizontal: 10, flex:1, alignSelf: 'center'}}>
          개인상담전용실(2~5평)
        </Text>
      </View>

      <View style={styles.liststyle}>
        <View style={{alignSelf:"center"}}>
          {/* {item.icon} */}
          <AntDesign name="check" size={25} color="blue"/>
        </View>
        <Text style={{fontSize:18, color:'black', paddingHorizontal: 10, flex:1, alignSelf: 'center'}}>
          테이블과 부드러운 등받이 의자(3~5개)
        </Text>
      </View>

      <View style={styles.liststyle}>
        <View style={{alignSelf:"center"}}>
          {/* {item.icon} */}
          <AntDesign name="check" size={25} color="blue"/>
        </View>
        <Text style={{fontSize:18, color:'black', paddingHorizontal: 10, flex:1, alignSelf: 'center'}}>
          냉난방기와 온도점검
        </Text>
      </View>

      <View style={styles.liststyle}>
        <View style={{alignSelf:"center"}}>
          {/* {item.icon} */}
          <AntDesign name="check" size={25} color="blue"/>
        </View>
        <Text style={{fontSize:18, color:'black', paddingHorizontal: 10, flex:1, alignSelf: 'center'}}>
          소음점검
        </Text>
      </View>

      <View style={styles.liststyle}>
        <View style={{alignSelf:"center"}}>
          {/* {item.icon} */}
          <AntDesign name="check" size={25} color="blue"/>
        </View>
        <Text style={{fontSize:18, color:'black', paddingHorizontal: 10, flex:1, alignSelf: 'center'}}>
          따뜻한 조명과 밝은 계열의 커튼과 벽지
        </Text>
      </View>

      <View style={styles.liststyle}>
        <View style={{alignSelf:"center"}}>
          {/* {item.icon} */}
          <AntDesign name="check" size={25} color="blue"/>
        </View>
        <Text style={{fontSize:18, color:'black', paddingHorizontal: 10, flex:1, alignSelf: 'center'}}>
          정리정돈과 청결유지
        </Text>
      </View>

      <View style={styles.liststyle}>
        <View style={{alignSelf:"center"}}>
          <AntDesign name="check" size={25} color="blue"/>
        </View>
        <Text style={{fontSize:18, color:'black', paddingHorizontal: 10, flex:1, alignSelf: 'center'}}>
          상담실 문 앞에 상담 중 표시
        </Text>
      </View>
     
        {/* <FlatList 
          keyExtractor = {(item)=> item.id}
          data = {type}
          renderItem={({item}) => 
              <View style={styles.liststyle}>
                  <View style={{alignSelf:"center"}}>
                    {/* {item.icon} 
                    <AntDesign name="check" size={25} color="blue"/>
                  </View>
                  <Text style={{fontSize:18, color:'black', paddingHorizontal: 10, flex:1, alignSelf: 'center'}}>
                    {item.title}
                  </Text>
              </View>
          }
        /> */}
        
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
            onPress = {() => navigation.navigate('counselready2')}
          />
        </View>
      </View>
    </ScrollView>
  );
};

// counselready.navigationOptions = () => {
//   return {
//     headerRight: () => (
//       <TouchableOpacity>
//         <AntDesign name="staro" size={25}/>
//       </TouchableOpacity>
//     )
//   };
// };

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

export default counselready;