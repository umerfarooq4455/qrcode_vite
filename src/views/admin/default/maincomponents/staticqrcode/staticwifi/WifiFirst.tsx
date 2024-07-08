import React, { useState } from "react";

const WifiFirst: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(1);

  const toggleAccordion = (index: number) => {
    setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <div className="space-y-2">
      <div className="rounded-[10px] border-[1px] border-gray-300 bg-white px-5 font-dm text-[16px] font-semibold shadow-sm shadow-[#003EFF1A] dark:border-[#191A1F] dark:bg-[#13151E] dark:text-[#fff]">
        <div
          className="flex h-[45px] cursor-pointer items-center justify-between"
          onClick={() => toggleAccordion(1)}
        >
          <span className="text-[16px] font-semibold text-[#1B254B] dark:text-[#fff]">
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
          <div className="">
            <div className="py-3 text-[14px] font-bold">Wi-fi information</div>
            <div className="mb-3 flex flex-col space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0">
              <div className="w-full sm:w-1/2">
                <label className="mb-2 block text-[12px] font-semibold text-gray-900 dark:text-white">
                  Network name (SSID)
                </label>
                <input
                  type="text"
                  id="title"
                  placeholder="E,g HomeWifi"
                  className="h-[45px] w-full rounded-[10px] border-[1px] border-[#73779166] bg-[#fff] px-5 text-sm text-gray-900 dark:border-[#191A1F] dark:bg-[#212430] dark:text-[#fff] dark:placeholder-[#fff]"
                />
              </div>
              <div className="w-full sm:w-1/2">
                <label className="mb-2 block text-[12px] font-semibold text-gray-900 dark:text-white">
                  Network password
                </label>
                <input
                  type="text"
                  id="description"
                  className="h-[45px] w-full rounded-[10px] border-[1px] border-[#73779166] bg-[#fff] px-5 text-sm text-gray-900 dark:border-[#191A1F] dark:bg-[#212430] dark:text-[#fff] dark:placeholder-[#fff]"
                  placeholder="E,g Mypassword"
                />
              </div>
            </div>
            <div className="mb-3 flex flex-col">
              <div className="flex">
                <label className="mb-2 block text-[12px] font-semibold text-gray-900 dark:text-white">
                  Type of encryption
                </label>
              </div>
              <div className="flex w-full flex-col sm:flex-row">
                <div className="mb-2 w-[342px] sm:w-1/2 md:mr-2 md:pr-2">
                  <input
                    type="text"
                    id="title"
                    placeholder="WEP"
                    className="h-[45px] w-full rounded-[10px] border-[1px] border-[#73779166] bg-[#fff] px-5 text-sm text-gray-900 dark:border-[#191A1F] dark:bg-[#212430] dark:text-[#fff] dark:placeholder-[#fff]"
                  />
                </div>

                <div className="flex h-[45px] w-full items-center justify-center rounded-[10px] bg-[#E8E9F0] sm:w-1/2 md:w-[155px]">
                  <input
                    type="checkbox"
                    id="description"
                    className="mr-2 h-[22px] w-[22px] accent-[#5D5FEF]"
                    placeholder="Description"
                  />
                  <span className="text-[12px]">Hidden network</span>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default WifiFirst;
