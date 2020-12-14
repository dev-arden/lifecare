import React from 'react';
import {Text, View, StyleSheet,TouchableOpacity} from 'react-native';
import Navlink from '../components/Navlink';
import counselready from './counselready';
import {Button} from 'react-native-elements'
import AntDesign from 'react-native-vector-icons/AntDesign';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const counselhome = ({navigation}) => {
  return (
    <View style = {styles.viewstyle}>
      {/* <Navlink 
        text="1.상담 전 준비는 하셨나요?"
        routeName="counselready"
      />
      <Navlink 
        text="2.등록 기관 및 상담자 준비는 하셨나요?"
        routeName="counselinfo"
      />
      <Navlink 
        text="3.대상자 신분증은 확인하셨나요?"
        routeName="counselid"
      /> */}
      
        {/* <TouchableOpacity onPress={() => navigation.navigate(counselready)}>
          <View style={styles.row}>
              <Text style={styles.link}>1. 상담 전 준비는 하셨나요?</Text>
            </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate(counselready)}>
          <View style={styles.row}>
              <Text style={styles.link}>
                2.등록 기관 및 상담자 준비는 하셨나요?
              </Text>
            </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate(counselready)}>
          <View style={styles.row}>
              <Text style={styles.link}>
                3.대상자 신분증은 확인하셨나요?
              </Text>
            </View>
        </TouchableOpacity> */}



        <TouchableOpacity onPress={() => navigation.navigate('counselready')}>
          <View style={styles.liststyle}>
              <View style={{alignSelf:"center"}}>
                {/* <FontAwesome5 name="lightbulb" size={20} color="orange"/> */}
                <MaterialCommunityIcons name="numeric-1-box" size={25} color="orange"/>
              </View>
              <Text style={{fontSize:18, color:'black', paddingHorizontal: 10, flex:1, alignSelf: 'center'}}>
                상담 전 준비는 하셨나요?
              </Text>
              <View style={{alignSelf:"center"}}>
                <AntDesign name="rightcircleo" size={20} color="grey"/>
              </View>
            </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('counselready')}>
          <View style={styles.liststyle}>
              <View style={{alignSelf:"center"}}>
                {/* <FontAwesome5 name="lightbulb" size={20} color="orange"/> */}
                <MaterialCommunityIcons name="numeric-2-box" size={25} color="orange"/>
              </View>
              <Text style={{fontSize:18, color:'black', paddingHorizontal: 10, flex:1, alignSelf:'center'}}>
                등록 기관 및 상담자 준비는 하셨나요?
              </Text>
              <View style={{alignSelf:"center"}}>
                <AntDesign name="rightcircleo" size={20} color="grey"/>
              </View>
            </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('counselready')}>
          <View style={styles.liststyle}>
               <View style={{alignSelf:"center"}}>
                {/* <FontAwesome5 name="lightbulb" size={20} color="orange"/> */}
                <MaterialCommunityIcons name="numeric-3-box" size={25} color="orange"/>
              </View>
              <Text style={{fontSize:18, color:'black', paddingHorizontal: 10, flex:1, alignSelf:'center'}}>
                대상자 신분증은 확인하셨나요?
              </Text>
              <View style={{alignSelf:"center"}}>
                <AntDesign name="rightcircleo" size={20} color="grey"/>
              </View>
            </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('counselready')}>
          <View style={styles.liststyle}> 
              <View style={{alignSelf:"center"}}>
                {/* <FontAwesome5 name="lightbulb" size={20} color="orange"/> */}
                <MaterialCommunityIcons name="numeric-4-box" size={25} color="orange"/>
              </View>
              <Text style={{fontSize:18, color:'black', paddingHorizontal: 10, flex:1, alignSelf:'center'}}>
                대상자에 따른 상담매뉴얼 선택
              </Text>
              <View style={{alignSelf:"center"}}>
                <AntDesign name="rightcircleo" size={20} color="grey"/>
              </View>
            </View>
        </TouchableOpacity>
      
      {/* <Button
        title="대상자에 따른 상담매뉴얼 선택"
        onPress={()=>navigation.navigate('counseltype')}
        type="outline"
        titleStyle={styles.btstyle}
        buttonStyle={{borderWidth : 1,  marginVertical: 30}}
      />
       */}
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
  row: {
    flexDirection: 'row',
    paddingVertical: 30,
    paddingHorizontal: 10,
    // borderTopWidth:1,
    // borderBottomWidth:1,
    //borderWidth : 1,
    //marginHorizontal : 10,
    borderColor: 'gray',
    marginVertical: 30
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