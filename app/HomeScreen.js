import React from 'react';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';
import tw from "tailwind-react-native-classnames";
import NavOptions from '../components/NavOptions';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import { GOOGLE_MAPS_APIKEY } from "@env";
import { ScreenContainer } from 'react-native-screens';

const HomeScreen = () => {

    return (
        <SafeAreaView style={tw`bg-white h-full`}>
            <View style={tw`p-5`}>
                <Image 
                    style={{
                        width: 100,
                        height: 100,
                        resizeMode: "contain"
                    }}
                    source={require('../assets/logo.png')}
                />

                <GooglePlacesAutocomplete 
                    placeholder="Where From?"
                    styles={{
                        container: {
                            flex: 0,

                        },
                        textInput: {
                            fontSize: 18,
                        }
                    }}
                    nearbyPlacesAPI="GooglePlacesSearch"
                    debounce={400}
                />

                <NavOptions />
            </View>

        </SafeAreaView>
    );
};

export default HomeScreen

const styles = StyleSheet.create({

})