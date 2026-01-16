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
