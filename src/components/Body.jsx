import React, { useEffect } from 'react';
import Login from './login';
import Browse from './Browse';
import Main from './Main';
import SignUp from './SignUp';



import {createBrowserRouter, Outlet} from "react-router-dom";
import { RouterProvider } from 'react-router-dom';
import TvShows from './TvShows';
import Header from './Header';

// Layout Component: Keeps Header Fixed & Shows Dynamic Pages Below
const Layout = () => {
  return (
    <div>
      <Header /> {/* Header always stays */}
      <Outlet /> {/* This will change based on the route */}
    </div>
  );
};

// Define Routes
const appRouter = createBrowserRouter([
  {
    path: "/signup",
    element: <SignUp />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path:"/main",
    element:<Main/>
  },
  {
    path: "/browse",
    element: <Layout />, // Layout includes the Header
    children: [
      { path: "", element: <Browse /> }, // Default route under /browse
      { path: "tvshows", element: <TvShows /> }, // Renders inside Layout
    ],
  },
]);

// Render Router
const Body = () => {
  return <RouterProvider router={appRouter} />;
};

export default Body;
