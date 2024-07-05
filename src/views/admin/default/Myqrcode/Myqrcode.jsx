import React from "react";
import { FaPlusCircle } from "react-icons/fa";
import Dropdown from "../../../../components/dropdown";
import qrcode from "./myqrcodeimges/svgviewer-output.png";
import bulk from "./myqrcodeimges/svgviewer-output (1).png";
import folder from "./myqrcodeimges/svgviewer-output (2).png";
import MyqrHeader from "./MyqrHeader";

const Myqrcode = () => {
  return (
    <>
    <div className="flex flex-col">
      <div className="flex items-center font-dm text-[20px] font-semibold ">
        My QR Codes{" "}
        <Dropdown
          button={
            <div className="ml-2 ">
              <FaPlusCircle className="text-[#5D5FEF] hover:text-[#3f58b5]" />
            </div>
          }
          animation="origin-[65%_0%] origin-top-left md:origin-top-left transition-all duration-300 ease-in-out"
          children={
            <div className="flex flex-col gap-3 rounded-[7px] bg-white p-4 shadow-xl shadow-shadow-500 dark:!bg-navy-700 dark:text-white dark:shadow-none ">
              <button className="flex w-full items-center ">
                <img src={qrcode} className="text-[#5D5FEF]" alt="" />
                <p className="ml-2 text-left text-base font-bold text-gray-900 dark:text-white">
                  Create QR code
                </p>
              </button>

              <button className="flex w-full items-center">
                <img src={bulk} alt="" />
                <p className="ml-2 text-left text-base font-bold text-gray-900 dark:text-white">
                  Bulk create
                </p>
              </button>

              <button className="flex w-full items-center">
                <img src={folder} alt="" />
                <p className="ml-2 text-left text-base font-bold text-gray-900 dark:text-white">
                  Create folder
                </p>
              </button>
            </div>
          }
          classNames={"py-2 top-4  w-max"}
        />
      </div>

       <div>
        <MyqrHeader/>
       </div>
      </div>
    </>
  );
};

export default Myqrcode;
