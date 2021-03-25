import { StatusBar } from 'expo-status-bar';
import React,{useState,useEffect} from 'react';
import {  View, Text,TextInput, TouchableHighlight, StyleSheet ,Dimensions ,  FlatList} from 'react-native'
import ProfileCard from '../../components/ProfileCard'
import axios from 'axios';

export default function Stats({token}) {

    var [stats,Setstats]=useState({
        "approvedReq": 0,
        "pendingReq": 0,
        "rejectedReq": 0,
    });

    async function getStats () {
        axios.get(`https://dbit-lor.herokuapp.com/api/dashboardstatsteacher/`, {
            headers: {
              'Authorization': `Token ${token}`
            }
          })
            .then((res) => {
                Setstats(res.data);
            })
            .catch((error) => {
              console.error(error)
            })
        }
        
      useEffect(() => {
        getStats()
      }, [])
    

  return (
      
    <View style={styles.horiCard}>

    <View style={{height:100,width:230,margin:10,justifyContent:"center"}}>
      <Text style={{color:"white",fontSize:20,fontWeight:"800",marginLeft:40}}>{"Total Approved "+stats["approvedReq"]}</Text>
      <Text style={{color:"white",fontSize:20,fontWeight:"800",marginLeft:40}}>{"Total Pending "+stats["pendingReq"]}</Text>
      <Text style={{color:"white",fontSize:20,fontWeight:"800",marginLeft:40}}>{"Total Rejected "+stats["rejectedReq"]}</Text>
      {/* <Text  style={{color:"white",fontSize:20,fontWeight:"800",marginLeft:40}}>Total Rejected</Text> */}
    </View>

</View> 


  );
}

const styles = StyleSheet.create({

    horiCard:{
        height:160,
        margin:10,
        backgroundColor:"#1A202F",
        borderRadius:30,
        width:"90%",
        marginBottom:20,
        // justifyContent:"center",
        alignItems:"center",
        flexDirection:"row",
  
      }
});
