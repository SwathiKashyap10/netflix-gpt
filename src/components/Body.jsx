import React, { useEffect } from 'react';
import Login from './login';
import Browse from './Browse';
import Main from './Main';
import SignUpS1 from './SignUpS1';



import {createBrowserRouter} from "react-router-dom";
import { RouterProvider } from 'react-router-dom';

const Body = () => {

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

  return (
    <div>
      <RouterProvider router={appRouter}/>
    </div>
  )
}

export default Body;
