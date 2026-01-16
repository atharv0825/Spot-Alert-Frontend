import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import Loder from "../../Assets/Loader.json";
import LottieView from "lottie-react-native";
import DiagonalBoxes from "../../components/Boxes/DiagonalBoxes";

const SplashScreen = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <DiagonalBoxes />

      <View style={styles.centerWrapper}>
        <View style={styles.circleContainer}>
          <View style={styles.circleContent}>
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

  centerWrapper: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },

  circleContainer: {
    width: 280,
    height: 280,
    borderRadius: 140,
    backgroundColor: "#FFFFFF",
    elevation: 6,
    shadowColor: "#000",
    shadowOpacity: 0.15,
    shadowRadius: 10,
    shadowOffset: { width: 0, height: 5 },
    justifyContent: "center",
    alignItems: "center",
  },

  circleContent: {
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 50
  },

  animation: {
    width: 200,
    height: 200,
  },

  textBlock: {
    alignItems: "center",
    marginTop: -90,
  },

  logo: {
    fontSize: 36,
    fontWeight: "700",
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
