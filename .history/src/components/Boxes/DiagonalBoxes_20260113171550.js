import React, { useEffect, useRef } from "react";
import { View, Animated, Dimensions, StyleSheet } from "react-native";

const { height } = Dimensions.get("window");

const BOX_WIDTH = 90;
const BOX_HEIGHT = 180;
const ANGLE = 40;
const TRAVEL_DISTANCE = height- 400;   // full animation path

export default function DiagonalConveyor() {
  const topLane = useRef(new Animated.Value(-200)).current;
  const bottomLane = useRef(new Animated.Value(TRAVEL_DISTANCE / 2)).current; 
  // ↑ This offset prevents both boxes from entering together

  useEffect(() => {
    Animated.loop(
      Animated.parallel([
        Animated.timing(topLane, {
          toValue: TRAVEL_DISTANCE,
          duration: 7000,
          useNativeDriver: true,
        }),
        Animated.timing(bottomLane, {
          toValue: -200,
          duration: 7000,
          useNativeDriver: true,
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
