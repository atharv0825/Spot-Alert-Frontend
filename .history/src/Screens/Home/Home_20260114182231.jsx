import { View, Text, StyleSheet, Dimensions, TouchableOpacity } from "react-native";
import React from "react";
import { BlurView } from "@react-native-community/blur";

const { width, height } = Dimensions.get("window")

const Home = ({ navigation }) => {
  return (
    <View style={styles.container}>
      {/* <Text style={styles.text}>Home Screen</Text> */}

      <TouchableOpacity style={styles.loginButton} onPress={() => navigation.navigate("login")}>
        <Text style={styles.loginButtonText}>Login</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.loginButton} onPress={() => navigation.navigate("signup")}>
        <Text style={styles.loginButtonText}>signup</Text>
      </TouchableOpacity>
    

    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#EAEAEA", // blur needs something behind
  },

  glassButton: {
    width: width * 0.45,
    height: height * 0.065,
    borderRadius: 14,
    marginBottom: height * 0.035,
    overflow: "hidden",                 // 🔑 REQUIRED
    borderWidth: 1,
    borderColor: "rgba(255,255,255,0.35)",
  },

  buttonContent: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(178,31,58,0.55)", // glass tint
  },

  loginButtonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "600",
  },
});
