import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {  View, Text,TextInput, TouchableHighlight, StyleSheet ,Dimensions ,  Image} from 'react-native'
import Donut from './Donut'
export default function StatsCard({color,title,value,total}) {

console.log();
  return (

    <View style={styles.card}> 
        <View style={styles.leftContainer}>
        <Donut key={title} percentage={Math.round((parseInt(value)/total)*100)} delay={1000} color={color} />
        </View>
        <View style={styles.rightContainer}>
            <Text style={{color:"#B5B6B9",letterSpacing:0.05,fontWeight:"100",fontWeight:"400" ,lineHeight: 35,}}>{title}</Text>
            <Text style={{color:"#212237",fontSize:38,fontWeight:"bold", lineHeight: 40,}}>{value}</Text>
        </View>
    </View>

  );
}

const styles = StyleSheet.create({

 card:{
     height:100,
     width:190,
     backgroundColor:"#FFFCFF",
     borderRadius:10,
     flexDirection:"row",
     overflow:'hidden',
     elevation:1,

 },
 leftContainer:{
    width:85,
    justifyContent:"center",
    alignItems:"center",
 },
 rightContainer:{
    width:105,
    // backgroundColor:"green",
    // justifyContent:"center"
    marginTop:7
 },

});
