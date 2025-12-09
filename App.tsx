import { StyleSheet } from "react-native";
import ContactUsScreen from "./src/screens/ContactUsScreen";
import IntroScreen from "./src/screens/IntroScreen";
import HomeScreen from "./src/screens/HomeScreen";
import MeditationCard from "./src/components/MeditationCard";
import PaymentScreen from "./src/screens/PaymentScreen";
import SplashLogo from "./src/assets/SplashLogo";
import SplashScreen from "./src/screens/SplashScreen";
import LoginScreen from "./src/screens/LoginScreen";
import GetStartedScreen from "./src/screens/GetStartedScreen";
import ShoppingScreen from "./src/screens/ShoppingScreen";

export default function App() {
  return (
    //<IntroScreen />
    // <ContactUsScreen />
    // <HomeScreen />
    // <PaymentScreen />
    // <SplashScreen />
    // <LoginScreen />
    // <GetStartedScreen />
    <ShoppingScreen />
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
