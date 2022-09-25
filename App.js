import { StatusBar } from "expo-status-bar";
import { NativeBaseProvider} from "native-base";
import ProfileScreen from "./screens/ProfileScreen"



export default function App() {
  return (
    <NativeBaseProvider>
      <ProfileScreen />
    </NativeBaseProvider>
  )
  
} 