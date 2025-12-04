import React from 'react';
import { StyleSheet, TouchableOpacity, Text } from 'react-native';
import { s } from 'react-native-size-matters';
import { SendIcon } from '../assets/icons';

const SendButton = () => {
  return (
        <TouchableOpacity style={styles.circle}>
            <SendIcon />
        </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
    circle: {
        width: s(46),
        height: s(46),
        borderRadius: s(23),
        backgroundColor: '#5355e9ff',    
        justifyContent: 'center',
        alignItems: 'center',
  },
});

export default SendButton;