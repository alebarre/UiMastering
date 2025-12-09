import React from "react";
import { StyleSheet, TouchableOpacity, Text, View } from "react-native";
import MenuButton from "../components/MenuButton";
import FindButton from "../components/FindButton";
import { s, vs } from "react-native-size-matters";
import { Entypo } from "@expo/vector-icons";
import CuponsList from "../components/CuponsList";

const ShoppingScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <MenuButton />
        <FindButton />
      </View>
      <View style={styles.headerHello}>
        <Text style={styles.headerHelloText}>Hello, Folla</Text>
        <Entypo name="hand" size={s(20)} color="black" />
      </View>
      <Text style={styles.headerLabel}>Let´s go shopping!</Text>
      <CuponsList />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: vs(30),
  },
  header: {
    marginTop: vs(10),
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    paddingHorizontal: 16,
  },
  headerHello: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: s(10),
    left: s(16),
    width: "90%",
  },
  headerHelloText: {
    fontSize: s(20),
    fontWeight: "600",
    color: "#7e8ca9ff",
  },
  headerLabel: {
    fontSize: s(12),
    fontWeight: "700",
    color: "#7e8ca9ff",
    marginTop: s(10),
    left: s(16),
  },
});

export default ShoppingScreen;
