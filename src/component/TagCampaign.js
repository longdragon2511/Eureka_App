import { Dimensions, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

import { AntDesign } from '@expo/vector-icons';
import React from 'react';

const TagCampaign = ({navigation}) => {
    return(
    <TouchableOpacity onPress={()=>navigation.navigate('detail')}>
        <View style={styles.tag}>
        <AntDesign name="barschart" size={32} color="white" />
        <Text style={styles.text}>999 Phản hồi từ Strategy 1</Text>
        <AntDesign name="right" size={32} color="white" />
        </View>
    </TouchableOpacity>
    
);
}
const styles = StyleSheet.create({
    tag:{
     width:Dimensions.get("screen").width-10,
     height:60,
     backgroundColor:"rgb(47, 106, 196)",
     alignItems:"center",
     justifyContent:"space-between",
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
        color:"white",
        fontSize:16,
        fontWeight:"600"
    }
  });
export default TagCampaign;
