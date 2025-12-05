import React from "react";
import { StyleSheet, View, Text, FlatList } from "react-native";
import { vs, s } from "react-native-size-matters";
import TopTabs from "../components/TopTabs";
import MeditationCard from "../components/MeditationCard";
import { dummyData } from "../data/dummyData";

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.meditationText}>Meditation</Text>
      <Text style={styles.loremText}>
        Lorem ipsum dolor sit amet consectetur.{" "}
      </Text>
      <TopTabs />
      <FlatList
        data={dummyData}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <MeditationCard
            imageURL={item.image}
            title={item.title}
            date={item.date}
          />
        )}
        showsVerticalScrollIndicator={false}
        numColumns={2}
        contentContainerStyle={{ paddingBottom: vs(150), paddingTop: vs(24) }}
        columnWrapperStyle={{
          marginBottom: vs(16),
          justifyContent: "space-between",
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: vs(50),
    paddingHorizontal: s(14),
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
