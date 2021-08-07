import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, Dimensions } from 'react-native';
import { GoogleLogin, GoogleLogout } from 'react-google-login';

const { width, height } = Dimensions.get('window');
class Login extends Component {
  render() {
    return (
      <View
        style={{
          flex: 1,
          backgroundColor: 'white',
          justifyContent: 'flex-end'
        }}
      >
        <View style={{ ...StyleSheet.absoluteFill }}>
          <Image
            source={require('../assets/bg.jpg')}
            style={{ flex: 1, height: null, width: null}}
            blurRadius={5}
          />
        </View>
        <View style={{height: 350}}>
            <View>
                <Image
                source={require('../assets/logo.png')}
                style={{width: 400, height: 150,marginRight:70}}
                
                />
            </View>
            <View style={{justifyContent: 'center'}}>
            <Text style={{ fontSize: 20, fontWeight: 'bold', color: 'black',width: 500, marginLeft:50, marginTop:10}}>
              LIFE SAVING  <Text style={{ fontSize: 20, fontWeight: 'bold', color: 'white',width: 500, marginLeft:150 }}>
              AMBULANCE SYSTEM
            </Text>
            </Text>
            
          </View>
        </View>
        <View style={{ height: height / 3, justifyContent: 'center' }}>
          <View style={styles.button}>
            <Text style={{ fontSize: 20, fontWeight: 'bold' }}>SIGN IN</Text>
          </View>
          <View style={{ ...styles.button, backgroundColor: '#2E71DC' }}>
            <Text style={{ fontSize: 20, fontWeight: 'bold', color: 'white' }}>
              SIGN IN WITH GOOGLE
            </Text>
          </View>
        </View>
      </View>
    );
  }
}
export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  button: {
    backgroundColor: 'white',
    height: 70,
    marginHorizontal: 20,
    borderRadius: 35,
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 5
  }
});