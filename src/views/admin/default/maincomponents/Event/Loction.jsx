import React, { useState } from "react";
import defultpdfimg from "../../../../../assets/img/qrcold-icons/pdfimges/Group 191.svg";
import f1 from "../bussiness/imges/Group (1).svg";
import f2 from "../bussiness/imges/Group 1000002798.svg";
import f3 from "../bussiness/imges/Group 1000002799.svg";
import f4 from "../bussiness/imges/Group 1000002800.svg";
import f5 from "../bussiness/imges/Group 1000002801.svg";
import f6 from "../bussiness/imges/Group.svg";
import f7 from "../bussiness/imges/Layer_2.svg";
import f8 from "../bussiness/imges/Vector (1).svg";
import f9 from "../bussiness/imges/Vector (2).svg";
import f10 from "../bussiness/imges/Vector (3).svg";
import f11 from "../bussiness/imges/Vector (4).svg";
import f12 from "../bussiness/imges/Vector.svg";
import f13 from "../bussiness/imges/Wifi_Medium.svg";

const Loction = () => {
  const [activeIndex, setActiveIndex] = useState(1);
  const [selectedFile, setSelectedFile] = useState(defultpdfimg);
  const [activeButton, setActiveButton] = useState("complete");
  const [manulActive, setManulActive] = useState(false);

  const toggleAccordion = (index) => {
    setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  const toggleAccordionManul = () => {
    setManulActive((prevActive) => !prevActive);
  };

  const imageUrls = [f13, f1, f2, f3, f4, f5, f6, f7, f8, f9, f10, f11, f12];

  return (
    <div className="space-y-2">
      <div className="rounded-[10px] border-[1px] border-gray-300 bg-white px-5 font-dm text-[14px] font-semibold shadow-sm shadow-[#003EFF1A] dark:border-[#191A1F] dark:bg-[#13151E] dark:text-[#fff]">
        <div
          className="flex h-[45px] cursor-pointer items-center justify-between"
          onClick={() => toggleAccordion(1)}
        >
          <span className="text-[16px] font-semibold text-[#1B254B] dark:text-[#fff]">
            Location
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
            <div className="mb-1">
              <div className="mt-5 flex flex-col">
                <div className="flex flex-col sm:flex-row">
                  <button
                    type="button"
                    className={`mb-2 h-[47px] w-full rounded-[55px] sm:mb-0 sm:w-[150px] ${
                      activeButton === "complete"
                        ? "bg-[#5D5FEF] text-[#fff]"
                        : "border-[1px] border-[#B8BAC7] bg-[#fff] text-[#B8BAC7] dark:bg-[#212430]"
                    }`}
                    onClick={() => {
                      setActiveButton("complete");
                      setManulActive(false);
                    }}
                  >
                    Complete
                  </button>
                  <button
                    type="button"
                    className={`mb-2 h-[47px] w-full rounded-[55px] sm:mx-4 sm:mb-0 sm:w-[150px] ${
                      activeButton === "url"
                        ? "bg-[#5D5FEF] text-[#fff]"
                        : "border-[1px] border-[#B8BAC7] bg-[#fff] text-[#B8BAC7] dark:bg-[#212430]"
                    }`}
                    onClick={() => setActiveButton("url")}
                  >
                    Url
                  </button>

                  <button
                    type="button"
                    className={`h-[47px] w-full rounded-[55px] sm:w-[150px] ${
                      activeButton === "coordinates"
                        ? "bg-[#5D5FEF] text-[#fff]"
                        : "border-[1px] border-[#B8BAC7] bg-[#fff] text-[#B8BAC7] dark:bg-[#212430]"
                    }`}
                    onClick={() => setActiveButton("coordinates")}
                  >
                    Coordinates
                  </button>
                </div>

                {activeButton === "complete" && (
                  <div className="mt-4">
                    <div className="">
                      <label
                        htmlFor="titleFont"
                        className="mb-2 block text-[12px] font-semibold text-[#1B254B] dark:text-white"
                      >
                        Location option
                      </label>
                      <select
                        id="countries1"
                        className="block w-full resize-none rounded-[10px] border border-gray-300 bg-white p-2.5 text-[16px] font-normal  text-[#1B254B]  dark:border-[#191A1F] dark:bg-[#212430] dark:text-white dark:placeholder-[#fff]"
                      >
                        <option>Show address link</option>
                        <option>Hide address link</option>
                        <option>Show the map</option>
                      </select>
                    </div>
                    <div className="mt-3 w-full">
                      <label className="mb-2 block text-[12px] font-semibold text-gray-900 dark:text-white">
                        Search address
                      </label>
                      <input
                        type="text"
                        className="h-[45px] w-full rounded-[10px] border-[1px] border-[#73779166] bg-[#fff] px-5 text-sm text-gray-900 dark:border-[#191A1F] dark:bg-[#212430] dark:text-[#fff] dark:placeholder-[#fff]"
                      />
                    </div>
                    <button
                      type="button"
                      className="mb-5 mt-3 h-[47px] w-[150px] rounded-[55px] bg-[#5D5FEF] text-[#fff]"
                      onClick={toggleAccordionManul}
                    >
                      {manulActive ? "Delete Address" : "Manual Entry"}
                    </button>
                  </div>
                )}

                {activeButton === "url" && (
                  <div className="mb-5 w-full p-2 md:mt-4">
                    <label className="mb-2 block text-[12px] font-semibold text-gray-900 dark:text-white">
                      Website URL
                    </label>
                    <input
                      type="url"
                      id="Website"
                      placeholder="https://.."
                      className="h-[45px] w-full rounded-[10px] border-[1px] border-[#73779166] bg-[#fff] px-5 text-sm text-gray-900 dark:border-[#191A1F] dark:bg-[#212430] dark:text-[#fff] dark:placeholder-[#fff]"
                    />
                  </div>
                )}

                {activeButton === "coordinates" && (
                  <div className="mb-5 flex flex-wrap md:mt-4">
                    <div className="w-full p-2 sm:w-1/2">
                      <label className="mb-2 block text-[12px] font-semibold text-gray-900 dark:text-white">
                        Latitude
                      </label>
                      <input
                        type="number"
                        id="Latitude"
                        placeholder="Latitude"
                        className="h-[45px] w-full rounded-[10px] border-[1px] border-[#73779166] bg-[#fff] px-5 text-sm text-gray-900 dark:border-[#191A1F] dark:bg-[#212430] dark:text-[#fff] dark:placeholder-[#fff]"
                      />
                    </div>
                    <div className="w-full p-2 sm:w-1/2">
                      <label className="mb-2 block text-[12px] font-semibold text-gray-900 dark:text-white">
                        Longitude
                      </label>
                      <input
                        type="number"
                        id="Longitude"
                        className="h-[45px] w-full rounded-[10px] border-[1px] border-[#73779166] bg-[#fff] px-5 text-sm text-gray-900 dark:border-[#191A1F] dark:bg-[#212430] dark:text-[#fff] dark:placeholder-[#fff]"
                        placeholder="Longitude"
                      />
                    </div>
                  </div>
                )}

                {activeButton === "complete" && manulActive && (
                  <div className="flex flex-col">
                    <div className="flex ">
                      <div className="w-full p-2 sm:w-1/2">
                        <label className="mb-2 block text-[12px] font-semibold text-gray-900 dark:text-white">
                          Street
                        </label>
                        <input
                          type="text"
                          id="Street"
                          placeholder="Street"
                          className="h-[45px] w-full rounded-[10px] border-[1px] border-[#73779166] bg-[#fff] px-5 text-sm text-gray-900 dark:border-[#191A1F] dark:bg-[#212430] dark:text-[#fff] dark:placeholder-[#fff]"
                        />
                      </div>
                      <div className="w-full p-2 sm:w-1/2">
                        <label className="mb-2 block text-[12px] font-semibold text-gray-900 dark:text-white">
                          Number
                        </label>
                        <input
                          type="number"
                          id="number"
                          className="h-[45px] w-full rounded-[10px] border-[1px] border-[#73779166] bg-[#fff] px-5 text-sm text-gray-900 dark:border-[#191A1F] dark:bg-[#212430] dark:text-[#fff] dark:placeholder-[#fff]"
                          placeholder="number"
                        />
                      </div>
                      <div className="w-full p-2 sm:w-1/2">
                        <label className="mb-2 block text-[12px] font-semibold text-gray-900 dark:text-white">
                          Postal Code
                        </label>
                        <input
                          type="number"
                          id="Postal Code"
                          className="h-[45px] w-full rounded-[10px] border-[1px] border-[#73779166] bg-[#fff] px-5 text-sm text-gray-900 dark:border-[#191A1F] dark:bg-[#212430] dark:text-[#fff] dark:placeholder-[#fff]"
                          placeholder="Postal Code"
                        />
                      </div>
                    </div>

                    <div className="flex ">
                      <div className="w-full p-2 sm:w-1/2">
                        <label className="mb-2 block text-[12px] font-semibold text-gray-900 dark:text-white">
                          City
                        </label>
                        <input
                          type="text"
                          id="City"
                          placeholder="City"
                          className="h-[45px] w-full rounded-[10px] border-[1px] border-[#73779166] bg-[#fff] px-5 text-sm text-gray-900 dark:border-[#191A1F] dark:bg-[#212430] dark:text-[#fff] dark:placeholder-[#fff]"
                        />
                      </div>
                      <div className="w-full p-2 sm:w-1/2">
                        <label className="mb-2 block text-[12px] font-semibold text-gray-900 dark:text-white">
                          State /
                        </label>
                        <input
                          type="text"
                          id="State / "
                          className="h-[45px] w-full rounded-[10px] border-[1px] border-[#73779166] bg-[#fff] px-5 text-sm text-gray-900 dark:border-[#191A1F] dark:bg-[#212430] dark:text-[#fff] dark:placeholder-[#fff]"
                          placeholder="State / "
                        />
                      </div>
                    </div>

                    <div className="mb-5 flex">
                      <div className="w-full p-2">
                        <label className="mb-2 block text-[12px] font-semibold text-gray-900 dark:text-white">
                          Country
                        </label>
                        <input
                          type="text"
                          id="Country"
                          placeholder="Country"
                          className="h-[45px] w-full rounded-[10px] border-[1px] border-[#73779166] bg-[#fff] px-5 text-sm text-gray-900 dark:border-[#191A1F] dark:bg-[#212430] dark:text-[#fff] dark:placeholder-[#fff]"
                        />
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>

            <div className="flex flex-col">
              <div>
                <span className="text-[16px] text-[#1B254B]">Facilities</span>
              </div>
              <div className="mb-6 mt-2 flex flex-wrap">
                {imageUrls.map((url, index) => (
                  <div
                    key={index}
                    className="mb-2 mr-2 flex h-[50px] w-[50px] items-center justify-center rounded-[10px] border-[2px] border-[#B8BAC7] sm:h-[50px] sm:w-[50px] md:h-[50px] md:w-[50px] lg:h-[50px] lg:w-[50px]"
                  >
                    <img
                      src={url}
                      alt={`Image ${index + 1}`}
                      className="h-[17px] w-[20px] sm:h-[20px] sm:w-[25px] md:h-[25px] md:w-[25px] lg:h-[25px] lg:w-[25px]"
                    />
                  </div>
                ))}
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};
export default Loction;
