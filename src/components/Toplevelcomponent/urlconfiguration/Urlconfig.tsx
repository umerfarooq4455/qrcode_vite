import React, { useState, useEffect } from "react";
import { FaRegCheckCircle } from "react-icons/fa";

interface UrlconfigProps {
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const Urlconfig: React.FC<UrlconfigProps> = ({ onChange }) => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [uri, setUri] = useState<string>("");
  const [isInputValid, setIsInputValid] = useState<boolean>(true);
  const [urlError, setUrlError] = useState<string>("");
  const [isToggleButtonActive, setIsToggleButtonActive] = useState<boolean>(true);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const toggleAccordion = (index: number) => {
    setActiveIndex(prevIndex => (prevIndex === index ? null : index));
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUri(event.target.value);
    onChange(event);
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    if (isToggleButtonActive) {
      validateInput();
    }
  };

  const handleToggleButtonClick = () => {
    setIsToggleButtonActive(!isToggleButtonActive);
    setIsInputValid(true);
    setUrlError("");
    setUri("");
  };

  useEffect(() => {
    if (!isToggleButtonActive) {
      validateInput();
    }
  }, [uri, isToggleButtonActive]);

  const validateInput = () => {
    if (!uri.trim()) {
      setIsInputValid(false);
      setUrlError("Required field");
    } else {
      setIsInputValid(true);
      setUrlError("");
    }
  };

  const handleInputBlur = () => {
    validateInput();
  };

  return (
    <div className="space-y-2">
      <div className="rounded-[10px] border-[1px] border-gray-300 bg-white px-5 font-dm text-[16px] font-semibold shadow-sm shadow-[#003EFF1A] dark:border-[#191A1F] dark:bg-[#13151E] dark:text-[#fff]">
        <div
          className="flex h-[45px] cursor-pointer items-center justify-between "
          onClick={() => toggleAccordion(1)}
        >
          <span className="text-[16px] font-semibold  text-[#1B254B] dark:text-[#fff] ">
            URL Configuration
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
              <div className="mb-5 pt-2">
                <label className="relative inline-flex cursor-pointer items-center">
                  <input
                    style={{
                      backgroundColor: isToggleButtonActive ? "#5D5FEF" : "red",
                    }}
                    type="checkbox"
                    value=""
                    className="peer sr-only bg-red-600"
                    checked={isToggleButtonActive}
                    onChange={handleToggleButtonClick}
                  />
                  <div className="peer h-4 w-11 rounded-full bg-[#989898] after:absolute after:-top-0.5 after:start-[-2px] after:h-6 after:w-6 after:rounded-full after:border after:bg-[#F1F1F1]  after:transition-all after:content-['']  peer-checked:bg-[#BAC6F3] peer-checked:after:translate-x-full peer-checked:after:border-none peer-checked:after:bg-[#5D5FEF] dark:border-gray-600 dark:bg-gray-700 dark:peer-focus:ring-[#5D5FEF]  rtl:peer-checked:after:-translate-x-full"></div>
                  <span className="ms-3 text-[12px] font-medium text-[#000] dark:text-[#fff]">
                    Auto Generate
                  </span>
                </label>
                <div className="relative mt-3">
                  <label className="text-[12px] font-semibold">
                    Website URL
                  </label>
                  <div
                    className={`flex w-full rounded-[10px] border-[1px] ${
                      isInputValid
                        ? "border-[#B8BAC7] dark:border-[#191A1F]"
                        : "border-red-500 dark:border-red-500 "
                    } bg-white p-2.5 text-sm ${
                      isInputValid ? "text-gray-900" : "text-gray-500"
                    } relative dark:border-[#191A1F] dark:bg-[#212430] dark:text-white dark:placeholder-[#fff] `}
                  >
                    <div className="text-gray-500">https://www.qrcode.com/</div>
                    <div className="w-full">
                      <input
                        type="text"
                        id="uri"
                        value={uri}
                        required
                        onChange={handleInputChange}
                        onBlur={handleInputBlur}
                        disabled={isToggleButtonActive}
                        className="w-full border-none bg-white outline-none active:border-none dark:bg-[#212430]"
                        placeholder="(Auto Generated)"
                      />
                    </div>
                    {isLoading ? (
                      <svg
                        aria-hidden="true"
                        className="absolute right-3 inline h-6 w-6 animate-spin fill-green-200 text-green-500  dark:text-gray-600"
                        viewBox="0 0 100 101"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                          fill="currentColor"
                        />
                        <path
                          d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                          fill="currentFill"
                        />
                      </svg>
                    ) : isInputValid && !isLoading && !isToggleButtonActive ? (
                      <>
                        <FaRegCheckCircle
                          size={23}
                          className="absolute right-3  text-green-500"
                        />
                      </>
                    ) : (
                      ""
                    )}
                  </div>
                </div>

                {!isToggleButtonActive && !isInputValid && urlError && (
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

export default Urlconfig;
