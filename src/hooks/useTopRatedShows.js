import { API_OPTIONS } from '../utils/constant';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import {  addTopRatedShows } from '../utils/tvShowsSlice';

const useTopRatedShows = () => {
    //fetch data from tmdb api and update our store
    const dispatch = useDispatch();

const getTopRatedTVShows = async() => {
  const data = await fetch('https://api.themoviedb.org/3/tv/top_rated?page=1', API_OPTIONS);
  const jsonData = await data.json();
  dispatch(addTopRatedShows(jsonData.results));
};

useEffect(()=>{
    getTopRatedTVShows();
},[]);

};

export default useTopRatedShows;