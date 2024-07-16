import React from 'react'
import Hero from '../Components/Hero'
import MovieRow from '../Components/MovieRow'
import endpoints from '../Services/movieServices'

const Home = () => {
  return (
    <>
    <Hero />
    <MovieRow title='upcoming' url={endpoints.upcoming} />
    <MovieRow title='trending' url={endpoints.trending} />
    <MovieRow title='topRated' url={endpoints.topRated} />
    <MovieRow title='comedy' url={endpoints.comedy}/>
    <MovieRow title='popular' url={endpoints.popular}/>
    <MovieRow title='action' url={endpoints.action}/>
    <MovieRow title='horror' url={endpoints.horror}/>
    <MovieRow title='romance' url={endpoints.romance}/>
    <MovieRow title='documentaries' url={endpoints.documentaries}/>
    
    </>
  )
}

export default Home