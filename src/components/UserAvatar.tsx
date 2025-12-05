import React from "react";
import { Image, StyleSheet, View } from "react-native";
import { s } from "react-native-size-matters";

const BackButton = () => {
  return (
    <View>
      <Image
        style={styles.avatar}
        source={{
          uri: "https://tse2.mm.bing.net/th/id/OIP.CFswkhkb_TyqFJSEoil6HQHaHa?cb=ucfimg2&ucfimg=1&rs=1&pid=ImgDetMain&o=7&rm=3",
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  avatar: {
    width: s(32),
    height: s(32),
    borderRadius: s(16),
  },
});

export default BackButton;
