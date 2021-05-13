import React, { useContext, useEffect, useState } from 'react';
import './auth-provider.module.scss';
import auth from './firebase';
import firebase from 'firebase/app';

/* eslint-disable-next-line */
interface Context {
  user: firebase.User | null;
  loading: boolean;
  login: (email: string, password: string) => Promise<firebase.User | null>;
  logout: () => void;
  signUp: (email: string, password: string) => Promise<firebase.User | null>;
}

const AuthContext = React.createContext<Context>({
  user: null,
  loading: true,
  login: () => void {},
  logout: () => void {},
  signUp: () => void {}
});

const AuthProvider: React.FC = ({ children }) => {
  const [currentUser, setCurrentUser] = useState<firebase.User | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const cancelAuthListener = auth.onIdTokenChanged((user) => {
      setCurrentUser(user);
      setLoading(false);
    });
    return () => cancelAuthListener();
  }, []);

  const signUpWithEmailAndPassword = async (
    email: string,
    password: string
  ) => {
    // [START auth_signup_password]
    try {
      const userCredential = await auth.createUserWithEmailAndPassword(
        email,
        password
      );
      return userCredential.user;
    } catch (error) {
      console.log(error);
    }
    // [END auth_signup_password]
  };

  const signInWithEmailAndPassword = async (
    email: string,
    password: string
  ) => {
    try {
      const userCredential = await auth.signInWithEmailAndPassword(
        email,
        password
      );
      return userCredential.user;
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <AuthContext.Provider
      value={{
        user: currentUser,
        loading,
        logout: () => auth.signOut(),
        login: (
          email: string,
          password: string
        ): Promise<firebase.User | null> =>
          signInWithEmailAndPassword(email, password),
        signUp: (
          email: string,
          password: string
        ): Promise<firebase.User | null> =>
          signUpWithEmailAndPassword(email, password)
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

const useAuth = () => useContext(AuthContext);
export { AuthProvider, useAuth };
