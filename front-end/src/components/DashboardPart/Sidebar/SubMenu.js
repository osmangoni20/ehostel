import React, { useState } from 'react';

const SubMenu = ({item}) => {
    const [showOptions, setShowOptions] = useState(false);
  const ShowSubNav = () => {
    console.log(showOptions);
    setShowOptions(!showOptions);
  };
    return (
        <div>
           
          <button
            id="dropdownSmallButton"
            data-dropdown-toggle="dropdownSmall"
            class="inline-flex justify-between items-center py-2 my-3 px-3 mr-3 mb-3 text-xl font-medium text-center text-white bg-blue-700 rounded md:mb-0 hover:bg-blue-800 "
            type="button"
            style={{
              width: "100%",
            }}
            onClick={item.subOptions && ShowSubNav}
          >
            <div className=" text-xl items-center flex">
              <ion-icon name={item.icon}></ion-icon>
              
              {
                item.subOptions?<span className="pl-1">{item.name}</span>:<a href={item.link} className="pl-1">
                {item.name}
              </a>
              }
            </div>
            { 
            item.subOptions&&(
              showOptions?<svg
              class="ml-2 w-3 h-3"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M19 9l-7 7-7-7"
              ></path>
            </svg>:
            <svg xmlns="http://www.w3.org/2000/svg"  class="ml-2 w-3 h-3"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
          </svg>
            )
            }
          </button>
          {showOptions &&
        item.subOptions.map((item, index) => {
          return (
            <li className="block hover:bg-gray-200 hover:text-black p-0 text-lg text-gray hover:#261e1e dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">
            <a href={item.link} className="block px-10  text-xl ">
              {item.name}
            </a>
          </li>
          );
        })}
        </div>
    );
};

export default SubMenu;