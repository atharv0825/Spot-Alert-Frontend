import { View, Text, StyleSheet, Dimensions } from "react-native";
import React, { useContext } from "react";
import PrimaryBtn from "../../components/Button/PrimaryBtn";
import { ThemeContext } from "../../theme/ThemeContext";

const { width, height } = Dimensions.get("window");

const Home = ({ navigation }) => {
  const theme = useContext(ThemeContext);

  return (
    <View
      style={[
        styles.container,
        { backgroundColor: theme.background },
      ]}
    >
      <Text style={[styles.text, { color: theme.text }]}>
        Home
      </Text>

      <PrimaryBtn
        title="Login"
        widthRatio={0.30}
        onPress={() => navigation.navigate("login")}
      />

      <PrimaryBtn
        title="Signup"
        widthRatio={0.30}
        onPress={() => navigation.navigate("signup")}
      />
      <PrimaryBtn
        title="Signup"
        widthRatio={0.30}
        onPress={() => navigation.navigate("splash")}
      />
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    gap: 10,
  },
  text: {
    fontSize: 22,
    fontWeight: "600",
  },
});
