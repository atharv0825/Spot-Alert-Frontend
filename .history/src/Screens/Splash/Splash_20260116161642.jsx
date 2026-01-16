import { View, Text, StyleSheet, Dimensions } from "react-native";
import React, { useContext } from "react";
import Loder from "../../Assets/Loader.json";
import LottieView from "lottie-react-native";
import DiagonalBoxes from "../../components/Boxes/DiagonalBoxes";
import { ThemeContext } from "../../theme/ThemeContext"; // ✅ CORRECT IMPORT

const { width } = Dimensions.get("window");
const CIRCLE_SIZE = width * 0.72;

const SplashScreen = () => {

  // ❌ const theme = useContext(ThemeProvider);
  // ✅ ERROR FIX: useContext must consume ThemeContext, not ThemeProvider
  const theme = useContext(ThemeContext);

  return (
    <View style={[styles.container, { backgroundColor: theme.background }]}>
      <DiagonalBoxes />

      <View style={styles.centerWrapper}>
        <View
          style={[
            styles.circleContainer,
            {
              width: CIRCLE_SIZE,
              height: CIRCLE_SIZE,
              borderRadius: CIRCLE_SIZE / 2,
              backgroundColor: theme.card,
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
                <Text style={[styles.spot, { color: theme.secondaryText }]}>
                  SPOT
                </Text>
                <Text style={{ color: theme.primaryText }}>
                  ALERT
                </Text>
              </Text>

              <Text style={[styles.tagline, { color: theme.accent }]}>
                Road Safety Companion
              </Text>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

export default SplashScreen;
