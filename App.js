import { NavigationContainer } from "@react-navigation/native";
// import { StatusBar } from "expo-status-bar";
import { NativeBaseProvider, StatusBar} from "native-base";
import OrderScreen from "./screens/OrderScreen"
import RegisterScreen from "./screens/RegisterScreen"
import LoginScreen from "./screens/LoginScreen"

import {createNativeStackNavigator} from "@react-navigation/native-stack"
import BottomNav from "./Navigation/BottomNav";


const Stack = createNativeStackNavigator()

export default function App() {
  return (
    <NativeBaseProvider>
      <NavigationContainer>
        <StatusBar hidden={true} />
        <Stack.Navigator
          initialRouteName="Login"
          screenOptions={{
            headerShown:false,
          }}>
            <Stack.Screen name="Login" component={LoginScreen} />
            <Stack.Screen name="Register" component={RegisterScreen} />
            <Stack.Screen name="Order" component={OrderScreen} />
            <Stack.Screen name="Bottom" component={BottomNav} />

          </Stack.Navigator>
      </NavigationContainer>
    </NativeBaseProvider>
  )
  
} 