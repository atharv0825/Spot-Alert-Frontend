import { View, Text, StyleSheet, Dimensions } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import Loder from "../../Assets/Loader.json";
import LottieView from "lottie-react-native";
import DiagonalBoxes from "../../components/Boxes/DiagonalBoxes";

const { width } = Dimensions.get("window");
const CIRCLE_SIZE = width * 0.72;

const SplashScreen = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <View style={styles.backgroundLayer}>
        <DiagonalBoxes />
      </View>

      <View style={styles.centerWrapper}>
        <View
          style={[
            styles.circleContainer,
            {
              width: CIRCLE_SIZE,
              height: CIRCLE_SIZE,
              borderRadius: CIRCLE_SIZE / 2,
            },
          ]}
        >
          <View style={styles.circleContent}>
            <View style={styles.lottieWrapper}>
              <LottieView
                source={Loder}
                autoPlay
                loop
                style={styles.animation}
              />
            </View>

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

  backgroundLayer: {
    ...StyleSheet.absoluteFillObject,
    zIndex: 1,
  },

  centerWrapper: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    zIndex: 10,
  },

  circleContainer: {
    backgroundColor: "#FFFFFF",
    elevation: 6,
    shadowColor: "#000",
    shadowOpacity: 0.15,
    shadowRadius: 10,
    shadowOffset: { width: 0, height: 5 },
    zIndex: 10,
  },

  circleContent: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },

  lottieWrapper: {
    width: "100%",
    height: "65%",
    justifyContent: "center",
    alignItems: "center",
  },

  animation: {
    width: "85%",
    height: "85%",
  },

  textBlock: {
    height: "35%",
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
