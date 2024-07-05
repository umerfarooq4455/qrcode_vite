import React, { useState, useEffect } from "react";
import { useApiContext } from "../../../contextapi/contextApi";

const Scanlimt = ({ onChange }: { onChange: (event: React.ChangeEvent<HTMLInputElement>) => void }) => {
  const { isInputValid, setIsInputValid } = useApiContext();
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [scanLimit, setScanLimit] = useState<string>("");
  const [urlError, setUrlError] = useState<string>("");
  const [isToggleButtonActive, setIsToggleButtonActive] = useState<boolean>(false);

  const toggleAccordion = (index: number) => {
    setActiveIndex(prevIndex => prevIndex === index ? null : index);
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setScanLimit(event.target.value);
    setIsInputValid(true);

    if (isToggleButtonActive) {
      validateInput();
      onChange(event);
    }
  };

  const handleToggleButtonClick = () => {
    setIsToggleButtonActive(!isToggleButtonActive);

    // Reset validation state and error message when toggling
    setIsInputValid(true);
    setUrlError("");

    // If toggling off, trigger the validation
    if (!isToggleButtonActive) {
      validateInput();
    }
  };

  useEffect(() => {
    if (isToggleButtonActive) {
      validateInput();
    }
  }, [scanLimit, isToggleButtonActive]);

  const validateInput = () => {
    if (isToggleButtonActive) {
      const isScanLimitValid =
        /^\d+$/.test(scanLimit) &&
        parseInt(scanLimit, 10) >= 0 &&
        scanLimit.length <= 7;

      if (!isScanLimitValid) {
        setIsInputValid(false);
        setUrlError(
          "Please enter a positive number less than 10000000"
        );
      } else {
        setIsInputValid(true);
        setUrlError("");
      }
    }
  };

  const handleInputBlur = () => {
    validateInput();
  };

  return (
    <div className="space-y-2">
      <div className="rounded-[10px] border-[1px] border-[#B8BAC7] bg-white px-5 font-dm text-[16px] font-semibold shadow-sm shadow-[#003EFF1A] dark:border-[#191A1F] dark:bg-[#13151E] dark:text-[#fff]">
        <div
          className="flex h-[45px] cursor-pointer items-center justify-between "
          onClick={() => toggleAccordion(1)}
        >
          <span className="text-[16px] font-semibold  text-[#1B254B] dark:text-[#fff] ">
            Scan Limit
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
              <p>Customize your qrwebsite.com address identifier</p>
            </div>
            <div className="">
              <div className="mb-5 ">
                <label className="relative mb-4 inline-flex cursor-pointer items-center">
                  <input
                    style={{
                      backgroundColor: isToggleButtonActive
                        ? "#5D5FEF"
                        : "white",
                    }}
                    type="checkbox"
                    value=""
                    className="peer sr-only bg-red-600"
                    checked={isToggleButtonActive}
                    onChange={handleToggleButtonClick}
                  />
                  <div className="peer h-4 w-11 rounded-full bg-[#989898] after:absolute after:-top-0.5 after:start-[-2px] after:h-6 after:w-6 after:rounded-full after:border after:bg-[#F1F1F1]  after:transition-all after:content-['']  peer-checked:bg-[#BAC6F3] peer-checked:after:translate-x-full peer-checked:after:border-none peer-checked:after:bg-[#5D5FEF] dark:border-gray-600 dark:bg-gray-700 dark:peer-focus:ring-[#5D5FEF]  rtl:peer-checked:after:-translate-x-full"></div>
                  <span className="ms-3 text-[12px] font-medium text-[#000] dark:text-[#B8BAC7]">
                    Enable Scan Limit
                  </span>
                </label>

                <div className="relative mt-2">
                  <input
                    type="number"
                    id="scanLimit"
                    value={scanLimit}
                    required
                    onChange={handleInputChange}
                    onBlur={handleInputBlur}
                    disabled={!isToggleButtonActive}
                    className={`block w-full rounded-[10px] border-[1px]   ${
                      !isInputValid && urlError ? "border-red-600 dark:border-red-600" : ""
                    } p-2.5 text-sm ${
                      isInputValid ? "text-[#fff] " : "text-red-500  "
                    }  dark:border-[#191A1F] dark:bg-[#212430] dark:text-[#fff] dark:placeholder-[#fff]`}
                    placeholder="Add limit"
                  />
                </div>

                {!isInputValid && urlError && (
                  <p className="mt-1 text-[12px] text-red-500">{urlError}</p>
                )}
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Scanlimt;
