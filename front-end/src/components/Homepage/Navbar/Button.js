import React from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../../Authentication/Hooks/useAuth';

const Button = () => {
  const{user,Logout}=useAuth();
  const HandleLogout=()=>{
    Logout();
  }
  return (
    <button className='inline-flex items-center bg-gray-200 border-0 py-1 px-3 focus:outline-none hover:bg-gray-300 rounded text-base mt-4 md:mt-0'>
      {user.email?<span onClick={HandleLogout}>Logout</span>:<Link to={'/login'}><span>Log In</span></Link>}
    </button>
  )
}

export default Button
