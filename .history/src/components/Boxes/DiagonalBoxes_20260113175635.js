import React, { useEffect, useRef } from "react";
import { View, Animated, Dimensions, StyleSheet, Image } from "react-native";

const { height } = Dimensions.get("window");

const BOX_WIDTH = 90;
const BOX_HEIGHT = 180;
const ANGLE = 40;

const START = -300;
const END = height + 300;

// 🔴 ERROR WAS HERE BEFORE: <Stripe />
// FIX: Use Image instead of broken SVG component
const STRIPE = require("../../Assets/strip.svg");   // <-- your file converted to png or webp

export default function DiagonalConveyor() {
  const topLane = useRef(new Animated.Value(START)).current;
  const bottomLane = useRef(new Animated.Value(END)).current;

  useEffect(() => {
    Animated.loop(
      Animated.parallel([
        Animated.timing(topLane, {
          toValue: END,
          duration: 3000,
          useNativeDriver: true,
        }),
        Animated.timing(bottomLane, {
          toValue: START,
          duration: 3000,
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
          styles.lane,
          {
            top: 150,
            left: 20,
            transform: [
              { rotate: `${ANGLE}deg` },
              { translateY: topLane },
            ],
          },
        ]}
      >
        <Image source={STRIPE} style={styles.image} />
      </Animated.View>

      {/* Bottom Right Conveyor */}
      <Animated.View
        style={[
          styles.lane,
          {
            bottom: 150,
            right: 20,
            transform: [
              { rotate: `${ANGLE}deg` },
              { translateY: bottomLane },
            ],
          },
        ]}
      >
        <Image source={STRIPE} style={styles.image} />
      </Animated.View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    overflow: "hidden",
  },

  lane: {
    position: "absolute",
    width: BOX_WIDTH,
    height: BOX_HEIGHT,
  },

  image: {
    width: "100%",
    height: "100%",
    resizeMode: "contain",
  },
});
