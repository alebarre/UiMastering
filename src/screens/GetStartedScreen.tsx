import React from "react";
import {
  StyleSheet,
  TouchableOpacity,
  Text,
  View,
  ImageBackground,
} from "react-native";
import { s, vs } from "react-native-size-matters";

const GetStartedScreen = () => {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("../assets/unsplash_fouVDmGXoPI.png")}
        style={{ flex: 1, width: "100%", height: "100%" }}
      ></ImageBackground>
      <View style={styles.labelContainer}>
        <Text style={styles.labelText1}>You want Authentic, here you go!</Text>
        <Text style={styles.labelText2}>Find it here. Buy it now.</Text>
        <TouchableOpacity style={styles.LoginButtonArea}>
          <Text style={styles.loginButtonText}>Get Started.</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  labelContainer: {
    position: "absolute",
    width: s(390),
    height: vs(362),
    marginTop: vs(482),
    padding: s(50),
  },
  labelText1: {
    fontFamily: "Montserrat",
    fontSize: s(34),
    fontWeight: "bold",
    alignItems: "center",
    textAlign: "center",
    color: "#ffffff",
  },
  labelText2: {
    marginTop: vs(16),
    fontFamily: "Montserrat",
    fontSize: s(14),
    fontWeight: "600",
    alignItems: "center",
    textAlign: "center",
    color: "#ffffff",
  },
  LoginButtonArea: {
    marginTop: vs(10),
    backgroundColor: "#F83758",
    borderRadius: 10,
    width: s(300),
    height: vs(55),
  },
  loginButtonText: {
    fontFamily: "Montserrat-SemiBold",
    color: "#FFFFFF",
    textAlign: "center",
    marginTop: vs(12),
    fontWeight: "bold",
    fontSize: 24,
  },
});

export default GetStartedScreen;
