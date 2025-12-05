import React from "react";
import { StyleSheet, View, Text } from "react-native";
import { vs, s } from "react-native-size-matters";
import TopTabs from "../components/TopTabs";
import MeditationCard from "../components/MeditationCard";

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.meditationText}>Meditation</Text>
      <Text style={styles.loremText}>
        Lorem ipsum dolor sit amet consectetur.{" "}
      </Text>
      <TopTabs />
      <MeditationCard />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: vs(50),
    paddingHorizontal: s(20),
  },
  meditationText: {
    fontSize: s(20),
    fontWeight: "semibold",
    color: "#1d150f",
    marginBottom: vs(6),
  },
  loremText: {
    fontSize: s(14),
    color: "#1d150f",
    marginBottom: vs(16),
  },
});

export default HomeScreen;
