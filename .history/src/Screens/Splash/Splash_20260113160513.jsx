import { View, Text, StyleSheet, Image, Dimensions } from "react-native";
import React, { useEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import Loder from '../../Assets/Loader.json'
import LottieView from "lottie-react-native";

const { height } = Dimensions.get("window");
const SplashScreen = () => {
  const navigation = useNavigation();

  // useEffect(() => {
  //   const timer = setTimeout(() => {
  //     navigation.replace("home");   // go to Home after splash
  //   }, 3000);

  //   return () => clearTimeout(timer);
  // }, []);

  return (
    <View style={styles.container}>
      <LottieView
        source={Loder}
        autoPlay
        loop
        style={styles.animation}
      />
      <View style={styles.textBlock}>
        <Text style={styles.logo}>
          <Text>SPOT</Text>
          <Text>ALERT</Text>
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
    color: "#fff",
    letterSpacing : 0.5,
  },

  tagline: {
    fontSize: 15,
    color: "#e0e7ff",
  },

  spot : {
    color :"B12441" ,
    fontFamily:"Inter-Regular"
  }
});