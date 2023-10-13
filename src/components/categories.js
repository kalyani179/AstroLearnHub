import { View, Text, TouchableOpacity, ScrollView } from 'react-native'
import React from 'react'
import { CategoriesData } from '../constants/CategoriesData'

export default function Categories() {
  return (
    <View>
      <View>
        <Text>Categories</Text>
        <TouchableOpacity>
            <Text>See All</Text>
        </TouchableOpacity>
      </View>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            {CategoriesData.map((category)=>{
                return(
                    <TouchableOpacity className="flex item-center">
                        <Image source={category.image}/>
                        <Text>{category.title}</Text>
                    </TouchableOpacity>
                )
            })}
      </ScrollView>
    </View>
  )
}