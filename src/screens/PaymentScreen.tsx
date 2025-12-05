import React from "react";
import { StyleSheet, TouchableOpacity, Text, View } from "react-native";
import BackButton from "../components/BackButton";
import { s, vs } from "react-native-size-matters";
import PaymentMethodCard from "../components/PaymentMethodCard";

const PaymentScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.textContainer}>
        <BackButton />
        <Text style={styles.text}>Payment</Text>
      </View>
      <PaymentMethodCard />
      <PaymentMethodCard isSelected={true} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: s(50),
    paddingHorizontal: s(24),
  },

  textContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: vs(37),
  },
  text: {
    fontSize: s(17),
    color: "#181c2e",
    marginStart: s(12),
  },
});

export default PaymentScreen;
