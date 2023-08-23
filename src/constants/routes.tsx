// import React from 'react'
import { BrowserRouter as Router ,Routes,Route} from 'react-router-dom';
import { useState,useEffect } from 'react';
import HomePage from '../pages/home/HomePage';
import LoadingScreen from '../pages/loading/LoadingScreen';
import AboutPage from '../pages/about/AboutPage';
import LoginPage from '../pages/login/LoginPage';
import RegistrationPage from '../pages/registeration/RegistrationPage';
import UpdatesPage from '../pages/updates/UpdatesPage';
import UserPage from '../pages/user/UserPage';

const RouteManager = () => {

     const [isLoading, setLoading] = useState(true);  
  
     useEffect(() => {
       const timer = setTimeout(() => {
         setLoading(false);
         console.log(isLoading+" is now on")
       }, 1000);
       return () => clearTimeout(timer);
     }, []);

  return (      
  <Router>
  <Routes>
   <Route path="/rotract-club-thane/" element={isLoading?(
    <LoadingScreen/>):(<HomePage/>)}/>
   <Route path="/rotract-club-thane/about" element={<AboutPage/>}/>
   <Route path="/rotract-club-thane/join" element={<RegistrationPage/>}/>
   <Route path="/rotract-club-thane/login" element={<LoginPage/>}/>
   <Route path="/rotract-club-thane/updates" element={<UpdatesPage/>}/>
   <Route path="/rotract-club-thane/uid" element={<UserPage/>}/>
   </Routes>
 </Router>  
  )
}

export default RouteManager