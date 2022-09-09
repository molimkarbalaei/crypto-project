import { createContext, useContext, useState, useEffect } from "react";
import { auth, db } from "../firebase";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";

import { doc, getDoc, setDoc } from "firebase/firestore";

const UserContext = createContext();

export const AuthContextProvider = ({ children }) => {
  // we want to chech if the use authentificated or not:
  const [user, setUser] = useState({});

  const signUp = (email, password) => {
    createUserWithEmailAndPassword(auth, email, password);
    return setDoc(doc(db, "users", email), {
      watchlist: [],
    });
  };
  // we don't neede database cuse we don't want to change anything in db when user sign in
  const signIn = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  const logout = () => {
    return signOut(auth);
  };

  // we want to chech if the use authentificated or not:

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return () => {
      unsubscribe();
    };
  }, []);

  return (
    <UserContext.Provider value={{ signUp, signIn, logout, user }}>
      {children}
    </UserContext.Provider>
  );
};

export const UserAuth = () => {
  return useContext(UserContext);
};
