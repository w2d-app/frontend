import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import Ionicons from "react-native-vector-icons/Ionicons";
import { NavigationContainer } from "@react-navigation/native";
import { useAuth } from './AuthContext';

// Tab navigation screens
import Home from "./screens/Home";
import Explore from "./screens/Explore";
import Collection from "./screens/Collection";

// Stack navigation screens
import Login from "./screens/Login";
import SignUp from "./screens/SignUp";

// AuthProvider to propagate context
import { AuthProvider } from './AuthContext';

// Creating instances of the navigators
const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const BottomTabNavigator = () => {
  return (
    <Tab.Navigator screenOptions={{ headerShown: false }}>
      <Tab.Screen
        name="Explore"
        component={Explore}
        options={{
          tabBarIcon: ({ focused, color, size }) => (
            <Ionicons
              name={focused ? "search" : "search-outline"}
              size={size}
              color={color}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({ focused, color, size }) => (
            <Ionicons
              name={focused ? "home" : "home-outline"}
              size={size}
              color={color}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Collection"
        component={Collection}
        options={{
          tabBarIcon: ({ focused, color, size }) => (
            <Ionicons
              name={focused ? "albums" : "albums-outline"}
              size={size}
              color={color}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

const AppNavigator = () => {
  const { user, loading } = useAuth();

  if (loading) {
    return null; // Or a loading spinner component
  }

  return (
    <Stack.Navigator
      initialRouteName={user ? 'TabNavigator' : 'Login'}
      screenOptions={{
        headerShown: false,
      }}
    >
      {!user ? (
        <>
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="SignUp" component={SignUp} />
        </>
      ) : (
        <Stack.Screen name="TabNavigator" component={BottomTabNavigator} />
      )}
    </Stack.Navigator>
  );
};

export default function Index() {
  return (
    <AuthProvider>
      <NavigationContainer independent={true}>
        <AppNavigator />
      </NavigationContainer>
    </AuthProvider>
  );
}
