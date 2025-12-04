import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { s } from 'react-native-size-matters';
import SocialCircle from './SocialCircle';
import SendButton from './SendButton';

const SocialSection = () => {
  return (
        <View style={styles.container}>
            <SocialCircle />
            <Text style={styles.text}>WhatsApp</Text>
            <SendButton />
        </View>
  );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
  },
    text: {
      marginStart: s(14),
      flex: 1,
      color: '#8083A3',
      fontSize: s(12),
  },
});

export default SocialSection;