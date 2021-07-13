import React, { createContext, useCallback } from 'react';
import api from '../services/api';

interface AuthData {
  email: string;
  password: string;
}

interface AuthContextData {
  name: string;
  // eslint-disable-next-line no-unused-vars
  signIn(credentials: AuthData): Promise<void>;
}

export const AuthContext = createContext<AuthContextData>(
  {} as AuthContextData,
);

export const AuthProvider: React.FC = ({ children }) => {
  const signIn = useCallback(async ({ email, password }: AuthData) => {
    try {
      const response = await api.post('/token', {
        email,
        password,
      });
      console.log(response);
    } catch (error) {
      console.error(error);
    }
  }, []);
  return (
    <AuthContext.Provider value={{ name: 'Diego', signIn }}>
      {children}
    </AuthContext.Provider>
  );
};
