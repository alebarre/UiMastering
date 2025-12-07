import React, { FC, ReactNode } from "react";
import { StyleSheet, TouchableOpacity, Text, View } from "react-native";
import { CashIcon } from "../assets/icons";
import { s, vs } from "react-native-size-matters";
import Entypo from "@expo/vector-icons/Entypo";

interface PaymentMethodCardProps {
  isSelected?: boolean;
  title?: string;
  icon?: React.ReactNode;
  onPress?: () => void;
}

const PaymentMethodCard: FC<PaymentMethodCardProps> = ({
  isSelected = false,
  title,
  icon,
  onPress,
}) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.container}>
      {isSelected && (
        <View style={styles.chechedMarkContainer}>
          <Entypo name="check" size={s(16)} color="#fff" />
        </View>
      )}
      <View style={[styles.card, isSelected && styles.selectedCardStyle]}>
        {icon}
      </View>
      <Text style={styles.label}>{title}</Text>
    </TouchableOpacity>
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
  chechedMarkContainer: {
    height: s(24),
    width: s(24),
    borderRadius: s(12),
    borderWidth: s(2),
    borderColor: "#fff",
    backgroundColor: "#ff7622",
    position: "absolute",
    zIndex: 1,
    top: -s(10),
    right: -s(10),
    justifyContent: "center",
    alignItems: "center",
  },
});

export default PaymentMethodCard;
