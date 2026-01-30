import {
  Dimensions,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  useColorScheme,
  Alert,
} from "react-native";
import React, { useState } from "react";
import PrimaryBtn from "../../components/Button/PrimaryBtn";
import { LightTheme, DarkTheme } from "../../theme/colors";
import { Eye, EyeOff } from "lucide-react-native";
import BASE_URL from "../../Config/baseURL";
import AsyncStorage from "@react-native-async-storage/async-storage";

const { width, height } = Dimensions.get("window");

const Login = ({ navigation }) => {
  const scheme = useColorScheme();
  const theme = scheme === "dark" ? DarkTheme : LightTheme;

  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    try {
      const response = await fetch(`${BASE_URL}/api/auth/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: email,
          password: password,
        }),
      });

      if (response.ok) {
        const data = await response.json();
        await AsyncStorage.setItem("token", data.jwt);
        navigation.navigate("home");
      } else {
        const clonedResponse = response.clone(); // Clone the response
        let errorData;
        try {
          errorData = await response.json(); // Try to parse original response as JSON
        } catch (jsonError) {
          const responseText = await clonedResponse.text(); // Read text from the cloned response
          errorData = { message: `Server error: ${response.status} ${response.statusText}` };
          console.log('Login failed: Could not parse JSON response. Status:', response.status, 'StatusText:', response.statusText, 'Raw response:', responseText);
        }
        console.log('Login failed:', errorData);
        Alert.alert("Error", errorData.message || "Something went wrong");
      }
    } catch (error) {
      console.log('Login error:', error);
      Alert.alert("Error", "An error occurred. Please try again later.");
    }
  };

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
          value={email}
          onChangeText={setEmail}
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
            secureTextEntry={!showPassword}
            textContentType="password"
            autoComplete="password"
            importantForAutofill="yes"
            value={password}
            onChangeText={setPassword}
          />

          <TouchableOpacity
            onPress={() => setShowPassword((prev) => !prev)}
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
            onPress={handleLogin}
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
