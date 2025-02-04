import React from 'react';
import { useState,useRef } from 'react';
import {validateEmail,validatePassword} from '../utils/validateSignIn';
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from '../utils/firebase';


const LoginForm = () => {
  const [emailValidMes,setEmailValidMes] = useState(null)
  const [passValidMes,setPassValidMes] = useState(null);

  const email = useRef();
  const password = useRef();

  const handelFormValidation = (e) => {
      e.preventDefault();
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
            console.log(user);
            // ...
          })
          .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            setPassValidMes(errorCode + "-" + errorMessage);
          });
      }
  }

  return (
    <div>
        <div>
            <form className='absolute text-white z-30 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-black/70 w-lg px-16 pt-16 pb-36'>
                <h3>Sign In</h3>
                <input ref={email} type="email" placeholder='Email or Mobile Number'className={`w-full px-4 py-3 mt-4 mb-3 ${
                emailValidMes ? "border-2 border-red-500" : "border-2 border-gray-500 "}`} /><br/>
                {emailValidMes && <p className='text-red-600 text-sm'>{emailValidMes}</p>}
                <input ref={password} type="password" placeholder='Password' className={`w-full px-4 py-3 mt-2 mb-3 ${
                passValidMes ? "border-2 border-red-500" : "border-2 border-gray-500 "}`}/>
                {passValidMes && <p className='text-red-600 text-sm'>{passValidMes}</p>}
                <button onClick={handelFormValidation} className='w-full bg-red-500 py-2.5 mt-4'>Sign In</button>
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
    </div>
  )
}

export default LoginForm;
