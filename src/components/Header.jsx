import React from 'react';
import { useState } from 'react';
import { auth } from '../utils/firebase';
import { useNavigate } from 'react-router-dom';
import {  signOut } from "firebase/auth";
import { useSelector } from 'react-redux';

const Header = () => {

  const [isOpen, setIsOpen] = useState(false);
  const user = useSelector((store) => store.user);
  const navigate = useNavigate();

  const handelSignOut = () => {
       signOut(auth).then(() => {
         navigate("/")
       }).catch((error) => {
         // An error happened.
    });
  }

  return(
    <div>
      <div className='pt-3 pl-7 flex  items-center'>
      <img className="w-32" src="https://help.nflxext.com/helpcenter/OneTrust/oneTrust_production/consent/87b6a5c0-0104-4e96-a291-092c11350111/01938dc4-59b3-7bbc-b635-c4131030e85f/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png" alt="logo"/>
      <div className='ml-10'>
        <ul className='flex space-x-5 cursor-pointer'>
          <li>Home</li>
          <li>TV Shows</li>
          <li>Movies</li>
          <li>New & Popular</li>
          <li>My List</li>
          <li>Browse My Language</li>
        </ul>
      </div>
      <div className='ml-auto pr-16'>
        <ul className='flex space-x-6 items-center'>
          <li><i class="fas fa-search text-xl"></i></li>
          <li>Kids</li>
          <li><i class="fa-solid fa-bell text-xl"></i></li>
          <li>
            <span className='flex items-center space-x-1.5'>
            <img onClick={() => setIsOpen(!isOpen)} className='w-9' src='https://wallpapers.com/images/high/netflix-profile-pictures-1000-x-1000-88wkdmjrorckekha.webp' alt="error"></img>
            {isOpen ? <i class="fa-solid fa-caret-up"></i> : <i class="fa-solid fa-caret-down"></i>}
            </span>
          </li>
        </ul>
      </div>
      {/* drop down menu  */}
      {isOpen && (<div className="absolute mt-96 right-10 w-56 bg-black text-white rounded-lg shadow-lg">
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



