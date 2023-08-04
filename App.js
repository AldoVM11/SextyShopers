import LoginScreen from "./src/Screens/LoginScreen";
import { NativeBaseProvider } from "native-base";
import RegisterScreen from "./src/Screens/RegisterScreen";
import NotVerifyScreen from "./src/Screens/NotVerifyScreen";
import HomeScreen from "./src/Screens/HomeScreen";
import SingleProductScreen from "./src/Screens/SingleProductScreen";

export default function App() {
  return(
    <NativeBaseProvider>
      <HomeScreen />
  </NativeBaseProvider>
  );
 }