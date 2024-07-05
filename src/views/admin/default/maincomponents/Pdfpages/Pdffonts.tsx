import React, { useState } from "react";
import { usePdfMode } from "../../../../../contextapi/PdfDynamicProvider";

interface FontOption {
  value: string;
  name: string;
}

const Pdffonts: React.FC = () => {
  const { titleFont, setTitleFont, textFont, setTextFont, fontOptions } = usePdfMode();
  
  const [activeIndex, setActiveIndex] = useState<number | null>(1);

  const toggleAccordion = (index: number) => {
    setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <div className="space-y-2">
      <div className="rounded-[10px] border-[1px] border-gray-300 bg-white px-5 font-dm text-[16px] font-semibold shadow-sm shadow-[#003EFF1A] dark:border-[#191A1F] dark:bg-[#13151E] dark:text-[#fff]">
        <div
          className="flex h-[45px] cursor-pointer items-center justify-between"
          onClick={() => toggleAccordion(1)}
        >
          <span className="text-[16px] font-semibold text-[#1B254B] dark:text-[#fff]">
            Fonts
          </span>
          <svg
            className={`h-3 w-3 transform ${activeIndex === 1 ? "rotate-180" : "rotate-90"}`}
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
          <div className="mb-5 flex">
            <div className="mr-2 flex-grow">
              <label
                htmlFor="titleFont"
                className="mb-2 block text-[12px] font-semibold text-[#1B254B] dark:text-white"
              >
                Title
              </label>
              <select
                id="titleFont"
                value={titleFont}
                onChange={(e) => setTitleFont(e.target.value)}
                className="block w-full resize-none rounded-[10px] border border-gray-300 bg-white p-2.5 text-[16px] font-normal text-[#1B254B] dark:border-[#191A1F] dark:bg-[#212430] dark:text-white dark:placeholder-[#fff]"
              >
                {fontOptions.map((option: FontOption) => (
                  <option key={option.value} value={option.value}>
                    {option.name}
                  </option>
                ))}
              </select>
            </div>
            <div className="ml-2 flex-grow">
              <label
                htmlFor="textFont"
                className="mb-2 block text-[12px] font-semibold text-[#1B254B] dark:text-white"
              >
                Text
              </label>
              <select
                id="textFont"
                value={textFont}
                onChange={(e) => setTextFont(e.target.value)}
                className="block w-full resize-none rounded-[10px] border border-gray-300 bg-white p-2.5 text-[16px] font-normal text-[#1B254B] dark:border-[#191A1F] dark:bg-[#212430] dark:text-white dark:placeholder-[#fff]"
              >
                {fontOptions.map((option: FontOption) => (
                  <option key={option.value} value={option.value}>
                    {option.name}
                  </option>
                ))}
              </select>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Pdffonts;
