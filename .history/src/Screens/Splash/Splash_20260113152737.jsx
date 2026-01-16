import { View, Text, StyleSheet, Image } from "react-native";
import React, { useEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import Loder from '../../Assets/Loader.json'
import LottieView from "lottie-react-native";

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
        <Text style={styles.logo}>SpotAlert</Text>
        <Text style={styles.tagline}>Road Safety Companion</Text>
      </View>
    </View>
  );
};

export default SplashScreen;

const styles = StyleSheet.create({
  container : {
    flex : 1,
    backgroundColor : "#4f46e5"
  },

  animation: {
    width: "85%",
    height: "100%",
    position: "absolute",
    // alignItems: "center"      
  },

  textBlock: {
    position: "absolute",
    bottom: 120,            
    width: "100%",
    alignItems: "center",
  },
});
