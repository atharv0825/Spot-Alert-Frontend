import { Dimensions, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const {width , height} = Dimensions.get("window") 
const Login = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.heyText}>Hey,</Text>
            <Text style={styles.loginText}>
                <Text style={styles.loginHighlight}>Login</Text> 
                <Text> Now.</Text>
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
        fontSize: 30,
        fontWeight: "600",
        color: "#000",
        marginBottom: 4,
        fontFamily : "InterDisplay-Medium"
    },

    loginText: {
        fontSize: 30,
        fontWeight: "700",
        marginBottom: 40,
    },

    loginHighlight: {
        color: "#B12441",
    },

})