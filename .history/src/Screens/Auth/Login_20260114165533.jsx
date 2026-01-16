import { Dimensions, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const {width , height} = Dimensions.get("window") 
const Login = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.heyText}>Hey,</Text>
            <Text style={styles.loginText}>
                <Text style={styles.loginHighlight}>Login</Text> 
                <Text style={styles.nowText}> Now </Text>
            </Text>
        </View>
    )
}

export default Login

const styles = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: "#ffffff",
        paddingHorizontal: 28,
        paddingTop: 80,
    },

    heyText: {
        fontSize: 38,
        color: "#000",
        marginBottom: 4,
        fontWeight: "700",
        fontFamily : "InterDisplay-Medium"
    },

    loginText: {
        fontSize: 38,
        marginBottom: 40,
        fontWeight: "700",
    },

    loginHighlight: {
        color: "#B12441",
    },

    nowText : {
        fontFamily : "InterDisplay-Medium"
    }
container: {
        flex: 1,
        backgroundColor: "#ffffff",
    },

    textBlock: {
        width: width * 0.85,          // consistent left margin
        marginTop: height * 0.18,     // 🔑 controls vertical position
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

})