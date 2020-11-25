import { Dimensions, FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native'

import { AntDesign } from '@expo/vector-icons';
import CardCampaign from "../component/CardCampaign"
import Constants from "expo-constants"
import React from 'react';
import {useSelector} from 'react-redux'

const W=Dimensions.get("screen").width;

const Repository = ({navigation}) => {
  
  const campaign= useSelector(state=>{
    return state.campaign
})


const convert=(datetime)=>{
  var d = new Date(datetime);
  var result= d.getDate() + '/' + (d.getMonth()+1) + '/' + d.getFullYear();
  return result;
}

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={{flexDirection:"row",justifyContent:"space-between",alignItems:"center"}}>
          <Text style={{fontWeight:"700",fontSize:24}}>Repository</Text>
          <View style={{flexDirection:"row"}}>
            {/* <AntDesign name="plus" size={30} color="black" onPress={()=>navigation.navigate('Campaign')}/> */}
            <TouchableOpacity style={{width:50,height:30,backgroundColor:"#C4C4C4",alignItems:"center",justifyContent:"center",borderRadius:5}}
            onPress={()=>navigation.navigate('Campaign')}
          >
              <Text style={{color:"white",fontSize:15,fontWeight:"700"}}>Thêm</Text>
            </TouchableOpacity>
            {/* <TouchableOpacity style={{width:50,height:30,backgroundColor:"#C4C4C4",alignItems:"center",justifyContent:"center",borderRadius:5,marginLeft:10}}>
              <Text style={{color:"white",fontSize:15,fontWeight:"700"}}>Chọn</Text>
            </TouchableOpacity> */}
          </View>
        </View>
      </View>
      {/*
      <TouchableOpacity onPress={()=>navigation.navigate('wrapper')}>
                <View style={{width:150,height:60,borderWidth:4,borderColor:"white",justifyContent:"center",alignItems:"center",backgroundColor:"#C4C4C4",marginTop:30}}>
                  <Text style={{fontSize:18,fontWeight:"700",color:"white"}}>Compare</Text>
                </View>
      </TouchableOpacity> */}
      <FlatList
        showsHorizontalScrollIndicator={false}
        data={campaign}
        renderItem={({item})=>{
          return <CardCampaign
              name={item.name}
              nav={()=>navigation.navigate('detail')}
              start={convert(item.startTime.$date)}
              end={convert(item.endTime.$date)}
              status={item.status}
              // nav={()=>navigation.navigate("detail",{total_comments:item.total_comments,total_neg:item.total_neg,total_neu:item.total_neu,total_pos:item.total_pos})}
          />
        }}
        keyExtractor={item=>item._id.$oid}
      />
    </View>
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems:"center",
    marginTop:Constants.statusBarHeight
  },
  header:{
    height:40,
    width:W-10,
    borderBottomWidth:2,
    
  }
});
export default Repository


