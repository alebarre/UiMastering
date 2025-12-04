import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { s } from 'react-native-size-matters';
import UserAvatar from './UserAvatar';
import BackButton from './BackButton';

const SocialCircle = () => {
  return (
        <View style={styles.circle}>
        </View>
  );
};

const styles = StyleSheet.create({
    circle: {
        width: s(46),
        height: s(46),
        borderRadius: s(23),
        backgroundColor: '#ffffffff',    
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: s(1),
        borderColor: '#ccc',
  },
});

export default SocialCircle;