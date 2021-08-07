import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Asset } from 'expo-asset';
import AppLoading from 'expo-app-loading';
import Login from './app/Login';
import { Provider } from 'react-redux';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { store } from './store';
import HomeScreen from './app/HomeScreen';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import MapScreen from './app/MapScreen';

function cacheImages(images) {
  return images.map(image => {
    if (typeof image === 'string') {
      return Image.prefetch(image);
    } else {
      return Asset.fromModule(image).downloadAsync();
    }
  });
}

const Stack = createStackNavigator();

export default class App extends React.Component{
  
  constructor(){
    super()
    this.state={
      isReady:false
    }
  }

  async _loadAssetsAsync() {  
    const imageAssets = cacheImages([require('./assets/bg.jpg')]);
    const fontAssets = cacheFonts([FontAwesome.font]);


    await Promise.all([...imageAssets, ...fontAssets]);
  }
  
  render(){
    if(!this.state.isReady){
      return (
        <AppLoading
        startAsync={this._loadAssestsAsync}
        onFinish={()=>this.setState({isReady:true})}
        onError={console.warn}
        />
      );
    }
    return (
      <Provider store={store}>
        
        <Login/>

        <NavigationContainer>
        <SafeAreaProvider>
          <Stack.Navigator>
            <Stack.Screen 
              name='HomeScreen'
              component={HomeScreen}
              options={{
                headerShown: false,
              }}
            />
            <Stack.Screen 
              name='MapScreen'
              component={MapScreen}
              options={{
                headerShown: false,
              }}
            />
          </Stack.Navigator>
        </SafeAreaProvider>
        </NavigationContainer>

      </Provider>
        
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
