import React, { useState } from "react";
import { useApiContext } from "../../../../contextapi/contextApi";
import { MdOutlineModeEditOutline } from "react-icons/md";
import { GoDuplicate } from "react-icons/go";
import { RiPrinterLine } from "react-icons/ri";
import { FaRegStar } from "react-icons/fa6";
const Menuedit = ({ menuid }) => {
  const { isPopoverOpenmenu, togglePopovermenu } = useApiContext();
  return (
    <div className="relative">
      {isPopoverOpenmenu === menuid && (
        <div
          role="tooltip"
          className="visible absolute left-[-200px]  top-[-2px] z-10 inline-block w-fit cursor-pointer rounded-lg border border-gray-200 bg-white text-sm text-gray-800  shadow-sm transition-opacity duration-300 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-400"
        >
          <div className="mx-2 my-2 flex items-center rounded-sm p-1 hover:bg-gray-300">
            <MdOutlineModeEditOutline className="text-[24px]" />{" "}
            <p className="px-2 font-medium">Edit</p>
          </div>
          <div className="mx-2 my-2 flex items-center rounded-sm p-1 hover:bg-gray-300">
            <GoDuplicate className="text-[24px]" />{" "}
            <p className="px-2 font-medium">Duplicate</p>
          </div>
          <div className="mx-2 my-2 flex items-center rounded-sm p-1 hover:bg-gray-300">
            <RiPrinterLine className="text-[24px]" />{" "}
            <p className="px-2 font-medium">To print</p>
          </div>
          <div className="mx-2 my-2 flex items-center rounded-sm p-1 hover:bg-gray-300">
            <FaRegStar className="text-[24px]" />{" "}
            <p className="px-2 font-medium">Add to favorites</p>
          </div>
          <div data-popper-arrow></div>
        </div>
      )}
    </div>
  );
};

export default Menuedit;
