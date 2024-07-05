import React, { useState } from "react";
import { SketchPicker } from "react-color";
import Checkbox from "../../checkbox/index";

import defultimge from "../../../assets/img/qrcold-icons/qrcode/ant-design_stop-outlined.svg";
import card1 from "../../../assets/img/qrcold-icons/qrcode/Group 376.svg";
import card2 from "../../../assets/img/qrcold-icons/qrcode/Group 377.svg";
import card3 from "../../../assets/img/qrcold-icons/qrcode/Group 378.svg";
import card4 from "../../../assets/img/qrcold-icons/qrcode/Group 379.svg";
import card5 from "../../../assets/img/qrcold-icons/qrcode/Group 380.svg";
import card6 from "../../../assets/img/qrcold-icons/qrcode/Group 381.svg";
import card7 from "../../../assets/img/qrcold-icons/qrcode/Group 382.svg";
import card8 from "../../../assets/img/qrcold-icons/qrcode/Group 383.svg";
import card9 from "../../../assets/img/qrcold-icons/qrcode/Group 384.svg";
import card10 from "../../../assets/img/qrcold-icons/qrcode/Group 385.svg";
import card11 from "../../../assets/img/qrcold-icons/qrcode/Group 386.svg";
import card12 from "../../../assets/img/qrcold-icons/qrcode/Group 387.svg";
import card13 from "../../../assets/img/qrcold-icons/qrcode/Group 388.svg";
import card14 from "../../../assets/img/qrcold-icons/qrcode/Group 389.svg";
import card15 from "../../../assets/img/qrcold-icons/qrcode/Group 390.svg";
import card16 from "../../../assets/img/qrcold-icons/qrcode/Group 391.svg";
import card17 from "../../../assets/img/qrcold-icons/qrcode/Group 392.svg";
import card18 from "../../../assets/img/qrcold-icons/qrcode/Group 393.svg";
import card19 from "../../../assets/img/qrcold-icons/qrcode/Group 394.svg";
import card20 from "../../../assets/img/qrcold-icons/qrcode/Group 395.svg";
import card21 from "../../../assets/img/qrcold-icons/qrcode/Group 396.svg";
import card22 from "../../../assets/img/qrcold-icons/qrcode/Group 398.svg";
import card23 from "../../../assets/img/qrcold-icons/qrcode/Group 397.svg";
import card24 from "../../../assets/img/qrcold-icons/qrcode/Group 399.svg";
import card25 from "../../../assets/img/qrcold-icons/qrcode/Group 400.svg";

