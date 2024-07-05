import React, { useState, useEffect } from "react";
import Dateinput from "./Dateinput";
import { useApiContext } from "../../../contextapi/contextApi";

const Schedule: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [schedule, setSchedule] = useState<string>("");
  const [isInputValid, setIsInputValid] = useState<boolean>(false);
  const [urlError, setUrlError] = useState<string>("");
  const [isToggleButtonActive, setIsToggleButtonActive] = useState<boolean>(false);
  const [isDateInputEnabled, setIsDateInputEnabled] = useState<boolean>(false);
  const { handleFromDateChange, handleToDateChange } = useApiContext();

  const toggleAccordion = (index: number) => {
    setActiveIndex(prevIndex => prevIndex === index ? null : index);
  };

  const handleToggleButtonClick = () => {
    setIsToggleButtonActive(!isToggleButtonActive);
    setIsInputValid(true);
    setUrlError("");
    setIsDateInputEnabled(!isToggleButtonActive);
  };

  useEffect(() => {
    if (isToggleButtonActive) {
      validateInput();
    }
  }, [schedule, isToggleButtonActive]);

  const validateInput = () => {
    if (isToggleButtonActive) {
      if (!schedule.trim()) {
        setIsInputValid(false);
        setUrlError("Please select at least one date");
      } else {
        setIsInputValid(true);
        setUrlError("");
      }
    }
  };

  const Sincedate = "Since";
  const Untildate = "Until";

  return (
    <div className="space-y-2">
      <div className="rounded-[10px] border-[1px] border-gray-300 bg-white px-5 font-dm text-[16px] font-semibold shadow-sm shadow-[#003EFF1A] dark:border-[#191A1F] dark:bg-[#13151E] dark:text-[#fff]">
        <div
          className="flex h-[45px] cursor-pointer items-center justify-between "
          onClick={() => toggleAccordion(1)}
        >
          <span className="text-[16px] font-semibold  text-[#1B254B] dark:text-[#fff] ">
            Schedule
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
          <>
            <div className="mb-2 text-[12px] font-medium text-[#A5A5A5] dark:text-[#FFFFFF]">
              <p>
                Decide which days your content will appear via the QR code.
                After that time, it will be turned off.
              </p>
            </div>
            <div className="mb-5">
              <label className="relative mb-4 inline-flex cursor-pointer items-center">
                <input
                  style={{
                    backgroundColor: !isToggleButtonActive ? "#5D5FEF" : "white",
                  }}
                  type="checkbox"
                  value=""
                  className="peer sr-only bg-red-600"
                  checked={isToggleButtonActive}
                  onChange={handleToggleButtonClick}
                />
                <div
                  className="peer h-4 w-11 rounded-full bg-[#989898]  after:absolute after:-top-0.5 
                  after:start-[-2px] after:h-6 after:w-6 after:rounded-full after:border after:bg-[#F1F1F1] 
                  after:transition-all after:content-['']  peer-checked:bg-[#BAC6F3] peer-checked:after:translate-x-full
                  peer-checked:after:border-none peer-checked:after:bg-[#5D5FEF] 
                  dark:peer-focus:ring-[#5D5FEF]  rtl:peer-checked:after:-translate-x-full"
                ></div>
                <span className="ms-3 text-[12px] font-medium text-[#000] dark:text-[#fff]">
                  Activate the schedule to work during certain dates
                </span>
              </label>
              <div className="flex flex-col md:flex-row">
                <div className="w-full">
                  <Dateinput
                    Sincedate={Sincedate}
                    isDisabled={isDateInputEnabled}
                    valide={isInputValid}
                    errorurl={urlError}
                    onChange={handleFromDateChange}
                  />
                </div>
                <div className="w-full md:mx-2">
                  <Dateinput
                    Untildate={Untildate}
                    isDisabled={isDateInputEnabled}
                    valide={isInputValid}
                    errorurl={urlError}
                    onChange={handleToDateChange}
                  />
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Schedule;
