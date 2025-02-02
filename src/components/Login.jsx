import React from 'react';
import Header from './Header';
import LoginForm from './LoginForm';

const Login = () => {
  return (
    <div className="relative h-screen w-screen">
      <Header/>
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
