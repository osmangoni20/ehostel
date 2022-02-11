import React, { useState } from "react";
import { useForm } from "react-hook-form";
import DashboardHeader from "../DashboardHeader/DashboardHeader";
import MenuOptionsHeader from "../MenuOptionsHeader/MenuOptionsHeader";
import Sidebar from "../Sidebar/Sidebar";
import SidebarMenuHeder from "../SidebarManuHeder/SidebarMenuHeder";
import "../Style/inputStyle.css";
import '../Style/tableStyle.css';
import "./DataInput.css";
const DataInputAndList = ({ AllData }) => {
  // tableHeader,tableData,inputType
  const [tableData, setTableData] = useState(AllData.TableData);
  const submitValue = AllData.inputFieldData[0].search ? "Search" : "Submit";
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (submitData) => {
    setTableData([...tableData, submitData]);
  };

  const HandleDelete = (id) => {
    const ActiveData = AllData.TableData.filter((item) => item.id !== id);

    setTableData(ActiveData);
  };
  const HandleEdit = (id) => {
    console.log(id);
  };
  return (
    <div>
      <DashboardHeader></DashboardHeader>
      <div className="flex">
        <aside className="h-screen sticky top-0 overflow-hidden">
          <Sidebar></Sidebar>
        </aside>
        <main>
          {/* Menu Header */}
          <SidebarMenuHeder
            menuHeader={AllData.sidebarMenuHeader}
          ></SidebarMenuHeder>
          {/* Sub Menu Information */}
          <div className="submenuDetails">
            <MenuOptionsHeader
              menuOptionHeader={AllData.menuOptionHeader}
            ></MenuOptionsHeader>

            {/* Input Form */}
            {AllData.inputFieldData&&<form onSubmit={handleSubmit(onSubmit)}>
              <div className="grid grid-cols-3 gap-3 my-5 px-3">
                {AllData.inputFieldData.map((inputField) => (
                  <div class="input-icons">
                    <h5>{inputField.name} </h5>
                    {inputField.icon && <i class={inputField.icon}></i>}

                    {inputField.selectOptions && (
                      <select
                        className="input-filed"
                        {...register(inputField.registerName, {
                          required: true,
                        })}
                      >
                        {inputField.selectOptions.map((option) => (
                          <option value={option.value}>{option.name}</option>
                        ))}
                      </select>
                    )}
                    {inputField.inputType && (
                      <input
                        type={inputField.inputType}
                        placeholder={inputField.placeholderName}
                        className="input-filed"
                        {...register(inputField.registerName, {
                          required: true,
                        })}
                      />
                    )}
                    {inputField.textAria && (
                      <textarea
                        type={"text"}
                        rows="4"
                        cols="50"
                        className="input-filed col-span-2"
                        {...register(inputField.registerName, {
                          required: true,
                        })}
                      />
                    )}

                    {errors[inputField.registerName] && (
                      <span style={{ color: "red" }}>
                        This field is required
                      </span>
                    )}
                  </div>
                ))}
              </div>
              <div className="flex justify-center">
                <input
                  value={submitValue}
                  className="submitBtn"
                  type="submit"
                />
              </div>
              <hr className="my-5"></hr>
            </form>}

            {/*       Display List Table */}
            {AllData?.tableHeader && (
              <div className="p-3">
                <table>
                  <thead>
                    {AllData?.tableHeader?.map((data) => (
                      <th>{data}</th>
                    ))}
                  </thead>
                  <tbody>
                    {AllData.tableData?.map((data, index) => (
                      <tr key={index}>
                        {Object.keys(data).map(
                          (options, index) =>
                            options !== "id" &&
                            (Object.keys(data).length - 2 >= index ? (
                              <td>{data[options]}</td>
                            ) : (
                              <td>
                                <span
                                  onClick={() => HandleEdit(data.id)}
                                  className="edit-icon"
                                >
                                  <ion-icon name="create-outline"></ion-icon>
                                </span>
                                <span
                                  onClick={() => HandleDelete(data.id)}
                                  className="delete-icon"
                                >
                                  <ion-icon name="trash-outline"></ion-icon>
                                </span>
                              </td>
                            ))
                        )}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </div>
        </main>
      </div>
    </div>
  );
};

export default DataInputAndList;
