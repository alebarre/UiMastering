import React, { useState } from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import { s } from "react-native-size-matters";

const tabsArray = ["Live", "Recorded"];

const ACTIVE_BG = "#75563B";
const ACTIVE_TEXT = "#FFFFFF";
const INACTIVE_TEXT = "#2C2016";

const TopTabs = () => {
  const [activeTab, setActiveTab] = useState("Live");
  return (
    <View style={styles.container}>
      {tabsArray.map((tab) => {
        const isActive = activeTab === tab;
        return (
          <TouchableOpacity
            onPress={() => setActiveTab(tab)}
            style={[
              styles.tabButton,
              isActive && { backgroundColor: ACTIVE_BG },
            ]}
            key={tab}
          >
            <Text style={[isActive ? styles.activeText : styles.inactiveText]}>
              {tab}
            </Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderRadius: s(12),
    backgroundColor: "#f5f5f4",
    height: s(48),
    flexDirection: "row",
    alignItems: "center",
    padding: s(4),
  },
  tabButton: {
    height: s(32),
    flex: 1,
    borderRadius: s(8),
    justifyContent: "center",
    alignItems: "center",
  },
  activeText: {
    color: ACTIVE_TEXT,
    fontSize: s(14),
    fontWeight: "bold",
  },
  inactiveText: {
    color: INACTIVE_TEXT,
    fontSize: s(14),
  },
});

export default TopTabs;
