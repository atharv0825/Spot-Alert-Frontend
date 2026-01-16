import { Dimensions, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const { width, height } = Dimensions.get("window")
const Login = () => {
    return (
        <SafeAreaView style={styles.safe}>
            <View style={styles.container}>
                {/* Dynamically centered half circle */}
                <View style={styles.topCurve} />

                {/* Heading */}
                <Text style={styles.heyText}>Hey,</Text>
                <Text style={styles.loginText}>
                    <Text style={styles.loginHighlight}>Login</Text> Now.
                </Text>

                {/* Input Fields */}
                <TextInput
                    placeholder="Email"
                    placeholderTextColor="#999"
                    style={styles.inputActive}
                />

                <TextInput
                    placeholder="Password"
                    placeholderTextColor="#999"
                    secureTextEntry
                    style={styles.inputInactive}
                />

                {/* Forgot password */}
                <Text style={styles.forgotText}>
                    Forgot Password? <Text style={styles.link}>Reset</Text>
                </Text>

                {/* Info text */}
                <Text style={styles.infoText}>You know danger spots ahead</Text>

                {/* Login Button */}
                <TouchableOpacity style={styles.loginButton}>
                    <Text style={styles.loginButtonText}>Login</Text>
                </TouchableOpacity>

                {/* Footer */}
                <Text style={styles.footerText}>
                    If you are new / <Text style={styles.link}>Create New</Text>
                </Text>
            </View>
        </SafeAreaView>
    )
}

export default Login

const styles = StyleSheet.create({

    safe: {
    flex: 1,
    backgroundColor: "#ffffff",
  },

  container: {
    flex: 1,
    backgroundColor: "#ffffff",
    paddingHorizontal: 28,
    paddingTop: 80,
  },

  /* Half circle dynamically centered */
  topCurve: {
    position: "absolute",
    left: -CIRCLE_SIZE / 2,
    top: height / 2 - CIRCLE_SIZE / 2,
    width: CIRCLE_SIZE,
    height: CIRCLE_SIZE,
    backgroundColor: "#000",
    borderTopRightRadius: CIRCLE_SIZE,
    borderBottomRightRadius: CIRCLE_SIZE,
  },

  heyText: {
    fontSize: 26,
    fontWeight: "600",
    color: "#000",
    marginBottom: 4,
  },

  loginText: {
    fontSize: 28,
    fontWeight: "700",
    marginBottom: 40,
  },

  loginHighlight: {
    color: "#B21F3A",
  },

  inputActive: {
    width: "100%",
    height: 50,
    backgroundColor: "#FFD18B",
    borderRadius: 6,
    paddingHorizontal: 14,
    marginBottom: 14,
  },

  inputInactive: {
    width: "100%",
    height: 50,
    backgroundColor: "#F4F4F4",
    borderRadius: 6,
    paddingHorizontal: 14,
    marginBottom: 10,
  },

  forgotText: {
    fontSize: 13,
    color: "#888",
    marginBottom: 18,
  },

  link: {
    color: "#000",
    fontWeight: "600",
  },

  infoText: {
    fontSize: 13,
    color: "#444",
    textAlign: "center",
    marginBottom: 26,
  },

  loginButton: {
    width: width * 0.55,
    height: 46,
    backgroundColor: "#B21F3A",
    borderRadius: 6,
    alignSelf: "center",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 30,
  },

  loginButtonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "600",
  },

  footerText: {
    textAlign: "center",
    fontSize: 13,
    color: "#888",
  },

})