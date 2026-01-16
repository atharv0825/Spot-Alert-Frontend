import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
  Platform,
} from "react-native";
import React from "react";
import { BlurView } from "@react-native-community/blur";

const { width, height } = Dimensions.get("window");

const LiquidGlassButton = ({ title, onPress }) => {
  return (
    <View style={styles.wrapper}>
      {Platform.OS === "ios" ? (
        <BlurView
          blurType="light"
          blurAmount={20}
          style={styles.blur}
        />
      ) : (
        // Android fallback (no native blur)
        <View style={styles.androidFallback} />
      )}

      <TouchableOpacity style={styles.content} onPress={onPress}>
        <Text style={styles.text}>{title}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default LiquidGlassButton;

const styles = StyleSheet.create({
  wrapper: {
    width: width * 0.5,
    height: height * 0.065,
    borderRadius: 18,
    overflow: "hidden",
    marginBottom: 20,

    // glass edge + depth
    borderWidth: 1,
    borderColor: "rgba(255,255,255,0.35)",

    shadowColor: "#000",
    shadowOpacity: 0.15,
    shadowRadius: 10,
    shadowOffset: { width: 0, height: 8 },

    elevation: 6, // Android depth
  },

  blur: {
    ...StyleSheet.absoluteFillObject,
  },

  androidFallback: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: "rgba(255,255,255,0.25)",
  },

  content: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",

    // liquid tint layer
    backgroundColor: "rgba(255,255,255,0.15)",
  },

  text: {
    color: "#000",
    fontSize: 16,
    fontWeight: "600",
  },
});
