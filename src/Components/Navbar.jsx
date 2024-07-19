import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { UserAuth } from '../Context/AuthContext'
import Netflix from '../assets/netflix.png'

const Navbar = () => {
  const {user,logOut} = UserAuth();
  const navigate = useNavigate();

  const handleLogout = async () =>{
    try{
      await logOut()
      navigate('/')
    }
    catch(error){
      console.log(error);
    }
  }
  
  return (
    <div className='absolute w-full flex items-center justify-between p-4 z-50'>

        <Link to='/' >
          <img src={Netflix} alt="Netflix Logo" className='w-full mx-4 h-[65px] cursor-pointer'/>
        
        </Link>
        {user?.email? (<div>
        <Link to='/profile' >
        <button className='capitalize pr-4 '>Profile</button>
        </Link>
        
        <button onClick={handleLogout} className='capitalize bg-red-600 px-6 py-2 rounded cursor-pointer'>Logout</button>
        </div>)
        :
        (
        <div>
        <Link to='/login' >
        <button className='capitalize pr-4'>Login</button>
        </Link>
        <Link to='/signup' >
        <button className='capitalize bg-red-600 px-6 py-2 rounded cursor-pointer'>Sign Up</button>
        </Link>
        </div>)
        }
    </div>
  )
}

export default Navbar


