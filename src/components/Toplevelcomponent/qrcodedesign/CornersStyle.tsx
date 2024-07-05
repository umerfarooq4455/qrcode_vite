import React, { useState, useEffect } from "react";
import defultimge from "../../../assets/img/qrcold-icons/qrcode/corners/Group 317.svg";
import card1 from "../../../assets/img/qrcold-icons/qrcode/corners/Group 318.svg";
import card2 from "../../../assets/img/qrcold-icons/qrcode/corners/Group 319.svg";
import card3 from "../../../assets/img/qrcold-icons/qrcode/corners/Rectangle 582.svg";
import card4 from "../../../assets/img/qrcold-icons/qrcode/corners/Rectangle 584.svg";
import card5 from "../../../assets/img/qrcold-icons/qrcode/corners/Rectangle 586.svg";
import card6 from "../../../assets/img/qrcold-icons/qrcode/corners/Rectangle 588.svg";
import card7 from "../../../assets/img/qrcold-icons/qrcode/corners/Rectangle 599.svg";
import card8 from "../../../assets/img/qrcold-icons/qrcode/corners/Rectangle 601.svg";
import card9 from "../../../assets/img/qrcold-icons/qrcode/corners/Rectangle 602.svg";
import card10 from "../../../assets/img/qrcold-icons/qrcode/corners/Rectangle 603.svg";
import card11 from "../../../assets/img/qrcold-icons/qrcode/corners/Rectangle 604.svg";
import card12 from "../../../assets/img/qrcold-icons/qrcode/corners/Rectangle 605.svg";
import center1 from "../../../assets/img/qrcold-icons/qrcode/corners/Vector (1).svg";
import center2 from "../../../assets/img/qrcold-icons/qrcode/corners/Group 323.svg";
import center3 from "../../../assets/img/qrcold-icons/qrcode/corners/Group 322.svg";
import center4 from "../../../assets/img/qrcold-icons/qrcode/corners/Group 321.svg";
import center5 from "../../../assets/img/qrcold-icons/qrcode/corners/Rectangle 623.svg";
import center6 from "../../../assets/img/qrcold-icons/qrcode/corners/Vector.svg";
import center7 from "../../../assets/img/qrcold-icons/qrcode/corners/Group 320.svg";
import center8 from "../../../assets/img/qrcold-icons/qrcode/corners/Rectangle 619.svg";
import center9 from "../../../assets/img/qrcold-icons/qrcode/corners/Rectangle 617.svg";
import center10 from "../../../assets/img/qrcold-icons/qrcode/corners/Rectangle 615.svg";
import center11 from "../../../assets/img/qrcold-icons/qrcode/corners/Rectangle 613.svg";
import center12 from "../../../assets/img/qrcold-icons/qrcode/corners/Rectangle 611.svg";
import center13 from "../../../assets/img/qrcold-icons/qrcode/corners/Rectangle 609.svg";
import center14 from "../../../assets/img/qrcold-icons/qrcode/corners/Rectangle 607.svg";
import Chrome from "react-color/es/Chrome";
import { SketchPicker } from "react-color";
import { useApiContext } from "../../../contextapi/contextApi";

