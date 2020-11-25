import { Dimensions, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import {useDispatch, useSelector} from 'react-redux'

import React from 'react'
import { useNavigation } from '@react-navigation/native';

const W=Dimensions.get("screen").width;
const CardCampaign = (props) => {
    
    const campaign= useSelector(state=>{
        return state.campaign;
    })
    const a=()=>{
        for (let index = 0; index < campaign.length; index++) {
            if(campaign[index].name===props.name)
                return index;   
        }
    }
    const b=a();
    const navigation = useNavigation();
    const dispatch=useDispatch()
    const fetchData=()=>{
        fetch(`http://localhost:5000//post?campaign=${props.name} 
        `)
        .then(res=>res.json()) 
        .then(data=>{  
            // setLoading(false)
            console.log('my data',data)
            dispatch({type:"add_post",payload:data})
        })
        .then(() =>{
            // console.log("this is comment:",b);
        navigation.navigate("detail",{
            total_comments:campaign[b].total_comments,
            total_neg:campaign[b].total_neg,
            total_neu:campaign[b].total_neu,
            total_pos:campaign[b].total_pos})
            // navigation.navigate("detail",{total_comments:100,total_neg:30,total_neu:50,total_pos:20})
        }
        ) 
        
    }
    
    const setStatus=()=>{
        if(props.status=="done")
        {
            return <Text style={{fontSize:17,fontWeight:"700",color:"green"}}>{props.status}</Text>
        }
        else
        {
            return <Text style={{fontSize:17,fontWeight:"700",color:"red"}}>{props.status}</Text>
        }
    }
    return (
        // ()=>fetchData()
        <TouchableOpacity onPress={()=>fetchData()}> 
            <View style={styles.container}>
                <View style={{alignItems:"center",marginTop:10,justifyContent:"space-around"}}>
                <View style={{flexDirection:"row",justifyContent:"space-between",width:W-40}}>
                    <Text style={{fontSize:20,fontWeight:"700",color:"white"}}>{props.name}</Text>
                    {/* <View style={{width:20,height:20,backgroundColor:"white"}}></View> */}
                </View>
                <View style={{width:150,marginRight:202,marginTop:10}}>
                    <Text style={{fontSize:17,fontWeight:"700",color:"white"}}>Status: {setStatus()}</Text>
                </View>
                <View style={{flexDirection:"row",width:300,marginTop:20,marginRight:50}}>
                    <Text style={{fontSize:17,fontWeight:"700",color:"white"}}>From: {props.start}</Text>
                    <Text style={{fontSize:17,fontWeight:"700",color:"white",marginLeft:40}}>To: {props.end}</Text>
                </View>
                </View> 
            </View>
        </TouchableOpacity>
    )
}
const styles = StyleSheet.create({
    container: {
        marginTop:10,
        marginBottom:10,
        width:W-20,
        height:120,
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
  });
export default CardCampaign
