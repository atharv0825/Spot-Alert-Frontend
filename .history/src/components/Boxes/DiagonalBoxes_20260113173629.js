import React, { useEffect, useRef } from "react";
import { View, Animated, Dimensions, StyleSheet } from "react-native";

const { height, width } = Dimensions.get("window");

const BOX_WIDTH = 90;
const BOX_HEIGHT = 180;
const ANGLE = "40deg";

// We calculate a travel distance that ensures they are off-screen
const TRAVEL_DISTANCE = height + 400;

export default function DiagonalConveyor() {
  // Use one driver for perfect synchronization
  const moveAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    const startAnimation = () => {
      moveAnim.setValue(0);
      Animated.loop(
        Animated.timing(moveAnim, {
          toValue: 1,
          duration: 7000,
          useNativeDriver: true,
          // Linear easing ensures they stay perfectly in sync throughout the move
          easing: (t) => t, 
        })
      ).start();
    };

    startAnimation();
  }, [moveAnim]);

  // Interpolate the 0 -> 1 value into the pixel distance
  const translateForward = moveAnim.interpolate({
    inputRange: [0, 1],
    outputRange: [-TRAVEL_DISTANCE / 2, TRAVEL_DISTANCE / 2],
  });

  const translateBackward = moveAnim.interpolate({
    inputRange: [0, 1],
    outputRange: [TRAVEL_DISTANCE / 2, -TRAVEL_DISTANCE / 2],
  });

  return (
    <View style={styles.container}>
      {/* Box 1: Moving Down-Right */}
      <Animated.View
        style={[
          styles.box,
          {
            transform: [
              { translateX: -width * 0.2 }, // Adjust horizontal spacing
              { rotate: ANGLE },
              { translateY: translateForward },
            ],
          },
        ]}
      />

      {/* Box 2: Moving Up-Left */}
      <Animated.View
        style={[
          styles.box,
          {
            transform: [
              { translateX: width * 0.2 }, // Adjust horizontal spacing
              { rotate: ANGLE },
              { translateY: translateBackward },
            ],
          },
        ]}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000", // Dark background to see the boxes
    alignItems: "center",
    justifyContent: "center",
    overflow: "hidden",
  },
  box: {
    position: "absolute",
    width: BOX_WIDTH,
    height: BOX_HEIGHT,
    backgroundColor: "rgba(255,255,255,0.12)",
    borderRadius: 18,
    borderWidth: 1,
    borderColor: "rgba(255,255,255,0.2)",
  },
});