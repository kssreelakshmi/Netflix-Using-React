import axios from 'axios'
import React, { useEffect, useState } from 'react'
import MovieItem from './MovieItem'
import { MdChevronLeft, MdChevronRight } from "react-icons/md";

const MovieRow = ({title,url}) => {
  const [movies,setMovies] = useState([])
  const rowId = Math.floor(Math.random()*1000)
  useEffect(()=>{
    axios.get(url).then((response)=>setMovies(response.data.results))
  },[url])  
  
  const slide = (offset) => {
    const slider = document.getElementById('slider'+ rowId)
    slider.scrollLeft = slider.scrollLeft + offset
  }


  return (
    <>
      <h2 className='font-nsans-bold md:text-xl p-4 capitalize'>{title}</h2>
      <div className='relative flex items-center group'>
        <MdChevronLeft onClick={()=>slide(-500)} className='bg-white rounded-full size-6 left-2 absolute opacity-80 text-gray-700 z-10 hidden group-hover:block cursor-pointer' />
        <div id={'slider'+rowId} className='w-full h-full overflow-x-scroll whitespace-nowrap scroll-smooth scrollbar-hide'>
          {
            movies.map((movie)=>
              <MovieItem key={movie.id} movie={movie} />
          )
        }
        </div>
        <MdChevronRight onClick={()=>slide(500)} className= 'bg-white rounded-full size-6 right-2 absolute opacity-80 text-gray-700 z-10 hidden group-hover:block cursor-pointer' />
      </div>
    </>
  )
}

export default MovieRow 