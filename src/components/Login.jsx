import React from 'react';
import LoginForm from './LoginForm';

const Login = () => {
  return (
    <div className="relative h-screen w-screen">
      <div className='absolute z-30 flex flex-row justify-between w-full items-center pl-32 pr-32'>
      <img className="w-48" src="https://help.nflxext.com/helpcenter/OneTrust/oneTrust_production/consent/87b6a5c0-0104-4e96-a291-092c11350111/01938dc4-59b3-7bbc-b635-c4131030e85f/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png" alt="logo"/>
      <button className= 'w-20 h-9  text-white rounded-lg bg-red-600 hover:bg-red-700'>Sign Up</button>
      </div>
      <div className='absolute insert-0 z-0'>
        <img class="w-full h-full object-cover" src="https://assets.nflxext.com/ffe/siteui/vlv3/fb5cb900-0cb6-4728-beb5-579b9af98fdd/web/IN-en-20250127-TRIFECTA-perspective_cf66f5a3-d894-4185-9106-5f45502fc387_small.jpg" srcset="https://assets.nflxext.com/ffe/siteui/vlv3/fb5cb900-0cb6-4728-beb5-579b9af98fdd/web/IN-en-20250127-TRIFECTA-perspective_cf66f5a3-d894-4185-9106-5f45502fc387_small.jpg 1000w, https://assets.nflxext.com/ffe/siteui/vlv3/fb5cb900-0cb6-4728-beb5-579b9af98fdd/web/IN-en-20250127-TRIFECTA-perspective_cf66f5a3-d894-4185-9106-5f45502fc387_medium.jpg 1500w, https://assets.nflxext.com/ffe/siteui/vlv3/fb5cb900-0cb6-4728-beb5-579b9af98fdd/web/IN-en-20250127-TRIFECTA-perspective_cf66f5a3-d894-4185-9106-5f45502fc387_large.jpg 1800w" alt=""></img>
     </div>
     {/* <!-- Gradient Overlay -->  */}
     <div class="absolute inset-0 bg-black/50 z-10"></div>
     <LoginForm/>
    </div>

  )
}

export default Login;
