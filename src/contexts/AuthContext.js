import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import React, { createContext, useContext, useEffect, useState } from "react";
import { auth } from "../firebase";

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [currentUser, setCurrentUser] = useState();
  const [isLoading, setIsLoading] = useState(true);

  function signUp(email, password) {
    return createUserWithEmailAndPassword(auth, email, password);
  }

  function login(email, password) {
    return signInWithEmailAndPassword(auth, email, password);
  }

  function logOut() {
    return signOut(auth);
  }

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setCurrentUser(user);
      setIsLoading(false);
    });
    return unsubscribe;
  }, []);

  const value = {
    currentUser,
    signUp,
    login,
    logOut
  };

  return (
    <AuthContext.Provider value={value}>
      {!isLoading && children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => {
  return useContext(AuthContext);
};

// import { useContext, createContext, useEffect, useState } from "react";
// import {
//   GoogleAuthProvider,
//   // signInWithPopup,
//   signInWithRedirect,
//   signOut,
//   onAuthStateChanged,
//   createUserWithEmailAndPassword,
// } from "firebase/auth";
// import { auth } from "../firebase";

// const AuthContext = createContext();

// export  = ({ children }) => {
//   const [user, setUser] = useState({});

//   const signUp = (email, password) => {
//     return createUserWithEmailAndPassword(auth, email, password);
//   };

//   // const googleSignIn = () => {
//   //   const provider = new GoogleAuthProvider();
//   //   // signInWithPopup(auth, provider);
//   //   signInWithRedirect(auth, provider)
//   // };

//   const logOut = () => {
//     signOut(auth);
//   };

//   useEffect(() => {
//     const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
//       setUser(currentUser);
//       console.log(`User: ${currentUser}`);
//     });
//     return () => {
//       unsubscribe();
//     };
//   }, []);

//   return (
//     // <AuthContext.Provider value={{ googleSignIn, logOut, user }}>
//     <AuthContext.Provider value={{ signUp, user }}>
//       {children}
//     </AuthContext.Provider>
//   );
// };

// export const UserAuth = () => {
//   return useContext(AuthContext);
// };
