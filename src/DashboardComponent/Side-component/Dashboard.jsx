import React from "react";
import { HiOutlineUserGroup } from "react-icons/hi";
const Dashboard = () => {
  return (
    <>
      <div className=" w-full grid-cols-[1fr] gap-4 grid sm:grid-cols-[1fr_1fr_1fr_1fr] grid-rows-[150px_150px_150px_150px] sm:grid-rows-[200px]">
        <div className=" bg-teal-500 rounded-lg ">
          <div className="flex flex-col justify-center items-center h-full gap-4 ">
            <div className="font-bold text-white text-4xl">Total Alumni</div>
            <div className="text-3xl font-bold text-white">8</div>
          </div>
        </div>
        <div className="bg-red-400 rounded-lg">
          {" "}
          <div className="flex flex-col justify-center items-center h-full gap-4 ">
            <div className="font-bold text-white text-4xl">Total Student</div>
            <div className="text-3xl font-bold text-white">8</div>
          </div>
        </div>
        <div className="bg-blue-500 rounded-lg">
          {" "}
          <div className="flex flex-col justify-center items-center h-full gap-4 ">
            <div className="font-bold text-white text-4xl">Total Event</div>
            <div className="text-3xl font-bold text-white">8</div>
          </div>
        </div>
        <div className="bg-orange-500 rounded-lg">
          {" "}
          <div className="flex flex-col justify-center items-center h-full gap-4 ">
            <div className="font-bold text-white text-4xl">Total Job Post</div>
            <div className="text-3xl font-bold text-white">8</div>
          </div>
        </div>
      </div>
      {/* <div class="container mx-auto p-4">
        <div class="flex flex-col gap-4 sm:flex-row md:space-x-4">
          <div class="flex-1 bg-blue-500 p-6 rounded-lg text-white text-center">
            <div className="flex flex-col gap-4">
              <h1 className="font-bold textg-gray-700 text-lg">Total Alumni</h1>
              <div className="text-2xl font-bold">8</div>
            </div>
          </div>
          <div class="flex-1 bg-teal-500 p-6 rounded-lg text-white text-center">
            <div className="flex flex-col gap-4">
              <h1 className="font-bold textg-gray-700 text-lg">
                Total Student
              </h1>
              <div className="text-2xl font-bold">5</div>
            </div>
          </div>
          <div class="flex-1 bg-orange-500 p-6 rounded-lg text-white text-center">
            <div className="flex flex-col gap-4">
              <h1 className="font-bold textg-gray-700 text-lg">Total Event</h1>
              <div className="text-2xl font-bold">7</div>
            </div>
          </div>
        </div>
      </div> */}
    </>

    // <div>
    //   <p className="font-bold textg-gray-700 text-2xl">Dashboard</p>
    //   <div className="">
    //     <div className=" flex-col flex-1  p-2 bg-teal-200 rounded-lg">
    //       <h3>Total Alumni</h3>
    //       <div className="flex justify-between text-lg ">
    //         <p>8</p>
    //         <HiOutlineUserGroup />
    //       </div>
    //     </div>

    //     <div className=" flex-col flex-1  p-2 bg-teal-200 rounded-lg">
    //       <h3>Total Alumni</h3>
    //       <div className="flex justify-between text-lg ">
    //         <p>8</p>
    //         <HiOutlineUserGroup />
    //       </div>
    //     </div>
    //   </div>
    // </div>
  );
};

export default Dashboard;
