import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import LoginScreen from "./src/Screens/auth/LoginScreen/LoginScreen";
import RegistrationScreen from "./src/Screens/auth/RegistrationScreen/RegistrationScreen";

export default function App() {
  return <LoginScreen />;
  // return <RegistrationScreen />;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
