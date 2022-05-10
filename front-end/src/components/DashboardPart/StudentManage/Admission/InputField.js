// import { faUser } from "@fortawesome/free-solid-svg-icons";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import './Admission.css';
const InputField = ({HandleFileInputValue,HandleFieldValue,fieldInfo}) => {
    const{name,inputFiledType,icon,fieldHeader}=fieldInfo;
    // const{HandleFieldValue,HandleFileInput}=HandleInputFiled;
        
    return (
    <div>
      <h5>{fieldHeader}</h5>

      <div className="input-filed">
        {/* <FontAwesomeIcon className="input-icon" icon={icon} /> */}
        <i class="fa fa-user input-icon"></i>
       {
           (inputFiledType==='text'||inputFiledType==='number'||inputFiledType==='email')&& <input
            type={inputFiledType}
            placeholder={fieldHeader}
            name={name}
            onBlur={(e)=>HandleFieldValue(e)}
          />
       }
        {
           inputFiledType==='file'&& <input
            type={inputFiledType}
            placeholder={fieldHeader}
            name={name}
            onChange={HandleFileInputValue}
          />
       }
       
        {inputFiledType==='select' && (
          <select
            name={name}
            onChange={HandleFieldValue}
          >
            {fieldInfo?.selectOption.map((option) => (
              <option value={option.value}>{option.name}</option>
            ))}
          </select>
        )}

        {inputFiledType==='date' && <input
            type={inputFiledType}
            placeholder={fieldHeader}
            name={name}
            onClick={HandleFieldValue}
          />
            }
      </div>
    </div>
  );
};

export default InputField;
