import { API_OPTIONS } from '../utils/constant';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { addOnTheAirShows } from '../utils/tvShowsSlice';

const useOnTheAir = () => {
    //fetch data from tmdb api and update our store
    const dispatch = useDispatch();

const getOnTheAirTVShows = async() => {
  const data = await fetch('https://api.themoviedb.org/3/tv/on_the_air?page=1', API_OPTIONS);
  const jsonData = await data.json();
  dispatch(addOnTheAirShows(jsonData.results));
};

useEffect(()=>{
    getOnTheAirTVShows();
},[]);

};

export default useOnTheAir;