import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MainScreen from '../screens/MainScreen';
import AppScreen from '../screens/AppScreen';


const Stack = createNativeStackNavigator();
const theme = {
    colors: {
      background: "transparent",
    },
  };
const Router=()=>{
    return(
        <NavigationContainer theme={theme} >
        <Stack.Navigator initialRouteName="MainScreen">
          <Stack.Screen name="MainScreen" component={MainScreen} options={{headerShown:false}}/>
          <Stack.Screen name="AppScreen" component={AppScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    );
}
export default Router