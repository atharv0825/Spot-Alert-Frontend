import {
  Dimensions,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  useColorScheme,
} from "react-native";
import React, { useState } from "react"; // merged React + useState
import PrimaryBtn from "../../components/Button/PrimaryBtn";
import { LightTheme, DarkTheme } from "../../theme/colors";
import { Eye, EyeOff } from "lucide-react-native";

const { width, height } = Dimensions.get("window");

const Login = ({ navigation }) => {
  const scheme = useColorScheme();
  const theme = scheme === "dark" ? DarkTheme : LightTheme;

  const [showPassword, setShowPassword] = useState(false); // password visibility state

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

        {/* EMAIL INPUT */}
        <TextInput
          style={[
            styles.input,
            { backgroundColor: theme.inputBgActive, color: theme.textPrimary },
          ]}
          placeholder="Email"
          placeholderTextColor={theme.textSecondary}
          keyboardType="email-address"
          autoCapitalize="none"
        />

        {/* PASSWORD INPUT WITH EYE ICON */}
        <View
          style={[
            styles.passwordWrapper,
            { backgroundColor: theme.inputBgInactive },
          ]}
        >
          <TextInput
            style={[styles.passwordInput, { color: theme.textPrimary }]}
            placeholder="Password"
            placeholderTextColor={theme.textSecondary}
            secureTextEntry={!showPassword} // 👈 toggle visibility
            textContentType="password"      // accessibility + autofill
            autoComplete="password"
            importantForAutofill="yes"
          />

          <TouchableOpacity
            onPress={() => setShowPassword(prev => !prev)} // prevents stale state
            activeOpacity={0.7}
            hitSlop={{ top: 10, bottom: 10, left: 10, right: 10 }} // better UX
          >
            {showPassword ? (
              <EyeOff size={20} color={theme.textSecondary} />
            ) : (
              <Eye size={20} color={theme.textSecondary} />
            )}
          </TouchableOpacity>
        </View>

        {/* FORGOT PASSWORD */}
        <Text style={[styles.forgotText, { color: theme.textSecondary }]}>
          Forgot Password?{" "}
          <Text style={{ color: theme.textPrimary, fontWeight: "600" }}>
            Reset
          </Text>
        </Text>

        <Text style={[styles.infoText, { color: theme.textSecondary }]}>
          You know danger spots ahead
        </Text>

        {/* LOGIN BUTTON */}
        <View style={styles.buttonWrapper}>
          <PrimaryBtn
            title="Login"
            widthRatio={0.3}
            onPress={() => console.log("Login Pressed")}
          />
        </View>

        {/* FOOTER */}
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

/* ===================== STYLES ===================== */

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

  passwordWrapper: {
    width: "100%",
    height: height * 0.075,
    borderRadius: 6,
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 14,
    marginBottom: height * 0.02,
  },

  passwordInput: {
    flex: 1,
    fontSize: 14,
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
