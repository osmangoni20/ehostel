import React from "react";
import activePerson from '../../../image/logo.jpg';
const DashboardHeader = () => {
  return (
    <div className="shadow-md w-full d-block">
      <div className="md:flex items-center justify-between bg-white py-2 md:px-10 px-7">
        <div
          className="font-bold text-2xl cursor-pointer flex items-center font-[Poppins] 
      text-gray-800"
        >
          <span className="text-3xl text-indigo-600 mr-1 pt-2">
            <ion-icon name="home"></ion-icon>
          </span>
          eHostel
        </div>
        <div className="flex items-center">
            <img style={{
                  height: "20px",
                  width: "20px",
                  borderRadius: "20px",
                  marginRight: "4px",
                  marginBottom: "3px"
            }} src={activePerson} alt="personLogo" />
        <h2> Admin</h2>
        </div>
      </div>
    </div>
  );
};

export default DashboardHeader;
