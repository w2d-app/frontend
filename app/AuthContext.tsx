import React, { createContext, useState, useContext, useEffect } from 'react';
import { GoogleSignin, User } from '@react-native-google-signin/google-signin';
import * as SecureStore from 'expo-secure-store';

type AuthContextType = {
  user: User | null;
  loading: boolean;
  signIn: () => Promise<void>;
  signOut: () => Promise<void>;
};

const AuthContext = createContext<AuthContextType>({
  user: null,
  loading: true,
  signIn: async () => {},
  signOut: async () => {},
});

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const checkUser = async () => {
      try {
        const userInfoString = await SecureStore.getItemAsync('user');
        if (userInfoString) {
          const userInfo: User = JSON.parse(userInfoString);
          setUser(userInfo);
        }
      } catch (error) {
        console.log('No user is logged in');
      } finally {
        setLoading(false);
      }
    };

    checkUser();
  }, []);

  const signIn = async () => {
    try {
      await GoogleSignin.hasPlayServices();
      const userInfo = await GoogleSignin.signIn();
      setUser(userInfo);
      await SecureStore.setItemAsync('user', JSON.stringify(userInfo));
    } catch (error) {
      console.error(error);
    }
  };

  const signOut = async () => {
    try {
      await GoogleSignin.signOut();
      setUser(null);
      await SecureStore.deleteItemAsync('user');
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <AuthContext.Provider value={{ user, loading, signIn, signOut }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
