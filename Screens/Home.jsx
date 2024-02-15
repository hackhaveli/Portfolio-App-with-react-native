import { StyleSheet, View } from 'react-native';
import React from 'react';
import { Button,Appbar, Avatar,Text } from 'react-native-paper';
import SafeAreaViewAndroid from '../Components/SafeAreaViewAndroid';
import Register from './Register';

const Main = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Appbar style={{backgroundColor:'#2045d6'}}>
        <Appbar.Action icon="heart" color='white' onPress={()=>{console.log("Jai Shree Ram!")}}></Appbar.Action>
        <Appbar.Content title='Jai Shree Ram!' color='white' ></Appbar.Content>
        <Appbar.Action icon="account-circle-outline" color='white' onPress={()=>{console.log("Jai Shree Ram!")}}></Appbar.Action>
        <Appbar.Action icon="camera" color='white' onPress={()=>{console.log("Jai Shree Ram!")}}></Appbar.Action>
      </Appbar>
      <Text style={{ fontSize: 33, textAlign: 'center' ,color:'red'}}> Jai Shree Ram!</Text>
      <Avatar.Image source={require('./Untitled.jpeg')} size={160} style={{alignSelf:'center', marginTop:40 }}  />

      <Text variant="displaySmall" style={{ textAlign: 'center', marginTop: 18, color: '#3f3f3f' }}>About Me!</Text>
      <Text style={{fontSize:18, textAlign:'center',marginHorizontal: 60}}>👋 Hey there! I'm Rohit, a 16-Year-Old Web Whiz 🌐 | JavaScript | React | Node.js | PHP 🚀 | Founder & Chief Architect at CyberCrafters.io 💼 | Full Stack Developer in training 🔧</Text>

      <Button
        style={styles.Buttons}
        icon="camera"
        mode="contained"
        onPress={() => navigation.navigate('Register')}>
        Go Next Page!
      </Button>

    </View>
  );
};

const Home = ({ navigation }) => {
  return <SafeAreaViewAndroid Component={Main} navigation={navigation} />;
};

export default Home;

const styles = StyleSheet.create({
  container: {
    backgroundColor:'white',
    height: 1000,
  },
  Buttons: {
    borderRadius: 100,
    marginTop: 30,
    marginHorizontal:60,
  },
});
 