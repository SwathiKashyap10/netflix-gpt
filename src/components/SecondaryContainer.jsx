import React from 'react'
import { useSelector } from 'react-redux'
import MoviesCards from './MoviesCards';

const SecondaryContainer = () => {

    const movies = useSelector(store => store.movies);
    

  return (
    <div className='bg-black'>
        <div className='-mt-36 relative z-20'>
         <MoviesCards title="Now Playing" movies={movies?.nowPlayingMovies}/>
         <MoviesCards title="Popular" movies={movies?.popularMovies}/>
         <MoviesCards title="Top Rated" movies={movies?.topRatedMovies}/>
         <MoviesCards title="Upcoming" movies={movies?.upcomingMovies}/>
        </div>
    </div>
  )
}

export default SecondaryContainer;
