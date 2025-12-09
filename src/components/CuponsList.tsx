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
import CuponButton from "./CuponButton";
import CuponCard from "./CuponCard";

const cupons = [
  { label: "cupon1", button: <CuponButton /> },
  { label: "cupon2", button: <CuponButton /> },
  { label: "cupon3", button: <CuponButton /> },
  { label: "cupon4", button: <CuponButton /> },
];

const CuponsList = () => {
  const [selectedCupon, setSelectedCupon] = useState("");
  return (
    <View style={styles.container}>
      <FlatList
        data={cupons}
        keyExtractor={(item) => item.label}
        renderItem={({ item, index }) => {
          const colors = [
            "#7bd4a1ff",
            "#88badaff",
            "#c09248ff",
            "#da5790ff",
            "#a7062cff",
          ];
          const bgColor = colors[index % colors.length];
          return (
            <CuponCard
              title={item.label}
              icon={item.button}
              bgColor={bgColor}
              onPress={() => setSelectedCupon(item.label)}
              isSelected={selectedCupon === item.label}
            />
          );
        }}
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

export default CuponsList;
