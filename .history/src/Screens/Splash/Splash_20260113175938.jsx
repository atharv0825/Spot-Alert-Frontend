import { View, Text, StyleSheet, Image, Dimensions } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import Loder from "../../Assets/Loader.json";
import LottieView from "lottie-react-native";
import DiagonalBoxes from "../../components/Boxes/DiagonalBoxes";
import { BlurView } from "@react-native-community/blur";   // <-- GLASS LAYER

const { height } = Dimensions.get("window");

const SplashScreen = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>

      {/* Background motion */}
      <DiagonalBoxes />

      {/* Glass Blur Overlay */}
      <BlurView
        style={StyleSheet.absoluteFill}
        blurType="dark"
        blurAmount={25}
        reducedTransparencyFallbackColor="rgba(79,70,229,0.85)"
      />

      {/* Frosted Tint Layer */}
      <View style={styles.glassTint} />

      {/* Lottie Loader */}
      <LottieView
        source={Loder}
        autoPlay
        loop
        style={styles.animation}
      />

      {/* Logo */}
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
