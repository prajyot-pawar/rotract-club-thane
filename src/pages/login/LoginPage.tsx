import { ChangeEvent, FormEvent, useState } from 'react'
import { signInUser } from '../../services/Firebase'
import { useNavigate } from 'react-router-dom'
import ClubLogoWhite from '../../assets/images/ClubLogoWhite.png'

const defaultFormFields = {
  email: '',
  password: '',
}


const LoginPage = () => {


  const [formFields, setFormFields] = useState(defaultFormFields)
  const { email, password } = formFields
  const navigate = useNavigate()

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
  <div>LoginPage</div>
  <div className="App">
        <div className="card">
          <div className='logo-react'>
            <a href="https://reactjs.org" target="_blank">
              <img src={ClubLogoWhite} className="logo react" alt="React logo" />
            </a>
          </div>
          <form onSubmit={handleSubmit}>
            <div>
              <input
                type="email"
                name="email"
                value={email}
                onChange={handleChange}
                placeholder="Email"
                required
              />
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
            </div>
            <div>
              <input id='recaptcha' type="submit" />
            </div>
          </form>
        </div>
      </div>
  
  </>
  )
}

export default LoginPage