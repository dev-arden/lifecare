import React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import { WebView } from 'react-native-webview';


const eduvideo = (props) => {
  return (
    <View>
      <Text>교육 매뉴얼 - 동영상 삽입</Text>
      {/* <WebView
        ref={this.webViewRef}
        allowsFullscreenVideo
        useWebKit
        onLoad={this.webViewLoaded}
        allowsInlineMediaPlayback
        mediaPlaybackRequiresUserAction
        javaScriptEnabled
        scrollEnabled={false}
        //https://www.youtube.com/watch?v=fgGg5D66t1w
        source={{ uri: 'https://www.youtube.com/embed/fgGg5D66t1w' }}
      /> */}
      {/* <WebView
        source={{ uri: 'https://www.youtube.com/embed/mXRfApkMYZU' }}
        javaScriptEnabled={true}
        domStorageEnabled={true}   
      /> */}
      {/* <WebView
        style={{flex:1}}
        javaScriptEnabled={true}
        source={{uri: 'https://www.youtube.com/embed/fgGg5D66t1w?rel=0&autoplay=0&showinfo=0&controls=0&fullscreen=1'}}
      /> */}
      <View style={{
            height: 500,
            borderWidth:1,
            borderColor: 'black'
          }}>
        <WebView 
          ref={this.webViewRef}
          allowsFullscreenVideo
          useWebKit
          onLoad={this.webViewLoaded}
          allowsInlineMediaPlayback
          mediaPlaybackRequiresUserAction
          javaScriptEnabled
          scrollEnabled={false}
          source={{uri:'https://www.youtube.com/embed/fgGg5D66t1w'}}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({});

export default eduvideo;