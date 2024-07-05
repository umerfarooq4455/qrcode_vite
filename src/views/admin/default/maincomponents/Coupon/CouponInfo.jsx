import React, { useState } from "react";

const CouponInfo = () => {
  const [activeIndex, setActiveIndex] = useState(1);
  const [isToggleButtonActive, setIsToggleButtonActive] = useState(false);

  const toggleAccordion = (index) => {
    setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <div className="space-y-2">
      <div className="rounded-[10px] border-[1px] border-gray-300 bg-white px-5 font-dm text-[14px] font-semibold shadow-sm shadow-[#003EFF1A] dark:border-[#191A1F] dark:bg-[#13151E] dark:text-[#fff]">
        <div
          className="flex h-[45px] cursor-pointer items-center justify-between "
          onClick={() => toggleAccordion(1)}
        >
          <span className="text-[16px] font-semibold  text-[#1B254B] dark:text-[#fff] ">
            Coupon Information
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
            <div className=" flex flex-col">
              <div>
                <label className="relative  inline-flex cursor-pointer items-center">
                  <input
                    style={{
                      backgroundColor: isToggleButtonActive
                        ? "#5D5FEF"
                        : "white",
                    }}
                    type="checkbox"
                    value=""
                    className="peer sr-only bg-red-600"
                    // checked={isToggleButtonActive}
                    // onChange={handleToggleButtonClick}
                  />
                  <div className="peer h-4 w-11 rounded-full bg-[#989898] after:absolute after:start-[-2px]   after:-mt-[3px] after:h-6 after:w-6 after:rounded-full after:border after:bg-[#F1F1F1]  after:transition-all after:content-['']  peer-checked:bg-[#BAC6F3] peer-checked:after:translate-x-full peer-checked:after:border-none peer-checked:after:bg-[#5D5FEF] dark:border-gray-600 dark:bg-gray-700 dark:peer-focus:ring-[#5D5FEF]  rtl:peer-checked:after:-translate-x-full"></div>
                  <span className="ms-3 text-sm font-medium text-[#191A1F] dark:text-[#fff]">
                    Use barcode?
                  </span>
                </label>
              </div>
              <div className="mt-5">
                <label className="text-[#1B254B mb-2 flex text-[12px] font-semibold">
                  Coupon code
                </label>
                <input
                  type="text"
                  id="title"
                  placeholder="Electrofy"
                  className="h-[45px] w-full rounded-[10px] border-[1px] border-[#73779166] bg-[#fff] px-5 text-sm text-gray-900 dark:border-[#191A1F] dark:bg-[#212430] dark:text-[#fff] dark:placeholder-[#fff]"
                />
              </div>
              <div className="mb-2 mt-2">
                <label className="text-[#1B254B mb-2 flex text-[12px] font-semibold">
                  Valid unit
                </label>
                <input
                  type="text"
                  id="description"
                  className="h-[45px] w-full rounded-[10px] border-[1px] border-[#73779166] bg-[#fff] px-5 text-sm text-gray-900 dark:border-[#191A1F] dark:bg-[#212430] dark:text-[#fff] dark:placeholder-[#fff]"
                  placeholder="25% off"
                />
              </div>
              <div className="mt-3 flex flex-col ">
                <div>
                  <label className=" text-[#1B254B mb-2 flex text-[12px] font-semibold">
                    Terns and conditions
                  </label>
                </div>
                <div className="h-[133px] rounded-[10px] bg-[#F2F3F6] px-2 py-3 text-[12px] dark:bg-[#212430] dark:text-[#FFF]">
                  Provide the terms and conditions of yoour coupom
                </div>
              </div>
              <div className="mt-5">
                <label className="text-[#1B254B mb-2 flex text-[12px] font-semibold">
                  Button
                </label>
                <input
                  type="text"
                  id="title"
                  placeholder="button name"
                  className="h-[45px] w-full rounded-[10px] border-[1px] border-[#73779166] bg-[#fff] px-5 text-sm text-gray-900 dark:border-[#191A1F] dark:bg-[#212430] dark:text-[#fff] dark:placeholder-[#fff]"
                />
              </div>
              <div className="mb-2 mt-2">
                <input
                  type="url"
                  id="description"
                  className="h-[45px] w-full rounded-[10px] border-[1px] border-[#73779166] bg-[#fff] px-5 text-sm text-gray-900 dark:border-[#191A1F] dark:bg-[#212430] dark:text-[#fff] dark:placeholder-[#fff]"
                  placeholder="https://ertt.com/"
                />
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CouponInfo;
