import React from 'react';
import {Text, Image, Views, StyleSheet} from 'react-native';

const App = () => {
  return (
    <View style={styles.pageContainer}>
    <View style={styles.card}>
      
      
      <Image
        source={{
          uri: 'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/avatars/vadim1.JPG',
        }}
        style={{height: 100, width: 250}}
      />
      <Text style={style.textContainer}> Hello World</Text>
    </View>
    </View>
  );
};

const style = StyleSheet.create({
  pageContainer: {
    justifyContent: "center",
    alighItems: "center",
    flex:1
  },
card: {
  width:95%,
  height: 50%,
  backgroundColor: "green",
  borderRadius: 10,
},
  image : {
    width: "100%", marginTop:"100%"
  }
})

export default App;
