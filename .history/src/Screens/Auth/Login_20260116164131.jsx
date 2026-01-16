import {
  Dimensions,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  useColorScheme,
} from "react-native";
import React from "react";
import PrimaryBtn from "../../components/Button/PrimaryBtn";
import { LightTheme, DarkTheme } from "../../";

const { width, height } = Dimensions.get("window");

const Login = ({ navigation }) => {
  const scheme = useColorScheme();
  const theme = scheme === "dark" ? DarkTheme : LightTheme;

  return (
    <View style={[styles.container, { backgroundColor: theme.background }]}>
      <View style={styles.textBlock}>
        <Text style={[styles.heyText, { color: theme.textPrimary }]}>
          Hey,
        </Text>

        <Text style={styles.loginText}>
          <Text style={{ color: theme.accent }}>Login</Text>
          <Text style={{ color: theme.textPrimary }}> Now.</Text>
        </Text>

        <TextInput
          style={[
            styles.input,
            { backgroundColor: theme.inputBgActive, color: theme.textPrimary },
          ]}
          placeholder="Email"
          placeholderTextColor={theme.textSecondary}
          keyboardType="email-address"
        />

        <TextInput
          style={[
            styles.input,
            { backgroundColor: theme.inputBgInactive, color: theme.textPrimary },
          ]}
          placeholder="Password"
          placeholderTextColor={theme.textSecondary}
          secureTextEntry
        />

        <Text style={[styles.forgotText, { color: theme.textSecondary }]}>
          Forgot Password?{" "}
          <Text style={{ color: theme.textPrimary, fontWeight: "600" }}>
            Reset
          </Text>
        </Text>

        <Text style={[styles.infoText, { color: theme.textSecondary }]}>
          You know danger spots ahead
        </Text>

        <View style={styles.buttonWrapper}>
          <PrimaryBtn
            title="Login"
            widthRatio={0.3}
            onPress={() => console.log("Login Pressed")}
          />
        </View>

        <View style={styles.footerRow}>
          <Text style={[styles.footerText, { color: theme.textSecondary }]}>
            If you are new /
          </Text>

          <TouchableOpacity onPress={() => navigation.navigate("signup")}>
            <Text style={{ color: theme.textPrimary, fontWeight: "600" }}>
              Create Account
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default Login;


const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  textBlock: {
    width: width * 0.85,
    marginTop: height * 0.18,
    alignSelf: "center",
  },

  heyText: {
    fontSize: 38,
    fontWeight: "700",
    marginBottom: height * 0.005,
  },

  loginText: {
    fontSize: 38,
    fontWeight: "700",
    marginBottom: height * 0.04,
  },

  input: {
    width: "100%",
    height: height * 0.075,
    borderRadius: 6,
    paddingHorizontal: 14,
    marginBottom: height * 0.02,
  },

  forgotText: {
    fontSize: 13,
    marginBottom: height * 0.035,
  },

  infoText: {
    fontSize: 13,
    textAlign: "center",
    marginBottom: height * 0.04,
  },

  buttonWrapper: {
    alignItems: "center",
    marginBottom: height * 0.045,
  },

  footerRow: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },

  footerText: {
    fontSize: 13,
  },
});

