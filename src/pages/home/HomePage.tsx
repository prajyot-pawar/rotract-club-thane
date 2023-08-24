import { useNavigate } from "react-router-dom";


const HomePage = () => {
  
  const navigate = useNavigate()

  const LoginUser = () => {
    navigate('/rotract-club-thane/login')
  }

  const RegisterUser = () => {
    navigate('/rotract-club-thane/register')
  }

  return (
    <>
    <button onClick={LoginUser}>Login </button>
    <button onClick={RegisterUser}>SignUp </button>
    <div>HomePage</div>
    <div>HomePage</div>
    <div>HomePage</div>
    <div>HomePage</div>
    </>
  )
}

export default HomePage