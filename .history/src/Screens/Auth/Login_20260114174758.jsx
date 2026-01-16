import { Button, Dimensions, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

const { width, height } = Dimensions.get("window")
const Login = ({navigation}) => {
    return (
        <View style={styles.container}>

            <View style={styles.textBlock}>
                <Text style={styles.heyText}>Hey,</Text>

                <Text style={styles.loginText}>
                    <Text style={styles.loginHighlight}>Login</Text>
                    <Text style={styles.nowText}> Now.</Text>
                </Text>

                <Text style={styles.inputActive}
                    placeholder="Email"
                    placeholderTextColor="#999"
                    keyboardType="email-address"
                />

                <Text style={styles.inputInactive}
                    placeholder="Email"
                    placeholderTextColor="#999"
                    secureTextEntry
                />

                <Text style={styles.forgotText}>
                    Forgot Password? <Text style={styles.link}>Reset</Text>
                </Text>

                <Text style={styles.infoText}>You know danger spots ahead</Text>

                <TouchableOpacity style={styles.loginButton}>
                    <Text style={styles.loginButtonText}>Login</Text>
                </TouchableOpacity>

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

const styles = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: "#ffffff",
    },

    textBlock: {
        width: width * 0.85,
        marginTop: height * 0.18,
        alignSelf: "center",
    },

    heyText: {
        fontSize: 38,
        color: "#000",
        fontWeight: "700",
        fontFamily: "InterDisplay-Medium",
        marginBottom: height * 0.005,
    },

    loginText: {
        fontSize: 38,
        fontWeight: "700",
        marginBottom: height * 0.04,
    },

    loginHighlight: {
        color: "#B12441",
    },

    nowText: {
        fontFamily: "InterDisplay-Medium",
        color: "#000",
    },

    inputActive: {
        width: "100%",
        height: height * 0.075,
        backgroundColor: "#FFD18B",
        borderRadius: 6,
        paddingHorizontal: 14,
        marginBottom: height * 0.018,
        color: "#000",
    },

    inputInactive: {
        width: "100%",
        height: height * 0.075,
        backgroundColor: "#F4F4F4",
        borderRadius: 6,
        paddingHorizontal: 14,
        marginBottom: height * 0.02,
        color: "#000",
    },

    forgotText: {
        fontSize: 13,
        color: "#888",
        marginBottom: height * 0.035,
    },

    link: {
        color: "#000",
        fontWeight: "600",
    },

    infoText: {
        fontSize: 13,
        color: "#444",
        textAlign: "center",
        marginBottom: height * 0.04,
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

    footerRow: {
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
    },

    footerText: {
        fontSize: 13,
        color: "#888",
    },

    createAccountText: {
        fontSize: 13,
        color: "#000",
        fontWeight: "600",
    },
})