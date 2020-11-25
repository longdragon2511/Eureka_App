import { Dimensions, StyleSheet, Text, TouchableOpacity, View } from 'react-native'

import React from 'react'

const W=Dimensions.get("screen").width;
const CardComment = () => {
    
    return (
            <View style={styles.container}>
                <View style={{alignItems:"center",marginTop:10}}>
                <View style={{flexDirection:"row",justifyContent:"space-between",width:W-40}}>
                <Text style={{fontSize:20,fontWeight:"700",color:"white"}}>Campaign 1: </Text>
                {/* <View style={{width:20,height:20,backgroundColor:"white"}}></View> */}
                </View>
                </View> 
            </View>
       
    )
}
const styles = StyleSheet.create({
    container: {
        marginTop:10,
        marginBottom:10,
        width:W-20,
        height:100,
        backgroundColor:"#C4C4C4",
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
export default CardComment
