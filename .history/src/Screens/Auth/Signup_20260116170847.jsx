import {
  Dimensions,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  TextInput,
  useColorScheme,
} from "react-native";
import React, { useState } from "react";
import { LightTheme, DarkTheme } from "../../theme/colors";
import { Eye, EyeOff } from "lucide-react-native";

const { width, height } = Dimensions.get("window");

const SignUp = ({ navigation }) => {
  const scheme = useColorScheme();
  const theme = scheme === "dark" ? DarkTheme : LightTheme;

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  return (
    <View style={[styles.container, { backgroundColor: theme.background }]}>
      <View style={styles.textBlock}>
        <Text style={[styles.heyText, { color: theme.textPrimary }]}>
          Hey,
        </Text>

        <Text style={styles.loginText}>
          <Text style={{ color: theme.accent }}>Signup</Text>
          <Text style={{ color: theme.textPrimary }}> Now</Text>
        </Text>

        {/* FULL NAME */}
        <TextInput
          style={[
            styles.input,
            { backgroundColor: theme.inputBgActive, color: theme.textPrimary },
          ]}
          placeholder="Full Name"
          placeholderTextColor={theme.textSecondary}
        />

        {/* EMAIL */}
        <TextInput
          style={[
            styles.input,
            { backgroundColor: theme.inputBgInactive, color: theme.textPrimary },
          ]}
          placeholder="Email"
          placeholderTextColor={theme.textSecondary}
          keyboardType="email-address"
          autoCapitalize="none"
        />
 
        <View
          style={[
            styles.passwordWrapper,
            { backgroundColor: theme.inputBgActive },
          ]}
        >
          <TextInput
            style={[styles.passwordInput, { color: theme.textPrimary }]}
            placeholder="Password"
            placeholderTextColor={theme.textSecondary}
            secureTextEntry={!showPassword}
            textContentType="password"
            autoComplete="password"
          />

          <TouchableOpacity
            onPress={() => setShowPassword(prev => !prev)}
            activeOpacity={0.7}
            hitSlop={{ top: 10, bottom: 10, left: 10, right: 10 }}
          >
            {showPassword ? (
              <EyeOff size={20} color={theme.textSecondary} />
            ) : (
              <Eye size={20} color={theme.textSecondary} />
            )}
          </TouchableOpacity>
        </View>

        {/* CONFIRM PASSWORD */}
        <View
          style={[
            styles.passwordWrapper,
            { backgroundColor: theme.inputBgInactive },
          ]}
        >
          <TextInput
            style={[styles.passwordInput, { color: theme.textPrimary }]}
            placeholder="Confirm Password"
            placeholderTextColor={theme.textSecondary}
            secureTextEntry={!showConfirmPassword}
            textContentType="password"
            autoComplete="password"
          />

          <TouchableOpacity
            onPress={() => setShowConfirmPassword(prev => !prev)}
            activeOpacity={0.7}
            hitSlop={{ top: 10, bottom: 10, left: 10, right: 10 }}
          >
            {showConfirmPassword ? (
              <EyeOff size={20} color={theme.textSecondary} />
            ) : (
              <Eye size={20} color={theme.textSecondary} />
            )}
          </TouchableOpacity>
        </View>

        <Text style={[styles.infoText, { color: theme.textSecondary }]}>
          By signing up, you agree to our Terms & Privacy Policy
        </Text>

        <TouchableOpacity
          style={[styles.loginButton, { backgroundColor: theme.accent }]}
        >
          <Text style={styles.loginButtonText}>Create Account</Text>
        </TouchableOpacity>

        {/* FOOTER */}
        <View style={styles.footerRow}>
          <Text style={[styles.footerText, { color: theme.textSecondary }]}>
            Already have an account?
          </Text>

          <TouchableOpacity onPress={() => navigation.navigate("login")}>
            <Text style={{ color: theme.textPrimary, fontWeight: "600" }}>
              Login
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default SignUp;


const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  textBlock: {
    width: width * 0.85,
    marginTop: height * 0.16,
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
    marginBottom: height * 0.035,
  },

  input: {
    width: "100%",
    height: height * 0.075,
    borderRadius: 6,
    paddingHorizontal: 14,
    marginBottom: height * 0.018,
    fontSize: 15,
  },

  passwordWrapper: {
    width: "100%",
    height: height * 0.075,
    borderRadius: 6,
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 14,
    marginBottom: height * 0.018,
  },

  passwordInput: {
    flex: 1,
    fontSize: 15,
  },

  infoText: {
    fontSize: 12,
    textAlign: "center",
    marginBottom: height * 0.035,
    lineHeight: 18,
  },

  loginButton: {
    width: width * 0.45,
    height: height * 0.06,
    borderRadius: 6,
    alignSelf: "center",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: height * 0.04,
  },

  loginButtonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "600",
  },

  footerRow: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },

  footerText: {
    fontSize: 13,
    marginRight: 4,
  },
});
