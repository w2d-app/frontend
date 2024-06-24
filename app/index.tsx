import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import Ionicons from "react-native-vector-icons/Ionicons";

// Tab navigation screens
import Home from "./screens/Home";
import Explore from "./screens/Explore";
import Collection from "./screens/Collection";

// Stack navigation screens
import Login from "./screens/Login";
import SignUp from "./screens/SignUp";

// Creating instances of the navigators
const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const BottomTabNavigator = () => {
  return (
    // Tab.screen is each "page" of the app. We wrap it in the Tab navigator because the navigation at the bottom is present in each main screen.
    <Tab.Navigator screenOptions={{headerShown: false}}>
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
          tabBarIcon: (
            { focused, color, size } // Using () instead of {} is a shorthand for "return." i.e., {} would require a return statement.
          ) => (
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
          tabBarIcon: ({focused, color, size}) => (
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

// Stack navigator pushes and pops screen, making them look like a single screen.
// We can see all the different pages in the Tab navigator, as you click from one to the other in the navbar.
export default function Index() {
  return (
    <Stack.Navigator
      initialRouteName="Login"
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="TabNavigator" component={BottomTabNavigator} />
      <Stack.Screen name="SignUp" component={SignUp} />
      <Stack.Screen name="Explore" component={Explore} />
    </Stack.Navigator>
  );
}
