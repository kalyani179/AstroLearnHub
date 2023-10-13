import { View, Text, TouchableOpacity, ScrollView,Image } from 'react-native'
import React from 'react'
import { CategoriesData } from '../constants/CategoriesData'

export default function Categories() {
  return (
    <View>
      <View className="flex-row justify-between m-3">
        <Text className="font-medium text-xl text-gray-700">Categories</Text>
        <TouchableOpacity>
            <Text className="font-medium text-base text-orange-400">See All</Text>
        </TouchableOpacity>
      </View>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            {CategoriesData.map((category)=>{
                return(
                    <TouchableOpacity className="flex item-center m-3">
                        <Image className="w-20 h-20 mb-2 rounded-xl" source={category.image}/>
                        <Text className="m-1 text-center font-medium opacity-80">{category.title}</Text>
                    </TouchableOpacity>
                )
            })}
      </ScrollView>
    </View>
  )
}