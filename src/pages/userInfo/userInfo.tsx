
import { useContext } from 'react'
import { AuthContext } from '../../utils/auth-context'
import { MemberForm } from '../../components/form/MemberForm'
import classNamesUserInfo from '../userInfo/userInfo.module.css'
import NavBar from '../../components/navbar/navbar'
import { useNavigate } from 'react-router-dom'


function UserPage() { 
  const { currentUser, signOut } = useContext(AuthContext)
  const navigate = useNavigate();
  function gotoEditDetailsScreen(){    
    navigate('/rotract-club-thane/edit')
  }
  
  return(
    <div className={classNamesUserInfo.screen}>    
    <NavBar/>   
    <button onClick={signOut}>Sign Out</button>
      <h3>Welcome! {currentUser?.email}</h3>
      <p>Sign In Status: {currentUser && 'active'}</p>      
    <button onClick={gotoEditDetailsScreen}>Edit Details</button>
      <MemberForm/>
    </div>
  )
}
export default UserPage
