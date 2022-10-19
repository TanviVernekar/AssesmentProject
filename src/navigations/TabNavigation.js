import React from 'react';

import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {NavigationContainer} from '@react-navigation/native';

import SignIn from '../screens/SignIn';
import SignUp from '../screens/SignUp';

const Tab = createMaterialTopTabNavigator();

const TabNavigation = () => {
  return (
    <Tab.Navigator
      screenOptions={() => ({
        tabBarActiveTintColor: '#FFFFFF',
        tabBarInactiveTintColor: '#E1E1D9',
        tabBarLabelStyle: {
          fontSize: 20,
          fontWeight: 'bold',
        },
        tabBarIndicatorStyle: {
          borderBottomColor: '#FFA222',
          borderBottomWidth: 6,
          borderRadius: 4,
        },
      })}>
      <Tab.Screen name="Sign In" component={SignIn} />
      <Tab.Screen name="Sign Up" component={SignUp} />
    </Tab.Navigator>
  );
};
export default TabNavigation;
