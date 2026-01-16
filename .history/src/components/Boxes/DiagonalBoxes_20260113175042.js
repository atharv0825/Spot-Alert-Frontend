import React, { useEffect, useRef } from "react";
import { View, Animated, Dimensions, StyleSheet } from "react-native";
import Stripe from "../assets/stripe.svg";   // <-- your file

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
      
      {/* Top lane */}
      <Animated.View
        style={{
          position: "absolute",
          top: 150,
          left: 20,
          transform: [
            { rotate: `${ANGLE}deg` },
            { translateY: topLane },
          ],
        }}
      >
        <Stripe width={BOX_WIDTH} height={BOX_HEIGHT} />
      </Animated.View>

      {/* Bottom lane */}
      <Animated.View
        style={{
          position: "absolute",
          bottom: 150,
          right: 20,
          transform: [
            { rotate: `${ANGLE}deg` },
            { translateY: bottomLane },
          ],
        }}
      >
        <Stripe width={BOX_WIDTH} height={BOX_HEIGHT} />
      </Animated.View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    overflow: "hidden",
  },
});
