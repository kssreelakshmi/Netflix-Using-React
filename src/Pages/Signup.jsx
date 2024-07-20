import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import {UserAuth} from '../Context/AuthContext'


const Signup = () => {

  const [remember,setRemember] = useState(true);
  const [email,setEmail] = useState('');
  const [username,setUsername] = useState('');
  const [password,setPassword] = useState('');

  const { user, signUp } = UserAuth();
  const navigate = useNavigate();

  const handleForm = async (e) =>{
    e.preventDefault();
   try{
    await signUp(email,password)
    navigate ('/')
   }
   catch(error){
    console.log(error)
   }
  }

  return (
    <>
    <div className='w-full h-screen'>
    <img className='hidden sm:block opacity-45 absolute w-full h-full object-cover' src="https://assets.nflxext.com/ffe/siteui/vlv3/8728e059-7686-4d2d-a67a-84872bd71025/e90516bd-6925-4341-a6cf-0b9f3d0c140a/IN-en-20240708-POP_SIGNUP_TWO_WEEKS-perspective_WEB_34324b52-d094-482b-8c2a-708dc64c9065_small.jpg" alt="///" />
    <div className='absolute w-full px-4 py-36 z-20'>
    <div className='max-w-[450px] h-[600px] mx-auto bg-black/70 rounded-xl '>
      <div className='max-w-[320px] mx-auto py-16'>
        <h1 className='text-3xl font-nsans-bold'>Sign Up</h1>
        <form className='w-full flex flex-col py-4'onSubmit={handleForm}>

          <input className='p-3 my-2 bg-gray-700 rounded' type="email" placeholder='email' autoComplete='email'value={email} onChange={(e)=>setEmail(e.target.value)}/>
          
          <input className='p-3 my-2 bg-gray-700 rounded' type="text" placeholder='username' autoComplete='username'value={username} onChange={(e)=>setUsername(e.target.value)}/>
          
          <input className='p-3 my-2 bg-gray-700 rounded' type="password" placeholder='password' autoComplete='current-password' value={password} onChange={(e)=>setPassword(e.target.value)}/>
          
          <button className='bg-red-600 py-3 my-6 rounded-md font-nsans-bold'>Sign Up</button>
          <div className='justify-between items-center text-gray-600'>
            <p className='flex mr-2'><input type="checkbox" className=' mr-2 bg-gray-300 my-2' checked={remember} onChange={(e)=>setRemember(remember)} /> Remember Me </p>
            <p className='my-2 flex'>
              <span className='text-gray-600'>Already SubScribed to Netflix</span>
              <Link to='/login' className='text-gray-100 ml-2'>Login </Link>  
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

export default Signup