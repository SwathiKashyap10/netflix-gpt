import React from 'react';
import { useState,useRef } from 'react';
import { auth } from '../utils/firebase';
import {validateEmail,validatePassword} from '../utils/validateSignIn';
import { createUserWithEmailAndPassword } from "firebase/auth";
import { LOGO } from '../utils/constant';
import { useNavigate } from 'react-router-dom';

const SignUpS1 = () => {
  const [emailValidMes,setEmailValidMes] = useState(null);
  const [passValidMes,setPassValidMes] = useState(null);
    
  const email = useRef();
  const password = useRef();
  const navigate = useNavigate();

  const handelSignUp = (e) => {
    e.preventDefault();
    // console.log(email.current.value + " " + password.current.value);

    const emailValidity = validateEmail(email.current.value);
    setEmailValidMes(emailValidity);
    const passValidity = validatePassword(password.current.value);
    setPassValidMes(passValidity);

    if(emailValidity === null && passValidity === null){
            //then sign up the user (firebase sign up logic) 
            createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
            .then((userCredential) => {
              // Signed up 
              const user = userCredential.user;
              navigate("/browse");
            })
            .catch((error) => {
              const errorCode = error.code;
              const errorMessage = error.message;
              setPassValidMes(errorMessage);
            });
    }
  }

  return (
    <div>
        {/* logo  */}
      <div className='flex flex-row justify-between w-full items-center pl-32 pr-32'>
      <img className="w-48" src={LOGO} alt="logo"/>
      <button onClick={()=>navigate("/login")} className= 'w-20 h-9 text-white rounded-lg bg-red-600 hover:bg-red-700'>Sign In</button>
      </div>
        <hr/>
      {/* content  */}
      <div className='flex flex-col justify-center items-center h-screen w-screen mt-[-150px]'>
        <div className='flex flex-col items-start p-10 w-md'>
        <p className='text-sm text-gray-500'>SIGN UP</p>
        <div className='flex flex-col items-start'>
           <h3 className='text-3xl'>Welcome back!</h3>
           <h3 className='text-3xl'>Joining Netflix is easy.</h3>
        </div>
        <p className='mt-1.5 mb-5.5 text-sm'>Enter your password and you'll be watching in no time.</p>
        <div className='flex flex-col items-start'>
          <input ref={email} className='w-80 h-10 p-3.5 mb-3.5 border border-gray-300' type="email" placeholder='email'/>
          {emailValidMes && <p className='text-red-600 text-sm mb-2.5 mt-[-10px]'>{emailValidMes}</p>}
          <input ref={password} className='w-80 h-10 p-3.5 mb-3.5 border border-gray-300' type="password" placeholder='enter your password'/>
          {passValidMes && <p className='text-red-600 text-sm mb-2.5 mt-[-10px]'>{passValidMes}</p>}
        </div>
        <button onClick={handelSignUp} className='w-80 h-10 p-2.5 bg-red-500 mt-6 text-white rounded-sm'>Next</button>
        </div>
      </div>
    </div>
  );
}

export default SignUpS1;
