import { View, Text, TouchableOpacity } from 'react-native'
import React,{useState} from 'react'

export default function sortCategories() {
  const [activeTab,setActiveTab] = useState(1);

  function handleTabClick(tabNumber){
    setActiveTab(tabNumber);
  }
  return (
    <View>
      <TouchableOpacity onPress={handleTabClick(1)} className={`${activeTab === 1 ? 'active' : ''}`}>
        <Text>All</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={handleTabClick(2)} className={`${activeTab === 1 ? 'active' : ''}`}>
        <Text>Theories</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={handleTabClick(3)} className={`${activeTab === 1 ? 'active' : ''}`}>
        <Text>Exploration</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={handleTabClick(4)} className={`${activeTab === 1 ? 'active' : ''}`}>
        <Text>Space News</Text>
      </TouchableOpacity>
      <View>
          {activeTab===1 && <View></View>}
          {activeTab===2 && <View></View>}
          {activeTab===3 && <View></View>}
          {activeTab===4 && <View></View>}
      </View>
    </View>
  )
}