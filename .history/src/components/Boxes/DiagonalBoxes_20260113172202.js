import React, { useEffect, useRef } from "react";
import { View, Animated, Dimensions, StyleSheet } from "react-native";

const { height } = Dimensions.get("window");

const BOX_WIDTH = 90;
const BOX_HEIGHT = 180;
const ANGLE = 40;

const START = -300;
const END = height + 300;
const TRAVEL = END - START;

export default function DiagonalConveyor() {
  const laneA = useRef(new Animated.Value(START)).current;
  const laneB = useRef(new Animated.Value(START + TRAVEL / 2)).current; 
  // 180° out of phase

  useEffect(() => {
    const animate = (lane) =>
      Animated.loop(
        Animated.timing(lane, {
          toValue: END,
          duration: 7000,
          useNativeDriver: true,
        })
      ).start();

    animate(laneA);
    animate(laneB);
  }, []);

  return (
    <View style={styles.container}>
      {/* Conveyor A */}
      <Animated.View
        style={[
          styles.box,
          {
            top: 150,
            left: -60,
            transform: [{ rotate: `${ANGLE}deg` }, { translateY: laneA }],
          },
        ]}
      />

      {/* Conveyor B */}
      <Animated.View
        style={[
          styles.box,
          {
            bottom: 150,
            right: -60,
            transform: [{ rotate: `${ANGLE}deg` }, { translateY: laneB }],
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
