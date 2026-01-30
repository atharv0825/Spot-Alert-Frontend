import {
  Dimensions,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  TextInput,
  useColorScheme,
  Alert,
} from "react-native";
import React, { useState } from "react";
import { LightTheme, DarkTheme } from "../../theme/colors";
import { Eye, EyeOff } from "lucide-react-native";
import BASE_URL from "../../Config/baseURL";

const { width, height } = Dimensions.get("window");

const SignUp = ({ navigation }) => {
  const scheme = useColorScheme();
  const theme = scheme === "dark" ? DarkTheme : LightTheme;

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSignUp = async () => {
    if (password !== confirmPassword) {
      Alert.alert("Error", "Passwords do not match");
      return;
    }

    try {
      const response = await fetch(`${BASE_URL}/api/auth/register`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: email,
          password: password,
          role: "ROLE_USER",
        }),
      });

      if (response.ok) {
        Alert.alert(
          "Registration Successful",
          "A verification email has been sent to your email address. Please verify your email to login."
        );
        navigation.navigate("login");
      } else {
        const clonedResponse = response.clone(); // Clone the response
        let errorData;
        try {
          errorData = await response.json(); // Try to parse original response as JSON
        } catch (jsonError) {
          const responseText = await clonedResponse.text(); // Read text from the cloned response
          errorData = { message: `Server error: ${response.status} ${response.statusText}` };
          console.log('Signup failed: Could not parse JSON response. Status:', response.status, 'StatusText:', response.statusText, 'Raw response:', responseText);
        }
        console.log('Signup failed:', errorData);
        Alert.alert("Error", errorData.message || "Something went wrong");
      }
    } catch (error) {
      console.log('Signup error:', error);
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
          <Text style={{ color: theme.accent }}>Signup</Text>
          <Text style={{ color: theme.textPrimary }}> Now</Text>
        </Text>

        <TextInput
          style={[
            styles.input,
            { backgroundColor: theme.inputBgActive, color: theme.textPrimary },
          ]}
          placeholder="Full Name"
          placeholderTextColor={theme.textSecondary}
          value={fullName}
          onChangeText={setFullName}
        />

        <TextInput
          style={[
            styles.input,
            { backgroundColor: theme.inputBgInactive, color: theme.textPrimary },
          ]}
          placeholder="Email"
          placeholderTextColor={theme.textSecondary}
          keyboardType="email-address"
          autoCapitalize="none"
          value={email}
          onChangeText={setEmail}
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
            value={confirmPassword}
            onChangeText={setConfirmPassword}
          />

          <TouchableOpacity
            onPress={() => setShowConfirmPassword((prev) => !prev)}
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
          onPress={handleSignUp}
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
