import React from "react";
import { StyleSheet, TouchableOpacity, Text, View } from "react-native";
import { s, vs } from "react-native-size-matters";
import Feather from "@expo/vector-icons/Feather";
import BackButton from "./UserAvatar";

interface ButtonProps {
  text?: string;
  backgroundColor?: string;
  textColor?: string;
  hasIcon?: boolean;
  iconName?: React.ComponentProps<typeof Feather>["name"];
}

const CustomButton = ({
  text = "",
  backgroundColor = "",
  textColor = "",
  hasIcon = false,
  iconName,
}: ButtonProps) => {
  return (
    <TouchableOpacity style={[styles.container, { backgroundColor }]}>
      {hasIcon && iconName && (
        <Feather name={iconName} size={s(20)} color={textColor} />
      )}
      <Text style={[styles.text, { color: textColor }]}>{text}</Text>
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

export default CustomButton;
