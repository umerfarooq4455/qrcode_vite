import React, { useState } from "react";
import defultpdfimg from "../../../../../assets/img/qrcold-icons/pdfimges/Group 191.svg";
import plusebutton from "../../../../../assets/img/qrcold-icons/pdfimges/material-symbols_add (1).svg";
import editbutton from "../../../../../assets/img/qrcold-icons/pdfimges/material-symbols_add.svg";

const Vinfo: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(1);
  const [selectedFile, setSelectedFile] = useState<string>(defultpdfimg);
  const [selectedCoverFile, setSelectedCoverFile] = useState<string>(defultpdfimg);
  const [isImageSelected, setIsImageSelected] = useState<boolean>(false);
  const [activeButton, setActiveButton] = useState<string>("complete");

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
            <div className="flex flex-col sm:flex-row">
              <label className="text-[#1B254B flex text-[12px] font-semibold">
                Image
              </label>
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
              <div className="ml-6 flex items-center">
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
            </div>

            {/* Cover Image Section */}

            <div className=" flex flex-col">
              <div className="mt-2 flex flex-col gap-2 sm:flex-row">
                <div className="mb-2 flex-grow">
                  <label className="mb-2 block text-[12px] font-semibold text-gray-900 dark:text-white">
                    Name
                  </label>
                  <input
                    type="text"
                    id="Name"
                    className="h-[45px] w-full rounded-[10px] border-[1px] border-[#73779166] bg-[#fff] px-5 text-sm text-gray-900 dark:border-[#191A1F] dark:bg-[#212430] dark:text-[#fff] dark:placeholder-[#fff]"
                    placeholder="Name"
                  />
                </div>
                <div className="mb-2 flex-grow">
                  <label className="mb-2 block text-[12px] font-semibold text-gray-900 dark:text-white">
                    Surname
                  </label>
                  <input
                    type="text"
                    id="Surname"
                    className="h-[45px] w-full rounded-[10px] border-[1px] border-[#73779166] bg-[#fff] px-5 text-sm text-gray-900 dark:border-[#191A1F] dark:bg-[#212430] dark:text-[#fff] dark:placeholder-[#fff]"
                    placeholder="Surname"
                  />
                </div>
              </div>
              <div>
                <label className="mb-2 block text-[12px] font-semibold text-gray-900 dark:text-white">
                  Title
                </label>
                <input
                  type="text"
                  id="title"
                  placeholder="CEO"
                  className="h-[45px] w-full rounded-[10px] border-[1px] border-[#73779166] bg-[#fff] px-5 text-sm text-gray-900 dark:border-[#191A1F] dark:bg-[#212430] dark:text-[#fff] dark:placeholder-[#fff]"
                />
              </div>

              <div className="mt-4 flex flex-col md:mt-6">
                <span>Text align</span>
                <div className="mt-2 flex flex-col sm:flex-row md:mt-4 mb-6 ">
                  <button
                    type="button"
                    className={`mb-2 h-[47px] w-full rounded-[55px] sm:mb-0 sm:w-[129px] ${
                      activeButton === "complete"
                        ? "bg-[#5D5FEF] text-[#fff]"
                        : "border-[1px] border-[#B8BAC7] dark:text-[#fff] bg-[#fff] text-[#30344F] dark:bg-[#212430]"
                    }`}
                  >
                    Center
                  </button>
                  <button
                    type="button"
                    className={`mb-2 h-[47px] w-full rounded-[55px] sm:mx-4 sm:mb-0 sm:w-[129px] ${
                      activeButton === "url"
                        ? "bg-[#5D5FEF] text-[#fff]"
                        : "border-[1px] border-[#B8BAC7] dark:text-[#fff] bg-[#fff] text-[#30344F] dark:bg-[#212430]"
                    }`}
                  >
                    Left
                  </button>

                  <button
                    type="button"
                    className={`h-[47px] w-full rounded-[55px] sm:w-[129px] ${
                      activeButton === "coordinates"
                        ? "bg-[#5D5FEF] text-[#fff]"
                        : "border-[1px] border-[#B8BAC7] dark:text-[#fff] bg-[#fff] text-[#30344F] dark:bg-[#212430]"
                    }`}
                  >
                    Right
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Vinfo;
