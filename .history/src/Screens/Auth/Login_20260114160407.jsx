import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Login = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.halfScreen}>Login</Text>
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
    halfScreen: {
        position: "absolute",
    top: -60,
    left: -40,
    width: 120,
    height: 120,
    backgroundColor: "#000",
    borderBottomRightRadius: 120,
    }
})