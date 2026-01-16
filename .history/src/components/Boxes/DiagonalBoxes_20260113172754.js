import React, { useEffect, useRef } from "react";
import { View, Animated, Dimensions, StyleSheet } from "react-native";

const { height } = Dimensions.get("window");

const BOX_WIDTH = 90;
const BOX_HEIGHT = 180;
const ANGLE = 40;

// One symmetric travel distance for both lanes
const START = -600;
const END = height + 300;   // must be same magnitude for both

export default function DiagonalConveyor() {
  const topLane = useRef(new Animated.Value(START)).current;
  const bottomLane = useRef(new Animated.Value(END)).current;

  useEffect(() => {
    Animated.loop(
      Animated.parallel([
        Animated.timing(topLane, {
          toValue: END,
          duration: 7000,
          useNativeDriver: true,
        }),
        Animated.timing(bottomLane, {
          toValue: START,
          duration: 7000,
          useNativeDriver: true,  // OK
        }),
      ])
    ).start();
  }, []);

  return (
    <View style={styles.container}>
      {/* Top Left Conveyor */}
      <Animated.View
        style={[
          styles.box,
          {
            top: 150,
            left: -60,
            transform: [
              { rotate: `${ANGLE}deg` },
              { translateY: topLane },
            ],
          },
        ]}
      />

      {/* Bottom Right Conveyor */}
      <Animated.View
        style={[
          styles.box,
          {
            bottom: 150,
            right: -60,
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
