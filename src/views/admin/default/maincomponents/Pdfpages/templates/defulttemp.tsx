import React, { useEffect, useState } from "react";
import { IoEyeSharp } from "react-icons/io5";
import { usePdfMode } from "../../../../../../contextapi/PdfDynamicProvider";

const Defulttemp: React.FC = () => {
  const {
    primary,
    secondary,
    titleFont,
    textFont,
    company,
    pdfTitle,
    description,
    website,
    buttonText,
  } = usePdfMode();
  const [currentSlide, setCurrentSlide] = useState<number>(0);

  const slides: string[] = [
    "https://images.pexels.com/photos/6529789/pexels-photo-6529789.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/19557055/pexels-photo-19557055/free-photo-of-snowy-peak-of-the-pic-du-midi-dossau-mountain.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  ];

  const nextSlide = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === slides.length - 1 ? 0 : prevSlide + 1
    );
  };

  const prevSlide = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === 0 ? slides.length - 1 : prevSlide - 1
    );
  };

  return (
    <div className="relative flex flex-col items-center overflow-y-auto rounded-bl-3xl rounded-br-3xl rounded-tl-3xl rounded-tr-3xl text-center">
      <div
        style={{ backgroundColor: primary }}
        className={`w-full rounded-tl-3xl rounded-tr-3xl pt-14 text-white`}
      >
        <div className="mb-4">
          <p
            style={{ fontFamily: textFont, wordBreak: "break-word" }}
            className="px-2 py-2 text-sm"
          >
            {company}
          </p>
          <h4
            style={{ fontFamily: titleFont, wordBreak: "break-word" }}
            className="py-2 text-lg"
          >
            {pdfTitle}
          </h4>
          <p
            style={{ fontFamily: textFont, wordBreak: "break-word" }}
            className="mb-11 px-2 py-2 text-sm"
          >
            {description}
          </p>
        </div>
      </div>

      <div
        style={{ backgroundColor: primary }}
        className="mb-48 flex h-[100px] items-center justify-center px-2"
      >
        <div className="mb-12 mt-36 flex items-center justify-center">
          <button
            type="button"
            onClick={prevSlide}
            className="mr-1 mt-12 flex h-2 w-2 items-center justify-center rounded-full border border-[#5D5FEF] p-4"
          >
            <span className="rounded-full">
              <svg
                className="h-4 w-4 text-[#5D5FEF] dark:text-gray-800 rtl:rotate-180"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 6 10"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M5 1 1 5l4 4"
                />
              </svg>
              <span className="sr-only">Previous</span>
            </span>
          </button>
          <div className="mt-16 flex w-full flex-col items-center justify-center rounded-md bg-white shadow-xl transition duration-700 ease-in-out">
            <img
              src={slides[currentSlide]}
              className="block w-full p-4"
              alt={`Slide ${currentSlide}`}
            />
            <div className="z-10 pb-2">
              <button
                style={{ backgroundColor: secondary }}
                type="button"
                className={`flex h-3 w-full items-center justify-center rounded-full p-5`}
              >
                <IoEyeSharp className="text-white" />{" "}
                <p
                  style={{ fontFamily: textFont, wordBreak: "break-word" }}
                  className="px-2 text-sm text-white"
                >
                  {buttonText}
                </p>
              </button>
            </div>
          </div>
          <button
            type="button"
            onClick={nextSlide}
            className="ml-1 mt-12 flex h-2 w-2 items-center justify-center rounded-full border border-[#5D5FEF] p-4"
          >
            <span className="rounded-full">
              <svg
                className="h-4 w-4 text-[#5D5FEF] dark:text-gray-800 rtl:rotate-180"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 6 10"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="m1 9 4-4-4-4"
                />
              </svg>
              <span className="sr-only">Next</span>
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Defulttemp;
