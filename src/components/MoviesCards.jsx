import React from 'react'
import { IMG_CDN_URL } from '../utils/constant'

const MoviesCards = ({title,movies}) => {
    {movies ? console.log(movies[0]) : console.log("no movies yet")}
   return movies && (
    <div className='pl-5 pt-2 text-white'>
      <h1 className='text-[20px] py-2.5'>{title}</h1>
      <div className='flex overflow-x-scroll'>
        {movies.map((movie)=><img className='w-40 pr-3' key={movie.id} src={IMG_CDN_URL + movie.poster_path} alt="err"/>)}
      </div>
    </div>
  )
}

export default MoviesCards;
