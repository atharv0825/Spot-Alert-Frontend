import { Dimensions, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React from 'react'
import PrimaryBtn from '../../components/Button/PrimaryBtn'

const { width, height } = Dimensions.get("window")

const Login = ({ navigation }) => {
    return (
        <View style={styles.container}>

            <View style={styles.textBlock}>
                <Text style={styles.heyText}>Hey,</Text>

                <Text style={styles.loginText}>
                    <Text style={styles.loginHighlight}>Login</Text>
                    <Text style={styles.nowText}> Now.</Text>
                </Text>

                <TextInput
                    style={styles.inputActive}
                    placeholder="Email"
                    placeholderTextColor="#333"
                    keyboardType="email-address"
                />

                <TextInput
                    style={styles.inputInactive}
                    placeholder="Password"
                    placeholderTextColor="#666"
                    secureTextEntry
                />

                <Text style={styles.forgotText}>
                    Forgot Password? <Text style={styles.link}>Reset</Text>
                </Text>

                <Text style={styles.infoText}>
                    You know danger spots ahead
                </Text>

                <PrimaryBtn
                    title="Login"
                    width="40%"              // ✅ relative to textBlock
                    buttonStyle={styles.loginButton}
                    onPress={() => console.log("Login Pressed")}
                />

                <View style={styles.footerRow}>
                    <Text style={styles.footerText}>If you are new / </Text>

                    <TouchableOpacity
                        onPress={() => navigation.navigate("signup")}
                    >
                        <Text style={styles.createAccountText}>
                            Create Account
                        </Text>
                    </TouchableOpacity>
                </View>

            </View>

        </View>
    )
}

export default Login

cconst styles = StyleSheet.create({
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

  loginButton: {
    alignSelf: "center",
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
