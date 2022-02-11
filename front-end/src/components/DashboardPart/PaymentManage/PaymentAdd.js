import React from 'react';
import DataInputAndList from '../DataInputAndList/DataInputAndList';

const PaymentAdd = () => {
    const header={};
    const AllData={};
    AllData.inputFieldData=[
        {
            name:"Student Name",
            registerName:"studentName",
            placeholderName:"Student Name",
            icon:"fa fa-user icon",
            inputType:"text",
            icon:""
        },
        {
            name:"Amount",
            registerName:"amount",
            placeholderName:"Amount",
            icon:"fa fa-user icon",
            inputType:"number"
            ,
            icon:""
        },
        {
            name:"Paid By",
            registerName:"paidBy",
            placeholderName:"Paid By",
            icon:"fa fa-user icon",
            selectOptions:[
                {name:"BKash",value:"bkash"},
                {name:"Rocket",value:"rocket"},
                {name:"Bank",value:"bank"},
            ],
           
        },
        
        {
            name:"Mobile No/Transaction Id",
            registerName:"paymentUniqNumber",
            placeholderName:"Mobile No/Transaction Id",
            inputType:"text",
            icon:"fa fa-user icon",
        },
        {
            name:"Payment Date",
            registerName:"paymentdate",
            placeholderName:"Payment Date",
            inputType:"date",
            icon:null
        }
    ]
    header.menuOptionHeader=
    {name:"Payment",
        icon:"people-outline"};
    header.sidebarMenuHeader="Payment Add";
    return (
        <div>
            <DataInputAndList header={header} AllData={AllData}></DataInputAndList>
        </div>
    );
};

export default PaymentAdd;