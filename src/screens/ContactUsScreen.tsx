import React from "react";
import { StyleSheet, View, Text } from "react-native";
import { vs, s } from "react-native-size-matters";
import SocialSection from "../components/SocialSection";
import BackButton from "../components/BackButton";
import UserAvatar from "../components/UserAvatar";
import { FontAwesome, AntDesign } from "@expo/vector-icons";

const ContactUsScreen = () => {
  return (
    <View style={{ marginTop: vs(50), paddingHorizontal: s(17) }}>
      <View style={styles.header}>
        <BackButton />
        <UserAvatar />
      </View>

      <Text style={styles.screenTitle}>Contact Us</Text>

      <View style={styles.socialContainer}>
        <Text style={styles.socialTitle}>Social Media Platforms</Text>
        <SocialSection
          icon={<FontAwesome name="whatsapp" size={24} color="#4252f8ff" />}
          title="WhatsApp"
        />
        <SocialSection
          icon={<FontAwesome name="twitter" size={24} color="#4252f8ff" />}
          title="X"
        />
        <SocialSection
          icon={<FontAwesome name="instagram" size={24} color="#4252f8ff" />}
          title="Instagram"
        />
        <SocialSection
          icon={<FontAwesome name="snapchat" size={24} color="#4252f8ff" />}
          title="Snap Chat"
        />
        <SocialSection
          icon={<AntDesign name="tik-tok" size={24} color="#4252f8ff" />}
          title="TikTok"
        />
      </View>
    </View>
  );
};

export default ContactUsScreen;

const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  socialContainer: {
    backgroundColor: "#F5F5FA",
    borderRadius: s(14),
    paddingHorizontal: s(18),
    paddingVertical: vs(15),
    marginTop: vs(22),
  },
  socialTitle: {
    fontSize: s(16),
    fontWeight: "semibold",
  },
  screenTitle: {
    fontSize: s(30),
    fontWeight: "semibold",
    marginTop: vs(20),
    marginStart: s(19),
  },
});
