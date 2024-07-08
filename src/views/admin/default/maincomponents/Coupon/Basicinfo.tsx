import React, { useState } from "react";
import defultpdfimg from "../../../../../assets/img/qrcold-icons/pdfimges/Group 191.svg";
import plusebutton from "../../../../../assets/img/qrcold-icons/pdfimges/material-symbols_add (1).svg";
import editbutton from "../../../../../assets/img/qrcold-icons/pdfimges/material-symbols_add.svg";
import Chrome from "react-color/es/Chrome";

const Basicinfo: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(1);
  const [selectedFile, setSelectedFile] = useState<string>(defultpdfimg);
  const [selectedCoverFile, setSelectedCoverFile] = useState<string>(
    defultpdfimg
  );
  const [isImageSelected, setIsImageSelected] = useState<boolean>(false);

  const [primary, setPrimary] = useState<string>("#0000");
  const [showPrimaryPicker, setShowPrimaryPicker] = useState<boolean>(false);
  const [colorPirmaryIndex, setColorPirmaryIndex] = useState<number | null>(
    null
  );
  const [primaryColors, setPrimaryColors] = useState<string[]>(["#000"]);

  const handlePrimaryInputChange = (color: string) => {
    const updatedPrimaryColors = [...primaryColors];
    if (colorPirmaryIndex !== null) {
      updatedPrimaryColors[colorPirmaryIndex] = color;
      setPrimaryColors(updatedPrimaryColors);
      setPrimary(updatedPrimaryColors[colorPirmaryIndex]);
    }
  };

  const handlePrimaryColorPickerToggle = () => {
    setShowPrimaryPicker(!showPrimaryPicker);
    if (colorPirmaryIndex !== null) {
      const updatedPrimaryColors = [...primaryColors];
      updatedPrimaryColors[colorPirmaryIndex] = primary;
      setPrimaryColors(updatedPrimaryColors);
      setPrimary(updatedPrimaryColors[colorPirmaryIndex]);
    }
  };

  const handleColorPickerChangee = (color: { hex: string }) => {
    const { hex } = color;
    if (colorPirmaryIndex !== null) {
      setPrimaryColors((prevPrimaryColors) => {
        const updatedPrimaryColors = [...prevPrimaryColors];
        updatedPrimaryColors[colorPirmaryIndex] = hex;
        return updatedPrimaryColors;
      });
      setPrimary(hex);
    }
  };

  const handleFileChange = (
    event: React.ChangeEvent<HTMLInputElement>,
    fileType: "cover" | "logo"
  ) => {
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
              <label className="text-[#1B254B flex text-[14px] font-bold">
                Offer Information
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

            <div className="flex flex-col md:flex-row">
              <div className="rounded-lg bg-[#F2F3F6] p-4 md:w-1/2">
                <span className="block text-sm md:text-base">Size</span>
                <span className="block text-sm md:text-base">
                  Image (640 x 360px)
                </span>
                <div className="mb-2 mt-2 w-full md:w-3/4">
                  <div className="flex flex-col">
                    <input
                      type="range"
                      name="range"
                      className="h-2 w-full cursor-pointer appearance-none rounded-lg bg-[#B4C4FF] dark:bg-gray-700
            [&::-webkit-slider-thumb]:h-2.5
            [&::-webkit-slider-thumb]:w-2.5
            [&::-webkit-slider-thumb]:appearance-none
            [&::-webkit-slider-thumb]:rounded-full
            [&::-webkit-slider-thumb]:bg-white
            [&::-webkit-slider-thumb]:shadow-[0_0_0_4px_rgba(118,139,217,1)]"
                      //   value={cornersSquarecolorrange}
                      //   onChange={(e) => setCornersSquarecolorrange(e.target.value)}
                    />
                  </div>
                  <div className="flex justify-between">
                    <p className="text-xs md:text-sm">1%</p>
                    <p className="text-xs md:text-sm">100%</p>
                  </div>
                </div>
              </div>
              <div className="mt-4 rounded-lg bg-[#F2F3F6] p-4 md:ml-3 md:mt-0 md:w-1/2">
                <span className="block text-sm md:text-base">
                  Background Color
                </span>
                <div className="relative mt-5 flex w-[33%] flex-col ">
                  <input
                    type="text"
                    name={`colors.${activeIndex}`}
                    className="w-full rounded-lg border border-[#B8BAC7] p-2.5 text-sm font-normal text-[#1B254B] dark:border-[#191A1F] dark:bg-[#212430] dark:text-[#fff] md:text-base"
                    placeholder="#000000"
                    value={primary}
                    onChange={(e) => handlePrimaryInputChange(e.target.value)}
                  />
                  <button
                    type="button"
                    className="absolute right-2 top-2 h-7 w-8 rounded-md bg-blue-500 p-2 text-white"
                    style={{ backgroundColor: primary }}
                    onClick={handlePrimaryColorPickerToggle}
                  ></button>
                  {showPrimaryPicker && (
                    <div className="absolute top-11 z-10">
                      <Chrome
                        style={{ width: "20px" }}
                        color={primary}
                        onChange={handleColorPickerChangee}
                      />
                    </div>
                  )}
                </div>
              </div>
            </div>

            <div className="mt-5 flex flex-col">
              <div>
                <label className="mb-2 block text-[12px] font-semibold text-gray-900 dark:text-white">
                  Company
                </label>
                <input
                  type="text"
                  id="title"
                  placeholder="Electrofy"
                  className="h-[45px] w-full rounded-[10px] border-[1px] border-[#73779166] bg-[#fff] px-5 text-sm text-gray-900 dark:border-[#191A1F] dark:bg-[#212430] dark:text-[#fff] dark:placeholder-[#fff]"
                />
              </div>
              <div className="mb-2 mt-2">
                <label className="mb-2 block text-[12px] font-semibold text-gray-900 dark:text-white">
                  Title
                </label>
                <input
                  type="text"
                  id="description"
                  className="h-[45px] w-full rounded-[10px] border-[1px] border-[#73779166] bg-[#fff] px-5 text-sm text-gray-900 dark:border-[#191A1F] dark:bg-[#212430] dark:text-[#fff] dark:placeholder-[#fff]"
                  placeholder="Title"
                />
              </div>
              <div className="mb-2 mt-2">
                <label className="mb-2 block text-[12px] font-semibold text-gray-900 dark:text-white">
                  Button
                </label>
                <input
                  type="text"
                  id="website"
                  className="h-[45px] w-full rounded-[10px] border-[1px] border-[#73779166] bg-[#fff] px-5 text-sm text-gray-900 dark:border-[#191A1F] dark:bg-[#212430] dark:text-[#fff] dark:placeholder-[#fff]"
                  placeholder="Use this coupon in all technoloigy products"
                />
              </div>
              <div className="mb-2 mt-2">
                <label className="mb-2 block text-[12px] font-semibold text-gray-900 dark:text-white">
                  Sales badge
                </label>
                <input
                  type="text"
                  id="description"
                  className="h-[45px] w-full rounded-[10px] border-[1px] border-[#73779166] bg-[#fff] px-5 text-sm text-gray-900 dark:border-[#191A1F] dark:bg-[#212430] dark:text-[#fff] dark:placeholder-[#fff]"
                  placeholder="25% off"
                />
              </div>
              <div className="mb-4 mt-2">
                <label className="mb-2 block text-[12px] font-semibold text-gray-900 dark:text-white">
                  Button to see the code
                </label>
                <input
                  type="text"
                  id="website"
                  className="h-[45px] w-full rounded-[10px] border-[1px] border-[#73779166] bg-[#fff] px-5 text-sm text-gray-900 dark:border-[#191A1F] dark:bg-[#212430] dark:text-[#fff] dark:placeholder-[#fff]"
                  placeholder="Get cuppon"
                />
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Basicinfo;
