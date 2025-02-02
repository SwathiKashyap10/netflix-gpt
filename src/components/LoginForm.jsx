import React from 'react';

const LoginForm = () => {
  return (
    <div>
        <div>
            <form className='absolute text-white z-30 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-black/70 max-md: px-16 pt-16 pb-36'>
                <h3>Sign In</h3>
                <input type="email" placeholder='Email or Mobile Number'class="w-full px-4 py-3 mt-4 mb-3 border-1 border-gray-50" /><br/>
                <input type="password" placeholder='Password' class="w-full px-4 py-3 mb-3 border-1 border-gray-50"/>
                <button className='w-full bg-red-500 py-2.5 mt-4'>Sign In</button>
                <div className='flex justify-between mt-2'>
                  <div>
                  <input type="checkbox"/>
                  <label>Remember Me</label>
                  </div>
                  <div>
                  <a href="#">need help</a>
                  </div>
                </div>
                <div className='mt-20'>
                  <span>New to Netflix? </span>
                  <a href="#">Sign Up Now</a>
                </div>
           </form>
        </div>
        {/* <div class="absolute inset-0 bg-black/70 z-20 w-1/2 h-1/2"></div> */}
    </div>
  )
}

export default LoginForm;
