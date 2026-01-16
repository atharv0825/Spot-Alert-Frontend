import React, { useEffect, useRef } from "react";
import { View, Animated, Dimensions, StyleSheet } from "react-native";

const { width, height } = Dimensions.get("window");

const BOX_WIDTH = 90;
const BOX_HEIGHT = 180;
const ANGLE = 40; // degrees

export default function DiagonalConveyor() {
  const topLane = useRef(new Animated.Value(-200)).current;
  const bottomLane = useRef(new Animated.Value(height + 200)).current;

  useEffect(() => {
    Animated.loop(
      Animated.parallel([
        Animated.timing(topLane, {
          toValue: height + 200,
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
      
      {/* Top Left Lane */}
      <Animated.View
        style={[
          styles.box,
          {
            top: 40,
            left: -60,
            transform: [
              { rotate: `${ANGLE}deg` },
              { translateY: topLane },
            ],
          },
        ]}
      />

      {/* Bottom Right Lane */}
      <Animated.View
        style={[
          styles.box,
          {
            bottom: 40,
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
