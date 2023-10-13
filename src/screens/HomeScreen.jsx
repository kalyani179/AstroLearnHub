import { SafeAreaView, View, Text, ScrollView,Image, TouchableOpacity, TextInput } from 'react-native'
import React from 'react'
import slides from '../constants/WelcomeSlideData';

export default function HomeScreen() {
  const HomeContent = slides[1];
  return (
   
    <SafeAreaView className="flex-1 bg-white">
      <ScrollView showsVerticalScrollIndicator={false}>

        <View className="m-5 mt-16 flex-row justify-between">
            <Text className="font-bold text-3xl opacity-80">Let's Discover</Text>
            <Image className="-mt-2 h-14 w-14" source={HomeContent.avatar}></Image>
        </View>

        <View>
          <TouchableOpacity className="m-5 p-4 bg-neutral-100 rounded-full">
          
            <TextInput placeholder='Search Here' className="font-medium text-gray-300" />
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}