import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View, Button, Alert, Pressable } from 'react-native';

export default function App() {
  let [num, setNum] = useState(0)
  return (
    <View style={styles.container}>
      <Text style={{fontSize:50}}>{num}</Text>
      <Pressable
        style={{
          //width:50,
          //height:50,
          borderRadius:50,
          backgroundColor:'grey',
          justifyContent:'center',
          alignItems:'center',
          marginTop:10,
          padding:20,
          fontSize:25,
          fontWeight:'bold'
        }}
        onPress={()=>{setNum(num+1)}}
      >
      +
      </Pressable>
    </View>
  );
}

let styles = StyleSheet.create({
  container:{
    flex:1,
    justifyContent:'center',
    alignItems:'center',
    backgroundColor:'pink'
  }
})
