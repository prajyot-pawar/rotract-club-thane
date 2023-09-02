import { Navigate, useLocation } from "react-router-dom"
import { AuthContext } from "../../utils/auth-context"
import { useContext } from "react";
import ClubLogoWhite from '../../assets/images/ClubLogoWhite.png'
import classNamesNav from './navBar.module.css'

const NavBar = () => {
     
  const { currentUser } = useContext(AuthContext);
  let location = useLocation();

  

  if (currentUser) {
     // Redirect the user to the home page.
         // Please! Close the mustache {{}}
         return (
         <header>
          <nav className={classNamesNav.navbar}>
               <img src={ClubLogoWhite} className={classNamesNav.logo}  alt="logo"/>
               <ul className={classNamesNav.nav_sections}>
                    <li className={classNamesNav.nav_item}>Section 1</li>
                    <li className={classNamesNav.nav_item}>Section 2</li>
                    <li className={classNamesNav.nav_item}>Section 3</li>
               </ul>
               <button className={classNamesNav.menu_button}>Menu</button>

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