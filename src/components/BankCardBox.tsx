import React from "react";
import { StyleSheet, TouchableOpacity, Text, View } from "react-native";
import { s, vs } from "react-native-size-matters";
import { BankCardIcon } from "../assets/icons";
import LottieView from "lottie-react-native";

const BanckCardBox = () => {
  return (
    <View style={styles.container}>
      {/* <BankCardIcon /> */}
      <LottieView
        autoPlay
        style={{ width: s(200), height: vs(200) }}
        source={require("../assets/BankCardAnimation.json")}
      />
      <Text style={styles.bankCardText1}>No Master Card added</Text>
      <Text style={styles.bankCardText2}>
        You can add a masgtercard and add it for latter
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#edf5acff",
    borderRadius: vs(10),
    marginTop: vs(25),
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: vs(35),
    paddingHorizontal: s(30),
  },

  bankCardText1: {
    color: "#32343e",
    fontSize: s(16),
    fontWeight: "bold",
    marginTop: vs(17),
  },
  bankCardText2: {
    marginTop: vs(6),
    color: "#32343e",
    fontSize: s(15),
    textAlign: "center",
  },
});

export default BanckCardBox;
