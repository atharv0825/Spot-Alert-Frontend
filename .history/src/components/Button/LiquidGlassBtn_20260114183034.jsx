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
