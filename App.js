import { StatusBar } from 'expo-status-bar';
import LoginScreen from "./src/Screens/LoginScreen";
import { Box, NativeBaseProvider, Text } from "native-base";

export default function App() {
  return(
    <NativeBaseProvider>
      <LoginScreen/>
  </NativeBaseProvider>
  );
 }