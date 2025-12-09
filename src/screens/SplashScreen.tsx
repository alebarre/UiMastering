import React from "react";
import { StyleSheet, TouchableOpacity, Text, View } from "react-native";
import SplashLogo from "../assets/SplashLogo";

const SplashScreen = () => {
  return (
    <View style={styles.container}>
      <Text>
        <SplashLogo />
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default SplashScreen;
