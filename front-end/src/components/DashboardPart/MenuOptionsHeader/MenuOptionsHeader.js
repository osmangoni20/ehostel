import React from 'react';
import './MenuOptionheader.css';
const MenuOptionsHeader = ({header}) => {
    return (
        <div className="optionsHeader flex items-center">
              <ion-icon name="people-outline"></ion-icon>
              <h6 className="text-xl px-2">{header}</h6>
        </div>
    );
};

export default MenuOptionsHeader;