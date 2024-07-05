import React, { useState } from "react";
import "tailwindcss/tailwind.css";
import MyChartComponent from "./MyChartComponent";

const Staticsmain: React.FC = () => {
  // State variables
  const [activeIndex, setActiveIndex] = useState<number | null>(1);
  const [startDate, setStartDate] = useState<Date | null>(null);
  const [endDate, setEndDate] = useState<Date | null>(null);
  const [focusedInput, setFocusedInput] = useState<string | null>(null);

  // Function to toggle accordion
  const toggleAccordion = (index: number) => {
    setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <div className="space-y-2">
      <div className="rounded-[10px] bg-white px-5 font-dm text-[16px] font-semibold shadow-sm shadow-[#003EFF1A] dark:border-[#191A1F] dark:bg-[#13151E] dark:text-[#fff]">
        {/* Accordion header */}
        <div
          className="flex h-[45px] cursor-pointer items-center justify-between"
          onClick={() => toggleAccordion(1)}
        >
          <span className="text-[16px] font-semibold text-[#1B254B] dark:text-[#fff]">
            Basic Information
          </span>
          {/* Arrow icon */}
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

        {/* Accordion content */}
        {activeIndex === 1 && (
          <>
            <div className="mb-2 text-[12px] font-semibold text-[#1B254B] dark:text-[#FFFFFF]">
              {/* Form elements */}
              <div className="flex flex-wrap items-center">
                {/* Period select */}
                <div className="w-full py-2 pr-2 lg:w-1/6">
                  <span className="rounded-md shadow-sm">
                    <label
                      htmlFor="Period"
                      className="mb-1 block text-sm font-semibold text-[#1B254B] dark:text-white"
                    >
                      Period
                    </label>
                    <select
                      id="Period"
                      className="w-full rounded-[10px] border-[1px] p-2 text-sm focus:outline-none dark:border-[#191A1F]"
                    >
                      <option defaultValue="Last 7 days">Last 7 days</option>
                      <option value="US">United States</option>
                      <option value="CA">Canada</option>
                      <option value="FR">France</option>
                      <option value="DE">Germany</option>
                    </select>
                  </span>
                </div>
                {/* Pick a range label */}
                <div className="w-full py-2 pr-2 lg:w-1/6">
                  <label
                    htmlFor="PickRange"
                    className="mb-1 block text-sm font-semibold text-[#1B254B] dark:text-white"
                  >
                    Pick a range
                  </label>
                </div>
                {/* Export button */}
                <div className="flex w-full justify-center py-2 md:justify-start lg:w-1/6">
                  <button className="mt-4 w-[179px] cursor-pointer rounded-full bg-[#5D5FEF] py-2 text-sm text-white">
                    Export Information
                  </button>
                </div>
              </div>

              {/* More form elements */}
              <div className="flex flex-wrap">
                {/* QR code select */}
                <div className="w-full py-2 pr-2 md:w-1/2 lg:w-1/4">
                  <span className="rounded-md shadow-sm">
                    <label
                      htmlFor="QRCode"
                      className="mb-1 block text-sm font-semibold text-[#1B254B] dark:text-white"
                    >
                      QR code
                    </label>
                    <select
                      id="QRCode"
                      className="w-full rounded-[10px] border-[1px] p-2 text-sm focus:outline-none dark:border-[#191A1F]"
                    >
                      <option defaultValue="All the QR codes">All the QR codes</option>
                      <option value="US">United States</option>
                      <option value="CA">Canada</option>
                      <option value="FR">France</option>
                      <option value="DE">Germany</option>
                    </select>
                  </span>
                </div>
                {/* Folders select */}
                <div className="w-full py-2 pr-2 md:w-1/2 lg:w-1/4">
                  <span className="rounded-md shadow-sm">
                    <label
                      htmlFor="Folders"
                      className="mb-1 block text-sm font-semibold text-[#1B254B] dark:text-white"
                    >
                      Folders
                    </label>
                    <select
                      id="Folders"
                      className="w-full rounded-[10px] border-[1px] p-2 text-sm focus:outline-none dark:border-[#191A1F]"
                    >
                      <option defaultValue="All folders">All folders</option>
                      <option value="US">United States</option>
                      <option value="CA">Canada</option>
                      <option value="FR">France</option>
                      <option value="DE">Germany</option>
                    </select>
                  </span>
                </div>
                {/* Operating system select */}
                <div className="w-full py-2 pr-2 md:w-1/2 lg:w-1/4">
                  <span className="rounded-md shadow-sm">
                    <label
                      htmlFor="OS"
                      className="mb-1 block text-sm font-semibold text-[#1B254B] dark:text-white"
                    >
                      Operating system
                    </label>
                    <select
                      id="OS"
                      className="w-full rounded-[10px] border-[1px] p-2 text-sm focus:outline-none dark:border-[#191A1F]"
                    >
                      <option defaultValue="All">All</option>
                      <option value="US">United States</option>
                      <option value="CA">Canada</option>
                      <option value="FR">France</option>
                      <option value="DE">Germany</option>
                    </select>
                  </span>
                </div>
                {/* Countries select */}
                <div className="w-full py-2 md:w-1/2 lg:w-1/4">
                  <span className="rounded-md shadow-sm">
                    <label
                      htmlFor="Countries"
                      className="mb-1 block text-sm font-semibold text-[#1B254B] dark:text-white"
                    >
                      Countries
                    </label>
                    <select
                      id="Countries"
                      className="w-full rounded-[10px] border-[1px] p-2 text-sm focus:outline-none dark:border-[#191A1F]"
                    >
                      <option defaultValue="All">All</option>
                      <option value="US">United States</option>
                      <option value="CA">Canada</option>
                      <option value="FR">France</option>
                      <option value="DE">Germany</option>
                    </select>
                  </span>
                </div>
              </div>

              {/* Cities select */}
              <div>
                <div className="w-full py-2">
                  <span className="rounded-md shadow-sm">
                    <label
                      htmlFor="Cities"
                      className="mb-1 block text-sm font-semibold text-[#1B254B] dark:text-white"
                    >
                      Cities
                    </label>
                    <select
                      id="Cities"
                      className="w-full rounded-[10px] border-[1px] p-2 text-sm focus:outline-none dark:border-[#191A1F]"
                    >
                      <option defaultValue="All">All</option>
                      <option value="US">United States</option>
                      <option value="CA">Canada</option>
                      <option value="FR">France</option>
                      <option value="DE">Germany</option>
                    </select>
                  </span>
                </div>
              </div>

              {/* Analyzed period */}
              <div className="mt-5 rounded-[10px] bg-[#F2F3F6]">
                <div className="w-full py-2">
                  <span className="flex px-3 text-[12px] font-semibold text-[#000000] dark:text-[#fff]">
                    Analyzed period :
                    <p className="px-2 font-medium text-gray-500">
                      May 14, 2024 - May 21, 2024
                    </p>
                  </span>
                </div>

                {/* Data summary */}
                <div className="flex flex-wrap items-center justify-center md:h-[124px]">
                  <div className="sm:w-1/1 flex w-full flex-col items-center justify-center p-2 md:w-1/5">
                    <span className="text-[30px] font-semibold text-[#000]">
                      20
                    </span>
                    <span className="text-[12px] font-semibold text-[#1B254B]">
                      Total QR Codes
                    </span>
                  </div>
                  <div className="sm:w-1/1 flex w-full flex-col items-center justify-center p-2 md:w-1/5">
                    <span className="text-[30px] font-semibold text-[#000]">
                      10
                    </span>
                    <span className="text-[12px] font-semibold text-[#1B254B]">
                      Total Scans
                    </span>
                  </div>
                  <div className="sm:w-1/1 flex w-full flex-col items-center justify-center p-2 md:w-1/5">
                    <span className="text-[30px] font-semibold text-[#000]">
                      06
                    </span>
                    <span className="text-[12px] font-semibold text-[#1B254B]">
                      Total Unique Scans
                    </span>
                  </div>
                  <div className="sm:w-1/1 flex w-full flex-col items-center justify-center p-2 md:w-1/5">
                    <span className="text-[30px] font-semibold text-[#000]">
                      23
                    </span>
                    <span className="text-[12px] font-semibold text-[#1B254B]">
                      Total Visits
                    </span>
                  </div>
                </div>
              </div>

              {/* Scan activities section */}
              <div className="mt-6 flex flex-col">
                <span className="text-[16px] text-[#1B254B]">
                  Scan activities
                </span>

                <div className="flex justify-between">
                  {/* Checkboxes */}
                  <div className="flex">
                    <div className="flex items-center">
                      <input
                        id="link-checkbox1"
                        type="checkbox"
                        value=""
                        className="size-5 h-[22px] w-[19px] rounded-lg border-[1px] border-[#8B8B9C] accent-[#5D5FEF]"
                      />
                      <label
                        htmlFor="link-checkbox1"
                        className="mx-3 text-[14px] font-semibold text-[#1B254B] dark:text-[#fff]"
                      >
                        All Day
                      </label>
                    </div>
                    <div className="flex items-center">
                      <input
                        id="link-checkbox2"
                        type="checkbox"
                        value=""
                        className="size-5 h-[22px] w-[19px] rounded-md border-[1px] border-[#8B8B9C] accent-[#5D5FEF]"
                      />
                      <label
                        htmlFor="link-checkbox2"
                        className="mx-3 text-[14px] font-semibold text-[#1B254B] dark:text-[#fff]"
                      >
                        Unique
                      </label>
                    </div>
                    <div className="flex items-center py-2">
                      <input
                        id="link-checkbox3"
                        type="checkbox"
                        value=""
                        className="size-5 h-[22px] w-[19px] rounded-md border-[1px] border-[#8B8B9C] accent-[#5D5FEF]"
                      />
                      <label
                        htmlFor="link-checkbox3"
                        className="mx-3 text-[14px] font-semibold text-[#1B254B] dark:text-[#fff]"
                      >
                        Visits to the preview
                      </label>
                    </div>
                  </div>

                  {/* Day/Month/Year buttons */}
                  <div className="flex items-center justify-center rounded-[10px] border-[1px] border-[#B8BAC7] p-1 font-medium ">
                    <div className="flex h-[33px] w-[48px] items-center justify-center rounded-[6px] bg-[#5D5FEF] text-[#fff]">
                      <span>Day</span>
                    </div>
                    <div className="ml-1 flex h-[33px] w-[48px] items-center justify-center rounded-[6px]">
                      <span>Month</span>
                    </div>
                    <div className="ml-1 flex h-[33px] w-[48px] items-center justify-center rounded-[6px]">
                      <span>Year</span>
                    </div>
                  </div>
                </div>

                {/* Chart component */}
                <div className="flex h-[300px] items-center text-[12px] text-[#000000] opacity-50">
                  <MyChartComponent />
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Staticsmain;
