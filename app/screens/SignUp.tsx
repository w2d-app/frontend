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
  Login: undefined;
};

type SignUpScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  'TabNavigator'
>;

const SignUp: React.FC = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const navigation = useNavigation<SignUpScreenNavigationProp>();

  const handleSignUp = () => {
    // TODO: Add sign up logic here. Verify that password and confirmPassword match
    if (password === confirmPassword) {
      console.log(username, password);
      // If sign up is successful:
      navigation.navigate('TabNavigator'); // Navigate to TabNavigator screen
    } else {
      console.error('Passwords do not match.');
    }
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
          secureTextEntry
        />
      </View>
      <View style={styles.inputContainer}>
        <Ionicons name={'key-outline'} />
        <TextInput
          style={styles.inputField}
          value={confirmPassword}
          onChangeText={setConfirmPassword}
          autoCapitalize="none"
          placeholder="Confirm Password"
          secureTextEntry
        />
      </View>
      <TouchableOpacity onPress={handleSignUp} style={styles.signUpButton}>
        <Text style={styles.buttonText}>Sign Up</Text>
      </TouchableOpacity>
      <Text> ——— Or continue with ——— </Text>
      <View style={styles.buttonContainer}>
        <Ionicons name={'logo-google'} />
        <Text>{"   "}Continue with Google</Text>
      </View>
      <View style={styles.linkTextContainer}>
        <Text style={styles.text}>Already have an account? </Text>
        <TouchableOpacity onPress={() => navigation.navigate('Login')}>
          <Text style={styles.linkText}>Log In</Text>
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
    width: 150,
    height: 150,
  },
  signUpButton: {
    backgroundColor: '#000', // Example background color
    paddingVertical: 12, // Example padding
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

export default SignUp;
