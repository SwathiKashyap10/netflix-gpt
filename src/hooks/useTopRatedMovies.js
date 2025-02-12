import { API_OPTIONS } from '../utils/constant';
import { useDispatch } from 'react-redux';
import { addTopRatedMovies } from '../utils/moviesSlice';
import { useEffect } from 'react';

const useTopRatedMovies = () => {
    //fetch data from tmdb api and update our store
const dispatch = useDispatch();

const getTopRatedMovies = async() => {
  const data = await fetch('https://api.themoviedb.org/3/movie/top_rated?page=1', API_OPTIONS);
  const jsonData = await data.json();
  dispatch(addTopRatedMovies(jsonData.results));
};

useEffect(()=>{
    getTopRatedMovies();
},[]);

};

export default useTopRatedMovies;