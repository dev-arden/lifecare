import React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import { WebView } from 'react-native-webview';
import { SafeAreaView } from 'react-navigation';


const eduvideo = () => {
  return (
    <SafeAreaView style={{flex:1}}>
      <View style={styles.videostyle}>
          <WebView 
            ref={this.webViewRef}
            allowsFullscreenVideo
            useWebKit
            onLoad={this.webViewLoaded}
            allowsInlineMediaPlayback
            mediaPlaybackRequiresUserAction
            javaScriptEnabled
            domStorageEnabled
            scrollEnabled={false}
            source={{uri:'https://www.youtube.com/embed/fgGg5D66t1w'}}
          />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  videostyle: {
    justifyContent: 'center',
    height: "50%",
    borderWidth:1,
    borderColor: 'black'
  }
});

export default eduvideo;