import { View, Text, StyleSheet, Dimensions } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import Loder from "../../Assets/Loader.json";
import LottieView from "lottie-react-native";
import DiagonalBoxes from "../../components/Boxes/DiagonalBoxes";

const { width } = Dimensions.get("window");
const CIRCLE_SIZE = width * 0.72; // responsive circle size

const SplashScreen = () => {
  const navigation = useNavigation();

  return (
    
  );
};

export default SplashScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f3f2ff",
  },

  centerWrapper: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },

  circleContainer: {
    backgroundColor: "#FFFFFF",
    elevation: 6,
    shadowColor: "#000",
    shadowOpacity: 0.15,
    shadowRadius: 10,
    shadowOffset: { width: 0, height: 5 },
  },

  circleContent: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },

  lottieWrapper: {
    flex: 0.65, // 65% of circle height
    justifyContent: "center",
    alignItems: "center",
  },

  animation: {
    width: "90%",
    height: "90%",
  },

  textBlock: {
    flex: 0.35, // remaining space
    justifyContent: "center",
    alignItems: "center",
  },

  logo: {
    fontSize: 34,
    fontWeight: "700",
  },

  tagline: {
    fontSize: 14,
    color: "#D02752",
    fontFamily: "InterDisplay-SemiBold",
  },

  spot: {
    color: "#B12441",
    fontFamily: "InterDisplay-ExtraBold",
  },

  alert: {
    color: "#111F35",
  },
});
