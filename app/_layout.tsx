import { NavigationContainer } from "@react-navigation/native"
import { createStackNavigator } from "@react-navigation/stack"
import Splash from "./screens/Splash"
import Intro from "./screens/Intro"
import Login from "./screens/Login"
import Signup from "./screens/SignUp"
import Explore from "./screens/Explore"
import Home from "./screens/Home"
import Collection from "./screens/Collection"

const Stack = createStackNavigator();

export default function RootLayout() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Splash" component={Splash} />
        <Stack.Screen name="Intro" component={Intro} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Signup" component={Signup} />
        <Stack.Screen name="Explore" component={Explore} />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Collection" component={Collection} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}
