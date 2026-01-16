import { View, Text, StyleSheet, Dimensions } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import Loder from "../../Assets/Loader.json";
import LottieView from "lottie-react-native";
import DiagonalBoxes from "../../components/Boxes/DiagonalBoxes";

const { height } = Dimensions.get("window");

const SplashScreen = () => {
  const navigation = useNavigation();

  // useEffect(() => {
  //   const timer = setTimeout(() => {
  //     navigation.replace("home");
  //   }, 3000);
  //
  //   return () => clearTimeout(timer);
  // }, []);

  return (
    <View style={styles.container}>
      <DiagonalBoxes />
     
      <View style={styles.circleContainer}>
        <LottieView
          source={Loder}
          autoPlay
          loop
          style={styles.animation}
        />

        <View style={styles.textBlock}>
          <Text style={styles.logo}>
            <Text style={styles.spot}>SPOT</Text>
            <Text style={styles.alert}>ALERT</Text>
          </Text>
          <Text style={styles.tagline}>Road Safety Companion</Text>
        </View>
      </View>
    </View>
  );
};

export default SplashScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f3f2ff",
  },

  circleContainer: {
    width: 280,
    height: 280,
    borderRadius: 140,
    backgroundColor: "#FFFFFF",
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center",
    marginTop: height * 0.18,
    elevation: 6, // Android shadow
    shadowColor: "#000", // iOS shadow
    shadowOpacity: 0.15,
    shadowRadius: 10,
    shadowOffset: { width: 0, height: 5 },
  },

  animation: {
    width: "90%",
    height: "90%",
  },

  textBlock: {
    position: "absolute",
    bottom: 22,
    alignItems: "center",
  },

  logo: {
    fontSize: 36,
    fontWeight: "700",
    letterSpacing: 0.5,
  },

  tagline: {
    fontSize: 15,
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
