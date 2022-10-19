import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import RNBootSplash from 'react-native-bootsplash';
import MainScreen from '../screens/MainScreen';
import AppScreen from '../screens/AppScreen';
import AddDetails from '../screens/AddSite';
import AddSite from '../screens/AddSite';
import SiteDetails from '../screens/SiteDetails';
import EditScreen from '../screens/EditScreen';
import {Button, Pressable} from 'react-native';
import SignIn from '../screens/SignIn';


const Stack = createNativeStackNavigator();
const theme = {
  colors: {
    background: 'transparent',
  },
};
const Router = () => {
  return (
    <NavigationContainer theme={theme} onReady={() => RNBootSplash.hide()}>
      <Stack.Navigator initialRouteName="MainScreen">
        <Stack.Screen
          name="MainScreen"
          component={MainScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="AppScreen"
          component={AppScreen}
          options={{headerShown: false}}
        />
         
        <Stack.Screen
          name="Add Site"
          component={AddSite}
          options={{
            headerStyle: {backgroundColor: '#0E85FF'},
            headerTintColor: 'white',
          }}
        />
        <Stack.Screen
          name="Site Details"
          component={SiteDetails}
          options={{headerShown:false}}
          />
          <Stack.Screen name="EditScreen"
          component={EditScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default Router;
