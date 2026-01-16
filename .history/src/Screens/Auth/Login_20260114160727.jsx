import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Login = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.heyText}>Hey,</Text>
      <Text style={styles.loginText}>
        <Text style={styles.loginHighlight}>Login</Text> Now.
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
    
})