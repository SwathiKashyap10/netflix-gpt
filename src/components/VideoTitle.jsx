import React from 'react'

const VideoTitle = ({title,overview}) => {
  return (
    <div className='pt-[20%] px-24 text-white absolute z-30'>
      <h1 className='text-4xl fonr-bold'>{title}</h1>
      <p className='py-6 text-base w-1/4'>{overview}</p>
      <button className='bg-white text-black p-4 px-12 text-xl bg-opacity-50 rounded-lg cursor-pointer'>► play</button>
      <button className='bg-gray-500 text-white p-4 px-12 text-xl bg-opacity-50 rounded-lg mx-2 cursor-pointer'>more info</button>
    </div>
  )
}

export default VideoTitle
