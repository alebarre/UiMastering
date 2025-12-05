import React from "react";
import { StyleSheet, TouchableOpacity, Text, View } from "react-native";
import { CashIcon } from "../assets/icons";
import { s, vs } from "react-native-size-matters";

const PaymentMethodCard = ({ isSelected = false }) => {
  return (
    <View style={styles.container}>
      <View style={[styles.card, isSelected && styles.selectedCardStyle]}>
        <CashIcon />
      </View>
      <Text style={styles.label}>Cash</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: s(85),
  },
  card: {
    backgroundColor: "#f0f5fa",
    borderRadius: s(10),
    width: s(85),
    height: vs(72),
    justifyContent: "center",
    alignItems: "center",
  },
  label: {
    fontSize: s(14),
    color: "#464e5f",
    textAlign: "center",
    marginTop: vs(4),
  },
  selectedCardStyle: {
    backgroundColor: "#ffffff",
    borderWidth: s(2),
    borderColor: "#ff7622",
  },
});

export default PaymentMethodCard;
