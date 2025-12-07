import React from "react";
import { StyleSheet, TouchableOpacity, Text, View } from "react-native";
import { s, vs } from "react-native-size-matters";
import Feather from "@expo/vector-icons/Feather";

const AddButton = () => {
  return (
    <TouchableOpacity style={styles.container}>
      <Feather name="plus" size={s(20)} color="#ff7622" />
      <Text style={styles.text}>Add New</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    gap: s(8),
    marginTop: vs(15),
    borderColor: "#ff7622",
    borderWidth: s(2),
    backgroundColor: "#ffffff",
    borderRadius: s(10),
    paddingVertical: vs(15),
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    color: "#ff7622",
    fontSize: s(14),
  },
});

export default AddButton;
