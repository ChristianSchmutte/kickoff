import React, { useContext, useEffect, useState } from 'react';
import './auth-provider.module.scss';
import auth from './firebase';
import firebase from 'firebase/app';

/* eslint-disable-next-line */
interface Context {
  user: firebase.User | null;
  loading: boolean;
  logout: () => void;
}

const AuthContext = React.createContext<Context>({
  user: null,
  loading: true,
  logout: () => void {}
});

export const useAuth = () => useContext(AuthContext);

const AuthProvider: React.FC = ({ children }) => {
  const [user, setUser] = useState<firebase.User | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const cancelAuthListener = auth.onIdTokenChanged((user) => {
      setUser(user);
      setLoading(false);
    });
    return () => cancelAuthListener();
  }, []);

  const signUp = (
    email: string,
    password: string
  ): Promise<firebase.auth.UserCredential> => {
    return auth.createUserWithEmailAndPassword(email, password);
  };

  return (
    <AuthContext.Provider
      value={{ user, loading, logout: () => auth.signOut() }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
