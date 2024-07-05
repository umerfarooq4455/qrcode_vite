import React, { useState } from "react";
import { usePdfMode } from "../../../../../contextapi/PdfDynamicProvider";

const Basicinfo = () => {
  const [activeIndex, setActiveIndex] = useState(1);
  const [isOpen, setIsOpen] = useState(false);

  const toggleHandler = () => {
    setIsOpen(!isOpen);
  };

  const toggleAccordion = (index) => {
    setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <div className="space-y-2">
      <div className="rounded-[10px] border-[1px] border-gray-300 bg-white px-5 font-dm text-[16px] font-semibold shadow-sm shadow-[#003EFF1A] dark:border-[#191A1F] dark:bg-[#13151E] dark:text-[#fff]">
        <div
          className="flex h-[45px] cursor-pointer items-center justify-between "
          onClick={() => toggleAccordion(1)}
        >
          <span className="text-[16px] font-semibold  text-[#1B254B] dark:text-[#fff] ">
            Basic Information
          </span>
          <svg
            className={`h-3 w-3 transform ${
              activeIndex === 1 ? "rotate-180" : "rotate-90"
            }`}
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 10 6"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M9 5 5 1 1 5"
            />
          </svg>
        </div>

        {activeIndex === 1 && (
          <div className="mb-1">
            <div>
              <span className="text-[14px] font-semibold text-[#1B254B] dark:text-[#fff]">
                2D Barcode information
              </span>
            </div>
            <div className="mb-3 mt-3">
              <label className="text-[12px] font-semibold text-[#1B254B] dark:text-[#fff]">
                Global Trade Item Number (GTIN)
              </label>
              <input
                maxLength={50}
                type="number"
                id="company"
                className="mt-1 block w-full rounded-[10px] border border-gray-300 bg-white p-2.5 text-[14px] font-normal text-[#1B254B]  dark:border-[#191A1F] dark:bg-[#212430] dark:text-white dark:placeholder-[#fff]"
                placeholder="E.g 2345678900"
              />
            </div>
            <div className="mb-6 ">
              <label className="text-[12px] font-semibold text-[#1B254B] dark:text-[#fff]">
                Website URL
              </label>
              <input
                maxLength={80}
                type="url"
                id="pdfTitle"
                className="mt-1 block w-full rounded-[10px] border border-gray-300 bg-white p-2.5 text-[14px] font-normal text-[#1B254B]  dark:border-[#191A1F] dark:bg-[#212430] dark:text-white dark:placeholder-[#fff]"
                placeholder="E.g . https://www.myweb.com/"
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Basicinfo;
