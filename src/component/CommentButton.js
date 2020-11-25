import { Dimensions, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

import { AntDesign } from '@expo/vector-icons';
import React from 'react';
import { useDispatch } from 'react-redux'
import {useNavigation} from '@react-navigation/native';

const CommentButton = (props) => {
    const dispatch = useDispatch()
    const navigation = useNavigation()
    const fetchData=()=>{
        fetch(`http://localhost:5000/comment?post_id=${props.numberComments} 
        `)
        .then(res=>res.json()) 
        .then(data=>{  
            // setLoading(false)
            console.log('my data',data)
            dispatch({type:"add_comment",payload:data})
        })
        .then(() =>{
            // console.log("this is comment:",b);
        navigation.navigate("listcomment",{neu:props.neu,neg:props.neg,pos:props.pos});
        }
        ) 
    }
    return(
    <TouchableOpacity onPress={()=>fetchData()}>
        <View style={styles.tag}>
        {/* <AntDesign name="barschart" size={32} color="green" /> */}
        <Text style={{fontSize:17,width:Dimensions.get("screen").width/2}} ellipsizeMode="tail" numberOfLines={3}>{props.textDetail}</Text>
        <AntDesign name="right" size={32} color="green" />
        </View>
    </TouchableOpacity>
    
);
}
const styles = StyleSheet.create({
    tag:{
     width:Dimensions.get("screen").width-20,
     height:100,
     backgroundColor:"white",
     alignItems:"center",
     justifyContent:"space-around",
     borderRadius:10,
     flexDirection:"row",
     marginBottom:20,
     shadowColor: "#000",
    shadowOffset: {
        width: 0,
        height: 5,
    },
    shadowOpacity: 0.34,
    shadowRadius: 6.27,

    elevation: 10,
    },
    text:{
        color:"green",
        fontSize:16,
        fontWeight:"600"
    }
  });
export default CommentButton;
