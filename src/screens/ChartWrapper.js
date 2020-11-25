import { Dimensions, StyleSheet, Text, View } from 'react-native';
import React, { Component } from 'react';

import { AntDesign } from '@expo/vector-icons';
import CircleChart from '../component/CircleChart';
import { LinearGradient } from 'expo-linear-gradient';
import TagCampaign from '../component/TagCampaign';

const W=Dimensions.get("window").width;
const ChartWrapper =({navigation})=> {
    return (
        <View style={styles.container}>
        <View style={styles.top}>
        <View style={{width:Dimensions.get("screen").width,height:40,marginTop:50,flexDirection:"row"}}>
            <AntDesign name="arrowleft" size={24} color="white" onPress={()=>navigation.goBack()}/>
            {/* <Text style={{color:"white",textAlign: 'center',fontSize: 18,marginLeft:115}}></Text> */}
        </View>
          <CircleChart/>
          <Text style={styles.text}>Kết quả tỷ lệ phản hồi của từng Strategy</Text>
        </View>
        <View style={styles.tagWrapper}>
            <TagCampaign/>
            <TagCampaign/>
            <TagCampaign/>   
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
    backgroundColor:"#0278ae",
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
      alignItems:"center",
      justifyContent:"center",
      width:W,
      height:324,
      borderRadius:15

    }
  });
  export default ChartWrapper;
