import React from 'react';
import { Link } from 'react-router-dom';
import './ManuHeder.css';
const SidebarManuHeder = () => {
    return (
       <div className='flex justify-between items-center menuHeder'>
           <h5>Dashboard Menu</h5>
           <Link to={'/'}>
           <h5>Home</h5>
           </Link>
       </div>
    );
};

export default SidebarManuHeder;