import React from 'react';
import useAiringToday from '../hooks/useAiringToday';
import { useSelector } from 'react-redux';
import MoviesCards from './MoviesCards';
import useOnTheAir from '../hooks/useOnTheAir';
import usePopularShows from '../hooks/usePopularShows';
import useTopRatedShows from '../hooks/useTopRatedShows';

const TvShows = () => {

   useAiringToday(); 
   useOnTheAir();
   usePopularShows();
   useTopRatedShows();

   const tvShows = useSelector(store => store.tvShows);
  return (
    <div className='bg-black absolute pl-2 pr-2'>
        <div className='mt-28'>
         <MoviesCards title="Airing Today" movies={tvShows.airingTodayShows}/>
         <MoviesCards title="On The Air" movies={tvShows.onTheAirShows}/>
         <MoviesCards title="Popular" movies={tvShows.popularShows}/>
         <MoviesCards title="Top Rated" movies={tvShows.topRatedShows}/>
        </div>
    </div>
  )
}

export default TvShows;
