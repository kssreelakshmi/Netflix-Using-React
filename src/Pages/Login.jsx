import React,{useState} from 'react'
import { Link } from 'react-router-dom'


const Login = () => {
  
  const [remember,setRemember] = useState(true);
  const [email,setEmail] = useState('');
  const [password,setPassword] = useState('');

  const handleForm = (e) =>{
    e.preventDefault();
    console.log(email)
    console.log(password)
  }

  return (
    <>
    <div className='w-full h-screen'>
    <img className='hidden sm:block opacity-45 absolute w-full h-full object-cover' src="https://assets.nflxext.com/ffe/siteui/vlv3/8728e059-7686-4d2d-a67a-84872bd71025/e90516bd-6925-4341-a6cf-0b9f3d0c140a/IN-en-20240708-POP_SIGNUP_TWO_WEEKS-perspective_WEB_34324b52-d094-482b-8c2a-708dc64c9065_small.jpg" alt="///" />
    <div className='fixed w-full px-4 py-24 z-20'>
    <div className='max-w-[450px] h-[600px] mx-auto bg-black/70 rounded-xl '>
      <div className='max-w-[320px] mx-auto py-16'>
        <h1 className='text-3xl font-nsans-bold'>Login</h1>
        <form className='w-full flex flex-col py-4' onSubmit={handleForm}>

          <label htmlFor="">Email</label>
          <input className='p-3 my-2 bg-gray-700 rounded' type="email" 
          placeholder='email' autoComplete='email'value={email} onChange={(e)=>setEmail(e.target.value)}/>
          <label htmlFor="">Password</label>
          <input className='p-3 my-2 bg-gray-700 rounded' type="password" 
          placeholder='password' autoComplete='current-password' value={password} onChange={(e)=>setPassword(e.target.value)}/>
          
          <button className='bg-red-600 py-3 my-6 rounded-md font-nsans-bold'>Login</button>
          <div className='flex justify-between items-center text-gray-600'>
            {/* <p ><input type="checkbox" className='mr-2 flex bg-gray-300' checked={remember} onChange={(e)=>setRemember(remember)} /> Remember Me </p> */}
            <p className='my-4 flex'>
              <span className='text-gray-600 m-2'>New to Netflix</span>
              <Link to='/signup' className='text-gray-100'>Sign Up</Link>  
            </p>
          </div>
        </form>
      </div>
    </div>
    </div>
    </div>
    </>
  )

}

export default Login