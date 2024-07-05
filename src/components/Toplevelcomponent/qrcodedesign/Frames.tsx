import React, { useState } from "react";
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
import card22 from "../../../assets/img/qrcold-icons/qrcode/Group 397.svg";
import card23 from "../../../assets/img/qrcold-icons/qrcode/coffee-cup.svg";
import Chrome from "react-color/es/Chrome";
import Checkbox from "../../checkbox";
import { useApiContext } from "../../../contextapi/contextApi";

const Frames: React.FC = () => {
  const {
    setFrameid,
    setTextData,
    textdata,
    setTextColor,
    textColor,
    setColor1,
    color1,
    setColor2,
    color2,
    setGradientType,
    gradientType,
    range,
    handleSliderChange,
    range1,
    handleSliderChange1,
    isToggleButtonActive,
    setIsToggleButtonActive,
    bgcolor1,
    setBgColor1,
    bgcolor2,
    setBgColor2,
    isToggleButtonActive1,
    setIsToggleButtonActive1,
    isCheckboxCheckedf,
    handleCheckboxChangef,
    frameid,
  } = useApiContext();

  const [activeIndex, setActiveIndex] = useState<number>(1);
  const [textColorPicker, setShowColorPicker] = useState<boolean>(false);
  const [framcolorPicker, setFramcolorPicker] = useState<boolean>(false);
  const [color1Picker, setColor1Picker] = useState<boolean>(false);
  const [color2Picker, setColor2Picker] = useState<boolean>(false);
  const [bgcolor1Picker, setBgColor1Picker] = useState<boolean>(false);
  const [bgcolor2Picker, setBgColor2Picker] = useState<boolean>(false);
  const [framcolorPicker1, setFramcolorPicker1] = useState<boolean>(false);

  const handleTextChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTextData(event.target.value);
  };

  const toggleAccordion = (index: number) => {
    setActiveIndex((prevIndex) => (prevIndex === index ? 1 : index));
    setFrameid(index === 0 ? null : true); // Adjusted equality check
    setFrameid(index);
  };

  const handlershowCard = (index: number) => {
    setFrameid(index);
  };

  const handleToggleButtonClick = () => {
    setIsToggleButtonActive(!isToggleButtonActive);
  };

  const handleToggleButtonClick1 = () => {
    setIsToggleButtonActive1(!isToggleButtonActive1);
  };

  const Templates = [
    { id: "0", image: defultimge },
    { id: "1", image: card1 },
    { id: "2", image: card2 },
    { id: "3", image: card3 },
    { id: "4", image: card4 },
    { id: "5", image: card5 },
    { id: "6", image: card6 },
    { id: "7", image: card7 },
    { id: "8", image: card8 },
    { id: "9", image: card9 },
    { id: "10", image: card10 },
    { id: "11", image: card11 },
    { id: "12", image: card12 },
    { id: "13", image: card13 },
    { id: "14", image: card14 },
    { id: "15", image: card15 },
    { id: "16", image: card16 },
    { id: "17", image: card17 },
    { id: "18", image: card18 },
    { id: "19", image: card19 },
    { id: "20", image: card20 },
    { id: "21", image: card21 },
    { id: "22", image: card22 },
    { id: "23", image: card23 },
  ];

  return (
    <div className="space-y-2">
      <div className="rounded-lg border border-[#EFEFEF] bg-white dark:border-[#191A1F] dark:bg-[#13151E]">
        <div
          className="flex cursor-pointer items-center justify-between px-5 py-4"
          onClick={() => toggleAccordion(0)}
        >
          <span className="font-semibold text-[#1B254B] dark:text-[#fff]">
            Frames
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
            <div className="h-[235px] max-w-screen-xl overflow-x-hidden overflow-y-visible">
              <div className="flex flex-wrap">
                {Templates.map((temp, index) => (
                  <div
                    onClick={() => handlershowCard(index)}
                    key={temp.id}
                    className={`mb-2 ml-2 flex h-[110px] w-[97px] items-center justify-center rounded-lg p-0 py-2 ${
                      frameid === index
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
            {frameid ? (
              <div className="px-2 md:px-3">
                <div className="mb-1 mt-2 flex flex-col">
                  <label>Text</label>
                  <input
                    type="text"
                    id="text"
                    maxLength={19}
                    onChange={handleTextChange}
                    value={textdata}
                    className="h-[45px] w-full rounded-[10px] border-[1px] border-[#73779166] bg-[#fff] px-5 text-sm text-gray-900 dark:border-[#191A1F] dark:bg-[#212430] dark:text-[#fff] dark:placeholder-[#fff] md:w-1/2"
                    placeholder="Scan Me!"
                  />
                </div>
                <div className="w-1/1 relative flex flex-col md:w-1/3">
                  <label className="mb-1 font-medium">Text Color</label>
                  <input
                    type="text"
                    name="textColor"
                    className="rounded-[10px] border-[1px] border-[#B8BAC7] p-2.5 text-[16px] font-normal text-[#1B254B] dark:border-[#191A1F] dark:bg-[#212430] dark:text-[#fff]"
                    placeholder="#000000"
                    value={textColor}
                    onFocus={() => setShowColorPicker(true)}
                    readOnly
                  />
                  {textColorPicker && (
                    <div className="absolute top-full mt-2 right-0 z-[1000]">
                      <Chrome
                        disableAlpha
                        color={textColor}
                        onChange={(color:any) => setTextColor(color.hex)}
                      />
                    </div>
                  )}
                </div>
                <div className="flex flex-wrap mt-4">
                  <div className="w-full relative flex flex-col md:w-1/3">
                    <label className="mb-1 font-medium">Primary Color</label>
                    <input
                      type="text"
                      name="color1"
                      className="rounded-[10px] border-[1px] border-[#B8BAC7] p-2.5 text-[16px] font-normal text-[#1B254B] dark:border-[#191A1F] dark:bg-[#212430] dark:text-[#fff]"
                      placeholder="#000000"
                      value={color1}
                      onFocus={() => setColor1Picker(true)}
                      readOnly
                    />
                    {color1Picker && (
                      <div className="absolute top-full mt-2 right-0 z-[1000]">
                        <Chrome
                          disableAlpha
                          color={color1}
                          onChange={(color:any) => setColor1(color.hex)}
                        />
                      </div>
                    )}
                  </div>
                  <div className="w-full relative flex flex-col md:w-1/3">
                    <label className="mb-1 font-medium">Secondary Color</label>
                    <input
                      type="text"
                      name="color2"
                      className="rounded-[10px] border-[1px] border-[#B8BAC7] p-2.5 text-[16px] font-normal text-[#1B254B] dark:border-[#191A1F] dark:bg-[#212430] dark:text-[#fff]"
                      placeholder="#000000"
                      value={color2}
                      onFocus={() => setColor2Picker(true)}
                      readOnly
                    />
                    {color2Picker && (
                      <div className="absolute top-full mt-2 right-0 z-[1000]">
                        <Chrome
                          disableAlpha
                          color={color2}
                          onChange={(color:any) => setColor2(color.hex)}
                        />
                      </div>
                    )}
                  </div>
                  <div className="w-full relative flex flex-col md:w-1/3">
                    <label className="mb-1 font-medium">Background Color 1</label>
                    <input
                      type="text"
                      name="bgcolor1"
                      className="rounded-[10px] border-[1px] border-[#B8BAC7] p-2.5 text-[16px] font-normal text-[#1B254B] dark:border-[#191A1F] dark:bg-[#212430] dark:text-[#fff]"
                      placeholder="#000000"
                      value={bgcolor1}
                      onFocus={() => setBgColor1Picker(true)}
                      readOnly
                    />
                    {bgcolor1Picker && (
                      <div className="absolute top-full mt-2 right-0 z-[1000]">
                        <Chrome
                          disableAlpha
                          color={bgcolor1}
                          onChange={(color:any) => setBgColor1(color.hex)}
                        />
                      </div>
                    )}
                  </div>
                  <div className="w-full relative flex flex-col md:w-1/3">
                    <label className="mb-1 font-medium">Background Color 2</label>
                    <input
                      type="text"
                      name="bgcolor2"
                      className="rounded-[10px] border-[1px] border-[#B8BAC7] p-2.5 text-[16px] font-normal text-[#1B254B] dark:border-[#191A1F] dark:bg-[#212430] dark:text-[#fff]"
                      placeholder="#000000"
                      value={bgcolor2}
                      onFocus={() => setBgColor2Picker(true)}
                      readOnly
                    />
                    {bgcolor2Picker && (
                      <div className="absolute top-full mt-2 right-0 z-[1000]">
                        <Chrome
                          disableAlpha
                          color={bgcolor2}
                          onChange={(color:any) => setBgColor2(color.hex)}
                        />
                      </div>
                    )}
                  </div>
                  <div className="w-full relative flex flex-col md:w-1/3">
                    <label className="mb-1 font-medium">Gradient Type</label>
                    <select
                      name="gradientType"
                      value={gradientType}
                      onChange={(e) => setGradientType(e.target.value)}
                      className="rounded-[10px] border-[1px] border-[#B8BAC7] p-2.5 text-[16px] font-normal text-[#1B254B] dark:border-[#191A1F] dark:bg-[#212430] dark:text-[#fff]"
                    >
                      <option value="linear">Linear</option>
                      <option value="radial">Radial</option>
                    </select>
                  </div>
                </div>
                <div className="w-full flex items-center mt-3 space-x-2">
                  <div className="w-1/2">
                    <label>Opacity</label>
                    <input
                      type="range"
                      min="1"
                      max="100"
                      value={range}
                      onChange={handleSliderChange}
                      className="w-full"
                    />
                  </div>
                  <div className="w-1/2">
                    <label>Blur</label>
                    <input
                      type="range"
                      min="1"
                      max="100"
                      value={range1}
                      onChange={handleSliderChange1}
                      className="w-full"
                    />
                  </div>
                </div>
                <div className="w-1/3 mt-4">
                  <label>Close Frame</label>
                  <div className="flex items-center mt-2">
                    <Checkbox
                      id="check1"
                      checked={isCheckboxCheckedf}
                      onChange={handleCheckboxChangef}
                    />
                    <label htmlFor="check1" className="ml-2">
                      show default image
                    </label>
                  </div>
                </div>
              </div>
            ) : null}
          </div>
        )}
      </div>
    </div>
  );
};

export default Frames;
