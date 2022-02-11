import React from 'react';
import DataInputList from '../../DataInputAndList/DataInputAndList';
import './Deposit.css';

const Deposit = () => {
    const tableHeader=[
        "Name","Amount","Deposit Date","Action"
    ]
    const DepositData=[
        {
            name:"Mohammad Osman Goni",
            amount:2000,
            date:"5-2-2022"
        },
        {
            name:"kamal Khan",
            amount:3000,
            date:"9-2-2022"
        },
        {
            name:"Saleh Sadi",
            amount:5000,
            date:"4-2-2022"
        },
    ]
    return (
        <div>
    <DataInputList inputType="deposit" tableHeader={tableHeader} tableData={DepositData}></DataInputList>

        </div>
    );
};

export default Deposit;