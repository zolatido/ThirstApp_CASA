//App.js

import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

import HomePage from './src/pages/homepage';
import Registration from './src/pages/registration'; 
import Goals from './src/pages/goals'; 
import Dashboard from './src/pages/dashboard'; 
import Custom from './src/pages/customgoals'; 
import Personal from './src/pages/personalgoals';
import Username from './src/pages/username';
import History from './src/pages/history';
import Settings from './src/pages/settings';

const Stack = createStackNavigator();
//const Tab = createMaterialTopTabNavigator();

function App() {
  
  return (
    <NavigationContainer>
      <Stack.Navigator >
        

        <Stack.Screen
          name="Home"
          component={HomePage}
          options={{
            headerShown: false, // Hide the header bar
          }}
        />

        <Stack.Screen
          name="Username"
          component={Username}
          options={{
            headerShown: false, // Hide the header bar
          }}
        />

   
         <Stack.Screen
          name="Goals"
          component={Goals}
          options={{
            headerShown: false, // Hide the header bar
          }}
        />

        <Stack.Screen
          name="Dashboard"
          component={Dashboard}
          options={{
            headerShown: false, // Hide the header bar
          }}
        />

        <Stack.Screen
          name="Custom"
          component={Custom}
          options={{
            headerShown: false, // Hide the header bar
          }}
        />

        <Stack.Screen
          name="Personal"
          component={Personal}
          options={{
            headerShown: false, // Hide the header bar
          }}
        />

        <Stack.Screen
          name="History"
          component={History}
          options={{
            headerShown: false, // Hide the header bar
          }}
        />

        <Stack.Screen
          name="Settings"
          component={Settings}
          options={{
            headerShown: false, // Hide the header bar
          }}
        />

        <Stack.Screen
          name="Registration"
          component={Registration}
          options={{
            headerShown: false, // Hide the header bar
          }}
        />
        
      </Stack.Navigator>


      
      
    </NavigationContainer>
  );
}

export default App;


