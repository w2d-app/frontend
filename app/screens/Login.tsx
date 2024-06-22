import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

const Login: React.FC = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = () => {
        console.log(username, password)
    };

    return (
        <View style={styles.container}>
            <Text style={styles.label}>Username</Text>
            <TextInput
                style={styles.input}
                value={username}
                onChangeText={setUsername}
                autoCapitalize="none"
                placeholder="Username"
                
            />
            <Text style={styles.label}>Password</Text>
            <TextInput
                style={styles.input}
                value={username}
                onChangeText={setUsername}
                autoCapitalize="none"
                placeholder="Password"
                onSubmitEditing={handleSubmit}
            />


            <Button title="Login" onPress={handleSubmit} />

        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        height: '100%',
        width: '100%',
    },
    input: {
        height: 40,
        color: 'black',
        borderColor: 'black',
    },
    label: {
        color: 'black',
    }

});


export default Login;