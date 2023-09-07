import { ChangeEvent, FormEvent, useState } from 'react'
import { signInUser } from '../../services/Firebase'
import { useNavigate } from 'react-router-dom'
import ClubLogoWhiteText from '../../assets/images/ClubLogoWhiteText.png'
import ClubLogoWhiteWheel from '../../assets/images/ClubLogoWhiteWheel.png'
import classNamesLogin from './loginPage.module.css'
import NavBar from '../../components/navbar/navbar'

const defaultFormFields = {
  email: '',
  password: '',
}


const LoginPage = () => {


  const [formFields, setFormFields] = useState(defaultFormFields)
  const { email, password } = formFields
  const navigate = useNavigate()
  
  var errorUserMessage : String;
  var errorPassMessage : String;
  errorUserMessage = "Invalid Username"
  errorPassMessage = "Invalid Password"

  const resetFormFields = () => {
    return (
      setFormFields(defaultFormFields)
    );
  }

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    try {
      const userCredential = await signInUser(email, password)

      if (userCredential) {
        resetFormFields()
        navigate('/rotract-club-thane/user')
      }
    } catch (error:any) {
      console.log('User Sign In Failed', error.message);
    }
  };

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target
    setFormFields({...formFields, [name]: value })
  }


  return (
  <>
  <div className={classNamesLogin.login_screen}>             
  <NavBar/>   
  <div className={classNamesLogin.herosection}> 
  <div className={classNamesLogin.goto}>      
    <div className={classNamesLogin.logo}>
      <img src={ClubLogoWhiteText} className={classNamesLogin.logotext}  alt="logo">        
      </img>
      <img src={ClubLogoWhiteWheel} className={classNamesLogin.logowheel} alt="logo">        
      </img>
      </div>   
        </div>
        <div className={classNamesLogin.goto}>
          {/* <div className={classNamesLogin.logo}>
            <a href="https://reactjs.org" target="_blank">
              <img src={ClubLogoWhite} className="logo react" alt="React logo" />
            </a>
          </div> */}
          <div className={classNamesLogin.card}>
          <form onSubmit={handleSubmit}>
          <h1 >Sign In Form</h1>
            <div>
              <input
                type="email"
                name="email"
                value={email}
                onChange={handleChange}
                placeholder="Email"
                required
              />              
              <span>{errorUserMessage}</span>
            </div>
            <div>
              <input
                type='password'
                name='password'
                value={password}
                onChange={handleChange}
                placeholder="Password"
                required
              />
              <span>{errorPassMessage}</span>
            </div>
              <div className={classNamesLogin.button}>
              <button id='recaptcha' type="submit">Submit</button>
            </div>          
          </form>
          </div>
        </div></div>
   
      </div>
  
  </>
  )
}

export default LoginPage