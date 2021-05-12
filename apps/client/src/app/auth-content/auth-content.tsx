import React, { useContext, useEffect, useState } from 'react';
import './auth-provider.module.scss';
import auth from './firebase';
import firebase from 'firebase/app';

/* eslint-disable-next-line */
export interface AuthProviderProps {}
export const AuthContext = React.createContext<firebase.User | null>(null);
export const useAuth = () => useContext(AuthContext);

export const AuthProvider: React.FC = ({ children }) => {
  const [user, setUser] = useState<firebase.User | null>(null);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((firebaseUser) => {
      setUser(firebaseUser);
    });
    return unsubscribe;
  }, []);

  const signUp = (
    email: string,
    password: string
  ): Promise<firebase.auth.UserCredential> => {
    return auth.createUserWithEmailAndPassword(email, password);
  };

  return <AuthContext.Provider value={user}>{children}</AuthContext.Provider>;
};

export default AuthProvider;
