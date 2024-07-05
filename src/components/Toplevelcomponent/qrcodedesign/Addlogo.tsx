import React, { useState } from "react";
import defultpdfimg from "../../../assets/img/qrcold-icons/pdfimges/Group 191.svg";
import plusebutton from "../../../assets/img/qrcold-icons/pdfimges/material-symbols_add (1).svg";
import editbutton from "../../../assets/img/qrcold-icons/pdfimges/material-symbols_add.svg";
import { useApiContext } from "../../../contextapi/contextApi";

const Addlogo: React.FC = () => {
  const { selectedFilelog, setSelectedFilelog } = useApiContext();
  const [activeIndex, setActiveIndex] = useState<number>(1);
  const [selectedCoverFile, setSelectedCoverFile] =
    useState<string>(defultpdfimg);
  const [popoverVisible, setPopoverVisible] = useState(false);
  const handleFileChange = (
    event: React.ChangeEvent<HTMLInputElement>,
    fileType: string
  ) => {
    const file = event.target.files?.[0];

    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        if (fileType === "logo") {
          setSelectedFilelog(reader.result as string);
        }
      };

      reader.readAsDataURL(file);
    }
  };

  const toggleAccordion = (index: any) => {
    setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  const togglePopover = () => {
    setPopoverVisible(!popoverVisible);
  };

  const handelDeleteimg = (fileType: string) => {
    if (fileType === "cover") {
      setSelectedCoverFile(defultpdfimg);
    } else if (fileType === "logo") {
      setSelectedFilelog(null);
    }
  };
  return (
    <div className="space-y-2">
      <div className="rounded-lg border border-gray-300 bg-white">
        <div
          className="flex cursor-pointer items-center justify-between px-5 py-4"
          onClick={() => toggleAccordion(1)}
        >
          <span className="font-semibold text-[#1B254B] dark:text-gray-400">
            Add Logo
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
          <div className="mb-1 px-5">
            {/* logo Image Section */}

            <div className="mt-3 flex flex-col sm:flex-row">
              <label className="flex font-medium">Upload your logo here</label>
            </div>

            <div className="flex">
              <div className="relative flex py-5">
                <div className="relative">
                  <label htmlFor="logoFileInput">
                    <img
                      src={selectedFilelog || defultpdfimg}
                      alt="Selected File"
                      className="accordion-btn relative h-28 w-28 rounded-lg border-[2px] border-[#5D5FEF] p-5 text-sm text-white"
                    />
                  </label>
                  {selectedFilelog !== defultpdfimg ? (
                    <label
                      htmlFor="logoFileInput"
                      className="absolute -right-3 -top-3 cursor-pointer rounded-3xl bg-[#5D5FEF] p-1 text-white"
                    >
                      <img src={plusebutton} alt="" />
                    </label>
                  ) : (
                    <label
                      htmlFor="logoFileInput"
                      className="absolute -right-3 -top-3 cursor-pointer rounded-3xl bg-[#5D5FEF] p-1 text-white"
                    >
                      <img src={editbutton} alt="" />
                    </label>
                  )}
                </div>

                {/* File input */}
                <input
                  type="file"
                  accept="image/*"
                  onChange={(event) => handleFileChange(event, "logo")}
                  className="hidden"
                  id="logoFileInput"
                />
              </div>
              <div className="ml-4 flex items-center justify-center">
                {selectedFilelog !== null && (
                  <>
                    <button
                      type="button"
                      className="cursor-pointer rounded-3xl border border-[#5D5FEF] p-3 px-7 text-sm font-semibold text-[#5D5FEF]"
                      onClick={() => handelDeleteimg("logo")}
                    >
                      Delete
                    </button>
                  </>
                )}
              </div>
            </div>

            {/* logo Image Section */}
          </div>
        )}
      </div>
    </div>
  );
};

export default Addlogo;
