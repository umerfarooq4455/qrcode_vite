import React, { useState } from "react";
import { ChromePicker, ColorResult } from "react-color";
import swipecolor from "../../../../../assets/img/qrcold-icons/pdfimges/swipecolor.svg";

const CouponColor = () => {
  // State for active index of accordion
  const [activeIndex, setActiveIndex] = useState<number | null>(1);

  // Background color palette states
  const [backgroundColorPalette, setBackgroundColorPalette] = useState<string[]>([
    "#292929",
    "#EDE728",
    "#28ED28",
    "#6D21B1",
    "#ED4C28",
    "#E8F86C",
    "#3D656B",
    "#BAED28",
    "#8A9928",
    "#171CAB",
    "#FF9100",
    "#D7BCE1",
    "#FDC400",
    "#EC7D43",
    "#B8909A",
    "#07B09C",
  ]);

  // Link background color palette state
  const [linkBackgroundColorPalette, setLinkBackgroundColorPalette] = useState<string[]>([
    "#FFF8D4",
    "#FFFFFF",
    "#FFFFFF",
    "#FFFFFF",
    "#FFFFFF",
    "#FFFFFF",
    "#FFFFFF",
    "#FFFFFF",
    "#FFFFFF",
    "#FFFFFF",
    "#FFFFFF",
    "#FFFFFF",
    "#FFFFFF",
    "#FFFFFF",
    "#FFFFFF",
    "#FFFFFF",
  ]);

  // Link text color palette state
  const [linkTextColorPalette, setLinkTextColorPalette] = useState<string[]>([
    "#F18430",
    "#A39E0A",
    "#00A301",
    "#C743D2",
    "#A31F01",
    "#1D59F9",
    "#FD6F70",
    "#7CB1E1",
    "#FDBCCB",
    "#759DFE",
    "#FFBC64",
    "#7B5788",
    "#DA5F97",
    "#A24545",
    "#6FA8FD",
    "#A36200",
  ]);

  // State for selected background color
  const [backgroundColor, setBackgroundColor] = useState<string>("#292929");
  const [showBackgroundColorPicker, setShowBackgroundColorPicker] = useState<boolean>(false);
  const [colorBgIndex, setColorBgIndex] = useState<number | null>(null);

  // State for selected link text color
  const [linkTextColor, setLinkTextColor] = useState<string>("#F18430");
  const [showLinkTextColorPicker, setShowLinkTextColorPicker] = useState<boolean>(false);
  const [colorLinktextIndex, setColorLinktextIndex] = useState<number | null>(null);

  // State for selected link background color
  const [linkBackgroundColor, setLinkBackgroundColor] = useState<string>("#FFF8D4");
  const [showLinkBackgroundColorPicker, setShowLinkBackgroundColorPicker] = useState<boolean>(false);
  const [colorLinkbgIndex, setColorLinkbgIndex] = useState<number | null>(null);

  // Toggle accordion section
  const toggleAccordion = (index: number) => {
    setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  // Handle color selection from palette
  const handleColorClick = (index: number) => {
    setBackgroundColor(backgroundColorPalette[index]);
    setLinkTextColor(linkTextColorPalette[index]);
    setLinkBackgroundColor(linkBackgroundColorPalette[index]);
    setActiveIndex(index + 1);
    setColorBgIndex(index);
    setColorLinktextIndex(index);
    setColorLinkbgIndex(index);
  };

  // Handle background color picker change
  const handleBackgroundColorPicker = (color: ColorResult) => {
    const { hex } = color;
    if (colorBgIndex !== null) {
      const updatedBackgroundColorPalette = [...backgroundColorPalette];
      updatedBackgroundColorPalette[colorBgIndex] = hex;
      setBackgroundColorPalette(updatedBackgroundColorPalette);
      setBackgroundColor(hex);
    }
  };

  // Toggle background color picker visibility
  const handleBackgroundColorPickerToggle = () => {
    setShowBackgroundColorPicker(!showBackgroundColorPicker);
    if (colorBgIndex !== null) {
      const updatedBackgroundColorPalette = [...backgroundColorPalette];
      updatedBackgroundColorPalette[colorBgIndex] = backgroundColor;
      setBackgroundColorPalette(updatedBackgroundColorPalette);
      setBackgroundColor(updatedBackgroundColorPalette[colorBgIndex]);
    }
  };

  // Handle background color input change
  const handleBackgroundInputChange = (color: string) => {
    const updatedBackgroundColorPalette = [...backgroundColorPalette];
    updatedBackgroundColorPalette[colorBgIndex!] = color;
    setBackgroundColorPalette(updatedBackgroundColorPalette);
    setBackgroundColor(color);
  };

  // Handle link background color picker change
  const handleLinkBgColorPicker = (color: ColorResult) => {
    const { hex } = color;
    if (colorLinkbgIndex !== null) {
      const updatedLinkBackgroundColorPalette = [...linkBackgroundColorPalette];
      updatedLinkBackgroundColorPalette[colorLinkbgIndex] = hex;
      setLinkBackgroundColorPalette(updatedLinkBackgroundColorPalette);
      setLinkBackgroundColor(hex);
    }
  };

  // Toggle link background color picker visibility
  const handleLinkBgColorPickerToggle = () => {
    setShowLinkBackgroundColorPicker(!showLinkBackgroundColorPicker);
    if (colorLinkbgIndex !== null) {
      const updatedLinkBackgroundColorPalette = [...linkBackgroundColorPalette];
      updatedLinkBackgroundColorPalette[colorLinkbgIndex] = linkBackgroundColor;
      setLinkBackgroundColorPalette(updatedLinkBackgroundColorPalette);
      setLinkBackgroundColor(updatedLinkBackgroundColorPalette[colorLinkbgIndex]);
    }
  };

  // Handle link background color input change
  const handleLinkBgInputChange = (color: string) => {
    const updatedLinkBackgroundColorPalette = [...linkBackgroundColorPalette];
    updatedLinkBackgroundColorPalette[colorLinkbgIndex!] = color;
    setLinkBackgroundColorPalette(updatedLinkBackgroundColorPalette);
    setLinkBackgroundColor(color);
  };

  // Handle link text color picker change
  const handleLinkTextColorPicker = (color: ColorResult) => {
    const { hex } = color;
    if (colorLinktextIndex !== null) {
      const updatedLinkTextColorPalette = [...linkTextColorPalette];
      updatedLinkTextColorPalette[colorLinktextIndex] = hex;
      setLinkTextColorPalette(updatedLinkTextColorPalette);
      setLinkTextColor(hex);
    }
  };

  // Toggle link text color picker visibility
  const handleSecondryColorPickerToggle = () => {
    setShowLinkTextColorPicker(!showLinkTextColorPicker);
    if (colorLinktextIndex !== null) {
      const updatedLinkTextColorPalette = [...linkTextColorPalette];
      updatedLinkTextColorPalette[colorLinktextIndex] = linkTextColor;
      setLinkTextColorPalette(updatedLinkTextColorPalette);
      setLinkTextColor(updatedLinkTextColorPalette[colorLinktextIndex]);
    }
  };

  // Handle link text color input change
  const handleSecondaryInputChange = (color: string) => {
    const updatedLinkTextColorPalette = [...linkTextColorPalette];
    updatedLinkTextColorPalette[colorLinktextIndex!] = color;
    setLinkTextColorPalette(updatedLinkTextColorPalette);
    setLinkTextColor(color);
  };

  return (
    <div className="space-y-2">
      <div className="rounded-[10px] border-[1px] border-gray-300 bg-white px-5 font-dm text-[16px] font-semibold shadow-sm shadow-[#003EFF1A] dark:border-[#191A1F] dark:bg-[#13151E] dark:text-[#fff]">
        <div
          className="flex h-[45px] cursor-pointer items-center justify-between"
          onClick={() => toggleAccordion(1)}
        >
          <span className="text-[16px] font-semibold  text-[#1B254B] dark:text-[#fff]">
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
            <div className="grid w-full grid-cols-2 gap-3 pb-2 md:grid-cols-4  lg:grid-cols-4 xl:max-w-[86%] xl:grid-cols-6 ">
              {backgroundColorPalette.map((color, index) => (
                <div
                  key={index}
                  className={`flex items-center justify-between   rounded-[10px] border-[1px] border-[#5D5FEF] p-2 dark:bg-[#212430] ${
                    activeIndex == index + 1
                      ? "border-2 border-[#5D5FEF]  "
                      : "border-gray-300 dark:border-none "
                  }`}
                  onClick={() => handleColorClick(index)}
                >
                  <div
                    className="h-[32px] w-[35px] rounded-[3px] border dark:border-none"
                    style={{ backgroundColor: color }}
                  ></div>
                  <div
                    className="h-[32px] w-[35px] rounded-[3px] border dark:border-none"
                    style={{ backgroundColor: linkBackgroundColorPalette[index] }}
                  ></div>
                  <div
                    className="h-[32px] w-[35px] rounded-[3px] border dark:border-none"
                    style={{
                      backgroundColor: linkTextColorPalette[index],
                    }}
                  ></div>
                </div>
              ))}
            </div>

            <div className="mb-5 mt-4 flex flex-col md:flex-row">
              <div className="relative flex flex-col">
                <label className="mb-1 text-[12px] font-semibold text-[#1B254B] dark:text-[#fff]">
                  Background color
                </label>
                <input
                  type="text"
                  name={`colors.${activeIndex}`}
                  className="rounded-[10px] border-[1px] border-[#B8BAC7] p-2.5 text-[16px] font-normal  text-[#1B254B] dark:border-[#191A1F] dark:bg-[#212430] dark:text-[#fff] "
                  placeholder="#000000"
                  value={backgroundColor}
                  onChange={(e) => handleBackgroundInputChange(e.target.value)}
                />
                <button
                  type="button"
                  className="absolute right-2 top-8 h-[28px] w-[30px] rounded-md border bg-blue-500 p-2 text-white dark:border-none"
                  style={{ backgroundColor: backgroundColor }}
                  onClick={handleBackgroundColorPickerToggle}
                ></button>
                {showBackgroundColorPicker && (
                  <ChromePicker
                    style={{ width: "191px" }}
                    className="border  dark:border-none md:absolute md:mt-16"
                    color={backgroundColor}
                    onChange={handleBackgroundColorPicker}
                  />
                )}
              </div>

              {/* link text bg */}
              <div className="relative flex flex-col md:mx-3">
                <label className="mb-1 text-[12px] font-semibold  text-[#1B254B] dark:text-[#fff]">
                  Link text background color
                </label>
                <input
                  type="text"
                  name={`colors.${activeIndex}`}
                  className="rounded-[10px] border-[1px] border-[#B8BAC7] p-2.5 text-[16px] font-normal  text-[#1B254B] dark:border-[#191A1F] dark:bg-[#212430] dark:text-[#fff] "
                  placeholder="#000000"
                  value={linkBackgroundColor}
                  onChange={(e) => handleLinkBgInputChange(e.target.value)}
                />
                <button
                  type="button"
                  className="absolute right-2 top-8 h-[28px] w-[30px] rounded-md border bg-blue-500 p-2 text-white dark:border-none"
                  style={{ backgroundColor: linkBackgroundColor }}
                  onClick={handleLinkBgColorPickerToggle}
                ></button>
                {showLinkBackgroundColorPicker && (
                  <ChromePicker
                    style={{ width: "191px" }}
                    className="md:absolute  md:mt-16 "
                    color={linkBackgroundColor}
                    onChange={handleLinkBgColorPicker}
                  />
                )}
              </div>

              {/* link text bg */}

              <div className="relative flex flex-col">
                <label className="mb-1 text-[12px] font-semibold  text-[#1B254B] dark:text-[#fff]">
                  Link text color
                </label>
                <input
                  type="text"
                  name={`colors.${activeIndex}`}
                  className="rounded-[10px] border-[1px] border-[#B8BAC7] p-2.5 text-[16px] font-normal  text-[#1B254B] dark:border-[#191A1F] dark:bg-[#212430] dark:text-[#fff] "
                  placeholder="#000000"
                  value={linkTextColor}
                  onChange={(e) => handleSecondaryInputChange(e.target.value)}
                />
                <button
                  type="button"
                  className="absolute right-2 top-8 h-[28px] w-[30px] rounded-md border bg-blue-500 p-2 text-white dark:border-none"
                  style={{ backgroundColor: linkTextColor }}
                  onClick={handleSecondryColorPickerToggle}
                ></button>
                {showLinkTextColorPicker && (
                  <ChromePicker
                    style={{ width: "191px" }}
                    className="md:absolute  md:mt-16"
                    color={linkTextColor}
                    onChange={handleLinkTextColorPicker}
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

export default CouponColor;
