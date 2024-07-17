import React, { useState } from 'react';
import axios from 'axios';
import { createImageUrl } from '../Services/movieServices';
import endpoints from '../Services/movieServices'
import { IoMdHeart, IoMdHeartEmpty } from "react-icons/io";
import { IoPlayCircleOutline } from "react-icons/io5";
import { IoIosClose } from "react-icons/io";
import { doc, arrayUnion,updateDoc } from 'firebase/firestore';
import { db } from '../Services/firebaseConfig';
import { UserAuth } from '../Context/AuthContext';

const MovieItem = ({ movie }) => {
  const [like, setLike] = useState(false);
  const [trailerUrl, setTrailerUrl] = useState(null);
  const {user} = UserAuth()
  const { title, backdrop_path, poster_path, id } = movie;

  const markFavShow = async () =>{
    const userEmail = user?.email;
      if(userEmail){
        const userDoc = doc(db,'users',userEmail)
        setLike(!like)
        await updateDoc(userDoc,{
          favShows : arrayUnion({...movie})
        })
      }
      else{
        alert('Login to save a movie')
      }

  }

  const fetchTrailer = async () => {
    try {
      const response = await axios.get(endpoints.trailer(id));
      const videos = response.data.results;
      const trailer = videos.find(video => video.type === 'Trailer' && video.site === 'YouTube');

      if (trailer) {
        setTrailerUrl(`https://www.youtube.com/embed/${trailer.key}`);
      }
    } catch (error) {
      console.error('Error fetching trailer:', error);
    }
  };

  return (
    <div className='relative w-[160px] sm:w-[200px] md:w-[240px] lg:w-[280px] inline-block rounded-lg overflow-hidden cursor-pointer m-2'>
      <img className='w-full h-40 block object-cover object-top' src={createImageUrl(backdrop_path ?? poster_path, 'w500')} alt={title} />
      <div className='absolute top-0 left-0 w-full h-40 bg-black opacity-0 hover:opacity-100'>
        <p className='whitespace-normal text-xs md:text-sm flex justify-center items-center h-full font-nsans-bold'>{movie.title}</p>
        <p className='absolute size-30 top-2 left-2 text-gray-300 cursor-pointer' onClick={markFavShow}>
          {like ? (<IoMdHeart />) : (<IoMdHeartEmpty />)}
        </p>
        <button type='button' className='absolute flex justify-end size-30 top-2 right-2 text-gray-300' onClick={fetchTrailer}>
          <IoPlayCircleOutline />
        </button>
      </div>

      {trailerUrl && (
        <div className='absolute top-0 left-0 w-full h-full bg-black bg-opacity-75 flex items-center justify-center'>
          <button type='button' className='absolute top-2 right-2 text-gray-300' onClick={() => setTrailerUrl(null)}>
            <IoIosClose size={30} />
          </button>
          <iframe
            width="560"
            height="315"
            src={trailerUrl}
            title="YouTube video player"
            style={{ border: 0 }}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      )}
    </div>
  );
};

export default MovieItem;
