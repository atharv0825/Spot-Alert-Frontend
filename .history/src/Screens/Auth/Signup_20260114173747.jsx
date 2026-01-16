import {
    Dimensions,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
    TextInput
} from 'react-native'


const { width, height } = Dimensions.get("window")

const  SignUp = () => {
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

const styles = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: "#ffffff",
    },

    textBlock: {
        width: width * 0.85,
        marginTop: height * 0.16,  
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
        marginBottom: height * 0.035,
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
        fontSize: 15,
        color: "#000",
    },

    inputInactive: {
        width: "100%",
        height: height * 0.075,
        backgroundColor: "#F4F4F4",
        borderRadius: 6,
        paddingHorizontal: 14,
        marginBottom: height * 0.018,
        fontSize: 15,
        color: "#000",
    },

    infoText: {
        fontSize: 12,
        color: "#666",
        textAlign: "center",
        marginBottom: height * 0.035,
        lineHeight: 18,
    },

    link: {
        color: "#000",
        fontWeight: "600",
    },

    loginButton: {
        width: width * 0.45,
        height: height * 0.06,
        backgroundColor: "#B21F3A",
        borderRadius: 6,
        alignSelf: "center",
        justifyContent: "center",
        alignItems: "center",
        marginBottom: height * 0.04,
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
