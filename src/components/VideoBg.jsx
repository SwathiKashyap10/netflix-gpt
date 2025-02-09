import React from 'react'
import useVideoBg from '../hooks/useVideoBg'
import { useSelector } from 'react-redux';


const VideoBg = ({movieId}) => {

   useVideoBg(movieId);
   const trailer = useSelector(store => store.movies?.trailerVideo);

  return (
    <div className='relative'>
      <iframe className='w-screen aspect-video pointer-events-none' src={"https://www.youtube.com/embed/"+trailer?.key+"?&autoplay=1&mute=1&loop=1&playlist="+trailer?.key} title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin"></iframe>
      {/* <!-- Gradient Overlay -->  */}
      <div className="absolute inset-0 bg-black/20"></div>
    </div>
  )
}

export default VideoBg;
