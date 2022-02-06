import React from 'react';
import { useForm } from "react-hook-form";
import DashboardHeader from '../../DashboardHeader/DashboardHeader';
import MenuOptionsHeader from '../../MenuOptionsHeader/MenuOptionsHeader';
import Sidebar from '../../Sidebar/Sidebar';
import SidebarManuHeder from '../../SidebarManuHeder/SidebarManuHeder';
import '../../Style/inputStyle.css';
import './SeatAlocation.css';
const SeatAllocation = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm();
      const onSubmit = (data) => console.log(data);
    const tableHeader=[
        "Name","Block No","Room No","Bed No", "Action"

    ]
    const StudentData=[
        {
            name:"Mohammad Osman Goni",
            block:"B",
            room:"202",
            bed:"B200-1",
        },
        {
            name:"Mohammad Khan",
            block:"A",
            room:"102",
            bed:"A102-3",
        },
        {
            name:"Taskin Ahamed",
            block:"C",
            room:"305",
            bed:"C305-2",
        },
    ]
    return (
        <div>
      <DashboardHeader></DashboardHeader>
      <div className="flex">
        <aside className="h-screen sticky top-0 overflow-hidden">
          <Sidebar></Sidebar>
        </aside>
        <main>
          <SidebarManuHeder></SidebarManuHeder>
          {/* Get Information */}
          <div className="seatAllocation">
            <MenuOptionsHeader header={"Student Seat Allocation"}></MenuOptionsHeader>

            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="grid grid-cols-3 gap-3">
                <div class="input-icons">
                  <h5>Student Name </h5>
                  <i class="fa fa-user icon"></i>
                  <input
                    placeholder="Student Name"
                    className="input-filed"
                    {...register("student_name", { required: true })}
                  />
                  {errors.student_name && (
                    <span style={{ color: "red" }}>This field is required</span>
                  )}
                </div>

                <div class="input-icons">
                  <h5>Block No</h5>
                  <i class="fa fa-user icon"></i>
                  <input
                    placeholder="Block No"
                    className="input-filed"
                    {...register("block_no", { required: true })}
                  />
                  {errors.block_no && (
                    <span style={{ color: "red" }}>This field is required</span>
                  )}
                </div>

                <div class="input-icons">
                  <h5>Room No</h5>
                  <i class="fa fa-user icon"></i>
                  <input
                    placeholder="Room No"
                    className="input-filed"
                    {...register("room_no", { required: true })}
                  />
                  {errors.room_no && (
                    <span style={{ color: "red" }}>This field is required</span>
                  )}
                </div>
                
                <div class="input-icons">
                  <h5>Bed No</h5>
                  <i class="fa fa-user icon"></i>
                  <input
                    placeholder="Bed No"
                    className="input-filed"
                    {...register("bed_no", { required: true })}
                  />
                  {errors.bed_no && (
                    <span style={{ color: "red" }}>This field is required</span>
                  )}
                </div>
                </div>
            <div className='flex justify-center'>
            <input  className="submitBtn" type="submit" />
            </div>
            <hr className='my-5'></hr>
                </form>

{/* Display List Seat Alocation */}
                    <div className='p-3'>

                   
                <table >
                    <thead>
                        {
                            tableHeader.map(data=><th>{data}</th>)
                        }
                    </thead>
                    <tbody>
                        {
                            StudentData.map(student=>(
                                <tr>
                                    <td>{student.name}</td>
                                    <td>{student.block}</td>
                                    <td>{student.room}</td>
                                    <td>{student.bed}</td>
                                    <td>
                                        <span className="edit-icon">
                                        <ion-icon  name="create-outline"></ion-icon>
                                        </span>
                                        <span className="delete-icon">
                                        <ion-icon  name="trash-outline"></ion-icon>                                            
                                        </span>
                                    
                                    </td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
                </div>
            </div>
          </main>
        </div>
        </div>
    );
};

export default SeatAllocation;