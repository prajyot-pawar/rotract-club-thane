
import { User } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { SignOutUser,  userStateListener } from "../services/Firebase";
import { createContext, useState, useEffect, ReactNode } from "react";

interface Props {
  children?: ReactNode
}

export const PortfolioAuthContext = createContext({
  currentPortfolioUser: {} as User | null,
  setcurrentPortfolioUser: (_user:User) => {},
  signOut: () => {},  
  currentPortfolioUserId: '' as string, 
});

export const AuthProvider = ({ children }: Props) => {
  const [currentPortfolioUser, setcurrentPortfolioUser] = useState<User | null>(null)
  const navigate = useNavigate()

  
  useEffect(() => {    

    const unsubscribe = userStateListener((user) => {
      if (user) {
        setcurrentPortfolioUser(user)
      }
    });
    return unsubscribe
  }, [setcurrentPortfolioUser]);

  const signOut = () => {
    SignOutUser()
    setcurrentPortfolioUser(null)
    navigate('/rotract-club-thane/')
  }

  const value = {
    currentPortfolioUser, 
    setcurrentPortfolioUser,   
    currentPortfolioUserId: currentPortfolioUser ? currentPortfolioUser.uid : '',
    signOut, 
      }

 return <PortfolioAuthContext.Provider value={value}>{children}</PortfolioAuthContext.Provider>;
}
