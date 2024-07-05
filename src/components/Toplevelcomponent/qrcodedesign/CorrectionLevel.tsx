import React, { useState } from "react";
import lq from "../../../assets/img/qrcold-icons/qrcode/correctionlevel/q 1.svg";
import lh from "../../../assets/img/qrcold-icons/qrcode/correctionlevel/h 1.svg";
import lm from "../../../assets/img/qrcold-icons/qrcode/correctionlevel/m 1.svg";
import ll from "../../../assets/img/qrcold-icons/qrcode/correctionlevel/l 1.svg";
import { useApiContext } from "../../../contextapi/contextApi";

interface Template {
  id: string;
  img: string;
  level: string;
  percent: string;
}

const CorrectionLevel: React.FC = () => {
  const { setErrorcorection, errorCorrectionLevel, setErrorCorrectionLevel } =
    useApiContext();
  const [activeIndex, setActiveIndex] = useState<number | null>(1);
  const [selectedCard, setSelectedCard] = useState<number>(0);

  const toggleAccordion = (index: number) => {
    setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  const handleCardClick = (index: number, temp: Template) => {
    setSelectedCard(index);
    setErrorcorection(index);
    const levels = temp.level.split(" ");
    const secondValue = levels[1];

    setErrorCorrectionLevel(secondValue);
    console.log("correct", secondValue);
  };

  const Templates: Template[] = [
    {
      id: "1",
      img: lq,
      level: "Level Q",
      percent: "25%",
    },
    {
      id: "2",
      img: lh,
      level: "Level H",
      percent: "30%",
    },
    {
      id: "3",
      img: lm,
      level: "Level M",
      percent: "15%",
    },
    {
      id: "4",
      img: ll,
      level: "Level L",
      percent: "7%",
    },
  ];

  return (
    <div className="space-y-2">
      <div className="rounded-lg border border-gray-300 bg-white">
        <div
          className="flex cursor-pointer items-center justify-between px-5 py-4 pt-4"
          onClick={() => toggleAccordion(1)}
        >
          <span className="font-semibold text-[#1B254B] dark:text-gray-400">
            Correction Level
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
          <div className="">
            <div className="px-5 text-[#A3AED0]">
              Ensures accurate reading by making up for any deformation or
              damage. Selecting a higher level makes the QR larger, but it also
              makes it easier to read.
            </div>
            <div className="mb-1 px-5 py-2">
              <div className="flex flex-wrap">
                {Templates.map((temp, index) => (
                  <div
                    key={index}
                    className={`relative mb-2 mr-2 h-[133px] w-[108px] rounded-lg border md:mb-0 ${
                      selectedCard === index
                        ? "border-4 border-[#5D5FEF] hover:border-[#5D5FEF]"
                        : "border-[#B6C5FF] hover:border-2 hover:border-[#B6C5FF]"
                    } bg-white py-2 dark:border-gray-700 dark:bg-gray-800`}
                    onClick={() => handleCardClick(index, temp)}
                  >
                    <div
                      className={`absolute right-0 top-0 flex w-[37px] justify-center rounded-bl-lg rounded-tr-md px-2 font-[12px] text-white ${
                        selectedCard === index
                          ? "rounded-tr-none bg-[#5D5FEF]"
                          : "bg-[#B6C5FF]"
                      }`}
                    >
                      {temp.percent}
                    </div>
                    <div className="mb-2 mt-4 flex items-center justify-center">
                      <img className="" src={temp.img} alt="" />
                    </div>
                    <ul className="divide-y divide-gray-200 border border-[#B6C5FF]"></ul>
                    <div className="text-center">{temp.level}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CorrectionLevel;
