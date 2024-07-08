import React, { useEffect, useRef, useState } from "react";
import { SketchPicker, ColorResult } from "react-color";
import swipecolor from "../../../../../assets/img/qrcold-icons/pdfimges/swipecolor.svg";
import Chrome from "react-color/es/Chrome";

const ImgesDesign: React.FC = () => {
  const dropdownRef = useRef<HTMLDivElement>(null);
  const [selectedpdfTemp, setSelectedpdfTemp] = useState<number>(1);
  const [primaryColors, setPrimaryColors] = useState<string[]>([
    "#000",
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

  const [primary, setPrimary] = useState<string>("#000");
  const [secondary, setSecondary] = useState<string>("#F18430");
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
    if (colorPirmaryIndex !== null) {
      const updatedPrimaryColors = [...primaryColors];
      updatedPrimaryColors[colorPirmaryIndex] = secondary;
      setPrimaryColors(updatedPrimaryColors);
    }
  };

  const handleColorClick = (index: number) => {
    const primary = primaryColors[index];
    setPrimary(primary);
    setActiveIndex(index + 1);
    setColorPirmaryIndex(index);
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

  const handlePrimaryColorPickerToggle = () => {
    setShowPrimaryPicker(!showPrimaryPicker);
    if (colorPirmaryIndex !== null) {
      const updatedPrimaryColors = [...primaryColors];
      updatedPrimaryColors[colorPirmaryIndex] = primary;
      setPrimaryColors(updatedPrimaryColors);
      setPrimary(updatedPrimaryColors[colorPirmaryIndex]);
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

  return (
    <div className="space-y-2">
      <div className="rounded-[10px] border-[1px] border-gray-300 bg-white px-5 font-dm text-[16px] font-semibold shadow-sm shadow-[#003EFF1A] dark:border-[#191A1F] dark:bg-[#13151E] dark:text-[#fff]">
        <div
          className="flex h-[45px] cursor-pointer items-center justify-between"
          onClick={() => toggleAccordion(1)}
        >
          <span className="text-[16px] font-semibold text-[#1B254B] dark:text-[#fff]">
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
              <label className="text-[12px] font-semibold text-[#1B254B] dark:text-[#fff]">
                Color Palette
              </label>
            </div>
            <div className="grid w-full grid-cols-2 gap-3 pb-2 md:grid-cols-4 lg:grid-cols-4 xl:max-w-[86%] xl:grid-cols-6">
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
                    className="h-[32px] w-full rounded-[3px] border dark:border-none"
                    style={{ backgroundColor: color }}
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
                  className="absolute right-2 top-8 h-[28px] w-[30px] rounded-md border bg-blue-500 p-2 text-white dark:border-none"
                  style={{ backgroundColor: primary }}
                  onClick={handlePrimaryColorPickerToggle}
                ></button>
                {showPrimaryPicker && (
                  <Chrome
                    style={{ width: "191px" }}
                    className="border dark:border-none md:absolute md:mt-16"
                    color={primary}
                    onChange={handleColorPickerChangee}
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

export default ImgesDesign;
