import React, { useEffect, useRef, useState } from "react";
import { SketchPicker, ColorResult } from "react-color";
import swipecolor from "../../../../../assets/img/qrcold-icons/pdfimges/swipecolor.svg";
import { usePdfMode } from "../../../../../contextapi/PdfDynamicProvider";
import Chrome from "react-color/es/Chrome";

const Pdfcolors: React.FC = () => {
  const {
    secondaryColors,
    setSecondaryColors,
    primaryColors,
    setPrimaryColors,
    primary,
    setPrimary,
    secondary,
    setSecondary,
  } = usePdfMode();

  const dropdownRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState<number | null>(1);
  const [showPrimaryPicker, setShowPrimaryPicker] = useState<boolean>(false);
  const [showSecondryPicker, setShowSecondryPicker] = useState<boolean>(false);
  const [colorPirmaryIndex, setColorPirmaryIndex] = useState<number | null>(null);
  const [colorSecondIndex, setColorSecondIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setShowPrimaryPicker(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleSwitchColors = () => {
    const tempPrimary = primary;
    const tempPrimaryIndex = colorPirmaryIndex;
    setPrimary(secondary);
    setColorPirmaryIndex(colorSecondIndex);
    setSecondary(tempPrimary);
    setColorSecondIndex(tempPrimaryIndex);
    const updatedPrimaryColors = [...primaryColors];
    const updatedSecondaryColors = [...secondaryColors];
    if (colorPirmaryIndex !== null && colorSecondIndex !== null) {
      updatedPrimaryColors[colorPirmaryIndex] = secondary;
      updatedSecondaryColors[colorSecondIndex] = tempPrimary;
    }
    setPrimaryColors(updatedPrimaryColors);
    setSecondaryColors(updatedSecondaryColors);
  };

  const handleColorClick = (index: number) => {
    const primary = primaryColors[index];
    const secondary = secondaryColors[index];
    setPrimary(primary);
    setSecondary(secondary);
    setActiveIndex(index + 1);
    setColorPirmaryIndex(index);
    setColorSecondIndex(index);
  };

  const handleColorPickerChangee = (color: ColorResult) => {
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

  const handleColorPickerChange = (color: ColorResult) => {
    const { hex } = color;
    if (colorSecondIndex !== null) {
      setSecondaryColors((prevSecondaryColors) => {
        const updatedSecondaryColors = [...prevSecondaryColors];
        updatedSecondaryColors[colorSecondIndex] = hex;
        return updatedSecondaryColors;
      });
      setSecondary(hex);
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

  const handleSecondryColorPickerToggle = () => {
    setShowSecondryPicker(!showSecondryPicker);
    if (colorSecondIndex !== null) {
      const updatedSecondaryColors = [...secondaryColors];
      updatedSecondaryColors[colorSecondIndex] = secondary;
      setSecondaryColors(updatedSecondaryColors);
      setSecondary(updatedSecondaryColors[colorSecondIndex]);
    }
  };

  const handlePrimaryInputChange = (color: string) => {
    if (colorPirmaryIndex !== null) {
      const updatedPrimaryColors = [...primaryColors];
      updatedPrimaryColors[colorPirmaryIndex] = color;
      setPrimaryColors(updatedPrimaryColors);
      setPrimary(updatedPrimaryColors[colorPirmaryIndex]);
    }
  };

  const handleSecondaryInputChange = (color: string) => {
    if (colorSecondIndex !== null) {
      const updatedSecondaryColors = [...secondaryColors];
      updatedSecondaryColors[colorSecondIndex] = color;
      setSecondaryColors(updatedSecondaryColors);
      setSecondary(updatedSecondaryColors[colorSecondIndex]);
    }
  };

  return (
    <div className="space-y-2">
      <div className="rounded-[10px] border-[1px] border-gray-300 bg-white px-5 font-dm text-[16px] font-semibold shadow-sm shadow-[#003EFF1A] dark:border-[#191A1F] dark:bg-[#13151E] dark:text-[#fff]">
        <div
          className="flex h-[45px] cursor-pointer items-center justify-between "
          onClick={() => toggleAccordion(1)}
        >
          <span className="text-[16px] font-semibold  text-[#1B254B] dark:text-[#fff] ">
            Design
          </span>
          <svg
            className={`h-3 w-3 transform ${
              activeIndex ? "rotate-180" : "rotate-90"
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

        {activeIndex && (
          <div className="mb-1">
            <div className="mb-2">
              <label className="text-[12px] font-semibold  text-[#1B254B] dark:text-[#fff]">
                Color Palette
              </label>
            </div>
            <div className="grid w-full grid-cols-3 gap-3 pb-2 md:grid-cols-5 lg:grid-cols-6 xl:max-w-[78%] xl:grid-cols-8">
              {primaryColors.map((color, index) => (
                <div
                  key={index}
                  className={`flex items-center justify-between rounded-[10px] border-[1px] border-[#5D5FEF] p-2 dark:bg-[#212430] ${
                    activeIndex === index + 1
                      ? "border-2 border-[#5D5FEF]"
                      : "border-gray-300 dark:border-none"
                  }`}
                  onClick={() => handleColorClick(index)}
                >
                  <div
                    className="h-[32px] w-[35px] rounded-[3px]"
                    style={{ backgroundColor: color }}
                  ></div>
                  <div
                    className="ml-2 h-[32px] w-[35px] rounded-[3px]"
                    style={{
                      backgroundColor: secondaryColors[index],
                    }}
                  ></div>
                </div>
              ))}
            </div>

            <div className="mb-5 mt-4 flex flex-col md:flex-row">
              <div className="relative flex flex-col">
                <label className="mb-1 text-[12px] font-semibold text-[#1B254B] dark:text-[#fff]">
                  Primary
                </label>
                <input
                  type="text"
                  name={`colors.${activeIndex}`}
                  className="rounded-[10px] border-[1px] border-[#B8BAC7] p-2.5 text-[16px] font-normal text-[#1B254B] dark:border-[#191A1F] dark:bg-[#212430] dark:text-[#fff]"
                  placeholder="#000000"
                  value={primary}
                  onChange={(e) => handlePrimaryInputChange(e.target.value)}
                />
                <button
                  type="button"
                  className="absolute right-2 top-8 h-[28px] w-[30px] rounded-md bg-blue-500 p-2 text-white"
                  style={{ backgroundColor: primary }}
                  onClick={handlePrimaryColorPickerToggle}
                ></button>
                {showPrimaryPicker && (
                  <Chrome
                    style={{ width: "20px" }}
                    className="md:absolute md:mt-16"
                    color={primary}
                    onChange={handleColorPickerChangee}
                  />
                )}
              </div>

              <div className="mx-5 mt-6 flex items-center justify-center">
                <div
                  className="rounded-[10px] border-[1px] border-[#B8BAC7] bg-white text-[16px] font-normal text-[#1B254B] active:bg-[#5D5FEF] active:text-white dark:border-[#191A1F] dark:bg-[#212430] dark:text-[#fff] active:dark:bg-[#000]"
                  onClick={handleSwitchColors}
                >
                  <img src={swipecolor} alt="" />
                </div>
              </div>

              <div className="relative flex flex-col">
                <label className="mb-1 text-[12px] font-semibold text-[#1B254B] dark:text-[#fff]">
                  Secondary
                </label>
                <input
                  type="text"
                  name={`colors.${activeIndex}`}
                  className="rounded-[10px] border-[1px] border-[#B8BAC7] p-2.5 text-[16px] font-normal text-[#1B254B] dark:border-[#191A1F] dark:bg-[#212430] dark:text-[#fff]"
                  placeholder="#000000"
                  value={secondary}
                  onChange={(e) => handleSecondaryInputChange(e.target.value)}
                />
                <button
                  type="button"
                  className="absolute right-2 top-8 h-[28px] w-[30px] rounded-md bg-blue-500 p-2 text-white"
                  style={{ backgroundColor: secondary }}
                  onClick={handleSecondryColorPickerToggle}
                ></button>
                {showSecondryPicker && (
                  <Chrome
                    style={{ width: "191px" }}
                    className="md:absolute md:mt-16"
                    color={secondary}
                    onChange={handleColorPickerChange}
                  />
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Pdfcolors;
