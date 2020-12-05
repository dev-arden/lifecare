import React from 'react';
import {Text, View, StyleSheet, FlatList} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

const counseltype = ({navigation}) => {
  const type = [
    {
      id: '1',
      title: '일반 상담매뉴얼',
      icon : <Ionicons name="man" size={25} />
    },
    {
      id: '2',
      title: '시각장애인 상담매뉴얼',
      icon : <FontAwesome name="blind" size={25} />
    },
    {
      id: '3',
      title: '청각장애인 상담매뉴얼',
    },
    {
      id: '4',
      title: '청력저하 고령자 상담매뉴얼',
    },
    {
      id: '5',
      title: '신체적장애 내담자 상담매뉴얼',
    },
    {
      id: '6',
      title: '인지기능 저하 내담자 상담매뉴얼',
    },
    {
      id: '7',
      title: '외국인 상담매뉴얼',
    },
    {
      id: '8',
      title: '문맹 상담매뉴얼',
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
          >
            {item.icon}
            <Text>{item.title}</Text>
          </TouchableOpacity>
        }
      />
    </View>
  );
};

const styles = StyleSheet.create({});

export default counseltype;