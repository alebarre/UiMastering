import React from 'react';
import { StyleSheet, View } from 'react-native';
import { vs, s } from 'react-native-size-matters';
import SocialCircle from '../components/SocialCircle';
import SocialSection from '../components/SocialSection';

const ContactUsScreen = () => {
  return (
        <View style={styles.container}>
            <View style={styles.header}>
            

            </View>
            <SocialSection />
        </View>
  );
};


const styles = StyleSheet.create({
    container: {
        marginTop: vs(50),
        paddingHorizontal: s(17),
        borderBottomWidth: 1,
        borderBottomColor: '#E4E4E4',
        paddingVertical: vs(15),
  },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
  },
});

export default ContactUsScreen;