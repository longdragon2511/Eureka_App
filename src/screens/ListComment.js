import { Dimensions, FlatList, ScrollView, StyleSheet, Text, View } from 'react-native'
import React, {useState} from 'react';

import Constants from "expo-constants";
import {useSelector} from 'react-redux'

// import {CardComment} from "../component/CardComment"
const W=Dimensions.get("screen").width;


const CardComment = (props) => {
    
    const setLabel=()=>{
        if(props.label==="negative"){
            return <Text style={{fontSize:20,fontWeight:"700",color:"red",marginRight:10,marginBottom:5}}>{props.label}</Text>
        }
        if(props.label==="positive"){
            return <Text style={{fontSize:20,fontWeight:"700",color:"green",marginRight:10,marginBottom:5}}>{props.label}</Text>
        }
        if(props.label==="neutral"){
            return <Text style={{fontSize:20,fontWeight:"700",color:"blue",marginRight:10,marginBottom:5}}>{props.label}</Text>
        }
        
    }
    return (
            <View style={styles.container}>
                <View style={{marginTop:5}}>
                <View style={{flexDirection:"row",justifyContent:"space-between",width:W-40,marginLeft:10}}>
                    <Text style={{fontSize:20,fontWeight:"700",color:"white"}}>Comment</Text> 
                    <Text style={{fontSize:20,fontWeight:"700",color:"white"}}>{props.time}</Text>
                </View>
                <View >
                    <Text style={{fontSize:15,fontWeight:"700",color:"white",marginLeft:10,width:W-40}}>{props.text}</Text>
                </View>
                <View style={{flexDirection:"row-reverse"}}>
                    {setLabel()}
                </View>
                </View> 
            </View>
       
    )
}
const ListComment = ({route}) => {
    const comment= useSelector(state=>{
        return state.comment
    })
    const [count,setCount]=useState(0);
    const convert=(datetime)=>{
        var d = new Date(datetime);
        var result= d.getDate() + '/' + (d.getMonth()+1) + '/' + d.getFullYear();
        return result;
      }
    const numberComment =()=>{
        setCount(count+1);
        return count;
    }
    return (
        <View style={{alignItems:"center",marginTop:Constants.statusBarHeight,}}>
            <ScrollView>
            <View style={{flexDirection:"row",justifyContent:"space-between"}}>
                <View style={{height:40,width:110,backgroundColor:"#2ECC40",alignItems:"center",justifyContent:"center"}}>
                    <Text style={styles.textontop}>Positive:{route.params?.pos}</Text>
                </View>
                <View style={{height:40,width:130,backgroundColor:"#0074D9",alignItems:"center",justifyContent:"center"}}>
                    <Text style={styles.textontop}>Neutrual:{route.params?.neu}</Text>
                </View>
                <View style={{height:40,width:130,backgroundColor:"#FF4136",alignItems:"center",justifyContent:"center"}}>
                    <Text style={styles.textontop}>Negative:{route.params?.neg}</Text>
                </View>
            </View>
            <FlatList
            data={comment}
            renderItem={({item})=>{
                return <CardComment
                    // num={numberComment()}
                    time={convert(item.date.$date)}
                    text={item.text}
                    label={item.label}
                />
               
            }} 
            keyExtractor={item=>item._id.$oid}           
            />
            </ScrollView>
            
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        marginTop:10,
        marginBottom:10,
        width:W-20,
        // height:100,
        backgroundColor:"#87CEEB",
        borderRadius:10,
        shadowColor: "#000",
shadowOffset: {
	width: 0,
	height: 7,
},
shadowOpacity: 0.41,
shadowRadius: 9.11,

elevation: 14,
    },
    textontop:{
        fontSize:17,
        fontWeight:"700",
        color:"white"
    }
  });
export default ListComment
