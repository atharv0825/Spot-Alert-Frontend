import { StyleSheet, Text, TouchableOpacity } from "react-native";
import React from "react";

const PrimaryBtn = ({
  title = "Button",
  onPress,
  buttonStyle,
  textStyle,
  width = "40%", // ✅ parent-relative width
  backgroundColor = "#B21F3A",
}) => {
  return (
    <TouchableOpacity
      style={[
        styles.button,
        { width, backgroundColor },
        buttonStyle,
      ]}
      onPress={onPress}
      activeOpacity={0.8}
    >
      <Text style={[styles.buttonText, textStyle]}>
        {title}
      </Text>
    </TouchableOpacity>
  );
};

export default PrimaryBtn;

const styles = StyleSheet.create({
  button: {
    height: 48,
    borderRadius: 6,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "600",
  },
});
