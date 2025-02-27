import React, { useState } from "react";
import defultpdfimg from "../../../../../assets/img/qrcold-icons/pdfimges/Group 191.svg";
import plusebutton from "../../../../../assets/img/qrcold-icons/pdfimges/material-symbols_add (1).svg";
import editbutton from "../../../../../assets/img/qrcold-icons/pdfimges/material-symbols_add.svg";
import helpicon from "../../../../../assets/img/qrcold-icons/pdfimges/material-symbols_help.svg";
import sidecornericon from "../../../../../assets/img/qrcold-icons/pdfimges/Polygon 10.svg";

const Linklistinfo: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(1);
  const [selectedFile, setSelectedFile] = useState<string>(defultpdfimg);
  const [popoverVisible, setPopoverVisible] = useState<boolean>(false);
  const [selectedCoverFile, setSelectedCoverFile] = useState<string>(defultpdfimg);
  const [isImageSelected, setIsImageSelected] = useState<boolean>(false);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>, fileType: "cover" | "logo") => {
    const file = event.target.files?.[0];

    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        if (fileType === "cover") {
          setSelectedCoverFile(reader.result as string);
        } else if (fileType === "logo") {
          setSelectedFile(reader.result as string);
        }
      };

      reader.readAsDataURL(file);
    }
  };

  const toggleAccordion = (index: number) => {
    setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  const togglePopover = () => {
    setPopoverVisible(!popoverVisible);
  };

  const handelDeleteimg = (fileType: "cover" | "logo") => {
    if (fileType === "cover") {
      setSelectedCoverFile(defultpdfimg);
    } else if (fileType === "logo") {
      setSelectedFile(defultpdfimg);
    }
  };

  return (
    <div className="space-y-2">
      <div className="rounded-[10px] border-[1px] border-gray-300 bg-white px-5 font-dm text-[14px] font-semibold shadow-sm shadow-[#003EFF1A] dark:border-[#191A1F] dark:bg-[#13151E] dark:text-[#fff]">
        <div
          className="flex h-[45px] cursor-pointer items-center justify-between "
          onClick={() => toggleAccordion(1)}
        >
          <span className="text-[16px] font-semibold  text-[#1B254B] dark:text-[#fff] ">
            List Information
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
              <label className="text-[#1B254B] flex text-[12px] font-semibold">
                Cover image
                <img
                  data-popover-target="popover-default"
                  onClick={togglePopover}
                  className="mx-2 "
                  src={helpicon}
                  alt=""
                />
              </label>
              <div className="relative">
                <div
                  data-popover
                  id="popover-default"
                  role="tooltip"
                  className={`absolute z-10 inline-block w-full rounded-md bg-[#000] text-sm text-white shadow-sm transition-opacity duration-300 dark:border-[#191A1F] dark:bg-[#13151E] sm:w-64 ${
                    popoverVisible
                      ? "visible opacity-100"
                      : "invisible opacity-0"
                  } dark:border-gray-600 dark:bg-gray-800 dark:text-gray-400`}
                >
                  <div className="relative rounded-md border  border-[#000] px-3 py-2 dark:border-[#212430] dark:bg-[#13151E]">
                    <h3 className="font-sm text-white dark:text-white">
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

            {/* Cover Image Section */}
            <div className="mt-4 flex ">
              <div className="relative flex pb-5">
                <div className="relative">
                  <label htmlFor="coverFileInput">
                    <img
                      src={selectedCoverFile}
                      alt="Selected File"
                      className="accordion-btn relative h-[89px] w-[89px] cursor-pointer rounded-[18px] border-[3.5px] border-[#5D5FEF] p-2 text-sm text-white"
                    />
                  </label>
                  {selectedCoverFile !== defultpdfimg ? (
                    <label
                      htmlFor="coverFileInput"
                      className="absolute -right-3 -top-3 h-[39px] w-[39px] cursor-pointer rounded-3xl bg-[#5D5FEF] p-1 text-white"
                    >
                      <img src={plusebutton} alt="" />
                    </label>
                  ) : (
                    <label
                      htmlFor="coverFileInput"
                      className="absolute -right-3 -top-3 h-[39px] w-[39px] cursor-pointer rounded-3xl bg-[#5D5FEF] p-1 text-white"
                    >
                      <img
                        src={isImageSelected ? plusebutton : editbutton}
                        alt=""
                      />
                    </label>
                  )}
                </div>

                {/* File input */}
                <input
                  type="file"
                  accept="image/*"
                  onChange={(event) => handleFileChange(event, "cover")}
                  className="hidden"
                  id="coverFileInput"
                />
              </div>
            </div>
            <div>
              {selectedCoverFile !== defultpdfimg ? (
                <>
                  <button
                    type="button"
                    className="cursor-pointer rounded-3xl border border-[#5D5FEF] p-3 px-7 text-sm  font-semibold text-[#5D5FEF] dark:border-[#fff] dark:text-[#fff]"
                    onClick={() => handelDeleteimg("cover")}
                  >
                    Delete
                  </button>
                </>
              ) : (
                ""
              )}
            </div>

            {/* Cover Image Section */}

            {/* logo Image Section */}

            <div className="mt-3 flex flex-col sm:flex-row">
              <label className="mb-2 flex  text-[12px] font-semibold text-gray-900 dark:text-white">
                Logo
              </label>
            </div>

            <div className="flex ">
              <div className="relative flex pb-2">
                <div className="relative">
                  <label htmlFor="logoFileInput">
                    <img
                      src={selectedFile}
                      alt="Selected File"
                      className="accordion-btn relative h-[89px] w-[89px] cursor-pointer rounded-[18px] border-[3.5px] border-[#5D5FEF] p-2 text-sm text-white"
                    />
                  </label>
                  {selectedFile !== defultpdfimg ? (
                    <label
                      htmlFor="logoFileInput"
                      className="absolute -right-3 -top-3 h-[39px] w-[39px] cursor-pointer rounded-3xl bg-[#5D5FEF] p-1 text-white"
                    >
                      <img src={plusebutton} alt="" />
                    </label>
                  ) : (
                    <label
                      htmlFor="logoFileInput"
                      className="absolute -right-3 -top-3 h-[39px] w-[39px] cursor-pointer rounded-3xl bg-[#5D5FEF] p-1 text-white"
                    >
                      <img src={editbutton} alt="" />
                    </label>
                  )}
                </div>

                {/* File input */}
                <input
                  type="file"
                  accept="image/*"
                  onChange={(event) => handleFileChange(event, "logo")}
                  className="hidden"
                  id="logoFileInput"
                />
              </div>
            </div>
            <div>
              {selectedFile !== defultpdfimg ? (
                <>
                  <button
                    type="button"
                    className="cursor-pointer rounded-3xl border border-[#5D5FEF] p-3 px-7 text-sm  font-semibold text-[#5D5FEF] dark:border-[#fff] dark:text-[#fff]"
                    onClick={() => handelDeleteimg("logo")}
                  >
                    Delete
                  </button>
                </>
              ) : (
                ""
              )}
            </div>

            {/* logo Image Section */}

            <div className="mt-5 flex flex-col">
              <div>
                <label className="mb-2 block text-[12px] font-semibold text-gray-900 dark:text-white">
                  Title *
                </label>
                <input
                  type="text"
                  id="text"
                  placeholder=" Title"
                  className="  h-[45px] w-full rounded-[10px] border-[1px] border-[#73779166] bg-[#fff] px-5 text-sm text-gray-900 dark:border-[#191A1F] dark:bg-[#212430]   dark:text-[#fff] dark:placeholder-[#fff] "
                />
              </div>
              <div className="mb-4 mt-4">
                <label className="mb-2 block text-[12px] font-semibold text-gray-900 dark:text-white">
                  Description
                </label>
                <input
                  type="text"
                  id="text"
                  className="  h-[45px] w-full rounded-[10px] border-[1px] border-[#73779166] bg-[#fff] px-5 text-sm text-gray-900 dark:border-[#191A1F] dark:bg-[#212430]   dark:text-[#fff] dark:placeholder-[#fff] "
                  placeholder="Description"
                />
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Linklistinfo;
