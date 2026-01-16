import { View, Text, StyleSheet, Dimensions } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import Loder from "../../Assets/Loader.json";
import LottieView from "lottie-react-native";
import DiagonalBoxes from "../../components/Boxes/DiagonalBoxes";
import { ThemeProvider } from "../../theme/ThemeContext";

const { width } = Dimensions.get("window");
const CIRCLE_SIZE = width * 0.72; // responsive circle size

const SplashScreen = () => {
  const navigation = useNavigation();

  return (
    <ThemeProvider>
      <View style={styles.container}>
        <DiagonalBoxes />

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
            {/* Content wrapper */}
            <View style={styles.circleContent}>
              {/* Lottie Section */}
              <View style={styles.lottieWrapper}>
                <LottieView
                  source={Loder}
                  autoPlay
                  loop
                  style={styles.animation}
                />
              </View>

              {/* Logo Section */}
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
    </ThemeProvider>
  );
};

export default SplashScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  centerWrapper: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },

  circleContainer: {
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
    flex: 0.65,
    justifyContent: "center",
    alignItems: "center",
  },

  animation: {
    width: "90%",
    height: "90%",
  },

  textBlock: {
    flex: 0.35,
    justifyContent: "center",
    alignItems: "center",
  },

  logo: {
    fontSize: 34,
    fontWeight: "700",
  },

  tagline: {
    fontSize: 14,
    fontFamily: "InterDisplay-SemiBold",
  },

  spot: {
    fontFamily: "InterDisplay-ExtraBold",
  },
});

