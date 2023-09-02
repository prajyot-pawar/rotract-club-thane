
import { useContext } from 'react'
import { AuthContext } from '../../utils/auth-context'
import { MemberForm } from '../../components/form/MemberForm'
import classNames from '../userInfo/userInfo.module.css'
import NavBar from '../../components/navbar/navbar'


function UserPage() {
  const { currentUser, signOut } = useContext(AuthContext)
  
  return(
    <div className={classNames.screen}>    
    <NavBar/>  
    <button onClick={signOut}>Sign Out</button>
      <h3>Welcome! {currentUser?.email}</h3>
      <p>Sign In Status: {currentUser && 'active'}</p>
      <MemberForm/>
    </div>
  )
}
export default UserPage
