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

const counselid10 = ({navigation}) => {
  return (
    <ScrollView>
      <View style = {styles.viewstyle}>
        <View style = {styles.btboxview}>
            <Text style={styles.titlestyle} >
              [상담일지]
            </Text>
        </View>
        
        <View style={styles.liststyle}>
          <View style={{alignSelf:"center"}}>
            {/* {item.icon} */}
            <AntDesign name="exclamationcircleo" size={25} color="black"/>
          </View>
          <View style={{flexDirection : 'column'}}>
              <Text style={styles.textstyle}>
                신분증 확인:
              </Text>
              <Text style={styles.textstyle}>
              사전연명의료의향서는 19세 이상{"\n"}본인이 직접 작성해야 하므로 신분증(주민등록증, 운전면허증, 여권 및 장애인 등록증, 외국인 등록증)을 확인함
              </Text>
              {/* <Text style={styles.textstyle}>
                3점 = 경도인지저하(mild)
              </Text>
              <Text style={styles.textstyle}>
                2점 = 중등도인지저하(moderate)
              </Text>
              <Text style={styles.textstyle}>
                1점 이하 = 중증도인지저하(severe)
              </Text> */}
          </View>
        </View>
        <View style={styles.liststyle}>
          <View style={{alignSelf:"center"}}>
            {/* {item.icon} */}
            <AntDesign name="exclamationcircleo" size={25} color="black"/>
          </View>
          <View style={{flexDirection : 'column'}}>
              <Text style={styles.textstyle}>
                맞춤상담 알고리즘
              </Text>
              <Text style={styles.textstyle}>
              효과적인 상담을 위해 대상자의 특성을 알고리즘에 따라 상담관련 불편한 점을 질문한 후, 없다고 대답한 경우 간편인지검사를 시행하고 총점 4점 중 3점 이상인 경우 표준상담매뉴얼로 상담을 진행하고 2점 이하인 경우 인지맞춤상담을 진행함. 기타 필요한 상담방법을 알고리즘에 따라 결정함.
              </Text>
          </View>
        </View>
        <View style={styles.liststyle}>
          <View style={{alignSelf:"center"}}>
            {/* {item.icon} */}
            <AntDesign name="exclamationcircleo" size={25} color="black"/>
          </View>
          <View style={{flexDirection : 'column'}}>
              <Text style={styles.textstyle}>
                개인정보 수집,이용 및 제3자 제공 동의서를 받음
              </Text>
              <Text style={styles.textstyle}>
              직접 작성이 어려운 경우 동행인의 도움을 받아 작성가능. 내담자가 자필서명이 불가한(신체적으로 불편하여 글씨를 쓸 수가 없는) 부득이한 사유가 있는 경우 서명 대신 작성자 본인의 뜻임을 확인할 수 있도록 녹화 또는 녹음에 대한 동의 후 시작 
              </Text>
          </View>
        </View>
        <View style={styles.liststyle}>
          <View style={{alignSelf:"center"}}>
            {/* {item.icon} */}
            <AntDesign name="exclamationcircleo" size={25} color="black"/>
          </View>
          <View style={{flexDirection : 'column'}}>
              <Text style={styles.textstyle}>
                동행인 분리상담
              </Text>
              <Text style={styles.textstyle}>
              가족 등 동행 시 상담은 동행인과 분리된 공간에서 시행하여 동행인의 영향력을 배제함. 부모, 형제, 자녀 등 가족이 대신하여 의향서를 작성할 수 없으며, 19세 미만은 의향서 작성이 불가함을 안내함. 특히, 가족의 의지에 의해 진행되지 않도록 주의함.
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
            title = "완료"
            onPress = {() => navigation.navigate('manual1')}
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

export default counselid10;