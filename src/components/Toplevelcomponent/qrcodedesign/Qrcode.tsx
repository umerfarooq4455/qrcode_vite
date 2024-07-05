import React, { useState } from "react";
import edit from "../../../assets/img/qrcold-icons/qrcode/mi_edit.svg";
import templateicon from "../../../assets/img/qrcold-icons/qrcode/tabler_box-model-2.svg";
import Checkbox from "../../checkbox";
import Frames from "./Frames";
import QrcodeStyle from "./QrcodeStyle";
import CorrectionLevel from "./CorrectionLevel";
import Addlogo from "./Addlogo";
import Mobilepreview from "../Mobilepreview/Mobilepreview";

const Qrcode: React.FC = () => {
  const [showInput, setShowInput] = useState<boolean>(false);

  const toggleInput = () => {
    setShowInput(!showInput);
  };

  return (
    <>
      <div className="dark:text-white">
        {/* heading */}
        <div>
          <h1 className="text-lg font-bold md:text-xl">Design the QR</h1>
          <p className="text-sm text-[#A3AED0]">
            Here you can personalize your QR Code with several options
          </p>

          <div className="mt-5 flex">
            <button
              type="button"
              className="flex items-center justify-center rounded-full border-2 border-[#5D5FEF] p-2 pr-4 text-[#5D5FEF]"
            >
              <img src={edit} alt="" className="px-2" />
              Personalized Design
            </button>
            <button
              type="button"
              className="mx-2 flex items-center justify-center rounded-full border-2 border-[#A3AED0] p-2 pr-4 text-[#A3AED0]"
            >
              <img src={templateicon} alt="" className="px-2" />
              Templates
            </button>
          </div>
        </div>
        {/* heading */}

        {/* dynamic qrcodes */}

        <div className="flex w-full flex-col justify-between py-4  lg:flex-row ">
          {/* Types cards */}
          <div className="h-auto overflow-x-hidden lg:h-[750px]  lg:w-full lg:overflow-y-visible  xl:w-full">
            <form>
              <div className="items-center justify-start rounded-lg bg-white p-4">
                <div className="flex">
                  <Checkbox
                    style={{
                      backgroundColor: showInput ? "#5D5FEF" : "white",
                    }}
                    checked={showInput}
                    onChange={toggleInput}
                  />
                  <label htmlFor="toggleInput" className="mx-2">
                    Save the template when finished
                  </label>
                </div>

                {showInput && (
                  <div className="mb-1 mt-2">
                    <input
                      type="text"
                      id="text"
                      className="block w-full rounded-lg border border-gray-300 bg-white p-4 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
                      placeholder="Name of your QR code..."
                    />
                  </div>
                )}
              </div>

              <div className="mb-3 mt-2">
                <Frames />
              </div>
              <div className="mb-3 mt-2">
                <QrcodeStyle />
              </div>
              <div className="mb-3 mt-2">
                <CorrectionLevel />
              </div>
              <div className="mb-3 mt-2">
                <Addlogo />
              </div>
            </form>
          </div>

          {/* mobile view on desktop */}
          <Mobilepreview />
          {/* mobile view on desktop */}
        </div>
      </div>
    </>
  );
};

export default Qrcode;
