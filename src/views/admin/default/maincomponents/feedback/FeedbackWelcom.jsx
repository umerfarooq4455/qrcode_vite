import React, { useState, useEffect } from "react";
import defultpdfimg from "../../../../../assets/img/qrcold-icons/pdfimges/Group 191.svg";
import plusebutton from "../../../../../assets/img/qrcold-icons/pdfimges/material-symbols_add (1).svg";
import editbutton from "../../../../../assets/img/qrcold-icons/pdfimges/material-symbols_add.svg";
import helpicon from "../../../../../assets/img/qrcold-icons/pdfimges/material-symbols_help.svg";
import sidecornericon from "../../../../../assets/img/qrcold-icons/pdfimges/Polygon 10.svg";

const FeedbackWelcom = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [selectedFilee, setSelectedFilee] = useState(defultpdfimg);
  const [isImageSelected, setIsImageSelected] = useState(false);
  const [popoverVisible, setPopoverVisible] = useState(false);

  const handleFileChange = (event) => {
    console.log("File selected");
    const file = event.target.files[0];
    if (file) {
      setIsImageSelected(true);
      const reader = new FileReader();
      reader.onload = () => {
        console.log("File read successfully");
        setSelectedFilee(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const deleteImage = () => {
    setSelectedFilee(defultpdfimg);
    setIsImageSelected(false);
  };

  const toggleAccordion = (index) => {
    setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  const togglePopover = () => {
    setPopoverVisible(!popoverVisible);
  };

  return (
    <div className="space-y-2">
    <div className="rounded-[10px] border-[1px] border-gray-300 bg-white px-5 font-dm text-[16px] font-semibold shadow-sm shadow-[#003EFF1A] dark:border-[#191A1F] dark:bg-[#13151E] dark:text-[#fff]">
      <div
        className="flex h-[45px] cursor-pointer items-center justify-between "
        onClick={() => toggleAccordion(1)}
      >
        <span className="text-[16px] font-semibold  text-[#1B254B] dark:text-[#fff] ">
          Welcome Screen
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
          <div className="flex flex-col sm:flex-row">
            <label className="text-[#1B254B flex text-[12px] font-semibold">
              Image{" "}
              <img
                data-popover-target="popover-default"
                onClick={togglePopover}
                className="mx-2"
                src={helpicon}
                alt=""
              />
            </label>
            <div className="relative">
              <div
                data-popover
                id="popover-default"
                role="tooltip"
                className={`absolute z-10 inline-block w-full rounded-md border border-gray-200 bg-[#000] text-[16px] text-white shadow-sm transition-opacity duration-300 sm:w-64 ${
                  popoverVisible
                    ? "visible opacity-100"
                    : "invisible opacity-0"
                } dark:border-gray-600 dark:bg-gray-800 dark:text-gray-400`}
              >
                <div className="relative rounded-sm border-b px-3 py-2 dark:border-gray-600 dark:bg-gray-700">
                  <h3 className="w-fit text-[10px] font-medium text-white dark:text-white">
                    We suggest 380px by 380px image
                  </h3>
                  <img
                    className="absolute -left-2 top-1.5 "
                    src={sidecornericon}
                    alt=""
                  />
                </div>
                <div data-popper-arrow></div>
              </div>
            </div>
          </div>

          <div className="mt-4 flex ">
            <div className="relative flex pb-5">
              <div className="relative">
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleFileChange}
                  style={{ display: "none" }}
                  id="fileInput"
                />
                <label htmlFor="fileInput">
                  <img
                    src={selectedFilee}
                    alt="Selected File"
                    className="accordion-btn relative h-[89px] w-[89px] cursor-pointer rounded-[18px] border-[3.5px] border-[#5D5FEF] p-2 text-sm text-white"
                  />
                </label>
                <label className="absolute -right-3 -top-3 h-[39px] w-[39px] cursor-pointer rounded-3xl bg-[#5D5FEF] p-1 text-white">
                  <img
                    src={isImageSelected ? plusebutton : editbutton}
                    alt=""
                  />
                </label>
              </div>
            </div>
          </div>

          <div>
            {isImageSelected ? (
              <>
                <button
                  type="button"
                  onClick={deleteImage}
                  className="cursor-pointer rounded-3xl border border-[#5D5FEF] p-3 px-7 text-sm  font-semibold text-[#5D5FEF] dark:border-[#fff] dark:text-[#fff]"
                >
                  Delete
                </button>
                <button
                  type="button"
                  className="mx-5 cursor-pointer rounded-3xl border bg-[#5D5FEF] p-3  px-7 text-sm font-semibold text-white"
                >
                  Preview
                </button>
              </>
            ) : (
              <button
                type="button"
                disabled
                className="cursor-not-allowed rounded-full border bg-[#CFD1DC]  px-5 py-2 text-sm font-semibold text-[#505779]"
              >
                Preview
              </button>
            )}
          </div>

          <div className="flex flex-col">
            <div className="mt-3 text-[12px] font-semibold text-gray-900 dark:text-[#fff]">
              Time (seconds)
            </div>
            <div>
              <input
                id="default-range"
                type="range"
                defaultValue="0"
                className="h-2 w-full cursor-pointer appearance-none rounded-lg  bg-[#B8BAC7] dark:bg-[#212430] [&::-webkit-slider-thumb]:h-2.5 [&::-webkit-slider-thumb]:w-2.5 [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-white [&::-webkit-slider-thumb]:shadow-[0_0_0_4px_rgba(118,139,217,1)]"
              />
            </div>
            <div className="mb-3 flex justify-between">
              <div className="text-[12px] font-semibold  text-gray-900 dark:text-[#fff]">
                2.5 Seconds
              </div>
              <div className="text-[12px] font-semibold  text-gray-900 dark:text-[#fff]">
                10 Seconds
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  </div>
  );
};

export default FeedbackWelcom;
