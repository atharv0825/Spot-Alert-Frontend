import React, { useEffect, useRef } from "react";
import { View, Animated, Dimensions, StyleSheet } from "react-native";

const { height } = Dimensions.get("window");

const BOX_WIDTH = 90;
const BOX_HEIGHT = 180;
const ANGLE = 40;

const START = -300;
const END = height + 300;

export default function DiagonalConveyor() {
  const topLane = useRef(new Animated.Value(START)).current;
  const bottomLane = useRef(new Animated.Value(END)).current;

  useEffect(() => {
    Animated.loop(
      Animated.parallel([
        Animated.timing(topLane, {
          toValue: END,
          duration: 3000,   // 3 seconds
          useNativeDriver: true,
        }),
        Animated.timing(bottomLane, {
          toValue: START,
          duration: 3000,   // 3 seconds
          useNativeDriver: true,
        }),
      ])
    ).start();
  }, []);

  return (
    <View style={styles.container}>
      <Animated.View
        style={[
          styles.box,
          {
            top: 150,
            left: 20,
            transform: [
              { rotate: `${ANGLE}deg` },
              { translateY: topLane },
            ],
          },
        ]}
      />

      <Animated.View
        style={[
          styles.box,
          {
            bottom: 150,
            right: 20,
            transform: [
              { rotate: `${ANGLE}deg` },
              { translateY: bottomLane },
            ],
          },
        ]}
      />
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
    borderRadius: 18,
  },
});
