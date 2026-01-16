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
        width: 100,
        height: 120,
        backgroundColor: "black",
        borderTopRightRadius: 120,
        borderBottomRightRadius: 120
    }
})