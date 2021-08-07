import React from 'react';
import { Text, View, SafeAreaView, Image } from 'react-native';
import { FlatList, TouchableOpacity } from 'react-native-gesture-handler';
import { Icon } from 'react-native-vector-icons/Icon';
import tw from "tailwind-react-native-classnames";
import { Icon } from 'react-native-elements';
import { useNavigation } from '@react-navigation/native';

const data = [
    {
        id: "123",
        title: "Book an Ambulance",
        screen: "MapScreen"
    }
]

const NavOptions = () => {
    const navigation = useNavigation();
    
    return (
        <FlatList 
            data={data}
            horizontal
            keyExtractor={ (item) => item.id }
            renderItem={({ item }) => (
                <TouchableOpacity
                    onPress={() => navigation.navigate( item.screen )}
                    style={tw`p-2 pl-6 pb-8 pt-4 bg-gray-200 m-2 w-40`}
                >
                    <View>
                        <Image 
                            style={{
                                width: 120,
                                height: 120,
                                resizeMode: "contain"
                            }}
                            source={ require('../assets/ambulance-logo.png') }
                        />
                    </View>
                    <Text style={tw`mt-2 text-lg font-semibold`}>{ item.title }</Text>
                    <Icon 
                        style={tw`p-2 bg-black rounded-full w-10 mt-4`}
                        name="arrowright"
                        color="white"
                        type="antdesign"
                    />
                </TouchableOpacity>
            )}
        />
    );
};

export default NavOptions
