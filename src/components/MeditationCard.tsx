import React from "react";
import { s, vs } from "react-native-size-matters";
import { VideoIcon } from "../assets/icons";

import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  Dimensions,
} from "react-native";

const PhoneWidth = Dimensions.get("window").width;
const cardWitdh = (PhoneWidth - s(14) * 3) / 2;
interface MeditationCardProps {
  imageURL: string;
  title: string;
  date: string;
}

const MeditationCard = ({ imageURL, title, date }: MeditationCardProps) => {
  return (
    <ImageBackground
      source={{
        uri: imageURL,
      }}
      style={styles.imgContainer}
      imageStyle={styles.image}
    >
      <View style={styles.overlay} />
      <View style={styles.badge}>
        <Text style={styles.badgeText}>Live</Text>
      </View>
      <View style={styles.cardContent}>
        <Text style={styles.cardTitle}>{title}</Text>
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <VideoIcon />
          <Text style={styles.dateText}>{date}</Text>
        </View>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  imgContainer: {
    height: s(150),
    width: cardWitdh,
    borderRadius: s(11),
    overflow: "hidden",
  },
  image: {
    height: "100%",
    width: "100%",
    resizeMode: "cover",
    opacity: 0.7,
  },
  cardContent: {
    position: "absolute",
    left: s(10),
    bottom: s(10),
  },
  cardTitle: {
    color: "#FFFFFF",
    fontSize: vs(12),
    fontWeight: "semibold",
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: "rgba(0, 0, 0, 0.45)",
  },
  dateText: {
    fontSize: vs(11),
    color: "#FFFFFF",
    marginStart: s(7),
  },
  badge: {
    backgroundColor: "#E41111",
    height: s(22),
    width: s(39),
    borderRadius: s(90),
    position: "absolute",
    top: s(7),
    right: s(10),
    justifyContent: "center",
    alignItems: "center",
  },
  badgeText: {
    fontSize: vs(11),
    fontWeight: "bold",
    color: "#FFFFFF",
  },
});

export default MeditationCard;
