import { Button, Dimensions, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const { width, height } = Dimensions.get("window")
const Login = () => {
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
                />

                <Text style={styles.inputInactive}
                    placeholder="Email"
                    placeholderTextColor="#999"
                />

                <Text style={styles.forgotText}>
                    Forgot Password? <Text style={styles.link}>Reset</Text>
                </Text>

                <Text style={styles.infoText}>You know danger spots ahead</Text>
             

              
                <Text style={styles.footerText}>
                    If you are new / <Text style={styles.link}>Create New</Text>
                </Text>

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
        marginBottom: 6,
    },

    loginText: {
        fontSize: 38,
        fontWeight: "700",
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
        height: 60,
        backgroundColor: "#FFD18B",
        borderRadius: 6,
        paddingHorizontal: 14,
        marginBottom: 14,
    },

    inputInactive: {
        width: "100%",
        height: 60,
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