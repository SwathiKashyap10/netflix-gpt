import { API_OPTIONS } from '../utils/constant';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { addPopularShows } from '../utils/tvShowsSlice';

const usePopularShows = () => {
    //fetch data from tmdb api and update our store
    const dispatch = useDispatch();

const getPopularTVShows = async() => {
  const data = await fetch('https://api.themoviedb.org/3/tv/popular?page=1', API_OPTIONS);
  const jsonData = await data.json();
  dispatch(addPopularShows(jsonData.results));
};

useEffect(()=>{
    getPopularTVShows();
},[]);

};

export default usePopularShows;