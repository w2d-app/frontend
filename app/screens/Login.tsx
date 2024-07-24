import React, {useState, useEffect, useCallback} from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  Image,
  TouchableOpacity,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {useNavigation, useFocusEffect} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {GoogleSignin, GoogleSigninButton, User} from "@react-native-google-signin/google-signin"
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
  const [loginError, setLoginError] = useState('');
  const [googleError, setGoogleError] = useState();
  const [googleUserInfo, setGoogleUserInfo] = useState<User>();
  const navigation = useNavigation<LoginScreenNavgationProp>();

  /* We have to use useFocusEffect to clear the login error, username and password when the screen is focused
  we cannot use a useEffect hook because it will not run when the screen is focused again
  as Login is the default screen, it will be kept in memory to preserve its state, so it will not unmoount 
  just by navigating to another screen */
  useFocusEffect(
    useCallback(() => {
      // Clear the login error, username and password when the screen is focused
      setUsername('');
      setPassword('');
      setLoginError('');

      return () => {
        // Optional: Do something when the screen loses focus
      };
    }, []),
  );

  //Use Effect for dynamic error handling:
  useEffect(() => {
    if (username && password && loginError) {
      setLoginError('');
    }
  }, [username, password]);
  useEffect(() => {
    GoogleSignin.configure(
      {
        webClientId: "1081340134333-r7mlc1is85ijdkk87inf8gpc4hc0f0jg.apps.googleusercontent.com"
      }
    );
  }, [])

  const googleLogin = async () => {
    try {
      await GoogleSignin.hasPlayServices()
      const user = await GoogleSignin.signIn()
      setGoogleUserInfo(user);
      setGoogleError(undefined)
    } catch (e) {
      setGoogleError(e)
    }

  }

  const handleLogin = () => {
    if (username.trim() === '' || password.trim() === '') {
      setLoginError('Username or password cannot be empty.');
      return;
    }

    console.log(username, password);
    //TODO: Add login logic here.
    //If login is successful:
    navigation.navigate('TabNavigator'); // Navigate to TabNavigator screen
    //If login fails:
    //setLoginError('Invalid username or password.');
  };

  const handleGoogleLogin = () => {
    //TODO: Add Google login logic here
    console.log("Connect this to BK's code.");
    //TODO: If login fails:
    //setLoginError('Google login failed. Try again later.');
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
      {loginError ? <Text style={styles.errorText}>{loginError}</Text> : null}
      <TouchableOpacity onPress={handleLogin} style={styles.loginButton}>
        <Text style={styles.buttonText}>Log in</Text>
      </TouchableOpacity>
      <Text> ——— Or continue with ——— </Text>
      <View style={styles.buttonContainer}>
        <Ionicons name={'logo-google'} />
        <Text onPress={googleLogin}>Continue with Google </Text>
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
    width: '100%',
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
  errorText: {
    color: 'red',
    fontSize: 16,
  },
});

export default Login;
