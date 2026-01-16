import {
    Dimensions,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
    TextInput
} from 'react-native'
import React from 'react'

const { width, height } = Dimensions.get("window")

const SignUp = () => {
    return (
        <View style={styles.container}>

            <View style={styles.textBlock}>
                <Text style={styles.heyText}>Hey,</Text>

                <Text style={styles.loginText}>
                    <Text style={styles.loginHighlight}>Sign Up</Text>
                    <Text style={styles.nowText}> Now.</Text>
                </Text>

                <TextInput
                    style={styles.inputActive}
                    placeholder="Full Name"
                    placeholderTextColor="#333"
                />

                <TextInput
                    style={styles.inputInactive}
                    placeholder="Email"
                    placeholderTextColor="#666"
                    keyboardType="email-address"
                />

                <TextInput
                    style={styles.inputInactive}
                    placeholder="Password"
                    placeholderTextColor="#666"
                    secureTextEntry
                />

                <TextInput
                    style={styles.inputInactive}
                    placeholder="Confirm Password"
                    placeholderTextColor="#666"
                    secureTextEntry
                />

                <Text style={styles.infoText}>
                    By signing up, you agree to our Terms & Privacy Policy
                </Text>

                <TouchableOpacity style={styles.loginButton}>
                    <Text style={styles.loginButtonText}>Create Account</Text>
                </TouchableOpacity>

                <Text style={styles.footerText}>
                    Already have an account? <Text style={styles.link}>Login</Text>
                </Text>

            </View>

        </View>
    )
}

export default SignUp
