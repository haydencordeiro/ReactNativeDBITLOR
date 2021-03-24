import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {  View, Text,TextInput, TouchableHighlight, StyleSheet ,Dimensions ,  KeyboardAwareView} from 'react-native'

export default function Login({navigation}) {
  const deviceWidth = Dimensions.get('window').width;
  return (
    // 
    <View style={styles.container}>
      <View style={styles.titleContainter}> 
      <Text style={styles.titleText}>Hello.</Text>
      <Text style={styles.titleText}>Welcome Back!</Text>
      </View>

      <View style={styles.formContainer}> 
          <Text style={styles.labelText}>USERNAME</Text>
          <View style={styles.TextInputContainerParent}>
    

                <View style={styles.TextInputContainer}>
                    <TextInput 
                            autoCorrect={false}
                          placeholder="Cordeirohayden@gmail.com"
                            style= {styles.inputStyle}
                            placeholderTextColor ="white"
                          />
                    </View>
              </View>
          <View style={{height:30}}></View>
            <Text style={styles.labelText}>PASSWORD</Text>
            <View style={styles.TextInputContainerParent}>
      

              <View style={styles.TextInputContainer}>
                <TextInput 
                        autoCorrect={false}
                      placeholder="****************"
                      secureTextEntry={true}
                        style= {styles.inputStyle}
                        placeholderTextColor ="white"
                      />
                </View>
          </View>
         
          

          <View style={{flex:1,justifyContent:"center",alignItems:"center"}}>
              <TouchableHighlight  underlayColor={"grey"} style = {styles.button} onPress = {() =>{navigation.replace('Home')}}>
              <View style={styles.button}>

            <Text style={{color:"white",fontSize:25,fontFamily:"sans-serif-medium",fontWeight:"400"}}>LOGIN</Text>
              </View>
              </TouchableHighlight>
              <Text style={{color:"grey",fontSize:16,marginTop:40,fontFamily:"sans-serif-medium",fontWeight:"100"}}>Create Account</Text>
             </View>
  
    </View>

      </View>


  );
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    backgroundColor: '#2F2F2F',
    height:1000

  },
  titleContainter:{
    // flex:1.5,
    height:200,
    padding:10,
    justifyContent:"flex-end",
    
    paddingLeft:29
  },
  
  titleText:{
    fontSize:40,
    fontFamily:"sans-serif-medium",
    fontWeight:'bold',
    color:"white",

  },
  formContainer:{
    // flex:3,
    height:500,
    // backgroundColor:"blue",
    paddingTop:70,
  },
  TextInputContainerParent:{
    alignItems:"center",
    marginTop:10,

  },
  TextInputContainer:{
    fontFamily:"sans-serif-medium",
    borderBottomColor:"#DEDEDE",
    borderBottomWidth:1.5,
    width:"85%",
    height:40,
  },
  inputStyle:{

    backgroundColor:"#2F2F2F",
    fontSize:16,
    color:"white"
  
   
  },
  labelText:{
    fontFamily:"sans-serif-medium",
    marginTop:10,
    color:"#A9A9A9",
    fontSize:14,
    letterSpacing: 3,
    paddingLeft:29
  },
  button:{
    fontFamily:"sans-serif-medium",
    backgroundColor:"#5D9DFF",
    height:50,
    width:"80%",
    borderRadius:10,
    justifyContent:"center",
    alignItems:"center",
    fontWeight:"bold",
  }
});
