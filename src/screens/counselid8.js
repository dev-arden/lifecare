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

const counselid8 = ({navigation}) => {
  return (
    <ScrollView>
      <View style = {styles.viewstyle}>
        <View style = {styles.btboxview}>
            <Text style={styles.titlestyle} >
              [동행인 동석 시]
            </Text>
        </View>
        <View style={styles.newliststyle}>
          <Image 
            source = {require('../../assets/divide.png')} 
            style ={{height : 250, width : 330, resizeMode:'contain'}}
          />
        </View>
        <View style={styles.liststyle}>
          <View style={{alignSelf:"center"}}>
            {/* {item.icon} */}
            <AntDesign name="check" size={25} color="blue"/>
          </View>
          <View style={{flexDirection : 'column'}}>
              <Text style={styles.textstyle}>
                사전연명의료의향서 작성은
              </Text>
              <Text style={styles.textstyle}>
                본인의 자발적인 의사로
              </Text>
              <Text style={styles.textstyle}>
                작성해야 하므로
              </Text>
              <Text style={styles.textstyle}>
                혹시라도 발생할 수 있는 
              </Text>
              <Text style={styles.textstyle}>
                동행인의 영향력을 차단하기 위해서 
              </Text>
              <Text style={styles.textstyle}>
                동행인과 분리하여  
              </Text>
              <Text style={styles.textstyle}>
                상담을 진행해야 합니다. 
              </Text>
              <Text style={styles.textstyle}>
                동행인은 잠시만 밖에서
              </Text>
              <Text style={styles.textstyle}>
                대기해 주신다면 감사하겠습니다.
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
                인지맞춤상담의 경우
              </Text>
              <Text style={styles.textstyle}>
                필요 시 동행인 동석
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
            onPress = {() => navigation.navigate('counselid9')}
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

export default counselid8;