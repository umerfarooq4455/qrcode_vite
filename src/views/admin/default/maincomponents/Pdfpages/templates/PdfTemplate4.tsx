import React from "react";
import { usePdfMode } from "../../../../../../contextapi/PdfDynamicProvider";

const PdfTemplate4: React.FC = () => {
  const {
    primary,
    secondary,
    textFont,
    titleFont,
    company,
    pdfTitle,
    description,
    website,
  } = usePdfMode();

  const slides =
    "https://images.pexels.com/photos/6529789/pexels-photo-6529789.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1";

  const gradientStyle = {
    background: `linear-gradient(to bottom, ${primary}, ${secondary})`,
  };

  return (
    <div
      style={gradientStyle}
      className="flex flex-col items-center overflow-y-auto rounded-bl-[30px] rounded-br-[30px] rounded-tl-[30px] rounded-tr-[30px] text-center dark:text-[#000]"
    >
      <div className="">
        <div className="pb-10 pt-12">
          <p
            style={{ fontFamily: textFont, wordBreak: "break-word" }}
            className="px-2 py-2 text-sm text-white"
          >
            {company}
          </p>
        </div>
        <div className="mx-2 rounded-sm bg-white">
          <div className="relative w-full px-4">
            <div className="absolute -top-10 flex items-center justify-center rounded-full bg-white p-2 shadow-md lg:left-[70px] xl:left-[80px]">
              <img
                src={slides}
                className="h-16 w-16 rounded-full object-cover"
                alt="Slide"
              />
            </div>
            <h4
              style={{ fontFamily: titleFont, wordBreak: "break-word" }}
              className="py-2 pt-10 text-lg"
            >
              {pdfTitle}
            </h4>
            <p
              style={{ fontFamily: textFont, wordBreak: "break-word" }}
              className="px-2 text-sm"
            >
              {description}
            </p>
          </div>
          <div className="mt-4 flex w-full items-center rounded-md p-2 px-2">
            <div className="flex w-full items-center justify-between">
              <div className="h-[50px] w-[50px]">
                <img
                  src={slides}
                  className="h-full w-full object-cover"
                  alt="Slide"
                />
              </div>
              <div className="flex flex-col px-2 text-start text-sm">
                <p style={{ fontFamily: textFont, wordBreak: "break-word" }}>
                  asdfasddasdfsdfsd
                </p>
                <p style={{ fontFamily: textFont, wordBreak: "break-word" }}>
                  asdfasdsdfasdfsdsdd
                </p>
              </div>
              <div>
                <svg
                  className={`h-3 w-3 rotate-90 transform`}
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
            </div>
          </div>
        </div>
        <div className="mt-2 text-white">
          <p style={{ fontFamily: textFont, wordBreak: "break-word" }}>
            {website}
          </p>
        </div>
      </div>
    </div>
  );
};

export default PdfTemplate4;
