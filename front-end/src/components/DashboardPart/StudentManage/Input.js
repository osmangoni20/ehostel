import React from 'react';
import { useForm } from "react-hook-form";
import './Admission/Admission.css';

const Input = ({name,placeName,registerName}) => {
    console.log(name,placeName,registerName)
    const {
        register,
        formState: { errors },
      } = useForm();

    return (
<div class="input-icons">
         <h5>{name}</h5>
          <i class="fa fa-user icon"></i>
          <input placeholder={placeName}
            className="input-filed"
            {...register(`${registerName}`, { required: true })}
            // {...register({registerName}, { required: true })}
          />
          {errors.exampleRequired && (
            <span>This field is required</span>
          )} 
        </div>    
            
        
       
    );
};

export default Input;