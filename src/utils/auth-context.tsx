
import { User } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { SignOutUser, db, userStateListener } from "../services/Firebase";
import { createContext, useState, useEffect, ReactNode } from "react";
import { getFirestore, collection, doc } from 'firebase/firestore';

interface Props {
  children?: ReactNode
}

export const AuthContext = createContext({
  currentUser: {} as User | null,
  setCurrentUser: (_user:User) => {},
  signOut: () => {}
});

export const AuthProvider = ({ children }: Props) => {
  const [currentUser, setCurrentUser] = useState<User | null>(null)
  const navigate = useNavigate()

  useEffect(() => {
    

    const unsubscribe = userStateListener((user) => {
      if (user) {
        setCurrentUser(user)
      }
    });
    return unsubscribe
  }, [setCurrentUser]);

  const signOut = () => {
    SignOutUser()
    setCurrentUser(null)
    navigate('/rotract-club-thane/')
  }

  const value = {
    currentUser, 
    setCurrentUser,
    signOut,
  }
  

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
