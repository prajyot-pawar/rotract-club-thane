
import { useContext } from 'react'
import { AuthContext } from '../../utils/auth-context'
import { MemberForm } from '../../components/form/MemberForm'
import classNamesUserInfo from '../userInfo/userInfo.module.css'
import NavBar from '../../components/navbar/navbar'
import { useNavigate } from 'react-router-dom'


function EditDetailsScreen() { 
  const navigate = useNavigate();
  
  return(
    <div className={classNamesUserInfo.screen}>    
    <NavBar/>   
      <h3>Edit Details</h3>    
      <MemberForm/>
    </div>
  )
}
export default EditDetailsScreen
