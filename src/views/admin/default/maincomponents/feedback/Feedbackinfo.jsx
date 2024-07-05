import React, { useState } from "react";
import { usePdfMode } from "../../../../../contextapi/PdfDynamicProvider";

const Feedbackinfo = () => {
  const {
    company,
    setCompany,
    pdfTitle,
    setPdfTitle,
    description,
    setDescription,
    website,
    setWebsite,
    buttonText,
    setButtonText,
  } = usePdfMode();
  const [activeIndex, setActiveIndex] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [isToggleButtonActive, setIsToggleButtonActive] = useState(false);

  const handleToggleButtonClick = () => {
    setIsToggleButtonActive(!isToggleButtonActive);
  };
  const toggleHandler = () => {
    setIsOpen(!isOpen);
  };

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
          <div className="mb-2 ">
            <div className="mb-3 ">
              <label className="text-[12px] font-semibold text-[#1B254B] dark:text-[#fff]">
                Name
              </label>
              <input
                maxLength={50}
                type="text"
                id="company"
                // value={company}
                // onChange={(e) => setCompany(e.target.value)}
                className="mt-1 block w-full rounded-[10px] border border-gray-300 bg-white p-2.5 text-[14px] font-normal text-[#1B254B]  dark:border-[#191A1F] dark:bg-[#212430] dark:text-white dark:placeholder-[#fff]"
                placeholder="Hotel Opera"
              />
            </div>
            <div className="mb-3 ">
              <label className="text-[12px] font-semibold text-[#1B254B] dark:text-[#fff]">
                Title
              </label>
              <input
                maxLength={80}
                type="text"
                id="pdfTitle"
                // value={pdfTitle}
                // onChange={(e) => setPdfTitle(e.target.value)}
                className="mt-1 block w-full rounded-[10px] border border-gray-300 bg-white p-2.5 text-[14px] font-normal text-[#1B254B]  dark:border-[#191A1F] dark:bg-[#212430] dark:text-white dark:placeholder-[#fff]"
                placeholder="e.g Leaves us your feedback"
              />
            </div>
            <div className="mb-3 ">
              <label className="text-[12px] font-semibold text-[#1B254B] dark:text-[#fff]">
                Description
              </label>
              <input
                maxLength={124}
                type="text"
                id="description"
                // value={description}
                // onChange={(e) => setDescription(e.target.value)}
                className="mt-1 block w-full rounded-[10px] border border-gray-300 bg-white p-2.5 text-[14px] font-normal text-[#1B254B]  dark:border-[#191A1F] dark:bg-[#212430] dark:text-white dark:placeholder-[#fff]"
                placeholder="e.g Please select a categories to rate it."
              />
            </div>

            <div className="mb-3 flex flex-col">
              <div>
                <label className="relative ml-[4px] inline-flex cursor-pointer items-center">
                  <input
                    style={{
                      backgroundColor: isToggleButtonActive
                        ? "#5D5FEF"
                        : "white",
                    }}
                    type="checkbox"
                    value=""
                    className="peer sr-only mt-2 bg-red-600"
                    checked={isToggleButtonActive}
                    onChange={handleToggleButtonClick}
                  />
                  <div className="peer h-4 w-11 rounded-full bg-[#989898] after:absolute after:start-[-2px]  after:-mt-[3px] after:h-6 after:w-6 after:rounded-full after:border after:bg-[#F1F1F1]  after:transition-all after:content-['']  peer-checked:bg-[#BAC6F3] peer-checked:after:translate-x-full peer-checked:after:border-none peer-checked:after:bg-[#5D5FEF] dark:border-gray-600 dark:bg-gray-700 dark:peer-focus:ring-[#5D5FEF]  rtl:peer-checked:after:-translate-x-full"></div>
                  <span className="ms-3 text-sm font-medium text-[#191A1F] dark:text-[#fff]">
                    Disable ratings
                  </span>
                </label>
              </div>

              <div className="mt-3">
                <label className="relative ml-[4px] inline-flex cursor-pointer items-center">
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
                    Disable comments
                  </span>
                </label>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Feedbackinfo;
