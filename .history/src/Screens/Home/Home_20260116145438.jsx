import { View, Text, StyleSheet, Dimensions, TouchableOpacity } from "react-native";
import React from "react";
import PrimaryBtn from "../../components/Button/PrimaryBtn"

const { width, height } = Dimensions.get("window")

const Home = ({ navigation }) => {
  return (
    <View style={styles.container}>

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


    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    gap:3
  },
  text: {
    fontSize: 22,
    fontWeight: "600",
  },
  loginButton: {
    width: width * 0.30,
    height: height * 0.06,
    backgroundColor: "#B21F3A",
    borderRadius: 6,
    alignSelf: "center",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: height * 0.045,
  },

  loginButtonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "600",
  },
});
