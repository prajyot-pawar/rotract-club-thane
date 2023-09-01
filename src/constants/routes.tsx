// import React from 'react'
import { Routes,Route} from 'react-router-dom';
import { useState,useEffect } from 'react';
import HomePage from '../pages/home/homePage';
import LoadingScreen from '../pages/loading/loadingScreen';
import AboutPage from '../pages/about/aboutPage';
import LoginPage from '../pages/login/loginPage';
import UpdatesPage from '../pages/updates/updatesPage';
import UserPage from '../pages/userInfo/userInfo';
import { AuthContext } from '../utils/auth-context'
import { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import RequireAuth from '../components/auth/require-auth';
import SignUpForm from '../pages/signup/registrationPage';

const RouteManager = () => {

  
  const { currentUser } = useContext(AuthContext)
  const navigate = useNavigate();
  console.log('User:', !!currentUser);

  useEffect(() => {
    if (currentUser) {
      navigate('/rotract-club-thane/user')
    }
  }, [currentUser])
  

     const [isLoading, setLoading] = useState(true);  
  
     useEffect(() => {
       const timer = setTimeout(() => {
         setLoading(false);
       }, 1000);
       return () => clearTimeout(timer);
     }, []);


  return (      
  <Routes>
   <Route path="/rotract-club-thane/" element={isLoading && !currentUser ?(
    <LoadingScreen/>):currentUser?(<UserPage/>):(<HomePage/>)}/>
   <Route path="/rotract-club-thane/about" element={<AboutPage/>}/>
   <Route path="/rotract-club-thane/register" element={<SignUpForm/>}/>
   <Route path="/rotract-club-thane/login" element={<LoginPage/>}/>
   <Route path="/rotract-club-thane/updates" element={<UpdatesPage/>}/>
   <Route path="/rotract-club-thane/user" element={
   <RequireAuth>
    <UserPage/>
   </RequireAuth>}/>
   </Routes>
  )
}

export default RouteManager 