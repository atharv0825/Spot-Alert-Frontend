import { View, Text, StyleSheet, Dimensions } from "react-native";
import React, { useContext } from "react";
import { useNavigation } from "@react-navigation/native";
import Loder from "../../Assets/Loader.json";
import LottieView from "lottie-react-native";
import DiagonalBoxes from "../../components/Boxes/DiagonalBoxes";
import { ThemeContext } from "../../theme/ThemeContext"; // ✅ ADD THIS

const { height } = Dimensions.get("window");

const SplashScreen = () => {
  const navigation = useNavigation();
  const theme = useContext(ThemeContext); // ✅ GET THEME

  return (
    <View style={[styles.container, { backgroundColor: theme.background }]}>
      <DiagonalBoxes />

      <LottieView
        source={Loder}
        autoPlay
        loop
        style={styles.animation}
      />

      <View style={styles.textBlock}>
        <Text style={styles.logo}>
          <Text style={[styles.spot, { color: theme.textSecondary }]}>SPOT</Text>
          <Text style={{ color: theme.textPrimary }}>ALERT</Text>
        </Text>

        <Text style={[styles.tagline, { color: theme.pri }]}>
          Road Safety Companion
        </Text>
      </View>
    </View>
  );
};

export default SplashScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
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
  },
  tagline: {
    fontSize: 15,
    fontFamily: "InterDisplay-SemiBold",
  },
  spot: {
    fontFamily: "InterDisplay-ExtraBold",
  },
});
