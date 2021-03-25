import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {  View, Text,TextInput, TouchableHighlight, StyleSheet ,Dimensions ,  KeyboardAwareView} from 'react-native'

export default function ProfileCard({ title,status }) {
    // console.log(status);
  const deviceWidth = Dimensions.get('window').width;
    function GetSubTitle(status){
        switch (status) {

            case "pending": return <Text style={[styles.cardSubTitle,{color:"orange"}]}>{status}</Text>
            case "approved": return <Text style={[styles.cardSubTitle,{color:"green"}]}>{status}</Text>
            case "rejected": return <Text style={[styles.cardSubTitle,{color:"#FD8273"}]}>{status}</Text>
        
        
            default: return  <Text style={[styles.cardSubTitle,{color:"green"}]}>{status}</Text>
        }
            
 
    }

  return (
 
  
        
        <View style={styles.card}> 
            <View style={styles.logo}></View>
            <View style={styles.cardDetailsContainer}>
                <Text style={styles.cardTitle}>{title}</Text>
                {GetSubTitle(status)}
            </View>

        </View>


  );
}

const styles = StyleSheet.create({

    card:{
        height:100,
        backgroundColor:"#14141A",
        width:360,
        borderRadius:20,
        alignItems:"center",
        flexDirection:"row",
        margin:10,
        
    },
    logo:{
        height:80,
        backgroundColor:"#1A1E27",
        width:80,
        margin:10,
        borderRadius:20,
    },
    cardDetailsContainer:{
        height:80,
        marginTop:10
    },
    cardTitle:{
        color:"#fefefe",
        fontWeight:"800",
        fontSize:16
    },
    cardSubTitle:{
        color:"#932048",
        fontWeight:"300",
        paddingTop:3,
           }

});
