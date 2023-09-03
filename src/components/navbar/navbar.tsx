import { Navigate, useLocation } from "react-router-dom"
import { AuthContext } from "../../utils/auth-context"
import { useContext } from "react";
import ClubLogoWhite from '../../assets/images/ClubLogoWhite.png'
import ClubLogoBlack from '../../assets/images/ClubLogoBlack.png'
import classNamesNav from './navBar.module.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
     faYoutube,
     faFacebook,
     faTwitter,
     faInstagram
   } from "@fortawesome/free-brands-svg-icons";

const NavBar = () => {     
  const { currentUser } = useContext(AuthContext);
  let location = useLocation();

  

  if (currentUser) {
     // Redirect the user to the home page.
         // Please! Close the mustache {{}}
         return (
         <header>
          <nav className={classNamesNav.navbar}>
               <img src={ClubLogoBlack} className={classNamesNav.logo}  alt="logo"/>
               <ul className={classNamesNav.nav_sections}>
                    <li className={classNamesNav.nav_item}>About</li>
                    <li className={classNamesNav.nav_item}>Works</li>
                    <li className={classNamesNav.nav_item}>Blogs</li>
               </ul>
               <ul className={classNamesNav.nav_sections}>
                    <li className={classNamesNav.social_logo}><FontAwesomeIcon icon={faYoutube} size="2x" /></li>
                    <li className={classNamesNav.social_logo}><FontAwesomeIcon icon={faInstagram} size="2x" /></li>
               </ul>
          </nav>
         </header>
         );
       }
       else{
          return (
               <header>
               <nav className={classNamesNav.navbar}>
               <img src={ClubLogoWhite} className={classNamesNav.logo}  alt="logo"/>
               </nav>
               </header>
             )
       }  
}

export default NavBar