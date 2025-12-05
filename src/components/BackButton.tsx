import React from "react";
import { Image, StyleSheet, TouchableOpacity, View } from "react-native";
import { s } from "react-native-size-matters";
import Entypo from "@expo/vector-icons/Entypo";

const UserAvatar = () => {
  return (
    <TouchableOpacity style={styles.avatar}>
      <Entypo name="chevron-left" size={s(20)} color="black" />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  avatar: {
    width: s(32),
    height: s(32),
    borderRadius: s(16),
    backgroundColor: "#ccc",
    justifyContent: "center",
    alignItems: "center",
  },
});

export default UserAvatar;
