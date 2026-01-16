import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  Animated
} from "react-native";
import React, { useEffect, useRef } from "react";
import { useNavigation } from "@react-navigation/native";
import LottieView from "lottie-react-native";
import Loder from "../../Assets/Loader.json";

const { width, height } = Dimensions.get("window");

const SplashScreen = () => {
  const navigation = useNavigation();

  const topBox = useRef(new Animated.Value(-200)).current;
  const bottomBox = useRef(new Animated.Value(height + 200)).current;

  useEffect(() => {
    Animated.loop(
      Animated.parallel([
        Animated.timing(topBox, {
          toValue: height + 200,
          duration: 7000,
          useNativeDriver: true,
        }),
        Animated.timing(bottomBox, {
          toValue: -200,
          duration: 7000,
          useNativeDriver: true,
        }),
      ])
    ).start();
  }, []);

  return (
    <View style={styles.container}>

      {/* Floating Boxes */}
      <Animated.View
        style={[
          styles.box,
          {
            top: 0,
            left: -80,
            transform: [
              { translateY: topBox },
              { rotate: "40deg" },
            ],
          },
        ]}
      />

      <Animated.View
        style={[
          styles.box,
          {
            bottom: 0,
            right: -80,
            transform: [
              { translateY: bottomBox },
              { rotate: "-25deg" },
            ],
          },
        ]}
      />

      {/* Lottie */}
      <LottieView
        source={Loder}
        autoPlay
        loop
        style={styles.animation}
      />

      {/* Text */}
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#4f46e5",
    overflow: "hidden",
  },

  animation: {
    width: "85%",
    height: "100%",
    alignSelf: "center",
    position: "absolute",
  },

  textBlock: {
    position: "absolute",
    top: "50%",
    transform: [{ translateY: height * 0.034 }],
    width: "100%",
    alignItems: "center",
  },

  logo: {
    fontSize: 36,
    fontWeight: "700",
    letterSpacing: 0.5,
    fontFamily: "InterDisplay-ExtraBold",
  },

  tagline: {
    fontSize: 15,
    color: "#e0e7ff",
    fontFamily: "InterDisplay-Light",
  },

  spot: {
    color: "#B12441",
  },

  alert: {
    color: "#e0e7ff",
  },

  box: {
    position: "absolute",
    width: 160,
    height: 500,
    backgroundColor: "rgba(255,255,255,0.15)",
    borderRadius: 28,
  },
});
