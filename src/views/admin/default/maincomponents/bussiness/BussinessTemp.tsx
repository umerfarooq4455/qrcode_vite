import React, { useState } from "react";
import image3 from "./imges/Group 571.svg";
import image2 from "./imges/Group 570.svg";
import image1 from "./imges/Group 569.svg";
import { usePdfMode } from "../../../../../contextapi/PdfDynamicProvider";

interface Template {
  id: string;
  image: string;
  name: string;
}

const BussinessTemp: React.FC = () => {
  const { selectedpdfTemp, setSelectedpdfTemp } = usePdfMode();
  const [activeIndex, setActiveIndex] = useState<number | null>(1);

  const toggleAccordion = (index: number) => {
    setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  const Templates: Template[] = [
    {
      id: "1",
      image: image1,
      name: "Default",
    },
    {
      id: "2",
      image: image2,
      name: "Template 1",
    },
    {
      id: "3",
      image: image3,
      name: "Template 2",
    },
  ];

  const handelSelected = (id: string) => {
    setSelectedpdfTemp(id);
  };

  return (
    <div className="space-y-2">
      <div className="rounded-[10px] border-[1px] border-gray-300 bg-white px-5 font-dm text-[16px] font-semibold shadow-sm shadow-[#003EFF1A] dark:border-[#191A1F] dark:bg-[#13151E] dark:text-[#fff]">
        <div
          className="flex h-[45px] cursor-pointer items-center justify-between"
          onClick={() => toggleAccordion(1)}
        >
          <span className="text-[16px] font-semibold text-[#1B254B] dark:text-[#fff]">
            Select Template
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
          <div className="overflow-x-scroll">
            <div className="mb-2 mt-2 flex gap-3 pb-2">
              {Templates.map((temp) => (
                <div
                  key={temp.id}
                  onClick={() => handelSelected(temp.id)}
                  className={`min-w-[126px] rounded-[10px] bg-white dark:bg-[#212430] md:w-fit ${
                    selectedpdfTemp === temp.id
                      ? "border-2 border-[#5D5FEF] dark:border-[#5D5FEF]"
                      : "border-2 border-[#73779180]"
                  }`}
                >
                  <div className="flex items-center justify-center p-2 md:px-4 md:py-2">
                    <img
                      className=""
                      width={100}
                      height={80}
                      src={temp.image}
                      alt=""
                    />
                  </div>
                  <ul
                    className={`divide-y divide-gray-200 ${
                      selectedpdfTemp === temp.id
                        ? "border border-[#5D5FEF] dark:border-[#5D5FEF]"
                        : "border border-[#73779180]"
                    }`}
                  ></ul>
                  <div className="p-2 text-center text-[12px]">{temp.name}</div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default BussinessTemp;
