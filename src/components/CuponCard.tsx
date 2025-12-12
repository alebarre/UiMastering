import React, { FC, useState } from "react";
import { StyleSheet, TouchableOpacity, Text, View } from "react-native";
import { s, vs } from "react-native-size-matters";
import Entypo from "@expo/vector-icons/Entypo";

interface CuponCard {
  isSelected?: boolean;
  title?: string;
  icon?: React.ReactNode;
  bgColor: string;
  onPress?: () => void;
}

const CuponCard: FC<CuponCard> = ({
  isSelected = false,
  title,
  icon,
  bgColor,
  onPress,
}) => {
  const [bgc, setBgc] = useState<string>("");

  return (
    <TouchableOpacity onPress={onPress} style={styles.container}>
      {isSelected && (
        <View style={styles.chechedMarkContainer}>
          <Entypo name="check" size={s(16)} color="#fff" />
        </View>
      )}
      <View
        style={[
          styles.card,
          { backgroundColor: bgColor },
          isSelected && styles.selectedCardStyle,
        ]}
      >
        {icon}
        <Text style={styles.label}>{title}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: "space-between",
    marginTop: vs(10),
    alignItems: "center",
    borderRadius: s(10),
  },
  card: {
    borderRadius: s(10),
    width: s(230),
    height: vs(100),
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
    borderRadius: s(10),
    backgroundColor: "#ffffff",
    borderWidth: s(2),
    borderColor: "#2840a0ff",
  },
  chechedMarkContainer: {
    height: s(24),
    width: s(24),
    borderRadius: s(12),
    borderWidth: s(2),
    borderColor: "#fff",
    backgroundColor: "#4548eeff",
    position: "absolute",
    zIndex: 1,
    top: -s(10),
    right: -s(10),
    justifyContent: "center",
    alignItems: "center",
  },
});

export default CuponCard;
