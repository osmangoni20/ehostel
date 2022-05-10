import React from "react";
import useAuth from "../../../Authentication/Hooks/useAuth";
import activePerson from '../../../image/logo.jpg';
import '../Dashboard/Dashboard.css';
const DashboardHeader = () => {
  const{user}=useAuth();
  return (
    <div className="shadow-md w-full bg-white ">
      <div className="md:flex flex items-center justify-between bg-white py-2 md:px-10 px-7">
        
        <div className="font-bold text-2xl text-gray-600">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
          <path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd" />
      </svg>
        </div>
        <div
          className=" font-bold text-2xl cursor-pointer flex items-center font-[Poppins] 
      text-gray-800"
        >
          <span className="text-3xl text-indigo-600 mr-1 pt-2">
          <svg
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            stroke='currentColor'
            stroke-linecap='round'
            stroke-linejoin='round'
            stroke-width='2'
            class='w-10 h-10 text-white p-2 bg-indigo-500 rounded-full'
            viewBox='0 0 24 24'
          >
            <path d='M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5'></path>
          </svg>
          </span>
          <span className="pt-2 text-xl font-normal">eHostel</span>
        </div>
        <div className="flex items-center userName">
            <img style={{
                  height: "20px",
                  width: "20px",
                  borderRadius: "20px",
                  marginRight: "4px",
                  marginBottom: "3px"
            }} src={activePerson} alt="personLogo" />
       <h2> {user.email?user.displayName:""}</h2>
      
        </div>
      </div>
    </div>
  );
};

export default DashboardHeader;
