import { StatusBar } from 'expo-status-bar';
import React,{useState,useEffect} from 'react';
import {  View, Text,TextInput, TouchableHighlight, StyleSheet ,Dimensions ,  FlatList} from 'react-native'
import HistoryScroll from './Teacher/HistoryScroll'
import axios from 'axios';


export default function Teacher({navigation}) {
  const deviceWidth = Dimensions.get('window').width;

 

  return (

 
    <View style={styles.container}>


      <View style={styles.horiCard}>

            <View style={{backgroundColor:"red",height:90,width:90,borderRadius:50}}> 

            </View>
            <View style={{height:100,width:230,margin:10,justifyContent:"center"}}>
              <Text style={{color:"white",fontSize:40,fontWeight:"800",marginLeft:40}}>120</Text>
              <Text  style={{color:"white",fontSize:20,fontWeight:"800",marginLeft:40}}>Total Rejected</Text>
            </View>
    
      </View>


        <View style={styles.bottom}>
            <View style={{width:"100%"}}>
          <HistoryScroll></HistoryScroll>
          </View>
        </View>
    </View>


  );
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:"#101622",
        justifyContent:"flex-end",
        alignItems:"center",
        
    },
    bottom:{
        height:550,
        width:"90%",
        backgroundColor:"white",
        borderTopEndRadius:30,
        borderTopLeftRadius:30,
        alignItems:"center",
        overflow:"hidden",
    },
    horiCard:{
      height:160,
      margin:10,
      backgroundColor:"#1A202F",
      borderRadius:30,
      width:"90%",
      marginBottom:20,
      justifyContent:"center",
      alignItems:"center",
      flexDirection:"row",

    }

});
