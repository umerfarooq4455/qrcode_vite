import React, { useState } from "react";

interface FontOption {
  name: string;
  value: string;
}

const Font: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(1);

  const fontOptions: FontOption[] = [
    { name: "Lato", value: "Lato" },
    { name: "Open Sans", value: "Open Sans" },
    { name: "Roboto", value: "Roboto" },
    { name: "Oswald", value: "Oswald" },
    { name: "Source Code Pro", value: "Source Code Pro" },
    { name: "Slabo 27px", value: "Slabo 27px" },
    { name: "Raleway", value: "Raleway" },
    { name: "Merriweather", value: "Merriweather" },
    { name: "Noto Sans", value: "Noto Sans" },
    { name: "Economica", value: "Economica" },
    { name: "Inconsolata", value: "Inconsolata" },
    { name: "Dancing Script", value: "Dancing Script" },
    { name: "Barlow", value: "Barlow" },
    { name: "Comfortaa", value: "Comfortaa" },
    { name: "Crimson Text", value: "Crimson Text" },
    { name: "EB Garamond", value: "EB Garamond" },
    { name: "Fira Sans", value: "Fira Sans" },
    { name: "Josefin Sans", value: "Josefin Sans" },
    { name: "Karla", value: "Karla" },
    { name: "Manrope", value: "Manrope" },
    { name: "Mukta", value: "Mukta" },
    { name: "Montserrat", value: "Montserrat" },
    { name: "Prompt", value: "Prompt" },
    { name: "PT Serif", value: "PT Serif" },
    { name: "Space Grotesk", value: "Space Grotesk" },
    { name: "Titillium Web", value: "Titillium Web" },
    { name: "Ubuntu", value: "Ubuntu" },
    { name: "Bebas Neue", value: "Bebas Neue" },
    { name: "Outfit", value: "Outfit" },
    { name: "Righteous", value: "Righteous" },
    { name: "Lobster", value: "Lobster" },
    { name: "Questrial", value: "Questrial" },
    { name: "Manjari", value: "Manjari" },
    { name: "Capriola", value: "Capriola" },
  ];

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
          <div>
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
                  className="block w-full resize-none rounded-[10px] border border-gray-300 bg-white p-2.5 text-[16px] font-normal text-[#1B254B] dark:border-[#191A1F] dark:bg-[#212430] dark:text-white dark:placeholder-[#fff]"
                >
                  {fontOptions.map((option) => (
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
                  Texts
                </label>
                <select
                  id="textFont"
                  className="block w-full resize-none rounded-[10px] border border-gray-300 bg-white p-2.5 text-[16px] font-normal text-[#1B254B] dark:border-[#191A1F] dark:bg-[#212430] dark:text-white dark:placeholder-[#fff]"
                >
                  {fontOptions.map((option) => (
                    <option key={option.value} value={option.value}>
                      {option.name}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Font;
