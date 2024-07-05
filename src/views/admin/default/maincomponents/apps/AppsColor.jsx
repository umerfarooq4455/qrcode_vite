import React, { useState } from "react";
import { SketchPicker } from "react-color";
import swipecolor from "../../../../../assets/img/qrcold-icons/pdfimges/swipecolor.svg";
import Chrome from "react-color/es/Chrome";
const AppsColor = () => {
  const [activeIndex, setActiveIndex] = useState(1);
  const [backgroudcolor, setBackgroudcolor] = useState([
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

  const [linkbgcolor, setLinkbgcolor] = useState([
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

  const [linktextcolor, setLinktextcolor] = useState([
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

  //   bacgroud color related states //
  const [bgcolor, setBgcolor] = useState("#292929");
  const [showBgcolorPicker, setShowBgcolorPicker] = useState(false);
  const [colorBgIndex, setColorBgIndex] = useState(null);
  //   bacgroud color related states //

  // link color related state //
  const [linkTcolor, setLinkTcolor] = useState("#F18430");
  const [showLtcolorPicker, setShowLtcolorPicker] = useState(false);
  const [colorLinktextIndex, setColorLinktextIndex] = useState(null);
  // link color related state //

  // link background color related state //
  const [linkBgcolor, setLinkBgcolor] = useState("#FFF8D4");
  const [showLinkBgcolorPicker, setShowLinkBgcolorPicker] = useState(false);
  const [colorLinkbgIndex, setColorLinkbgIndex] = useState(null);
  // link background color related state //

  const toggleAccordion = (index) => {
    setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  const handleColorClick = (index) => {
    console.log("index", index);
    const bgcolor = backgroudcolor[index];
    const linkTcolor = linktextcolor[index];
    const linkBgcolor = linkbgcolor[index];
    console.log(bgcolor, "bgcolor");
    console.log(linkBgcolor, "linkbgcolor");
    console.log(linkTcolor, "linkTcolor");
    setBgcolor(bgcolor);
    setLinkTcolor(linkTcolor);
    setLinkBgcolor(linkBgcolor);
    setActiveIndex(index + 1);
    setColorBgIndex(index);
    setColorLinktextIndex(index);
    setColorLinkbgIndex(index);
  };

  //   bacgroudncolorpicker handler
  const handleBackgroundColorPicker = (color) => {
    const { hex } = color;

    if (colorBgIndex !== null) {
      const updatedBgcolorColors = [...backgroudcolor];
      updatedBgcolorColors[colorBgIndex] = hex;
      setBackgroudcolor(updatedBgcolorColors);
      setBgcolor(updatedBgcolorColors[colorBgIndex]);
    }
  };

  const handleBackgroundColorPickerToggle = () => {
    setShowBgcolorPicker(!showBgcolorPicker);

    if (colorBgIndex !== null) {
      const updatedBgcolorColors = [...backgroudcolor];
      updatedBgcolorColors[colorBgIndex] = bgcolor;
      setBackgroudcolor(updatedBgcolorColors);
      setBgcolor(updatedBgcolorColors[colorBgIndex]);
    }
  };
  const handleBackgroundInputChange = (color) => {
    const updatedBgcolorColors = [...backgroudcolor];
    updatedBgcolorColors[colorBgIndex] = color;
    setBackgroudcolor(updatedBgcolorColors);
    setBgcolor(updatedBgcolorColors[colorBgIndex]);
  };
  //   bacgroudncolorpicker handler

  //   link text bg color handlers
  const handleLinkBgColorPicker = (color) => {
    const { hex } = color;

    if (colorLinkbgIndex !== null) {
      const updatedLinktcolorColors = [...linkbgcolor];
      updatedLinktcolorColors[colorLinkbgIndex] = hex;
      setLinkbgcolor(updatedLinktcolorColors);
      setLinkBgcolor(updatedLinktcolorColors[colorLinkbgIndex]);
    }
  };

  const handleLinkBgColorPickerToggle = () => {
    setShowLinkBgcolorPicker(!showLinkBgcolorPicker);

    if (colorLinkbgIndex !== null) {
      const updatedLinktcolorColors = [...linkbgcolor];
      updatedLinktcolorColors[colorLinkbgIndex] = linkBgcolor;
      setLinkbgcolor(updatedLinktcolorColors);
      setLinkBgcolor(updatedLinktcolorColors[colorLinkbgIndex]);
    }
  };

  const handleLinkBgInputChange = (color) => {
    const updatedLinktcolorColors = [...linkbgcolor];
    updatedLinktcolorColors[colorLinkbgIndex] = color;
    setLinkbgcolor(updatedLinktcolorColors);
    setLinkBgcolor(updatedLinktcolorColors[colorLinkbgIndex]);
  };
  //   link text bg color handlers

  // link text color picker handelres
  const handleLinkTextColorPicker = (color) => {
    const { hex } = color;

    if (colorLinktextIndex !== null) {
      const updatedSecondaryColors = [...linktextcolor];
      updatedSecondaryColors[colorLinktextIndex] = hex;
      setLinktextcolor(updatedSecondaryColors);
      setLinkTcolor(updatedSecondaryColors[colorLinktextIndex]);
    }
  };
  const handleSecondryColorPickerToggle = () => {
    setShowLtcolorPicker(!showLtcolorPicker);

    if (colorLinktextIndex !== null) {
      const updatedSecondaryColors = [...linktextcolor];
      updatedSecondaryColors[colorLinktextIndex] = linkTcolor;
      setLinktextcolor(updatedSecondaryColors);
      setLinkTcolor(updatedSecondaryColors[colorLinktextIndex]);
    }

    if (colorLinktextIndex === null) {
      showBgcolorPicker(showBgcolorPicker);
    }
  };
  const handleSecondaryInputChange = (color) => {
    const updatedSecondaryColors = [...linktextcolor];
    updatedSecondaryColors[colorLinktextIndex] = color;
    setLinktextcolor(updatedSecondaryColors);
    setLinkTcolor(updatedSecondaryColors[colorLinktextIndex]);
  };
  // link text color picker handelres

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
            <div className=" grid w-full grid-cols-2 gap-3 pb-2 md:grid-cols-4  lg:grid-cols-4 xl:max-w-[86%] xl:grid-cols-6 ">
              {backgroudcolor.map((color, index) => (
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
                    style={{ backgroundColor: linkbgcolor[index] }}
                  ></div>
                  <div
                    className="h-[32px] w-[35px] rounded-[3px] border dark:border-none"
                    style={{
                      backgroundColor: linktextcolor[index],
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
                  value={bgcolor}
                  onChange={(e) => handleBackgroundInputChange(e.target.value)}
                />
                <button
                  type="button"
                  className="absolute right-2 top-8 h-[28px] w-[30px] rounded-md border bg-blue-500 p-2 text-white dark:border-none"
                  style={{ backgroundColor: bgcolor }}
                  onClick={handleBackgroundColorPickerToggle}
                ></button>
                {showBgcolorPicker && (
                  <Chrome
                    style={{ width: "191px" }}
                    className="border  dark:border-none md:absolute md:mt-16"
                    color={bgcolor}
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
                  value={linkBgcolor}
                  onChange={(e) => handleLinkBgInputChange(e.target.value)}
                />
                <button
                  type="button"
                  className="absolute right-2 top-8 h-[28px] w-[30px] rounded-md border bg-blue-500 p-2 text-white dark:border-none"
                  style={{ backgroundColor: linkBgcolor }}
                  onClick={handleLinkBgColorPickerToggle}
                ></button>
                {showLinkBgcolorPicker && (
                  <Chrome
                    style={{ width: "191px" }}
                    className="md:absolute  md:mt-16 "
                    color={linkBgcolor}
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
                  value={linkTcolor}
                  onChange={(e) => handleSecondaryInputChange(e.target.value)}
                />
                <button
                  type="button"
                  className="absolute right-2 top-8 h-[28px] w-[30px] rounded-md border bg-blue-500 p-2 text-white dark:border-none"
                  style={{ backgroundColor: linkTcolor }}
                  onClick={handleSecondryColorPickerToggle}
                ></button>
                {showLtcolorPicker && (
                  <Chrome
                    style={{ width: "191px" }}
                    className="md:absolute  md:mt-16"
                    color={linkTcolor}
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

export default AppsColor;
