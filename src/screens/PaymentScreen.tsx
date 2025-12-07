import React from "react";
import { StyleSheet, TouchableOpacity, Text, View } from "react-native";
import BackButton from "../components/BackButton";
import { s, vs } from "react-native-size-matters";
import PaymentMethodCard from "../components/PaymentMethodCard";
import PaymentList from "../components/PaymentList";
import BankCardBox from "../components/BankCardBox";
import AddButton from "../components/AddButton";

const PaymentScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.textContainer}>
        <BackButton />
        <Text style={styles.text}>Payment</Text>
      </View>
      <PaymentList />
      <View style={{ paddingHorizontal: s(16) }}>
        <BankCardBox />
        <AddButton />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: s(50),
  },

  textContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: vs(37),
    paddingHorizontal: s(16),
  },
  text: {
    fontSize: s(17),
    color: "#181c2e",
    marginStart: s(12),
  },
});

export default PaymentScreen;
