import React, {Component, useState} from 'react';
import {Text,StyleSheet, View} from 'react-native';
import {Button, ButtonGroup} from 'react-native-elements';

const counselalgo = ({navigation}) => {
  return (
    <View>
      <Text>counselalgo</Text>
      <Button 
        title="있음"
        onPressIn = {() => navigation.navigate('counselalgoyes')}
      />
      <Button 
        title="없음"
        onPressIn = {() => navigation.navigate('counselalgono')}
      />
    </View>
  )
};

const styles = StyleSheet.create({});

// class counselalgo extends Component{
//   state = {
//     selectedIndex: []
//   }

//   constructor () {
//     super()
//     this.state = {
//       selectedIndex: 2
//     }
//     this.updateIndex = this.updateIndex.bind(this)
//   }
  
//   updateIndex (selectedIndex) {
//     this.setState({selectedIndex})
//   }
  
//   render () {
//     const buttons = ['있음', '없음']
//     const { selectedIndex } = this.state

//     // let text = "";

//     // if (selectedIndex == 0) {
//     //   text = "우와";
//     // } else if(selectedIndex == 1) {
//     //   text = "와";
//     // }

//     return (
//       <ButtonGroup
//         onPress={this.updateIndex}
//         selectedIndex={selectedIndex}
//         buttons={buttons}
//         //containerStyle={{height: 100}}
//       />
//     )
//   }
// }


export default counselalgo;