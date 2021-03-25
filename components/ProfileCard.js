import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {  View, Text,TextInput, TouchableHighlight, StyleSheet ,Dimensions ,  Image} from 'react-native'

export default function ProfileCard({ title,status,date }) {
    // console.log(status);
  const deviceWidth = Dimensions.get('window').width;
    function GetSubTitle(status){
        switch (status) {

            case "pending": return <Text style={[styles.cardSubTitle,{color:"orange"}]}>Pending</Text>
            case "approved": return <Text style={[styles.cardSubTitle,{color:"green"}]}>Approved</Text>
            case "rejected": return <Text style={[styles.cardSubTitle,{color:"#FD8273"}]}>Rejected</Text>
        
        
            default: return  <Text style={[styles.cardSubTitle,{color:"green"}]}>{status}</Text>
        }
            
 
    }

    function GetLogo(status){
        switch (status) {

            case "pending": return <View style={[styles.logo,{backgroundColor:"orange"}]}></View>
            case "approved": return <View style={[styles.logo,{backgroundColor:"green"}]}></View>
            case "rejected": return <View style={[styles.logo,{backgroundColor:"#FD8273"}]}></View>
        
        
            default: return  <View style={[styles.logo,{backgroundColor:"green"}]}></View>
        }
            
 
    }


  return (

        <View style={styles.card}> 
                {GetLogo(status)}
            
            <View style={styles.cardDetailsContainer}>
                <Text style={styles.cardTitle}>{title}</Text>
                <Text style={styles.cardSubTitle}>{date}</Text>
            </View>
            <View style={{flex:1,height:100,alignItems:"flex-end",marginTop:58,marginRight:10}} >

                {GetSubTitle(status)}
            </View>

        </View>


  );
}

const styles = StyleSheet.create({

    card:{
        height:100,
        backgroundColor:"#ffff",
        width:360,
        alignItems:"center",
        flexDirection:"row",
        borderBottomWidth:1.6,
        borderColor:"#f5f5f5",
        margin:1,
        elevation:0.1
        
    },
    logo:{
        height:60,
        backgroundColor:"#1A1E27",
        width:60,
        margin:10,
        borderRadius:15,
        justifyContent:"center",
        alignItems:"center"
    },
    cardDetailsContainer:{
        height:100,
        // marginTop:10,
        justifyContent:"center",
        // backgroundColor:"red"
    },
    cardTitle:{
        color:"black",
        fontWeight:"800",
        fontSize:16,
        fontWeight:"bold"
    },
    cardSubTitle:{
        color:"#6B6F78",
        fontWeight:"300",
        paddingTop:1,
           }

});
