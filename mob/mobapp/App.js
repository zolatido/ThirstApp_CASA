// Import necessary dependencies
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

// Import your pages/components
import HomePage from './src/pages/homepage';
import Goals from './src/pages/goals';
import Dashboard from './src/pages/dashboard';
import Custom from './src/pages/customgoals';
import Personal from './src/pages/personalgoals';
import PersonalWeight from './src/pages/personalgoalsweight';
import PersonalAge from './src/pages/personalgoalsage';
import PersonalDailyGoal from './src/pages/personalgoalsdaily';
import Username from './src/pages/username';
import History from './src/pages/history';
import Settings from './src/pages/settings';

// Create Stack and Tab navigators
const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

// Dashboard Tab Navigator
function DashboardTabNavigator() {
  return (
    <Tab.Navigator tabBarOptions={{ activeTintColor: '#8BADD3' }}>
      <Tab.Screen
        name="Dashboard"
        component={Dashboard}
        options={{
          tabBarLabel: 'Dashboard',
           headerShown: false, // Hide the header bar
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="home" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="History"
        component={History}
        options={{
          tabBarLabel: 'History',
          headerShown: false, // Hide the header bar
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="chart-bell-curve" color={color} size={size} />
          ),
        }}
      />
      {/* Add more tabs as needed */}
    </Tab.Navigator>
  );
}



// Main App component
function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home" screenOptions={{ headerShown: false }}>
        {/* Stack Screens */}
        <Stack.Screen name="Home" component={HomePage} />
        <Stack.Screen name="Username" component={Username} />
        <Stack.Screen name="Goals" component={Goals} />
        <Stack.Screen name="Custom" component={Custom} />
        <Stack.Screen name="Personal" component={Personal} />
        <Stack.Screen name="PersonalWeight" component={PersonalWeight} />
        <Stack.Screen name="PersonalAge" component={PersonalAge} />
        <Stack.Screen name="PersonalDailyGoal" component={PersonalDailyGoal} />
        <Stack.Screen name="Settings" component={Settings} />

        {/* Dashboard Screen with bottom tabs */}
        <Stack.Screen name="Dashboard" component={DashboardTabNavigator} />

      
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
