import * as React from 'react';
import { Button,View, Text,StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Login from './screens/Login'
import Teacher from './screens/Teacher'
function HomeScreen({navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Screen</Text>
      <Button
        title="Go to Details"
        onPress={() => navigation.navigate('Detail')}
      />
    </View>
  );
}

function DetailSCreen({ navigation}) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Detail Screen</Text>
      <Button
        title="Go to Home"
        onPress={() => navigation.navigate('Home')}
      />
    </View>
  );
}

const Stack = createStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>



      
        <Stack.Screen name="Teacher" component={Teacher}  options={{ title: 'Teacher Screen',headerShown: false }}/>
        <Stack.Screen name="Login" component={Login}  options={{ title: 'Login Screen',headerShown: false }}/>
        <Stack.Screen name="Home" component={HomeScreen}  options={{ title: 'Home Screen' }}/>
        <Stack.Screen name="Detail" component={DetailSCreen}  options={{ title: 'Details Screen' }}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({

});
