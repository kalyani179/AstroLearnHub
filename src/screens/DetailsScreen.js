import { View, Text, Image,SafeAreaView, TouchableOpacity } from 'react-native'
import React from 'react'

export default function Details(props) {
  const item = props.route.params;
  return (
    <SafeAreaView className="flex">
       <Image className="w-full rounded-b-full h-2/4" source={item.image}/>
      <Text className="font-bold text-center text-3xl mt-10">{item.title}</Text>
      <Text className="p-10 pr-5 pb-3 font-medium text-xl">{item.text}</Text>
      <TouchableOpacity className="rounded-3xl p-5 m-10 bg-amber-400">
        <Text className="text-center text-xl font-semibold">Know More About {item.title}</Text>
      </TouchableOpacity>
    </SafeAreaView>
  )
}