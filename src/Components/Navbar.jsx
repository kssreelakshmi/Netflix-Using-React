import React from 'react'
import { Link } from 'react-router-dom'
import CustomSVG from './CustomSVG'

const Navbar = () => {
  return (
    <div className='absolute w-full flex items-center justify-between p-4 z-50'>

        <Link to='/' >
        
          <CustomSVG />
      
        {/* <p className=' text-red-600 cursor-pointer'> */}
        {/* <h1 className='uppercase text-red-600 font-nsans-bold cursor-pointer text-5xl'> */}
          
        {/* </p> */}
        </Link>
        <div>
        <Link to='/login' >
        <button className='capitalize pr-4 '>Login</button>
        </Link>

        <Link to='/signup' >
        <button className='capitalize bg-red-600 px-6 py-2 rounded cursor-pointer'>Sign Up</button>
        </Link>
        </div>
    </div>
  )
}

export default Navbar