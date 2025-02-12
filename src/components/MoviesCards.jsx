import React from 'react'
import { IMG_CDN_URL } from '../utils/constant'

const MoviesCards = ({title,movies}) => {
   return movies && (
    <div className='pl-5 pt-2 text-white'>
      {title &&  <h1 className='text-[20px] py-2.5'>{title}</h1>}
      <div className='flex overflow-x-scroll'>
        {movies.map((movie)=><img onClick={() => setSelectedMovie(movie)} className='w-40 pr-3 transition-transform duration-300 hover:scale-110' key={movie.id} src={IMG_CDN_URL + movie.poster_path} alt="err"/>)}
      </div>
    </div>
  )
}

export default MoviesCards;
