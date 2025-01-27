import React, { useEffect, useState } from 'react'
import axios from 'axios'
import endpoints, { createImageUrl } from '../Services/movieServices';

const Hero = () => {
    const [movie,setMovie] = useState({});

    useEffect(()=>{
        axios.get(endpoints.popular).then((response)=>{
            const movies = response.data.results;
            const randomMovie = movies[Math.floor(Math.random()* movies.length)]
            setMovie(randomMovie)
        })
    },[])
    
    
    if(!movie)
        return (
            <>
            <p>fetching movie...</p>
            </>
);
    
  return (

    <div className='w-full h-[550px]  lg:h-[850px]'>
       <div className='w-full h-full'>
            <div className='absolute w-full h-[550px]  lg:h-[850px] bg-gradient-to-r from-black' />
                <img className='w-full h-full object-cover object-top' src = {createImageUrl(movie.backdrop_path,'original')} alt={movie.title} />
            <div className='absolute w-full top-[10%] lg:top-[25%] p-4 md:p-8'>
                <h1 className='text-3xl md:text-5xl font-nsans-bold'>{movie.title}</h1>
                <div className='my-8 mb-4'>
                    <button className='capitalize border bg-gray-300 rounded-md text-black py-2 px-5 '>Play</button>
                    <button className='capitalize border bg-gray-300 rounded-md text-black py-2 px-5 ml-4'>Watch later</button>
                </div>
                <p className='text-gray-400 text-sm'>{movie.release_date}</p>
                <p className='text-gray-400 w-full md:max-w-[70%] lg:max-w-[50%] xl:max-w-[35%]'>{movie.overview ?? "Please wait..."}</p>
            </div>
       </div>
    </div>
  )
}

export default Hero