const QrcodeStyle = () => {
  const {
    cornershapid,
    setCornershapid,
    cornerdots,
    setCornerdots,
    cornersqurename,
    setCornersqurename,
    cornersSquarecolor1,
    setCornersSquarecolor1,
    cornersSquarecolor2,
    setCornersSquarecolor2,
    cornersSquaregradientType,
    setCornersSquaregradientType,
    cornersSquarecolorrange,
    setCornersSquarecolorrange,
    istoggelcorner,
    setIstoggelcorner,
    centerstyleid,
    setCenterstyleid,
    centerstylecolor1,
    setCenterstylecolor1,
    centerstylecolor2,
    setCenterstylecolor2,
    centerstylegradientType,
    setCenterstylegradientType,
    centerstylerange,
    setCenterstylerange,
    istoggelcenterstyle,
    setIstoggelcenterstyle,
  } = useApiContext();

  const [activeIndex, setActiveIndex] = useState(1);
  const [framcolorPicker, setFramcolorPicker] = useState(false);
  const [color1Picker, setColor1Picker] = useState(false);
  const [color2Picker, setColor2Picker] = useState(false);
  const [bgcolor1Picker, setBgColor1Picker] = useState(false);
  const [bgcolor2Picker, setBgColor2Picker] = useState(false);
  const [framcolorPicker1, setFramcolorPicker1] = useState(false);

  const handlershowCard = (index :any, temp :any) => {
    setCornershapid(index);
    setCornersqurename(temp.name);
  };

  const handlershowcenterstyle = (index :any, temp :any) => {
    setCenterstyleid(index);
    setCornerdots(temp.name);
  };

  const handleToggleButtonClick = () => {
    setIstoggelcorner(!istoggelcorner);
  };

  const handleToggleButtonClickcenter = () => {
    setIstoggelcenterstyle(!istoggelcenterstyle);
  };

  const Cornerstyle = [
    {
      id: "1",
      name: "square",
      image: card3,
    },
    {
      id: "2",
      name: "dot",
      image: card4,
    },
    {
      id: "3",
      name: "extra-rounded",
      image: card5,
    },
  ];

  const Centersyle = [
    {
      id: "1",
      name: "square",
      image: center14,
    },
    {
      id: "2",
      name: "dot",
      image: center13,
    },
  ];

  return (
    <div className=" border-gray-300 bg-white">
      <div>
        <p className="font-semibold">Corners</p>
      </div>
      <div className="mt-2 flex cursor-pointer items-center justify-between">
        <span className="font-medium text-[#1B254B] dark:text-gray-400">
          Border Style
        </span>
      </div>
      {activeIndex === 1 && (
        <div className="mb-3  mt-2">
          <div className="mx-auto max-w-screen-xl ">
            <div className="flex flex-wrap">
              {Cornerstyle.map((temp, index) => (
                <div
                  onClick={() => handlershowCard(index + 1, temp)}
                  key={temp.id}
                  className={`mb-2 mr-2 flex h-[40px] w-[40px] items-center justify-center rounded-lg border border-[#A3AED0] bg-white p-2  active:border-[#5D5FEF] dark:border-gray-700 dark:bg-gray-800 ${
                    cornershapid === index + 1
                      ? "border-4 border-[#5D5FEF]"
                      : ""
                  }`}
                >
                  <button type="button">
                    <img src={temp.image} alt="" />
                  </button>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-2 flex cursor-pointer items-center justify-between">
            <span className="font-medium text-[#1B254B] dark:text-gray-400">
              Center Style
            </span>
          </div>
          <div className="mx-auto mt-2 max-w-screen-xl">
            <div className="flex flex-wrap">
              {Centersyle.map((temp, index) => (
                <div
                  onClick={() => handlershowcenterstyle(index + 1, temp)}
                  key={temp.id}
                  className={`mb-2 mr-2 flex h-[40px] w-[40px] items-center justify-center rounded-lg border border-[#A3AED0] bg-white p-2  active:border-[#5D5FEF] dark:border-gray-700 dark:bg-gray-800 ${
                    centerstyleid === index + 1
                      ? "border-4 border-[#5D5FEF]"
                      : ""
                  }`}
                >
                  <button type="button">
                    <img src={temp.image} alt="" />
                  </button>
                </div>
              ))}
            </div>
          </div>

          {/* {selectedFile ? ( */}
          <div className="">
            <div className="mb-8  mt-3">
              <p>Border Color</p>
              <label className="relative inline-flex cursor-pointer items-center">
                <input
                  style={{
                    backgroundColor: istoggelcorner ? "#5D5FEF" : "white",
                  }}
                  type="checkbox"
                  value=""
                  className="peer sr-only bg-red-600"
                  checked={istoggelcorner}
                  onChange={handleToggleButtonClick}
                />
                <div className="peer h-4 w-11 rounded-full bg-gray-200 after:absolute after:-top-0.5 after:start-[2px] after:h-6 after:w-6 after:rounded-full after:border after:bg-[#5D5FEF] after:transition-all after:content-['']  peer-checked:bg-[#BAC6F3] peer-checked:after:translate-x-full peer-checked:after:border-white dark:border-gray-600 dark:bg-gray-700 dark:peer-focus:ring-blue-800 rtl:peer-checked:after:-translate-x-full"></div>
                <span className="ms-3 text-sm font-medium text-gray-900 dark:text-gray-300">
                  Use gradients?
                </span>
              </label>
              {/* garadent color defult input  */}
              <div className="">
                {istoggelcorner ? (
                  /* Gradient settings when the toggle button is active */
                  <>
                    <div className="flex flex-col lg:flex-row lg:items-center lg:justify-evenly ">
                      <div className="w-1/1  relative flex flex-col md:w-1/3">
                        <div className="flex flex-col">
                          <label className="mb-1 font-medium">
                            Gradient Type
                          </label>
                          <select
                            className="w-full rounded-md border border-[#B6C5FF] p-3 text-lg"
                            value={cornersSquaregradientType}
                            onChange={(e) =>
                              setCornersSquaregradientType(e.target.value)
                            }
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
                            name="textcornersSquarecolor1Color"
                            className="rounded-md border  border-[#B6C5FF] p-3 text-lg "
                            placeholder="#000000"
                            value={cornersSquarecolor1}
                            onChange={(e) =>
                              setCornersSquarecolor1(e.target.value)
                            }
                          />
                          <button
                            type="button"
                            className="absolute right-2 top-10 h-[32px] w-[40px] rounded-md bg-blue-500 p-2 text-white"
                            style={{ backgroundColor: cornersSquarecolor1 }}
                            onClick={() => setColor1Picker(!color1Picker)}
                          ></button>
                          {color1Picker && (
                            <div className="z-10 md:absolute">
                              <Chrome
                                className="md:absolute md:mt-20"
                                color={cornersSquarecolor1}
                                onChange={(color:any) =>
                                  setCornersSquarecolor1(color.hex)
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
                            name="cornersSquarecolor1"
                            className="w-full rounded-md border border-[#B6C5FF] p-3 text-lg"
                            placeholder="#FFFFFF"
                            value={cornersSquarecolor2}
                            onChange={(e) =>
                              setCornersSquarecolor2(e.target.value)
                            }
                          />
                          <button
                            type="button"
                            className="absolute right-2 top-10 h-[32px] w-[40px] rounded-md bg-blue-500 p-2 text-white"
                            style={{ backgroundColor: cornersSquarecolor2 }}
                            onClick={() => setColor2Picker(!color2Picker)}
                          ></button>
                          {color2Picker && (
                            <div className="z-10 md:absolute">
                              <Chrome
                                className="md:absolute  md:mt-20"
                                color={cornersSquarecolor2}
                                onChange={(color:any) =>
                                  setCornersSquarecolor2(color.hex)
                                }
                              />
                            </div>
                          )}
                        </div>
                      </div>
                    </div>

                    {cornersSquaregradientType === "linear" && (
                      <div className="relative flex flex-col  lg:mx-2">
                        <div className="mb-2">
                          <div className="flex flex-col">
                            <label className="mb-2 mt-3 font-medium">
                              Rotation
                            </label>
                            <input
                              type="range"
                              name="range"
                              className="h-2 w-full cursor-pointer appearance-none rounded-lg bg-[#B4C4FF]  dark:bg-gray-700 [&::-webkit-slider-thumb]:h-2.5
                              [&::-webkit-slider-thumb]:w-2.5
                              [&::-webkit-slider-thumb]:appearance-none
                              [&::-webkit-slider-thumb]:rounded-full
                              [&::-webkit-slider-thumb]:bg-white
                              [&::-webkit-slider-thumb]:shadow-[0_0_0_4px_rgba(118,139,217,1)]"
                              value={cornersSquarecolorrange}
                              onChange={(e) =>
                                setCornersSquarecolorrange(e.target.value)
                              }
                            />
                          </div>
                          <div className="flex justify-between">
                            <p>0°</p>
                            <p>360°</p>
                          </div>
                        </div>
                      </div>
                    )}
                  </>
                ) : (
                  <>
                    <div className="w-1/1 relative flex flex-col md:w-1/3">
                      {/* <label className="mb-1 font-medium">Text Color</label> */}
                      <input
                        type="text"
                        name="textColor"
                        className="rounded-md border border-[#B6C5FF]  p-3 text-lg md:mt-1 "
                        placeholder="#000000"
                        value={cornersSquarecolor1}
                        onChange={(e) => setCornersSquarecolor1(e.target.value)}
                      />
                      <button
                        type="button"
                        className="absolute right-2 top-4 h-[32px] w-[40px] rounded-md bg-blue-500 p-2 text-white"
                        style={{ backgroundColor: cornersSquarecolor1 }}
                        onClick={() => setFramcolorPicker(!framcolorPicker)}
                      ></button>
                      {framcolorPicker && (
                        <div className="z-10 md:absolute">
                          <Chrome
                            className="md:absolute md:mt-14"
                            color={cornersSquarecolor1}
                            onChange={(color:any) =>
                              setCornersSquarecolor1(color.hex)
                            }
                          />
                        </div>
                      )}
                    </div>
                  </>
                )}
              </div>
            </div>

            <div className="mb-8  mt-3">
              <p>Background Color</p>
              <label className="relative inline-flex cursor-pointer items-center">
                <input
                  style={{
                    backgroundColor: istoggelcenterstyle ? "#5D5FEF" : "white",
                  }}
                  type="checkbox"
                  value=""
                  className="peer sr-only bg-red-600"
                  checked={istoggelcenterstyle}
                  onChange={handleToggleButtonClickcenter}
                />
                <div className="peer h-4 w-11 rounded-full bg-gray-200 after:absolute after:-top-0.5 after:start-[2px] after:h-6 after:w-6 after:rounded-full after:border after:bg-[#5D5FEF] after:transition-all after:content-['']  peer-checked:bg-[#BAC6F3] peer-checked:after:translate-x-full peer-checked:after:border-white dark:border-gray-600 dark:bg-gray-700 dark:peer-focus:ring-blue-800 rtl:peer-checked:after:-translate-x-full"></div>
                <span className="ms-3 text-sm font-medium text-gray-900 dark:text-gray-300">
                  Use gradients?
                </span>
              </label>
              <div className="">
                {istoggelcenterstyle ? (
                  <>
                    <div className="flex flex-col lg:flex-row lg:items-center lg:justify-evenly ">
                      <div className="w-1/1  relative flex flex-col md:w-1/3">
                        <div className="flex flex-col">
                          <label className="mb-1 font-medium">
                            Gradient Type
                          </label>
                          <select
                            className="w-full rounded-md border border-[#B6C5FF] p-3 text-lg"
                            value={centerstylegradientType}
                            onChange={(e) =>
                              setCenterstylegradientType(e.target.value)
                            }
                          >
                            <option value="linear">Linear</option>
                            <option value="radial">Radial</option>
                          </select>
                        </div>
                      </div>

                      <div className="w-1/1 relative flex flex-col md:w-1/3 lg:mx-2">
                        <div className="flex flex-col">
                          <label className="mb-1 font-medium">Color 1</label>
                          <input
                            type="text"
                            name="centerstylecolor1"
                            className="rounded-md border  border-[#B6C5FF] p-3 text-lg "
                            placeholder="#000000"
                            value={centerstylecolor1}
                            onChange={(e) =>
                              setCenterstylecolor1(e.target.value)
                            }
                          />
                          <button
                            type="button"
                            className="absolute right-2 top-10 h-[32px] w-[40px] rounded-md bg-blue-500 p-2 text-white"
                            style={{ backgroundColor: centerstylecolor1 }}
                            onClick={() => setBgColor1Picker(!bgcolor1Picker)}
                          ></button>
                          {bgcolor1Picker && (
                            <div className="z-10 md:absolute">
                              <Chrome
                                className="md:absolute md:mt-20"
                                color={centerstylecolor1}
                                onChange={(color:any) =>
                                  setCenterstylecolor1(color.hex)
                                }
                              />
                            </div>
                          )}
                        </div>
                      </div>

                      <div className="w-1/1 relative flex flex-col md:w-1/3">
                        <div className="flex flex-col">
                          <label className="mb-1 font-medium">Color 2</label>
                          <input
                            type="text"
                            name="centerstylecolor2"
                            className="w-full rounded-md border border-[#B6C5FF] p-3 text-lg"
                            placeholder="#FFFFFF"
                            value={centerstylecolor2}
                            onChange={(e) =>
                              setCenterstylecolor2(e.target.value)
                            }
                          />
                          <button
                            type="button"
                            className="absolute right-2 top-10 h-[32px] w-[40px] rounded-md bg-blue-500 p-2 text-white"
                            style={{ backgroundColor: centerstylecolor2 }}
                            onClick={() => setBgColor2Picker(!bgcolor2Picker)}
                          ></button>
                          {bgcolor2Picker && (
                            <div className="z-10 md:absolute">
                              <Chrome
                                className="md:absolute md:mt-20"
                                color={centerstylecolor2}
                                onChange={(color:any) =>
                                  setCenterstylecolor2(color.hex)
                                }
                              />
                            </div>
                          )}
                        </div>
                      </div>
                    </div>

                    {centerstylegradientType === "linear" && (
                      <div className="relative flex flex-col  lg:mx-2">
                        <div className="mb-2">
                          <div className="flex flex-col">
                            <label className="mb-2 mt-3 font-medium">
                              Rotation
                            </label>
                            <input
                              type="range"
                              name="range"
                              className="h-2 w-full cursor-pointer appearance-none rounded-lg bg-[#B4C4FF]  dark:bg-gray-700 [&::-webkit-slider-thumb]:h-2.5
                              [&::-webkit-slider-thumb]:w-2.5
                              [&::-webkit-slider-thumb]:appearance-none
                              [&::-webkit-slider-thumb]:rounded-full
                              [&::-webkit-slider-thumb]:bg-white
                              [&::-webkit-slider-thumb]:shadow-[0_0_0_4px_rgba(118,139,217,1)]"
                              value={centerstylerange}
                              onChange={(e) =>
                                setCenterstylerange(e.target.value)
                              }
                            />
                          </div>
                          <div className="flex justify-between">
                            <p>0°</p>
                            <p>360°</p>
                          </div>
                        </div>
                      </div>
                    )}
                  </>
                ) : (
                  <>
                    <div className="w-1/1 relative flex flex-col md:w-1/3">
                      <input
                        type="text"
                        name="centerstylecolor1"
                        className="rounded-md border border-[#B6C5FF] p-3 text-lg md:mt-1 "
                        placeholder="#000000"
                        value={centerstylecolor1}
                        onChange={(e) => setCenterstylecolor1(e.target.value)}
                      />
                      <button
                        type="button"
                        className="absolute right-2 top-4 h-[32px] w-[40px] rounded-md bg-blue-500 p-2 text-white"
                        style={{ backgroundColor: centerstylecolor1 }}
                        onClick={() => setFramcolorPicker1(!framcolorPicker1)}
                      ></button>
                      {framcolorPicker1 && (
                        <div className="z-10 md:absolute">
                          <Chrome
                            className="md:absolute md:mt-14"
                            color={centerstylecolor1}
                            onChange={(color:any) =>
                              setCenterstylecolor1(color.hex)
                            }
                          />
                        </div>
                      )}
                    </div>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default QrcodeStyle;
