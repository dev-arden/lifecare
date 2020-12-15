import React from 'react';
import {Text,StyleSheet, View, FlatList, TouchableOpacity} from 'react-native';
import {Button} from 'react-native-elements';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Fontisto from 'react-native-vector-icons/Fontisto';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';

const counselalgoyes = ({navigation}) => {
  const type = [
    {
      id: '1',
      title: '시각장애인 상담매뉴얼',
      icon : <FontAwesome name="blind" size={30} />
    },
    {
      id: '2',
      title: '청각장애인 상담매뉴얼',
      icon : <FontAwesome5 name="deaf" size={30} />
    },
    {
      id: '3',
      title: '신체적장애 내담자 상담매뉴얼',
      icon : <MaterialCommunityIcons name="incognito" size={30} />
    },
    {
      id: '4',
      title: '인지기능 저하 내담자 상담매뉴얼',
      icon : <MaterialCommunityIcons name="brain" size={30} />
    },
    {
      id: '5',
      title: '비문해 상담매뉴얼',
      icon : <Ionicons name="language" size={30} />
    },
    {
      id: '6',
      title: '외국인 상담매뉴얼',
      icon : <Ionicons name="earth" size={30} />
    }
  ];


  return (
    <View>
      <FlatList 
        keyExtractor = {(item)=> item.id}
        data = {type}
        renderItem={({item}) => 
          <TouchableOpacity
            onPress={()=>navigation.navigate('manual'+`${item.id}`)}
            //style={{flexDirection:'row'}}
          >
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
  )
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

export default counselalgoyes;