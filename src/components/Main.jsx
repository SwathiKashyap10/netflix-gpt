import React from 'react';
import Header from './Header';
import { useState,useRef } from 'react';
import { validateEmail } from '../utils/validateSignIn';

const Main = () => {

    const [emailValidMes,setEmailValidMes] = useState(null);
    const email = useRef();
    const handelSignUp = (e) =>{
       e.preventDefault();
       const emailValidity = validateEmail(email.current.value);
       setEmailValidMes(emailValidity);

       if(!emailValidMes){
        //redirect user to next step of sign up procedure
       }
    }

  return (
    <div>
      <div className="relative h-screen w-screen">
      {/* background image  */}
      <div className='absolute insert-0 z-0'>
        <img class="w-full h-full object-cover" src="https://assets.nflxext.com/ffe/siteui/vlv3/fb5cb900-0cb6-4728-beb5-579b9af98fdd/web/IN-en-20250127-TRIFECTA-perspective_cf66f5a3-d894-4185-9106-5f45502fc387_small.jpg" srcset="https://assets.nflxext.com/ffe/siteui/vlv3/fb5cb900-0cb6-4728-beb5-579b9af98fdd/web/IN-en-20250127-TRIFECTA-perspective_cf66f5a3-d894-4185-9106-5f45502fc387_small.jpg 1000w, https://assets.nflxext.com/ffe/siteui/vlv3/fb5cb900-0cb6-4728-beb5-579b9af98fdd/web/IN-en-20250127-TRIFECTA-perspective_cf66f5a3-d894-4185-9106-5f45502fc387_medium.jpg 1500w, https://assets.nflxext.com/ffe/siteui/vlv3/fb5cb900-0cb6-4728-beb5-579b9af98fdd/web/IN-en-20250127-TRIFECTA-perspective_cf66f5a3-d894-4185-9106-5f45502fc387_large.jpg 1800w" alt=""></img>
      </div>
      {/* <!-- Gradient Overlay -->  */}
      <div class="absolute inset-0 bg-black/70 z-10"></div>
      <Header/>
      {/* hero heading  */}
      <div className='absolute z-30 text-white flex flex-col items-center justify-center h-screen w-screen text-center'>
        <div className='w-2xl'>
          <p className='font-bold text-6xl'>Unlimited movies, TV shows and more</p>
          <p className='font-bold text-lg'>Starts at ₹149. Cancel at any time.</p>
        </div>
        <div className='mt-3'>
          <p className='text-base'>Ready to watch? Enter your email to create or restart your membership.</p>
          <div className='flex justify-center items-center gap-x-6 w-full'>
          <input ref={email} type="email" placeholder='Email Address'className="w-96 p-3.5 border border-1 border-gray-100" />
          <button onClick={handelSignUp} className='bg-red-600 w-40 p-3.5'>Get Started</button>
        </div>
        {emailValidMes && <p>Sorry, something went wrong.Please try again later.</p>}
        </div>
      </div>
    </div>
    </div>
  )
}

export default Main;
