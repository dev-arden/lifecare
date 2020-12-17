import React from 'react';
import {View, StyleSheet} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import Textlist from '../components/Textlist';
import Titlelist from '../components/Titlelist';
import Checkicon from '../components/Checkicon';
import Buttonlist from '../components/Buttonlist';

/**
 * 
 *  저는 보건복지부 지정을 받은 사전연명의료의향서 등록기관인 [기관명] 소속 상담사이며, 의향서 작성을 돕고 있습니다. 
   [상담자 신분증과 등록기관 지정서 제시
 */

const counselmean3 = ({navigation}) => {
  return (
    <ScrollView>
      <View style = {styles.viewstyle}>
        <Titlelist
          title = "[연명의료]"
          imageSource = {require('../../assets/care1.png')} 
        />
        <View style={styles.liststyle}>
          <Checkicon />
          <View style={{flexDirection : 'column'}}>
            <Textlist
              text = "사전연명의료" 
            />
          </View>
        </View>
        <Buttonlist
          title = "다음"
          routename = "coumselmean4"
        />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
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
  }
});

export default counselmean3;