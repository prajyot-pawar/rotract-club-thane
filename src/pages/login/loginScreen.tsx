
// import "./login-screen.css"
// import { useState } from 'react'
// import FormInput from './../../components/containers/form-input.css'

// const LoginScreen = ()=> {
  
//   // const usernameRef=useRef()
//   const [values, setValues]=useState({
//     username:"",
//     password:"",    
//   });
  
  
//   const handleSubmit=(e:any)=>{
//     e.preventDefault();
//     const data= new FormData(e.target);
//     console.log(Object.fromEntries(data.entries()));
//   };
  
//   const inputs=[
//     {
//       id:1,
//       name:"username",
//       type:"text",
//       placeholder:"Username",
//       errorMessage:"Invalid Username",
//       label:"Username :  "
//     },
//     {
//       id:2,
//       name:"password",
//       type:"text",
//       placeholder:"password",
//       errorMessage:"Wrong Password",
//       label:"Password :  "
//     }
//   ];            

//   const onChange=(e:any)=>{
//     setValues({...values,[e.target.name]:e.target.value})
//   };

//   console.log(values);
//   // console.log(username)
//   return (
//   <>
  
//   <div className="login-screen">
//     <div className="goto" >
//     <div className='anchor'>
//       <img src="./anchor.png"  alt="Anchor_image">        
//       </img>
//     </div></div>
//     <div className="goto">
      
//     <form onSubmit={handleSubmit}>
//     <div className='logo'><img src="./logo.png" alt="wheel_logo"></img>
//     </div>
//         <h1 >Hello Again!!</h1>
//         <h2>Lorem ipsum dolor sit amet consectetur adipsadaaaaaaa isicing elit. Totam, sit pariatur temp!</h2>
//         {inputs.map((input)=>(
//           <FormInput
//           key={input.id}{...input} 
//           value={values[input.name]} 
//           onChange={onChange} />
//         ))}        
//         <button>Login</button>        
//       </form>

//     </div>
      
//     </div>
 
//     </>    
//     )
// }

// export default LoginScreen