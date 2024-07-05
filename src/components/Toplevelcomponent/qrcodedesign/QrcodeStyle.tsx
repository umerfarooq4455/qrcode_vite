import React, { useState } from "react";
import defultimge from "../../../assets/img/qrcold-icons/qrcode/qrcodestyle/squrae.svg";
import card1 from "../../../assets/img/qrcold-icons/qrcode/qrcodestyle/rounded.svg";
import card2 from "../../../assets/img/qrcold-icons/qrcode/qrcodestyle/extrarounded.svg";
import card3 from "../../../assets/img/qrcold-icons/qrcode/qrcodestyle/dots.svg";
import card4 from "../../../assets/img/qrcold-icons/qrcode/qrcodestyle/classy.svg";
import card5 from "../../../assets/img/qrcold-icons/qrcode/qrcodestyle/extraclassy.svg";
import card6 from "../../../assets/img/qrcold-icons/qrcode/qrcodestyle/star.svg";
import card7 from "../../../assets/img/qrcold-icons/qrcode/qrcodestyle/starrounded.svg";
import card8 from "../../../assets/img/qrcold-icons/qrcode/qrcodestyle/corss.svg";
import card9 from "../../../assets/img/qrcold-icons/qrcode/qrcodestyle/heart.svg";
import card10 from "../../../assets/img/qrcold-icons/qrcode/qrcodestyle/snak.svg";
import Chrome from "react-color/es/Chrome";
import Checkbox from "../../checkbox";
import CornersStyle from "./CornersStyle";
import { useApiContext } from "../../../contextapi/contextApi";

type Template = {
  id: string;
  name: string;
  image: string;
};

