import React, { useState, useEffect }  from 'react';
import {Text, View, StyleSheet, TouchableOpacity, Button} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import AsyncStorage from '@react-native-async-storage/async-storage';

const counselready = () => {
  // const [bookmark, setBookmark] = useState('')
  // const STORAGE_KEY = '@save_bookmark'

  // const saveData = async () => {
  //   try {
  //     await AsyncStorage.setItem(STORAGE_KEY, bookmark)
  //     alert('Data successfully saved')
  //   } catch (e) {
  //     alert('Failed to save the data to the storage')
  //   }
  // }

  // const readData = async () => {
  //   try {
  //     const userAge = await AsyncStorage.getItem(STORAGE_KEY)
  
  //     if (userAge !== null) {
  //       setBookmark(bookmark)
  //     }
  //   } catch (e) {
  //     alert('Failed to fetch the data from storage')
  //   }
  // }

  // const clearStorage = async () => {
  //   try {
  //     await AsyncStorage.clear()
  //     alert('Storage successfully cleared!')
  //   } catch (e) {
  //     alert('Failed to clear the async storage.')
  //   }
  // }

  // useEffect(() => {
  //   readData()
  // }, [])

  // const onChangeText = userBookmark => setBookmark(userBookmark)

  // const onSubmitEditing = () => {
  //   if (!bookmark) return

  //   saveData(bookmark)
  //   setAge(bookmark)
  // }

  return (
    <View>
      <Text>상담매뉴얼 1 - 상담 전 준비</Text>
    </View>
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

const styles = StyleSheet.create({});

export default counselready;