import React from 'react';
import { StyleSheet, View } from 'react-native';
import FoodLogo from '../assets/FoodLogo';
import SunImage from '../assets/SunImage';


const IntroScreen = () => {
  return (
        <View style={styles.container}>
            <FoodLogo />
            <SunImage style={styles.sunImage} />
        </View>
  );
};

const styles = StyleSheet.create({
    container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  sunImage: {
    position: 'absolute',
    right: 0,
    bottom: 0,
  },
});

export default IntroScreen;