const Frames = () => {
  const [activeIndex, setActiveIndex] = useState(1);
  const [isToggleButtonActive, setIsToggleButtonActive] = useState(false);
  const [framcolor, setFramcolor] = useState("#000000");
  const [framcolorPicker, setFramcolorPicker] = useState(false);
  const [gradientType, setGradientType] = useState("linear");
  const [color1, setColor1] = useState("#000000");
  const [color2, setColor2] = useState("#000000");
  const [range, setRange] = useState(0);
  const [color1Picker, setColor1Picker] = useState(false);
  const [color2Picker, setColor2Picker] = useState(false);
  const [bgcolor1, setBgColor1] = useState("#000000");
  const [bgcolor2, setBgColor2] = useState("#000000");
  const [bgcolor1Picker, setBgColor1Picker] = useState(false);
  const [bgcolor2Picker, setBgColor2Picker] = useState(false);
  const [range1, setRange1] = useState(0);
  const [isToggleButtonActive1, setIsToggleButtonActive1] = useState(false);
  const [framcolor1, setFramcolor1] = useState("#000000");
  const [framcolorPicker1, setFramcolorPicker1] = useState(false);

  const toggleAccordion = (index: number) => {
    setActiveIndex((prevIndex) => (prevIndex === index ? 1 : index));
  };

  const handleToggleButtonClick = () => {
    setIsToggleButtonActive(!isToggleButtonActive);
  };

  const handleToggleButtonClick1 = () => {
    setIsToggleButtonActive1(!isToggleButtonActive1);
  };

  return (
    <div className="space-y-2">
      <div className="rounded-lg border border-gray-300 bg-white">
        <div
          className="flex cursor-pointer items-center justify-between p-5"
          onClick={() => toggleAccordion(0)}
        >
          <span className="font-semibold text-[#1B254B] dark:text-gray-400">
            Frame Color
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
          <div className="px-2 md:px-3">
            <div className="px-2 md:px-3">
              <div className="mb-8 mt-3">
                <label className="relative inline-flex cursor-pointer items-center">
                  <input
                    style={{
                      backgroundColor: isToggleButtonActive
                        ? "#5D5FEF"
                        : "white",
                    }}
                    type="checkbox"
                    value=""
                    className="peer sr-only bg-red-600"
                    checked={isToggleButtonActive}
                    onChange={handleToggleButtonClick}
                  />
                  <div className="peer h-4 w-11 rounded-full bg-gray-200 after:absolute after:-top-0.5 after:start-[2px] after:h-6 after:w-6 after:rounded-full after:border after:bg-[#5D5FEF] after:transition-all after:content-[''] peer-checked:bg-[#BAC6F3] peer-checked:after:translate-x-full peer-checked:after:border-white rtl:peer-checked:after:-translate-x-full dark:border-gray-600 dark:bg-gray-700 dark:peer-focus:ring-blue-800"></div>
                  <span className="ms-3 text-sm font-medium text-gray-900 dark:text-gray-300">
                    Use gradients?
                  </span>
                </label>
                <div className="">
                  {isToggleButtonActive ? (
                    <>
                      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-evenly">
                        <div className="w-1/1 relative flex flex-col md:w-1/3">
                          <div className="flex flex-col">
                            <label className="mb-1 font-medium">
                              Gradient Type
                            </label>
                            <select
                              className="w-full rounded-md border border-[#B6C5FF] p-3 text-lg"
                              value={gradientType}
                              onChange={(e) => setGradientType(e.target.value)}
                            >
                              <option value="linear">Linear</option>
                              <option value="radial">Radial</option>
                            </select>
                          </div>
                        </div>

                        <div className="w-1/1 relative flex flex-col md:w-1/3 lg:mx-2">
                          <div className="flex flex-col">
                            <label className="mb-1 font-medium">
                              Gradient Color 1
                            </label>
                            <input
                              type="text"
                              name="textColor"
                              className="rounded-md border border-[#B6C5FF] p-3 text-lg"
                              placeholder="#000000"
                              value={color1}
                              onChange={(e) => setColor1(e.target.value)}
                            />
                            <button
                              type="button"
                              className="absolute right-2 top-10 h-[32px] w-[40px] rounded-md bg-blue-500 p-2 text-white"
                              style={{ backgroundColor: color1 }}
                              onClick={() => setColor1Picker(!color1Picker)}
                            ></button>
                            {color1Picker && (
                              <div className="z-10 md:absolute">
                                <SketchPicker
                                  className="md:absolute"
                                  color={color1}
                                  onChange={(color: any) =>
                                    setColor1(color.hex)
                                  }
                                />
                              </div>
                            )}
                          </div>
                        </div>

                        <div className="w-1/1 relative flex flex-col md:w-1/3">
                          <div className="flex flex-col">
                            <label className="mb-1 font-medium">
                              Gradient Color 2
                            </label>
                            <input
                              type="text"
                              name="color2"
                              className="w-full rounded-md border border-[#B6C5FF] p-3 text-lg"
                              placeholder="#FFFFFF"
                              value={color2}
                              onChange={(e) => setColor2(e.target.value)}
                            />
                            <button
                              type="button"
                              className="absolute right-2 top-10 h-[32px] w-[40px] rounded-md bg-blue-500 p-2 text-white"
                              style={{ backgroundColor: color2 }}
                              onClick={() => setColor2Picker(!color2Picker)}
                            ></button>
                            {color2Picker && (
                              <div className="z-10 md:absolute">
                                <SketchPicker
                                  className="md:absolute"
                                  color={color2}
                                  onChange={(color: any) =>
                                    setColor2(color.hex)
                                  }
                                />
                              </div>
                            )}
                          </div>
                        </div>
                      </div>
                      <div className="mt-2 w-100 relative flex flex-col md:w-1/3">
                        <div className="flex flex-col">
                          <label className="mb-1 font-medium">
                            Gradient Range
                          </label>
                          <input
                            type="number"
                            name="range"
                            className="rounded-md border border-[#B6C5FF] p-3 text-lg"
                            placeholder="10"
                            value={range}
                            onChange={(e) => setRange(parseInt(e.target.value))}
                          />
                        </div>
                      </div>
                    </>
                  ) : (
                    <>
                      <div className="w-100 relative flex flex-col md:w-1/3">
                        <div className="flex flex-col">
                          <label className="mb-1 font-medium">
                            Frame Color
                          </label>
                          <input
                            type="text"
                            name="framcolor"
                            className="rounded-md border border-[#B6C5FF] p-3 text-lg"
                            placeholder="#000000"
                            value={framcolor}
                            onChange={(e) => setFramcolor(e.target.value)}
                          />
                          <button
                            type="button"
                            className="absolute right-2 top-10 h-[32px] w-[40px] rounded-md bg-blue-500 p-2 text-white"
                            style={{ backgroundColor: framcolor }}
                            onClick={() => setFramcolorPicker(!framcolorPicker)}
                          ></button>
                          {framcolorPicker && (
                            <div className="z-10 md:absolute">
                              <SketchPicker
                                className="md:absolute"
                                color={framcolor}
                                onChange={(color: any) =>
                                  setFramcolor(color.hex)
                                }
                              />
                            </div>
                          )}
                        </div>
                      </div>
                    </>
                  )}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Frames;
