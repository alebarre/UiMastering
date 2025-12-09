import React, { useState } from "react";
import {
  StyleSheet,
  TextInput,
  Text,
  View,
  TouchableOpacity,
} from "react-native";
import { s, vs } from "react-native-size-matters";
import FontAwesome from "@expo/vector-icons/FontAwesome";

const LoginScreen = () => {
  const [showTextEntry, setShowTextEntry] = useState(true);

  return (
    <View style={styles.container}>
      <Text style={styles.welcomeText}>Welcome Back!</Text>
      <View style={styles.usernameArea}>
        <FontAwesome name="user" size={24} color="black" />
        <TextInput
          style={styles.loginInput}
          placeholder="Username or Email"
          placeholderTextColor="#666"
        />
      </View>
      <View style={styles.passwordArea}>
        <FontAwesome name="lock" size={24} color="black" />
        <TextInput
          style={styles.passwordInput}
          placeholder="Password"
          placeholderTextColor="#666"
          secureTextEntry={showTextEntry}
        />
        <FontAwesome
          onPress={() => setShowTextEntry(!showTextEntry)}
          name="eye"
          size={24}
          color="black"
        />
      </View>
      <Text style={styles.forgotPasswordText}>Forgot Password?</Text>
      <TouchableOpacity style={styles.LoginButtonArea}>
        <Text style={styles.loginButtonText}>Login.</Text>
      </TouchableOpacity>
      <View style={styles.socialMediaArea}>
        <Text style={styles.loginWithText}>- OR Continue with -</Text>
        <View style={styles.iconsSocialMediaArea}>
          <FontAwesome name="google" size={40} color="#DB4437" />
          <FontAwesome name="apple" size={40} color="#000000ff" />
          <FontAwesome name="facebook-square" size={40} color="#3b5998" />
        </View>
        <Text style={styles.createAnAccountText}>
          Create an account{" "}
          <Text
            style={{ color: "#F83758", textDecorationLine: "underline" }}
            onPress={() => {
              console.log("Sign Up pressed");
            }}
          >
            Sign UP!
          </Text>
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  welcomeText: {
    position: "absolute",
    height: vs(83),
    width: s(185),
    fontFamily: "MonumentExtended-Black",
    fontSize: 36,
    fontWeight: "700",
    marginTop: vs(63),
    marginLeft: s(32),
    marginBottom: 20,
  },
  usernameArea: {
    marginTop: vs(182),
    marginLeft: s(32),
    position: "absolute",
    flexDirection: "row",
    alignItems: "center",
    borderRadius: 15,
    borderWidth: 1,
    borderColor: "#A8A8A9",
    backgroundColor: "#F3F3F3",
    paddingHorizontal: s(10),
  },
  passwordArea: {
    marginTop: vs(263),
    marginLeft: s(32),
    position: "absolute",
    flexDirection: "row",
    alignItems: "center",
    borderRadius: 15,
    borderWidth: 1,
    borderColor: "#A8A8A9",
    backgroundColor: "#F3F3F3",
    paddingHorizontal: s(10),
  },
  loginInput: {
    fontSize: 16,
    height: vs(55),
    width: s(255),
  },
  passwordInput: {
    fontSize: 16,
    height: vs(55),
    width: s(239),
  },
  forgotPasswordText: {
    position: "absolute",
    fontFamily: "Montserrat",
    fontWeight: "600",
    fontSize: 16,
    color: "#F83758",
    height: vs(15),
    width: s(108),
    marginTop: vs(332),
    marginLeft: s(215),
  },
  LoginButtonArea: {
    backgroundColor: "#F83758",
    borderRadius: 10,
    position: "absolute",
    width: s(300),
    height: vs(55),
    marginTop: vs(399),
    marginLeft: s(29),
  },
  loginButtonText: {
    fontFamily: "MonumentExtended-Black",
    color: "#FFFFFF",
    textAlign: "center",
    marginTop: vs(12),
    fontWeight: "700",
    fontSize: 24,
  },
  socialMediaArea: {
    position: "absolute",
    height: vs(136),
    width: s(194),
    marginTop: vs(529),
    marginLeft: s(92),
  },
  iconsSocialMediaArea: {
    flexDirection: "row",
    marginTop: vs(16),
    gap: s(20),
    justifyContent: "center",
    alignItems: "center",
  },
  loginWithText: {
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
    fontFamily: "Montserrat",
    fontWeight: "600",
    fontSize: 16,
    color: "#181C2E",
  },
  createAnAccountText: {
    marginTop: vs(10),
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
    fontFamily: "Montserrat",
    fontWeight: "600",
    fontSize: 16,
    color: "#181C2E",
  },
});

export default LoginScreen;
