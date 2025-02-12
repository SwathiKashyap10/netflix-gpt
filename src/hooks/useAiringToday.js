import { API_OPTIONS } from '../utils/constant';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { addAiringTodayShows } from '../utils/tvShowsSlice';

const useAiringToday = () => {
    //fetch data from tmdb api and update our store
    const dispatch = useDispatch();

const getAiringTodayTVShows = async() => {
  const data = await fetch('https://api.themoviedb.org/3/tv/airing_today?page=1', API_OPTIONS);
  const jsonData = await data.json();
  dispatch(addAiringTodayShows(jsonData.results));
};

useEffect(()=>{
    getAiringTodayTVShows();
},[]);

};

export default useAiringToday;