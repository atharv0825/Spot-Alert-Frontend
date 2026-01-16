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
          <Text style={[styles.spot, { color: theme.accent }]}>SPOT</Text>
          <Text style={{ color: theme.textPrimary }}>ALERT</Text>
        </Text>

        <Text style={[styles.tagline, { color: theme.textPrimary }]}>
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

  textBlock: {
    width: width * 0.85,
    marginTop: height * 0.18,
    alignSelf: "center",
  },

  heyText: {
    fontSize: 38,
    fontWeight: "700",
    marginBottom: height * 0.005,
  },

  loginText: {
    fontSize: 38,
    fontWeight: "700",
    marginBottom: height * 0.04,
  },

  input: {
    width: "100%",
    height: height * 0.075,
    borderRadius: 6,
    paddingHorizontal: 14,
    marginBottom: height * 0.02,
  },

  forgotText: {
    fontSize: 13,
    marginBottom: height * 0.035,
  },

  infoText: {
    fontSize: 13,
    textAlign: "center",
    marginBottom: height * 0.04,
  },

  loginButton: {
    alignSelf: "center",
    marginBottom: height * 0.045,
  },

  footerRow: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },

  footerText: {
    fontSize: 13,
  },
});
