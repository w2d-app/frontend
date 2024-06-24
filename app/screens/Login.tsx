import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  Image,
  TouchableOpacity,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';

type RootStackParamList = {
  TabNavigator: undefined;
  SignUp: undefined;
};

type LoginScreenNavgationProp = StackNavigationProp<
  RootStackParamList,
  'TabNavigator'
>;

const Login: React.FC = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const navigation = useNavigation<LoginScreenNavgationProp>();

  const handleLogin = () => {
    console.log(username, password);
    //TODO: Add login logic here. If login is successful:
    navigation.navigate('TabNavigator'); // Navigate to TabNavigator screen
  };

  const handleGoogleLogin = () => {
    //TODO: Add Google login logic here
    console.log("Connect this to BK's code.");
  };

  return (
    <View style={styles.pageContainer}>
      <Image
        source={require('../../assets/images/logo.png')}
        style={styles.logoContainer}
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
          onSubmitEditing={handleLogin}
          secureTextEntry
        />
      </View>
      <TouchableOpacity onPress={handleLogin} style={styles.loginButton}>
        <Text style={styles.buttonText}>Log in</Text>
      </TouchableOpacity>
      <Text> ——— Or continue with ——— </Text>

      <View style={styles.buttonContainer}>
        <Ionicons name={'logo-google'} />
        <Text onPress={handleGoogleLogin}> Continue with Google </Text>
      </View>
      <View style={styles.linkTextContainer}>
        <Text style={styles.text}>Don't have an account? </Text>
        <TouchableOpacity onPress={() => navigation.navigate('SignUp')}>
          <Text style={styles.linkText}>Sign up</Text>
        </TouchableOpacity>
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
    gap: 25,
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
    width: 200,
    height: 200,
  },
  loginButton: {
    backgroundColor: '#000', // Example background color
    paddingVertical: 15, // Example padding
    paddingHorizontal: 80, // Example horizontal padding
    borderRadius: 25, // Example border radius
    alignItems: 'center', // Center text horizontally
  },
  buttonText: {
    color: '#fff', // Example text color
    fontSize: 18, // Example font size
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
  },
  linkTextContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 16,
    color: '#333', // Change as needed
  },
  linkText: {
    fontSize: 16,
    color: '#0066cc', // Example color for a clickable link
    fontWeight: 'bold',
  },
});

export default Login;
