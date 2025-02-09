import { API_OPTIONS } from '../utils/constant';
import { useDispatch } from 'react-redux';
import { addTrailerVideo } from '../utils/moviesSlice';
import { useEffect } from 'react';

const useVideoBg = (movieId) => {
     //fetching trailer of the main video of the background
     const dispatch = useDispatch();
 
   const getMainMovieVideo = async() => {
     const data = await fetch("https://api.themoviedb.org/3/movie/"+movieId+"/videos",API_OPTIONS);
     const jsonData = await data.json();
 
     const trailerList = jsonData.results.filter((video)=>video.type === "Trailer");
     const trailer = trailerList.length ? trailerList[0] : jsonData.results[0];
     dispatch(addTrailerVideo(trailer));
   }
 
   useEffect(()=>{
     getMainMovieVideo();
   },[]);
}

export default useVideoBg;