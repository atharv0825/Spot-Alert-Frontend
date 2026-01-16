import { Dimensions, StyleSheet, Text, View } from 'react-native'
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

                <Text style={styles.inputActive }>
                    
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


})