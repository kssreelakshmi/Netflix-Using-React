import React, { useEffect, useState } from 'react'
import { MdChevronLeft, MdChevronRight } from "react-icons/md";
import { AiOutlineClose } from 'react-icons/ai'
import { UserAuth } from '../Context/AuthContext';
import { db } from '../Services/firebaseConfig';
import { createImageUrl  } from '../Services/movieServices';
import { arrayRemove, doc,onSnapshot,updateDoc } from 'firebase/firestore';


const Profile = () => {
  const [movies,setMovies] = useState([]);
  const {user} = UserAuth();
  useEffect(()=>{

    if(user){
      onSnapshot(doc(db,'users',`${user?.email}`),(doc)=>{
        if(doc.data){
          setMovies(doc.data().favShows)
        }
      })
    }
  },[user?.email])

  
  const slide = (offset) => {
    const slider = document.getElementById('slider')
    slider.scrollLeft = slider.scrollLeft + offset
  }
  
  const handleUnlike = async (movie) =>{
    const userDoc = doc(db,'users',user.email)

    await updateDoc(userDoc,{
      favShows : arrayRemove(movie)
    })
  }

  if(!user){
    <>
    <p>fetching shows.....</p>
    </>
  }

  


  return (
    <>
    <div>
      <div>
      <img className='block w-full h-[500px] object-cover ' src="https://assets.nflxext.com/ffe/siteui/vlv3/8728e059-7686-4d2d-a67a-84872bd71025/e90516bd-6925-4341-a6cf-0b9f3d0c140a/IN-en-20240708-POP_SIGNUP_TWO_WEEKS-perspective_WEB_34324b52-d094-482b-8c2a-708dc64c9065_small.jpg" alt="" />
      <div className='bg-black/60 fixed top-0 left-0 w-full h-[500px]'/>
      <div className='absolute top-[20%] p-4 md:p-8 '>
        <h1 className='text-3xl md:text-5xl font-nsans-bold my-2'>
            Favourite Shows
        </h1>
        <p className='font-nsans-light text-gray-400 text-lg'>{user.email}</p>
      </div>
      </div>
      <h2 className='font-nsans-bold md:text-xl p-4 capitalize'>Favourite Shows</h2>
      <div className='relative flex items-center group'>
        <MdChevronLeft onClick={()=>slide(-500)} className='bg-white rounded-full size-6 left-2 absolute opacity-80 text-gray-700 z-10 hidden group-hover:block cursor-pointer' />
        <div id={'slider'} className='w-full h-full overflow-x-scroll whitespace-nowrap scroll-smooth scrollbar-hide'>
          {
            movies.map((movie,id)=>
              <div key={movie.id} className='relative w-[160px] sm:w-[200px] md:w-[240px] lg:w-[280px] inline-block rounded-lg overflow-hidden cursor-pointer m-2'>
            <img className='w-full h-40 block object-cover object-top' src={createImageUrl(movie.backdrop_path ?? movie.poster_path, 'w500')} alt={movie.title} />
            <div className='absolute top-0 left-0 w-full h-40 bg-black opacity-0 hover:opacity-100'>
              <p className='whitespace-normal text-xs md:text-sm flex justify-center items-center h-full font-nsans-bold'>{movie.title}</p>
              
              <p className='absolute flex justify-end size-30 top-2 right-2
               text-gray-300' onClick={()=>handleUnlike(movie)}
               ><AiOutlineClose /></p>
              
            
            </div>
          </div>
          )
        }
        </div>
        <MdChevronRight onClick={()=>slide(500)} className= 'bg-white rounded-full size-6 right-2 absolute opacity-80 text-gray-700 z-10 hidden group-hover:block cursor-pointer' />
      </div>
    </div>
    </>
  )
}

export default Profile