
import { useContext } from 'react'
import { AuthContext } from '../../utils/auth-context'
import { MemberForm } from '../../components/form/MemberForm'

function UserPage() {
  const { currentUser, signOut } = useContext(AuthContext)
  
  return(
    /**
    * Extract the currrentUser from the context, if you want to
    * get the User info, like the email, display name, etc.
    */
    <div>
      <h3>Welcome! {currentUser?.email}</h3>
      <p>Sign In Status: {currentUser && 'active'}</p>
      <MemberForm/>
      <button onClick={signOut}>Sign Out</button>
    </div>
  )
}
export default UserPage
