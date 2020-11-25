import { Dimensions, FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React, { Component } from 'react';

import { AntDesign } from '@expo/vector-icons';
import ChartLine from '../component/ChartLine';
import CommentButton from '../component/CommentButton';
import { Entypo } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import { useNavigation } from '@react-navigation/native';
import {useSelector} from 'react-redux'

const W=Dimensions.get("window").width;
const ChartDetail = ({route})=> {
  const data= useSelector(state=>{
    return state.post
})
  const navigation = useNavigation();
  const {total_comments,total_neg,total_neu,total_pos} = route.params;
  const p_neg=total_neg/total_comments*100;
  const p_neu=total_neu/total_comments*100;
  const p_pos=total_pos/total_comments*100;
    return (
        <View style={styles.container}>
        <View style={styles.top}>
          <View style={{width:Dimensions.get("screen").width,height:40,marginTop:50,flexDirection:"row"}}>
            <AntDesign name="arrowleft" size={24} color="white" onPress={()=>navigation.goBack()}/>
            <Text style={{color:"white",textAlign: 'center',fontSize: 18,marginLeft:115}}>Thống kê chi tiết</Text>
          </View>
          <ChartLine neg={total_neg} neu={total_neu} pos={total_pos} />
          {/* <Text style={styles.text}>Kết quả tỷ lệ phản hồi của từng ngày</Text> */}
        </View>
        <View style={styles.tagWrapper}>
          <View style={{width:W,height:80,justifyContent:"space-around",alignItems:"center",flexDirection:"row",marginTop:10,borderWidth:2,borderRadius:20,borderColor:"gray"}}>
            <View style={{alignItems:"center",justifyContent:"center"}}>
              <AntDesign name="heart" size={35} color="green" />
              <Text style={{color:"green",fontSize:25,fontWeight:"bold"}}>{p_pos.toFixed(1)}%</Text>
            </View>
            <View style={{alignItems:"center",justifyContent:"center"}}>
              <AntDesign name="meh" size={35} color="blue" />
              <Text style={{color:"blue",fontSize:25,fontWeight:"bold"}}>{p_neu.toFixed(1)}%</Text>
            </View>
            <View style={{alignItems:"center",justifyContent:"center"}}>
              <AntDesign name="dislike1" size={35} color="red" /> 
              <Text style={{color:"red",fontSize:25,fontWeight:"bold"}}>{p_neg.toFixed(1)}%</Text>
            </View>
          </View>
          <Text style={{paddingTop:10,paddingLeft:10,fontSize:20,fontWeight:"700",color:"gray"}}>Posts:</Text>
          <View style={{justifyContent:"space-around",alignItems:"center"}}>
            {/* <TouchableOpacity onPress={()=>console.log(comment[0].post_id)} style={{width:200,height:200,backgroundColor:"red"}}/> */}
            <FlatList
              data={data}
              renderItem={({item})=> {
                return <CommentButton textDetail={item.text} numberComments={item.post_id} neg={item.total_neg} neu={item.total_neu} pos={item.total_pos}/>
              }}
              keyExtractor={(item)=>item._id.$oid}
            />
            {/* <CommentButton textDetail={'Bình luận tích cực'} numberComments={total_pos} nav={()=>navigation.navigate('listcomment')}/>
            <CommentButton textDetail={'Bình luận trung tính'} numberComments={total_neu} nav={()=>navigation.navigate('listcomment')}/>
            <CommentButton textDetail={'Bình luận tiêu cực'} numberComments={total_neg} nav={()=>navigation.navigate('listcomment')}/> */}
          </View>
        </View>
      </View>           
    );
  }
const styles = StyleSheet.create({
  container:{
    flex:1,
  },
  top:{
    flex:5,
    backgroundColor:"#87CEFA",
    alignItems:"center",
    borderBottomStartRadius:25,
    borderBottomEndRadius:25
  },
    linearGradient:{
      width:(W*3)/4
    },
    text:{
        fontSize:16,
        fontWeight:"400",
        marginBottom:18,
        color:"white",
    },
    tagWrapper:{
      
      flex:5,
      borderRadius:15

    }
  });
export default ChartDetail;
