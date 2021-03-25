import { StatusBar } from 'expo-status-bar';
import React,{useState,useEffect} from 'react';
import {  View, Text,TextInput, TouchableHighlight, StyleSheet ,Dimensions ,  FlatList} from 'react-native'
import ProfileCard from '../../components/ProfileCard'
import axios from 'axios';

export default function HistoryScroll() {
;
    var [refreshing,Setrefreshing]=useState(false);
    var [application, SetApplication] = useState([]);
 
  async function handleRefresh () {
    axios.get(`https://dbit-lor.herokuapp.com/api/loggedinteachersapplications/`, {
        headers: {
          'Authorization': `Token 44c5f2df36420898817d76dde745c18e8c526d54`
        }
      })
        .then((res) => {
          SetApplication(res.data);
        })
        .catch((error) => {
          console.error(error)
        })
    Setrefreshing(false);
    }
    
  useEffect(() => {
    handleRefresh()
  }, [])

  return (
      
 
    <View >


            <View style={{width:"100%"}}>
            <Text style={{color:"black",fontWeight:"800",fontSize:26,padding:10,marginLeft:10}}>History</Text>

            </View>
            <FlatList
            style={{width:"100%"}}
            data={application}
            renderItem={({ item }) =><ProfileCard title={item.student.first_name+" "+item.student.last_name} status={item.status} ></ProfileCard>}
            refreshing={refreshing}
            onRefresh={handleRefresh}
            contentContainerStyle={{ alignItems: 'center'}}
            keyExtractor={(item, index) => index.toString()}

      />
       
    </View>


  );
}

const styles = StyleSheet.create({


});
