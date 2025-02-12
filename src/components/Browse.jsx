import React from 'react';
import Header from './Header';
import useNowPlayingMovies from '../hooks/useNowPlayingMovies';
import MainContainer from './MainContainer';
import SecondaryContainer from './SecondaryContainer';
import usePopularMovies from '../hooks/usePopularMovies';
import useTopRatedMovies from '../hooks/useTopRatedMovies';
import useUpcomingMovies from '../hooks/useUpcomingMovies';
import { useSelector } from 'react-redux';
import SearchTab from './SearchTab';


const Browse = () => {

  const searchTabOpen = useSelector(store => store.search.searchTabOpen);
  const inputTraker = useSelector(store => store.inputTraker?.inputValue);

  useNowPlayingMovies();
  usePopularMovies();
  useTopRatedMovies();
  useUpcomingMovies();

  return (
    <div>
      <div>
      <Header/>
      </div>
      {searchTabOpen && inputTraker.trim() !== "" ? (
        <SearchTab />
      ) : (
        <>
          <MainContainer />
          <SecondaryContainer />
        </>
      )}
    </div>
  )
}

export default Browse;
