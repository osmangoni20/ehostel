import React from 'react';
import './DashboardCard.css';
const DashboardCard = ({card}) => {
    const{total,name,bgColor,image}=card
    console.log(image)
    
    return (
        <div style={{backgroundColor:bgColor}}  className='dashboardCard'>
            
            <div className="cardText flex justify-between">
                <div>
                    <img style={{
            
                  height: "101px",
                  width: "72px",
                  borderRadius: "20px",
                //   marginRight: "4px",
                //   marginBottom: "3px"
            }}  src={image} alt={`${name} icon`} />
                </div>
                <div>
                    <h2>{total}</h2>
                    <p>{name}</p>
                </div>
            </div>
            <div className="cardFooter flex justify-between">
                <h6 style={{color:bgColor}}>View Details</h6>
                <span className='text-2xl ' style={{color:bgColor}}>
                <ion-icon name="arrow-forward-circle-outline"></ion-icon>
                </span>
                
            </div>
        </div>
    );
};

export default DashboardCard;