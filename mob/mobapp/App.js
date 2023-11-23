import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

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

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

// Custom navigator for Dashboard and related screens
function DashboardNavigator() {
  return (
    <Stack.Navigator initialRouteName="" screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Home" component={HomePage} />
      <Stack.Screen name="Username" component={Username} />
      <Stack.Screen name="Goals" component={Goals} />
      <Stack.Screen name="Dashboard" component={Dashboard} />
      <Stack.Screen name="Custom" component={Custom} />
      <Stack.Screen name="Personal" component={Personal} />
      <Stack.Screen name="PersonalWeight" component={PersonalWeight} />
      <Stack.Screen name="PersonalAge" component={PersonalAge} />
      <Stack.Screen name="PersonalDailyGoal" component={PersonalDailyGoal} />
    </Stack.Navigator>
  );
}

function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator initialRouteName="Dashboard" tabBarOptions={{ activeTintColor: '#8BADD3' }}>
        <Tab.Screen
          name="Dashboard"
          component={DashboardNavigator}
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
        {/* Add more Tab.Screen components for other screens */}
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default App;
