import { API_OPTIONS } from '../utils/constant';
import { useDispatch } from 'react-redux';
import { addPopularMovies } from '../utils/moviesSlice';
import { useEffect } from 'react';

const usePopularMovies = () => {

    //fetch data from tmdb api and update our store
const dispatch = useDispatch();

const getPopularMovies = async() => {
  const data = await fetch('https://api.themoviedb.org/3/movie/popular?page=1', API_OPTIONS)
  const jsonData = await data.json();
  dispatch(addPopularMovies(jsonData.results));
};

useEffect(()=>{
    getPopularMovies();
},[]);

};

export default usePopularMovies;