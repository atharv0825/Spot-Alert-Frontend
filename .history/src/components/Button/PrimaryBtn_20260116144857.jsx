import { Dimensions, StyleSheet, Text, TouchableOpacity } from "react-native";
import React from "react";

const { width, height } = Dimensions.get("window");

const AppButton = ({
  title = "Button",
  onPress,
  buttonStyle,
  textStyle,
  widthRatio = 0.30,
  backgroundColor = "#B21F3A",
}) => {
  return (
    <TouchableOpacity
      style={[
        styles.button,
        { width: width * widthRatio, backgroundColor },
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

export default AppButton;

const styles = StyleSheet.create({
  button: {
    height: height * 0.06,
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
