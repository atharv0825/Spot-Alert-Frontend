import { View, Text, StyleSheet, Dimensions } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import Loder from '../../Assets/Loader.json'
import LottieView from "lottie-react-native";
import DiagonalBoxes from "../components/DiagonalBoxes";   // <-- ADD THIS

const { height } = Dimensions.get("window");

const SplashScreen = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      
      {/* Diagonal moving background */}
      <DiagonalBoxes />

      {/* Lottie animation */}
      <LottieView
        source={Loder}
        autoPlay
        loop
        style={styles.animation}
      />

      {/* Logo & text */}
      <View style={styles.textBlock}>
        <Text style={styles.logo}>
          <Text style={styles.spot}>SPOT</Text>
          <Text style={styles.alert}>ALERT</Text>
        </Text>
        <Text style={styles.tagline}>Road Safety Companion</Text>
      </View>

    </View>
  );
};

export default SplashScreen;
