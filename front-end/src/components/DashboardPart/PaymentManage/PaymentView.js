import React from 'react';
import DataInputAndList from '../DataInputAndList/DataInputAndList';
import '../Style/tableStyle.css';

const PaymentView = () => {
    const header={};
    const AllData={};

    AllData.inputFieldData=[
        {
            name:"Student Name",
            registerName:"studentName",
            placeholderName:"Student Name",
            inputType:"text",
            icon:"fa fa-user icon",
            search:true
        },
    ]
        header.tableHeader=[
        "Name","Amount","Paid By","Transaction/Mobile No","Date","Action"
    ]
    AllData.TableData=[
        {
            name:"Mohammad Osman Goni",
            amount:3000,
            paidBy:" Bank",
            paymentUniqId:"20412536",
            date:"20-2-2022",
        },
        {
            name:"Mohammad Salah",
            amount:2500,
            paidBy:" Bkash",
            paymentUniqId:"30412536",
            date:"22-2-2022",
        },
        {
            name:"Mohammad Tahmid Goni",
            amount:5000,
            paidBy:" Rocket",
            paymentUniqId:"def5dwe5225de36",
            date:"20-3-2022",
        }
    ]
    
    header.sidebarMenuHeader="Payment View";
    header.menuOptionHeader={
        name:"Student Payment List",
        icon:"people-outline"}
    
    
   
    return (
        <div>

<DataInputAndList header={header} AllData={AllData}></DataInputAndList>

        </div>
    );
};

export default PaymentView;