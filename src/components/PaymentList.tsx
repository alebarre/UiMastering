import React, { useState } from "react";
import { StyleSheet, View, FlatList } from "react-native";
import PaymentMethodCard from "./PaymentMethodCard";
import {
  CashIcon,
  MasterCardIcon,
  VisaIcon,
  PaypalIcon,
} from "../assets/icons";
import { s, vs } from "react-native-size-matters";

const paymentMethods = [
  { label: "Cash", icon: <CashIcon /> },
  { label: "Visa", icon: <VisaIcon /> },
  { label: "Master", icon: <MasterCardIcon /> },
  { label: "PayPal", icon: <PaypalIcon /> },
];

const PaymentList = () => {
  const [selectedMethod, setSelectedMethod] = useState("");
  return (
    <View style={styles.container}>
      <FlatList
        data={paymentMethods}
        keyExtractor={(item) => item.label}
        renderItem={({ item }) => (
          <PaymentMethodCard
            title={item.label}
            icon={item.icon}
            onPress={() => setSelectedMethod(item.label)}
            isSelected={selectedMethod === item.label}
          />
        )}
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{
          gap: s(16),
          paddingHorizontal: s(16),
          paddingTop: vs(8),
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
  },
});

export default PaymentList;
