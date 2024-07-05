import React, { useState } from "react";
import defultpdfimg from "../../../../../assets/img/qrcold-icons/pdfimges/Group 191.svg";
import plusebutton from "../../../../../assets/img/qrcold-icons/pdfimges/material-symbols_add (1).svg";
import editbutton from "../../../../../assets/img/qrcold-icons/pdfimges/material-symbols_add.svg";
import { RxCross1 } from "react-icons/rx";
import apple from "./imagesapps/Vector (1).svg";
import amazon from "./imagesapps/Vector (2).svg";
import google from "./imagesapps/Vector.svg";

const AppsInfo = () => {
  const [activeIndex, setActiveIndex] = useState(1);
  const [selectedFile, setSelectedFile] = useState(defultpdfimg);
  const [selectedCoverFile, setSelectedCoverFile] = useState(defultpdfimg);
  const [showInputs, setShowInputs] = useState({
    google: false,
    apps: false,
    amazon: false,
  });

  const handleFileChange = (event, fileType) => {
    const file = event.target.files[0];

    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        if (fileType === "cover") {
          setSelectedCoverFile(reader.result);
        } else if (fileType === "logo") {
          setSelectedFile(reader.result);
        }
      };

      reader.readAsDataURL(file);
    }
  };

  const toggleAccordion = (index) => {
    setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  const handleShowInputs = (buttonName) => {
    setShowInputs((prevState) => ({ ...prevState, [buttonName]: true }));
  };

  const handleHideInputs = (buttonName) => {
    setShowInputs((prevState) => ({ ...prevState, [buttonName]: false }));
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
              <label className="text-[#1B254B flex text-[14px] font-bold">
                App information
              </label>
            </div>
            <div className="mt-2 flex flex-col sm:flex-row">
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
                        src={selectedCoverFile ? plusebutton : editbutton}
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
                      onClick={() => setSelectedCoverFile(defultpdfimg)}
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

            <div className="mt-5 flex flex-col">
              <div>
                <label className="mb-2 block text-[12px] font-semibold text-gray-900 dark:text-white">
                  App name
                </label>
                <input
                  type="text"
                  id="title"
                  placeholder="Myqrcode"
                  className="h-[45px] w-full rounded-[10px] border-[1px] border-[#73779166] bg-[#fff] px-5 text-sm text-gray-900 dark:border-[#191A1F] dark:bg-[#212430] dark:text-[#fff] dark:placeholder-[#fff]"
                />
              </div>
              <div className="mb-2 mt-2">
                <label className="mb-2 block text-[12px] font-semibold text-gray-900 dark:text-white">
                  Developer/Company
                </label>
                <input
                  type="text"
                  id="description"
                  className="h-[45px] w-full rounded-[10px] border-[1px] border-[#73779166] bg-[#fff] px-5 text-sm text-gray-900 dark:border-[#191A1F] dark:bg-[#212430] dark:text-[#fff] dark:placeholder-[#fff]"
                  placeholder="The Tech&Co"
                />
              </div>
              <div className="mb-2 mt-2">
                <label className="mb-2 block text-[12px] font-semibold text-gray-900 dark:text-white">
                  Website
                </label>
                <input
                  type="text"
                  id="website"
                  className="h-[45px] w-full rounded-[10px] border-[1px] border-[#73779166] bg-[#fff] px-5 text-sm text-gray-900 dark:border-[#191A1F] dark:bg-[#212430] dark:text-[#fff] dark:placeholder-[#fff]"
                  placeholder="http://.."
                />
              </div>
              <div className="mb-2 mt-2">
                <label className="mb-2 block text-[12px] font-semibold text-gray-900 dark:text-white">
                  Description
                </label>
                <textarea
                  type="text"
                  id="description"
                  className="h-[145px] w-full rounded-[10px] border-[1px] border-[#73779166] bg-[#fff] px-2  py-3 text-sm text-gray-900 dark:border-[#191A1F] dark:bg-[#212430] dark:text-[#fff] dark:placeholder-[#fff]"
                  placeholder="Add here"
                />
              </div>
            </div>

            <div className="rounded-[10px] bg-[#F2F3F6] p-2 dark:bg-[#212430] dark:text-[#fff] sm:p-3">
              <div className="text-[14px] font-bold sm:text-[16px]">
                Links the different Platforms
              </div>

              <div className="mt-3 text-[12px] font-semibold sm:text-[14px]">
                Platforms
              </div>

              {showInputs.google && (
                <div className="input-section mt-2 flex w-[51%] flex-col items-center space-y-2 sm:flex-row sm:space-x-2 sm:space-y-0">
                  <div className="flex h-[45px] w-[155px] items-center rounded-[10px] border-[1px] border-[#73779166] bg-[#fff] px-2 text-sm text-gray-900 dark:border-[#191A1F] dark:bg-[#212430]">
                    <img src={google} alt="Google" className="mr-2" />
                    <span>Google Play</span>
                  </div>
                  <input
                    type="text"
                    placeholder="Google Input"
                    className="h-[45px] w-full rounded-[10px] border-[1px] border-[#73779166] bg-[#fff] px-2 text-sm text-gray-900 dark:border-[#191A1F] dark:bg-[#212430] dark:text-[#fff] dark:placeholder-[#fff]"
                  />
                  <RxCross1
                    onClick={() => handleHideInputs("google")}
                    className="cursor-pointer"
                  />
                </div>
              )}

              {showInputs.apps && (
                <div className="input-section mt-2 flex  w-[51%] flex-col items-center space-y-2 sm:flex-row sm:space-x-2 sm:space-y-0">
                  <div className="flex h-[45px] w-[155px] items-center rounded-[10px] border-[1px] border-[#73779166] bg-[#fff] px-2 text-sm text-gray-900 dark:border-[#191A1F] dark:bg-[#212430]">
                    <img src={apple} alt="App Store" className="mr-2" />
                    <span>App Store</span>
                  </div>
                  <input
                    type="text"
                    placeholder="App Store Input"
                    className="h-[45px] w-full rounded-[10px] border-[1px] border-[#73779166] bg-[#fff] px-5 text-sm text-gray-900 dark:border-[#191A1F] dark:bg-[#212430] dark:text-[#fff] dark:placeholder-[#fff]"
                  />
                  <RxCross1
                    onClick={() => handleHideInputs("apps")}
                    className="cursor-pointer"
                  />
                </div>
              )}

              {showInputs.amazon && (
                <div className="input-section mt-2  flex w-[51%] flex-col items-center space-y-2 sm:flex-row sm:space-x-2 sm:space-y-0">
                  <div className="flex h-[45px] w-[155px] items-center rounded-[10px] border-[1px] border-[#73779166] bg-[#fff] px-2 text-sm text-gray-900 dark:border-[#191A1F] dark:bg-[#212430]">
                    <img src={amazon} alt="Amazon Appstore" className="mr-2" />
                    <span>Amazon Appstore</span>
                  </div>
                  <input
                    type="text"
                    placeholder="Amazon Input"
                    className="h-[45px] w-full rounded-[10px] border-[1px] border-[#73779166] bg-[#fff] px-5 text-sm text-gray-900 dark:border-[#191A1F] dark:bg-[#212430] dark:text-[#fff] dark:placeholder-[#fff]"
                  />
                  <RxCross1
                    onClick={() => handleHideInputs("amazon")}
                    className="cursor-pointer"
                  />
                </div>
              )}

              <div className="mt-4 flex flex-col sm:flex-row sm:space-x-2">
                <button
                  type="button"
                  className={`btn mb-2 h-[47px] w-auto rounded-[55px] border-[1px] bg-[#5D5FEF] text-[#fff] dark:border-[#191A1F] dark:bg-[#212430] md:w-[128px] ${
                    showInputs.google ? "hidden" : ""
                  }`}
                  onClick={() => handleShowInputs("google")}
                >
                  Google
                </button>
                <button
                  type="button"
                  onClick={() => handleShowInputs("apps")}
                  className={`btn mb-2 h-[47px] w-auto rounded-[55px] border-[1px] bg-[#5D5FEF] text-[#fff] dark:border-[#191A1F] dark:bg-[#212430] md:w-[128px] ${
                    showInputs.apps ? "hidden" : " "
                  }`}
                >
                  Apps
                </button>
                <button
                  type="button"
                  onClick={() => handleShowInputs("amazon")}
                  className={`btn mb-2 h-[47px] w-auto rounded-[55px] border-[1px] bg-[#5D5FEF] text-[#fff] dark:border-[#191A1F] dark:bg-[#212430] md:w-[128px] ${
                    showInputs.amazon ? "hidden" : " "
                  }`}
                >
                  Amazon
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default AppsInfo;
