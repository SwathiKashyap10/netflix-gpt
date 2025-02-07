import React, { useEffect } from 'react';
import Login from './login';
import Browse from './Browse';
import Main from './Main';
import SignUpS1 from './SignUpS1';
import { onAuthStateChanged } from "firebase/auth";
import { auth } from '../utils/firebase';


import {createBrowserRouter} from "react-router-dom";
import { RouterProvider } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addUser, removeUser } from '../utils/userSlice';

const Body = () => {

  const dispatch = useDispatch();

  const appRouter = createBrowserRouter([
    {
        path:"/",
        element:<SignUpS1/>
    },
    {
      path:"/login",
      element:<Login/>
  },
    {
        path:"/browse",
        element:<Browse/>
    },
    {
      path:"/main",
      element:<Main/>
    }
  ])

  useEffect(()=>{
    // add user to our appStore as soon as he/she signs up/signs in 
    onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/auth.user
        const {uid,email,displayName} = user;
        dispatch(addUser({uid:uid,email:email,displayName:displayName}));
        // ...
      } else {
        // User is signed out
        dispatch(removeUser());
      }
    });
  },[]);

  return (
    <div>
      <RouterProvider router={appRouter}/>
    </div>
  )
}

export default Body;
