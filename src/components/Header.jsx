import React, { useEffect, useRef } from 'react';
import { useState } from 'react';
import { auth } from '../utils/firebase';
import { useNavigate } from 'react-router-dom';
import {  onAuthStateChanged, signOut } from "firebase/auth";
import { useDispatch, useSelector } from 'react-redux';
import { addUser, removeUser } from '../utils/userSlice';
import { API_OPTIONS, LOGO, PROFILE_ICON } from '../utils/constant';
import { openSearchTab, toggleSearchTab } from '../utils/searchTabSlice';
import { addSearchResult } from '../utils/searchResultSlice';
import { addInputValue } from '../utils/inputTrakerSlice';

const Header = () => {

  const [isOpen, setIsOpen] = useState(false);
  const [isSearchOpen,setIsSearchOpen] = useState(false);
  const [query, setQuery] = useState(''); // State to track user input

  const user = useSelector((store) => store.user);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const inputRef = useRef();

  const handelSignOut = () => {
       signOut(auth).then(() => {
        //...
       }).catch((error) => {
         // An error happened.
    });
  }

  useEffect(()=>{
    // add user to our appStore as soon as he/she signs up/signs in 
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/auth.user
        const {uid,email,displayName} = user;
        dispatch(addUser({uid:uid,email:email,displayName:displayName}));
        // navigate("/browse");
        // ...
      } else {
        // User is signed out
        dispatch(removeUser());
        navigate("/login");
      }
    });
 
    //unsubscribing when component unmounts
    return () => unsubscribe();

  },[]);

  const handelSearch = async(e) => {
    e.preventDefault();
    dispatch(openSearchTab());
    // console.log("Search Query:", inputRef.current.value); // Get input value
    const searchResults = await fetch(`https://api.themoviedb.org/3/search/movie?query=${inputRef.current.value}&include_adult=false&language=en-US&page=1`, API_OPTIONS);
    const jsonSearchResults = await searchResults.json();
    // console.log(jsonSearchResults.results);
    //add this search results to the redux store
    dispatch(addSearchResult(jsonSearchResults.results));
  }

  const handleInputChange = (event) => {
    setQuery(event.target.value); // Update state with input value
    // console.log("User typed:", event.target.value); // Log the input
    //add this to the store
    dispatch(addInputValue(event.target.value));
  };

  return(
    <div className='fixed bg-black w-screen text-white z-40'>
      <div className='pt-3 pl-7 flex  items-center'>
      <img className="w-32" src={LOGO} alt="logo"/>
      <div className='ml-10'>
        <ul className='flex space-x-5 cursor-pointer'>
          <li onClick={()=>navigate("/browse")}>Home</li>
          <li onClick={()=>navigate("/browse/tvshows")}>TV Shows</li>
          <li>Movies</li>
          <li>New & Popular</li>
          <li>My List</li>
        </ul>
      </div>
      <div className='ml-auto pr-16'>
        <ul className='flex space-x-6 items-center'>
          {isSearchOpen ? 
          <li>
            <div className='space-x-1'>
            <input ref={inputRef} value={query} onChange={handleInputChange} className='w-96 py-1 px-2 border border-white' type="text" placeholder='search'/>
            <button onClick={handelSearch} type="submit" className="bg-red-600 text-white p-1.5 rounded-md w-24">Search</button>
            </div>
          </li>
           :
           <li><i onClick={()=>setIsSearchOpen(true)} class="fas fa-search text-xl"></i></li>
          }
          <li>
            <span className='flex items-center space-x-1.5'>
            <img onClick={() => setIsOpen(!isOpen)} className='w-9' src={PROFILE_ICON} alt="error"></img>
            {isOpen ? <i class="fa-solid fa-caret-up"></i> : <i class="fa-solid fa-caret-down"></i>}
            </span>
          </li>
        </ul>
      </div>
      {/* drop down menu  */}
      {isOpen && (<div className="absolute mt-96 right-10 w-56 bg-black text-white rounded-lg shadow-lg z-50">
          <ul className="py-2">
            <li className="px-4 py-2 hover:bg-gray-700 cursor-pointer">{user.email}</li>
            <li className="px-4 py-2 hover:bg-gray-700 cursor-pointer">Kids</li>
            <li className="px-4 py-2 hover:bg-gray-700 cursor-pointer">Manage Profiles</li>
            <li className="px-4 py-2 hover:bg-gray-700 cursor-pointer">Transfer Profile</li>
            <li className="px-4 py-2 hover:bg-gray-700 cursor-pointer">Account</li>
            <li className="px-4 py-2 hover:bg-gray-700 cursor-pointer">Help Center</li>
            <li onClick={handelSignOut} className="px-4 py-2 hover:bg-red-600 cursor-pointer">Sign out of Netflix</li>
          </ul>
        </div>)}
      </div>
    </div>
  )
}

export default Header;



