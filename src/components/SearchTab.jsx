import React from 'react'
import MoviesCards from './MoviesCards';
import { useSelector } from 'react-redux';
import { IMG_CDN_URL } from '../utils/constant';

const SearchTab = () => {
    const movies = useSelector(store => store.searchResult?.searchResult);

  return (
    <div className='bg-black w-screen h-screen absolute'>
      {movies && <div className='mt-28'>
      <div className='grid grid-cols-9 gap-2'>
      {
      movies.filter(movie => movie.poster_path != null)
            .map(movie => (<img className='w-40 pr-3' key={movie.id} src={IMG_CDN_URL + movie.poster_path} alt="Movie Poster"/> ))
      }
        </div>
      </div>}
    </div>
  )
}

export default SearchTab;
