import { StatusBar } from 'expo-status-bar';
import React,{useState,useEffect} from 'react';
import {  View, Text,TextInput, TouchableHighlight, StyleSheet ,Dimensions ,  FlatList} from 'react-native'
import HistoryScroll from './Teacher/HistoryScroll'
import Stats from './Teacher/Stats'
import axios from 'axios';


export default function Teacher({navigation,route}) {

  return (

    <View style={styles.container}>
      <Stats token={route.params.token}></Stats>
      
        <View style={styles.bottom}>
            <View style={{width:"100%"}}>
          <HistoryScroll token={route.params.token}></HistoryScroll>
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


});
