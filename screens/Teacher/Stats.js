import { StatusBar } from 'expo-status-bar';
import React,{useState,useEffect} from 'react';
import {  View, Text,TextInput, TouchableHighlight, StyleSheet ,Dimensions ,  FlatList} from 'react-native'
import axios from 'axios';
import StatsCard from '../../components/StatsCard';


export default function Stats({token}) {

    var [stats,Setstats]=useState({
        "approvedReq": 1,
        "pendingReq": 1,
        "rejectedReq": 1,
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




        <View style={styles.topbar}>
            <Text style={{fontWeight:"bold",fontSize:30,paddingLeft:15,color:"white",marginTop:4}}>Your Dashboard!</Text>

        </View>
        <View style={styles.statcards}>
            <StatsCard color={"#77DCBC"} title={"Approved"} value={stats["approvedReq"]} total={parseInt(stats["approvedReq"])+parseInt(stats["rejectedReq"])} />
            <StatsCard color={"#F90446"} title={"Rejected"} value={stats["rejectedReq"]} total={parseInt(stats["approvedReq"])+parseInt(stats["rejectedReq"])} />
   
        </View>
      

    </View> 




  );
}

const styles = StyleSheet.create({
    topbar:{
        
        // backgroundColor:"red",
        width:"100%",
        flex:1,
        marginTop:20,
        flexDirection:"row",
        justifyContent:"space-between"


    },
    statcards:{
        width:"100%",
        flexDirection:'row',
        justifyContent:"space-around",
        margin:20


    },
    horiCard:{
    flex:1,
        backgroundColor:"#1A202F",

        width:"100%",
        marginBottom:20,
 
        justifyContent:"flex-end",
        alignItems:"center"


  
      }
});
