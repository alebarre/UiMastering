import { StyleSheet, Image, View } from 'react-native'
import React from 'react'
import FoodLogo from '../assets/FoodLogo'

const IntroScreen = () => {
  return (
    <View>
      <Image source={require("../assets/Logo.png")}
      style={{marginTop: 80}}
      />
      <FoodLogo />
    </View>
  )
}

export default IntroScreen

const styles = StyleSheet.create({})