import { StyleSheet } from "react-native";
import ContactUsScreen from "./src/screens/ContactUsScreen";
import IntroScreen from "./src/screens/IntroScreen";
import HomeScreen from "./src/screens/HomeScreen";

export default function App() {
  return (
    //<IntroScreen />
    // <ContactUsScreen />
    <HomeScreen />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
