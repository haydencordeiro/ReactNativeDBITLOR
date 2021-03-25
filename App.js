import * as React from 'react';
import {useState,useEffect,useRef} from 'react';
import { Button,View, Text,StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Login from './screens/Login'
import Teacher from './screens/Teacher'
import * as Notifications from 'expo-notifications';
import * as Permissions from 'expo-permissions';
import Constants from 'expo-constants';
import axios from 'axios';

Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldShowAlert: true,
    shouldPlaySound: false,
    shouldSetBadge: false,
  }),
});
async function registerForPushNotificationsAsync() {
  let token;
  if (Constants.isDevice) {
    const { status: existingStatus } = await Notifications.getPermissionsAsync();
    let finalStatus = existingStatus;
    if (existingStatus !== 'granted') {
      const { status } = await Notifications.requestPermissionsAsync();
      finalStatus = status;
    }
    if (finalStatus !== 'granted') {
      alert('Failed to get push token for push notification!');
      return;
    }
    token = (await Notifications.getExpoPushTokenAsync()).data;
    // console.warn(token);
    // console.warn(token);
    // console.warn(token);
    // console.warn(token);
    // console.warn(token);
    // console.warn(token);
  } else {
    alert('Must use physical device for Push Notifications');
  }

  if (Platform.OS === 'android') {
    Notifications.setNotificationChannelAsync('default', {
      name: 'default',
      importance: Notifications.AndroidImportance.MAX,
      vibrationPattern: [0, 250, 250, 250],
      lightColor: '#FF231F7C',
    });
  }

  return token;
}


const Stack = createStackNavigator();
export default function App() {
  const [notification, setNotification] = useState(false);
  const [token, setToken] = useState("");
  const notificationListener = useRef();
  const responseListener = useRef();

  useEffect(() => {
    axios.post('https://dbit-lor.herokuapp.com/api/notificationtoken/',  {"token":token },{headers:{'Authorization': `Token 44c5f2df36420898817d76dde745c18e8c526d54`}})
    .then(console.log("herer"))
    .catch((error) => {
      console.error(error, "failed to send token");
    })
  }, [token])
  
  useEffect(() => {
    registerForPushNotificationsAsync().then(token=>setToken(token));
    notificationListener.current = Notifications.addNotificationReceivedListener(notification => {
      setNotification(notification);

    });

    responseListener.current = Notifications.addNotificationResponseReceivedListener(response => {
      console.log(response);
    });
  
  }, [])
  
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Login" component={Login}  options={{ title: 'Login Screen',headerShown: false }}/>
        <Stack.Screen name="Teacher" component={Teacher}  options={{ title: 'Teacher Screen',headerShown: false }}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({

});
