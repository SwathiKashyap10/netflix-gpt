import React from 'react';
import LoginForm from './LoginForm';
import { LOGO } from '../utils/constant';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate();
  return (
    <div className="relative h-screen w-screen">
      <div className='absolute z-30 flex flex-row justify-between w-full items-center pl-32 pr-32'>
      <img className="w-48" src={LOGO} alt="logo"/>
      <button onClick={()=>navigate("/signup")} className= 'w-20 h-9  text-white rounded-lg bg-red-600 hover:bg-red-700'>Sign Up</button>
      </div>
      <div className='absolute insert-0 z-0'>
        <img className="w-full h-full object-cover" src="https://assets.nflxext.com/ffe/siteui/vlv3/fb5cb900-0cb6-4728-beb5-579b9af98fdd/web/IN-en-20250127-TRIFECTA-perspective_cf66f5a3-d894-4185-9106-5f45502fc387_small.jpg" srcset="https://assets.nflxext.com/ffe/siteui/vlv3/fb5cb900-0cb6-4728-beb5-579b9af98fdd/web/IN-en-20250127-TRIFECTA-perspective_cf66f5a3-d894-4185-9106-5f45502fc387_small.jpg 1000w, https://assets.nflxext.com/ffe/siteui/vlv3/fb5cb900-0cb6-4728-beb5-579b9af98fdd/web/IN-en-20250127-TRIFECTA-perspective_cf66f5a3-d894-4185-9106-5f45502fc387_medium.jpg 1500w, https://assets.nflxext.com/ffe/siteui/vlv3/fb5cb900-0cb6-4728-beb5-579b9af98fdd/web/IN-en-20250127-TRIFECTA-perspective_cf66f5a3-d894-4185-9106-5f45502fc387_large.jpg 1800w" alt=""></img>
     </div>
     {/* <!-- Gradient Overlay -->  */}
     <div className="absolute inset-0 bg-black/50 z-10"></div>
     <LoginForm/>
    </div>

  )
}

export default Login;
