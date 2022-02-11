import React from 'react';
import './MenuOptionheader.css';
const MenuOptionsHeader = ({menuOptionHeader}) => {
    console.log(menuOptionHeader)
    return (
        <div className="optionsHeader flex items-center">
              <ion-icon name={menuOptionHeader.icon}></ion-icon>
              <h6 className="text-base px-2">{menuOptionHeader.name}</h6>
        </div>
    );
};

export default MenuOptionsHeader;