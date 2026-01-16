import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
  ImageBackground,
} from "react-native";
import React from "react";
import { BlurView } from "@react-native-community/blur";

const { width, height } = Dimensions.get("window");

const Home = ({ navigation }) => {
  return (
    <ImageBackground
      source={{ uri: "https://i.imgur.com/8Km9tLL.jpg" }} // any background
      style={styles.container}
    >
      {/* GLASS CARD */}
      <BlurView
        style={styles.glassCard}
        blurType="light"
        blurAmount={15}
        reducedTransparencyFallbackColor="white"
      >
        <TouchableOpacity
          style={styles.loginButton}
          onPress={() => navigation.navigate("login")}
        >
          <Text style={styles.loginButtonText}>Login</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.loginButton}
          onPress={() => navigation.navigate("signup")}
        >
          <Text style={styles.loginButtonText}>Sign Up</Text>
        </TouchableOpacity>
      </BlurView>
    </ImageBackground>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },

  glassCard: {
    width: width * 0.8,
    paddingVertical: height * 0.05,
    borderRadius: 20,
    alignItems: "center",
    overflow: "hidden", // REQUIRED
  },

  loginButton: {
    width: width * 0.45,
    height: height * 0.06,
    backgroundColor: "rgba(178,31,58,0.85)", // semi-transparent
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: height * 0.03,
  },

  loginButtonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "600",
  },
});
