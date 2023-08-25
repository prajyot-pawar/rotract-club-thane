
import { User } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { SignOutUser, db, userStateListener } from "../services/Firebase";
import { createContext, useState, useEffect, ReactNode } from "react";

interface Props {
  children?: ReactNode
}

export const AuthContext = createContext({
  currentUser: {} as User | null,
  setCurrentUser: (_user:User) => {},
  signOut: () => {},  
  currentUserId: '' as string, 
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
    currentUserId: currentUser ? currentUser.uid : '',
    signOut, 
      }

 return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
