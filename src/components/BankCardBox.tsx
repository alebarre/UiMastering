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
        loop
        style={{
          width: s(185),
          height: vs(185),
          marginBottom: vs(-30),
          marginTop: vs(-50),
        }}
        source={require("../assets/BankCardAnimation.json")}
      />
      <Text style={styles.bankCardText1}>No Master Card added</Text>
      <Text style={styles.bankCardText2}>You can add it for later</Text>
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
    paddingVertical: vs(15),
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
