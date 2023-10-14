import { View, Text, TouchableOpacity, ScrollView,Image } from 'react-native'
import React,{useState} from 'react'
import { AllData } from '../constants/AllData';
import {HeartIcon} from "react-native-heroicons/solid";
import { useNavigation } from '@react-navigation/native';
import Details from '../screens/DetailsScreen';

function Card({item}){
  const navigation = useNavigation();
  const [isFavourite,toggleFavourite] = useState(false);
  return(
    <View>
    <TouchableOpacity onPress={()=>navigation.navigate("Details",{...item})} className="mb-5">
    <Image className="w-44 h-72 rounded-3xl" source={item.image}/>
    <TouchableOpacity onPress={()=>toggleFavourite(!isFavourite)} className="absolute top-4 right-4">
      <HeartIcon color={isFavourite ? "red" : "white"} size={"30"}/>
    </TouchableOpacity>
    <Text className="absolute text-white font-semibold text-2xl mt-36 p-2">{item.title}</Text>
    <Text className="absolute text-white text-xs mt-44 pl-2 pt-4">{item.text}</Text>
  </TouchableOpacity>
  </View>
  )
}

export default function SortCategories() {
  const [activeTab,setActiveTab] = useState(1);
  function handleTabClick(tabNumber){
    setActiveTab(tabNumber);
  }
  return (
    <View>
      <View className="flex-row justify-between m-6 bg-gray-100 p-3 rounded-full">
          <TouchableOpacity onPress={()=>handleTabClick(1)} className={`${activeTab === 1 ? 'border-b border-orange-500' : ''}`}>
            <Text>All</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={()=>handleTabClick(2)} className={`${activeTab === 2 ? 'border-b border-orange-500' : ''}`}>
            <Text>Theories</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={()=>handleTabClick(3)} className={`${activeTab === 3 ? 'border-b border-orange-500' : ''}`}>
            <Text>Exploration</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={()=>handleTabClick(4)} className={`${activeTab === 4 ? 'border-b border-orange-500' : ''}`}>
            <Text>Space News</Text>
          </TouchableOpacity>
        </View>
      <View>
          {activeTab===1 && <View className="mx-3 flex-row flex-wrap justify-between">
           {
            AllData.map((all,index)=>{
              return(
                <Card item={all} key={index}/>
              )
            })
           }
          </View>}
          {activeTab===2 && <View>
            <Text>Hello</Text>
          </View>}
          {activeTab===3 && <View>
            <Text></Text>
          </View>}
          {activeTab===4 && <View></View>}
      </View>
    </View>
  )
}

