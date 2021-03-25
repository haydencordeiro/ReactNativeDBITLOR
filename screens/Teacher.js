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
        backgroundColor:"#F6F9FA",
        justifyContent:"flex-end",
        alignItems:"center",
        
    },
    bottom:{
        height:500,
        width:"90%",
        backgroundColor:"#FFFFFF",
        borderTopEndRadius:10,
        borderTopLeftRadius:10,
        alignItems:"center",
        overflow:"hidden",
        elevation: 1,
    },


});