const QrcodeStyle: React.FC = () => {
  const {
    setShapstyle,
    isToggleButtonActive,
    setIsToggleButtonActive,
    isToggleButtonActive1,
    setIsToggleButtonActive1,
    pattrencolor1,
    setPattrencolor1,
    pattrencolor2,
    setPattrencolor2,
    pattencolorrange,
    setPattencolorrange,
    pattenbgrange,
    setPattenbgrange,
    pattengradientType,
    setPattengradientType,
    pattrenframeid,
    setPattrenframeid,
    pattrenbgcolor1,
    setPattrenbgcolor1,
    pattrenbgcolor2,
    setPattrenbgcolor2,
    handleCheckboxChangepattrenbg,
    isCheckboxCheckedpatrendbg,
  } = useApiContext();

  const [activeIndex, setActiveIndex] = useState<number>(1);
  const [framcolorPicker, setFramcolorPicker] = useState<boolean>(false);
  const [color1Picker, setColor1Picker] = useState<boolean>(false);
  const [color2Picker, setColor2Picker] = useState<boolean>(false);
  const [bgcolor1Picker, setBgColor1Picker] = useState<boolean>(false);
  const [bgcolor2Picker, setBgColor2Picker] = useState<boolean>(false);
  const [framcolorPicker1, setFramcolorPicker1] = useState<boolean>(false);

  const toggleAccordion = (index: number) => {
    setActiveIndex((prevIndex) => (prevIndex === index ? 1 : index));
    setPattrenframeid(index === 0 ? null : true);
  };

  const handlershowCard = (index: number, temp: Template) => {
    setPattrenframeid(index);
    setShapstyle(temp.name);
  };

  const Templates: Template[] = [
    { id: "0", name: "square", image: defultimge },
    { id: "1", name: "rounded", image: card1 },
    { id: "2", name: "extra-rounded", image: card2 },
    { id: "3", name: "dots", image: card3 },
    { id: "4", name: "classy", image: card4 },
    { id: "5", name: "classy-rounded", image: card5 },
    { id: "6", name: "star", image: card6 },
    { id: "7", name: "starround", image: card7 },
    { id: "8", name: "cross", image: card8 },
    { id: "9", name: "heart", image: card9 },
    { id: "10", name: "snake", image: card10 },
  ];

  const handleToggleButtonClick = () => {
    setIsToggleButtonActive(!isToggleButtonActive);
  };

  const handleToggleButtonClick1 = () => {
    setIsToggleButtonActive1(!isToggleButtonActive1);
  };

  return (
    <div className="space-y-2">
      <div className="rounded-lg border border-[#EFEFEF] bg-white dark:border-[#191A1F] dark:bg-[#13151E]">
        <div
          className="flex cursor-pointer items-center justify-between px-5 py-4"
          onClick={() => toggleAccordion(0)}
        >
          <span className="font-semibold text-[#1B254B] dark:text-[#fff]">
            QR Code Style
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
          <div className="mb-3 px-2 md:px-3">
            <div className="max-w-screen-xl ">
              <div className="flex flex-wrap">
                {Templates.map((temp, index) => (
                  <div
                    onClick={() => handlershowCard(index + 1, temp)}
                    key={temp.id}
                    className={`mb-2 ml-2 flex h-[72px] w-[72px] items-center justify-center rounded-lg  p-0 py-2 ${
                      pattrenframeid === index + 1
                        ? "border-2 border-[#5D5FEF] bg-white dark:bg-[#212430]"
                        : "border-[1.24px] border-[#B8BAC7] bg-white hover:border-2 hover:border-[#5D5FEF] active:border-[#5D5FEF] dark:border-[#191A1F] dark:bg-[#212430]"
                    }`}
                  >
                    <button type="button">
                      <img src={temp.image} alt="" />
                    </button>
                  </div>
                ))}
              </div>
            </div>
            <div className=" px-2 md:px-3">
              <div>
                <p className="mt-2 font-semibold">Border and Background</p>
              </div>
              <div className="mb-8  mt-3">
                <p>Border Color</p>
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
                  <div className="peer h-4 w-11 rounded-full bg-gray-200 after:absolute after:-top-0.5 after:start-[2px] after:h-6 after:w-6 after:rounded-full after:border after:bg-[#5D5FEF] after:transition-all after:content-['']  peer-checked:bg-[#BAC6F3] peer-checked:after:translate-x-full peer-checked:after:border-white dark:border-gray-600 dark:bg-gray-700 dark:peer-focus:ring-blue-800 rtl:peer-checked:after:-translate-x-full"></div>
                  <span className="ms-3 text-sm font-medium text-gray-900 dark:text-gray-300">
                    Use gradients?
                  </span>
                </label>
                {/* gradient color default input */}
                <div className="">
                  {isToggleButtonActive ? (
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
                              value={pattengradientType}
                              onChange={(e) =>
                                setPattengradientType(e.target.value as string)
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
                              className="w-full rounded-md border border-[#B6C5FF] p-3 text-lg"
                              value={pattrencolor1}
                              onChange={(e) =>
                                setPattrencolor1(e.target.value as string)
                              }
                              onFocus={() => setColor1Picker(true)}
                              onBlur={() => setColor1Picker(false)}
                            />
                            {color1Picker && (
                              <Chrome
                                color={pattrencolor1}
                                onChange={(color:any) =>
                                  setPattrencolor1(color.hex)
                                }
                              />
                            )}
                          </div>
                        </div>

                        <div className="w-1/1 relative flex flex-col md:w-1/3 lg:mr-2">
                          <div className="flex flex-col">
                            <label className="mb-1 font-medium">
                              Gradient Color 2
                            </label>
                            <input
                              type="text"
                              className="w-full rounded-md border border-[#B6C5FF] p-3 text-lg"
                              value={pattrencolor2}
                              onChange={(e) =>
                                setPattrencolor2(e.target.value as string)
                              }
                              onFocus={() => setColor2Picker(true)}
                              onBlur={() => setColor2Picker(false)}
                            />
                            {color2Picker && (
                              <Chrome
                                color={pattrencolor2}
                                onChange={(color:any) =>
                                  setPattrencolor2(color.hex)
                                }
                              />
                            )}
                          </div>
                        </div>
                        {/* button 2 */}
                        <div className=" flex flex-col md:w-1/3 lg:ml-2">
                          <label className="block text-lg font-medium text-black">
                            Gradient Color Range
                          </label>
                          <input
                            type="range"
                            min="0"
                            max="100"
                            value={pattencolorrange}
                            onChange={(e) =>
                              setPattencolorrange(
                                parseInt(e.target.value, 10)
                              )
                            }
                            className="slider"
                            style={{
                              backgroundColor: "hsl(195, 100%, 50%)",
                            }}
                            id="price"
                          
                          />
                        </div>

                        <div className="flex flex-col md:w-1/3 lg:mr-2">
                          <div className="flex flex-col">
                            <label className="mb-1 font-medium">
                              Gradient Background
                            </label>
                            <input
                              type="text"
                              className="w-full rounded-md border border-[#B6C5FF] p-3 text-lg"
                              value={pattenbgrange}
                              onChange={(e) =>
                                setPattenbgrange(e.target.value as string)
                              }
                              onFocus={() => setBgColor1Picker(true)}
                              onBlur={() => setBgColor1Picker(false)}
                            />
                            {bgcolor1Picker && (
                              <Chrome
                                color={pattenbgrange}
                                onChange={(color:any) =>
                                  setPattenbgrange(color.hex)
                                }
                              />
                            )}
                          </div>
                        </div>

                        <div className="flex flex-col md:w-1/3 lg:mr-2">
                          <div className="flex flex-col">
                            <label className="mb-1 font-medium">
                              Gradient Background
                            </label>
                            <input
                              type="text"
                              className="w-full rounded-md border border-[#B6C5FF] p-3 text-lg"
                              value={pattrenbgcolor2}
                              onChange={(e) =>
                                setPattrenbgcolor2(e.target.value as string)
                              }
                              onFocus={() => setBgColor2Picker(true)}
                              onBlur={() => setBgColor2Picker(false)}
                            />
                            {bgcolor2Picker && (
                              <Chrome
                                color={pattrenbgcolor2}
                                onChange={(color:any) =>
                                  setPattrenbgcolor2(color.hex)
                                }
                              />
                            )}
                          </div>
                        </div>

                        <div className="flex flex-col md:w-1/3 lg:mr-2">
                          <div className="flex flex-col">
                            <Checkbox
                              
                              checked={isCheckboxCheckedpatrendbg}
                              onChange={handleCheckboxChangepattrenbg}
                            />
                          </div>
                        </div>
                      </div>
                    </>
                  ) : (
                    /* Single color settings when the toggle button is not active */
                    <div>
                      <div className="mt-2 flex">
                        <input
                          type="text"
                          className="rounded-lg border border-[#B6C5FF] p-3 text-lg"
                          value={pattrenbgcolor1}
                          onChange={(e) =>
                            setPattrenbgcolor1(e.target.value as string)
                          }
                          onFocus={() => setBgColor1Picker(true)}
                          onBlur={() => setBgColor1Picker(false)}
                        />
                        {bgcolor1Picker && (
                          <Chrome
                            color={pattrenbgcolor1}
                            onChange={(color:any) =>
                              setPattrenbgcolor1(color.hex)
                            }
                          />
                        )}
                      </div>
                      <div>
                        <label className="block text-lg font-medium text-black">
                          Background Color
                        </label>
                        <input
                          type="range"
                          min="0"
                          max="100"
                          value={pattencolorrange}
                          onChange={(e) =>
                            setPattencolorrange(parseInt(e.target.value, 10))
                          }
                          className="slider"
                          style={{
                            backgroundColor: "hsl(195, 100%, 50%)",
                          }}
                          id="price"
                         
                        />
                      </div>
                    </div>
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

export default QrcodeStyle;
