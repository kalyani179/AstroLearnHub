import { View,Image,Text,SafeAreaView,TouchableOpacity } from 'react-native'
import React from 'react';
import { useNavigation } from "@react-navigation/native";
import getPixels from "../components/components";
import slides from '../constants/WelcomeSlideData';

export default function WelcomeScreen() {
    const navigation = useNavigation();
    const WelcomeContent = slides[0];
  return (
        <SafeAreaView className="flex-1 justify-end">
            <Image source={WelcomeContent.image} className="absolute h-full w-full"/>
            <View className="bg-transparent">
                <View className="flex gap-2 p-6 pb-7">
                    <Text className="text-white text-5xl font-bold opacity-85">{WelcomeContent.title}</Text>
                    <Text className="text-white font-medium leading-5 opacity-60">{WelcomeContent.text}</Text>
                </View>
                <TouchableOpacity className="bg-white p-3 m-6 mt-1 rounded-full opacity-90" onPress={()=>navigation.navigate("Home")}>
                    <Text className="text-gray text-2xl font-bold text-center opacity-80">LAUNCH NOW</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
  )
}