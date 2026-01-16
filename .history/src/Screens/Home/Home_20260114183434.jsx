import { View, Text, StyleSheet, Dimensions, TouchableOpacity } from "react-native";
import React from "react";
import { BlurView } from "@react-native-community/blur";
import LiquidGlassButton from "../../components/Button/LiquidGlassBtn"

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

      <LiquidGlassButton
        title="login"
        onPress={() => navigation.navigate("login")}
      />


    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 22,
    fontWeight: "600",
  },
  loginButton: {
    width: width * 0.30,
    height: height * 0.06,
    backgroundColor: "#B21F3A",
    borderRadius: 6,
    alignSelf: "center",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: height * 0.045,
  },

  loginButtonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "600",
  },
});
