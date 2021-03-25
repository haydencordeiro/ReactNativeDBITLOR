import { StatusBar } from 'expo-status-bar';
import React,{useState,useEffect} from 'react';
import {  View, Text,TextInput, TouchableHighlight, StyleSheet ,Dimensions ,  FlatList} from 'react-native'
import axios from 'axios';
import StatsCard from '../../components/StatsCard';


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




        <View style={styles.topbar}>
            <Text style={{fontWeight:"bold",fontSize:30,paddingLeft:15,color:"white",marginTop:4}}>Your Dashboard!</Text>
            {/* <Text style={{fontWeight:"bold",fontSize:30,paddingRight:20}}>Log</Text> */}
        </View>
        <View style={styles.statcards}>
            <StatsCard></StatsCard>
            <StatsCard></StatsCard>
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
