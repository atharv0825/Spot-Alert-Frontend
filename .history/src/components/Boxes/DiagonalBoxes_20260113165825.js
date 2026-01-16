import React, { useEffect, useRef } from "react";
import { View, Animated, Dimensions, StyleSheet } from "react-native";

const { width, height } = Dimensions.get("window");

const BOX_WIDTH = 180;
const BOX_HEIGHT = 90;

export default function DiagonalBoxes() {
  const lane1 = useRef(new Animated.Value(0)).current;
  const lane2 = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.loop(
      Animated.parallel([
        Animated.timing(lane1, {
          toValue: 1,
          duration: 7000,
          useNativeDriver: true,
        }),
        Animated.timing(lane2, {
          toValue: 1,
          duration: 7000,
          useNativeDriver: true,
        }),
      ])
    ).start();
  }, []);

  const lane1Style = {
    transform: [
      {
        translateX: lane1.interpolate({
          inputRange: [0, 1],
          outputRange: [-BOX_WIDTH, width + BOX_WIDTH],
        }),
      },
      {
        translateY: lane1.interpolate({
          inputRange: [0, 1],
          outputRange: [-BOX_HEIGHT, height + BOX_HEIGHT],
        }),
      },
      { rotate: "-25deg" },
    ],
  };

  const lane2Style = {
    transform: [
      {
        translateX: lane2.interpolate({
          inputRange: [0, 1],
          outputRange: [-BOX_WIDTH, width + BOX_WIDTH],
        }),
      },
      {
        translateY: lane2.interpolate({
          inputRange: [0, 1],
          outputRange: [height + BOX_HEIGHT, -BOX_HEIGHT],
        }),
      },
      { rotate: "-25deg" },
    ],
  };

  return (
    <View style={styles.container}>
      <Animated.View style={[styles.box, lane1Style]} />
      <Animated.View style={[styles.box, lane2Style]} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    overflow: "hidden",
  },
  box: {
    position: "absolute",
    width: BOX_WIDTH,
    height: BOX_HEIGHT,
    backgroundColor: "rgba(255,255,255,0.12)",
    borderRadius: 20,
  },
});
