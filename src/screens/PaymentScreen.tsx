import React from "react";
import { StyleSheet, TouchableOpacity, Text, View } from "react-native";
import BackButton from "../components/BackButton";
import { s, vs } from "react-native-size-matters";
import PaymentMethodCard from "../components/PaymentMethodCard";
import PaymentList from "../components/PaymentList";
import BankCardBox from "../components/BankCardBox";
import CustomButton from "../components/CustomButtom";

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
        <CustomButton
          text="Add New"
          textColor="#f96b2fff"
          backgroundColor="#ffffff"
          hasIcon={true}
          iconName="plus"
        />
        <View style={styles.paymentInfoContainer}>
          <View style={styles.amountContainerText}>
            <Text style={styles.totalText}>TOTAL</Text>
            <Text style={styles.amountText}>$90,00</Text>
          </View>
          <CustomButton
            text="PAY & CONFIRM"
            textColor="#ffffff"
            backgroundColor="#f96b2fff"
            hasIcon={true}
          />
        </View>
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
  paymentInfoContainer: {
    marginTop: vs(45),
    marginBottom: vs(30),
  },
  amountContainerText: {
    flexDirection: "row",
    alignItems: "center",
  },
  totalText: {
    fontSize: s(16),
    fontWeight: "bold",
    color: "#a9b2c5ff",
  },
  amountText: {
    marginLeft: s(10),
    fontSize: s(26),
    fontWeight: "bold",
    color: "#181c2e",
  },
});

export default PaymentScreen;
