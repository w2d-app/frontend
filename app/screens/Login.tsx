import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Image } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

const Login: React.FC = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = () => {
        console.log(username, password)
    };

    const handleGoogleSubmit = () => {
        console.log("Connect this to BK's code.")
    };

    return (
        <View style={styles.pageContainer}>
            <Image
                source={require('../../assets/images/logo.png')}
                style={ styles.logoContainer}
            />
            <View style={styles.inputContainer}>
                <Ionicons name={'person-outline'} />
                <TextInput
                    style={styles.inputField}
                    value={username}
                    onChangeText={setUsername}
                    autoCapitalize="none"
                    placeholder="Username"
                />
            </View>
            <View style={styles.inputContainer}>
                <Ionicons name={'key-outline'} />
                <TextInput
                    style={styles.inputField}
                    value={password}
                    onChangeText={setPassword}
                    autoCapitalize="none"
                    placeholder="Password"
                    onSubmitEditing={handleSubmit}
                    secureTextEntry
                />
            </View>
            <Button title="Login" onPress={handleSubmit} style={styles.loginButton}/>
            <Text> ——— Or continue with ——— </Text>

            <View style={styles.buttonContainer}>
                <Ionicons name={'logo-google'} />
                <Text onPress={handleGoogleSubmit}> Continue with Google </Text>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    pageContainer: {
        height: '100%',
        width: '100%',
        flex: 1,
        alignItems: 'center', // Aligns content along primary axis
        justifyContent: 'center', // Aligns content along secondary axis
        backgroundColor: 'white',
        gap: 20,
    },
    inputField: {
        color: 'grey',
        marginLeft: 5,
    },
    inputContainer: {
        flexDirection: 'row',
        padding: 20,
        borderColor: 'black',
        borderWidth: 0.3,
        borderRadius: 8,
        alignItems: 'center', // In this case, primary axis is y-axis
        width: '70%',
    },
    logoContainer: {
        width: 100,
        height: 100,
    },
    loginButton: {
        backgroundColor: '#6890EE',
        color: 'white'
    },
    buttonContainer: {
        flexDirection: 'row',
        padding: 10,
        borderColor: 'black',
        borderWidth: 0.3,
        borderRadius: 20,
        alignItems: 'center', // In this case, primary axis is y-axis
        justifyContent: 'center',
        width: '70%',
    }
});


export default Login;