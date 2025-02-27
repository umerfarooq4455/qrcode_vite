import React, { useState } from "react";
import defultpdfimg from "../../../../../assets/img/qrcold-icons/pdfimges/Group 191.svg";
import plusebutton from "../../../../../assets/img/qrcold-icons/pdfimges/material-symbols_add (1).svg";
import editbutton from "../../../../../assets/img/qrcold-icons/pdfimges/material-symbols_add.svg";
import upload from "./mp3imges/upload.svg";

interface InputField {
  name: string;
  url: string;
}

const Bacisinformation: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(1);
  const [selectedFile, setSelectedFile] = useState<string>(defultpdfimg);
  const [selectedCoverFile, setSelectedCoverFile] = useState<string>(
    defultpdfimg
  );
  const [isImageSelected, setIsImageSelected] = useState<boolean>(false);
  const [inputs, setInputs] = useState<InputField[]>([]);
  const [buttonVisible, setButtonVisible] = useState<boolean>(true);
  const [fileName, setFileName] = useState<string>("Rain.mp3");

  const addInputFieldPair = () => {
    setInputs([...inputs, { name: "", url: "" }]);
    setButtonVisible(false); // Hide the button after it is clicked
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files.length > 0) {
      setFileName(event.target.files[0].name);
    }
  };

  const handleFileChange = (
    event: React.ChangeEvent<HTMLInputElement>,
    fileType: "cover" | "logo"
  ) => {
    const file = event.target.files && event.target.files[0];

    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        if (fileType === "cover") {
          setSelectedCoverFile(reader.result as string);
        } else if (fileType === "logo") {
          setSelectedFile(reader.result as string);
        }
      };

      reader.readAsDataURL(file);
    }
  };

  const toggleAccordion = (index: number) => {
    setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  const handelDeleteimg = (fileType: "cover" | "logo") => {
    if (fileType === "cover") {
      setSelectedCoverFile(defultpdfimg);
    } else if (fileType === "logo") {
      setSelectedFile(defultpdfimg);
    }
  };

  return (
    <div className="space-y-2">
      <div className="rounded-[10px] border-[1px] border-gray-300 bg-white px-5 font-dm text-[14px] font-semibold shadow-sm shadow-[#003EFF1A] dark:border-[#191A1F] dark:bg-[#13151E] dark:text-[#fff]">
        <div
          className="flex h-[45px] cursor-pointer items-center justify-between"
          onClick={() => toggleAccordion(1)}
        >
          <span className="text-[16px] font-semibold text-[#1B254B] dark:text-[#fff]">
            List Information
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
          <div className="mb-1">
            <div className="flex flex-col sm:flex-row">
              <label className="text-[#1B254B flex text-[12px] font-semibold">
                Image
              </label>
            </div>

            {/* Cover Image Section */}
            <div className="mt-4 flex">
              <div className="relative flex pb-5">
                <div className="relative">
                  <label htmlFor="coverFileInput">
                    <img
                      src={selectedCoverFile}
                      alt="Selected File"
                      className="accordion-btn relative h-[89px] w-[89px] cursor-pointer rounded-[18px] border-[3.5px] border-[#5D5FEF] p-2 text-sm text-white"
                    />
                  </label>
                  {selectedCoverFile !== defultpdfimg ? (
                    <label
                      htmlFor="coverFileInput"
                      className="absolute -right-3 -top-3 h-[39px] w-[39px] cursor-pointer rounded-3xl bg-[#5D5FEF] p-1 text-white"
                    >
                      <img src={plusebutton} alt="" />
                    </label>
                  ) : (
                    <label
                      htmlFor="coverFileInput"
                      className="absolute -right-3 -top-3 h-[39px] w-[39px] cursor-pointer rounded-3xl bg-[#5D5FEF] p-1 text-white"
                    >
                      <img
                        src={isImageSelected ? plusebutton : editbutton}
                        alt=""
                      />
                    </label>
                  )}
                </div>

                {/* File input */}
                <input
                  type="file"
                  accept="image/*"
                  onChange={(event) => handleFileChange(event, "cover")}
                  className="hidden"
                  id="coverFileInput"
                />
              </div>
              <div className="ml-6 flex items-center">
                {selectedCoverFile !== defultpdfimg && (
                  <button
                    type="button"
                    className="cursor-pointer rounded-3xl border border-[#5D5FEF] p-3 px-7 text-sm font-semibold text-[#5D5FEF] dark:border-[#fff] dark:text-[#fff]"
                    onClick={() => handelDeleteimg("cover")}
                  >
                    Delete
                  </button>
                )}
              </div>
            </div>

            {/* Cover Image Section */}

            <div className="mt-3 flex rounded-[10px] border-[2px] border-dashed border-[#B8BAC7]">
              <div className="flex w-full flex-col justify-between p-6 md:flex-row">
                <div className="flex items-center">
                  <div className="flex h-[137px] w-[137px] items-center justify-center rounded-[6px] bg-[#F3F4F4] p-[37px]">
                    <img className="h-[56px] w-[46px]" src={upload} alt="" />
                  </div>
                  <div className="ml-5">
                    <h3 className="text-[14px] font-semibold text-[#000000] dark:text-[#fff]">
                      {fileName}
                    </h3>
                  </div>
                </div>
                <div className="mt-[16px] flex items-center md:mt-0">
                  <input
                    type="file"
                    accept=".mp3"
                    className="hidden"
                    id="file-input"
                    onChange={handleChange}
                  />
                  <label
                    htmlFor="file-input"
                    className="w-[128px] cursor-pointer rounded-full border border-[#F3F4F4] bg-[#B8BAC7] p-3 px-7 text-center text-[14px] text-sm font-semibold text-[#505779] dark:border-[#fff] dark:text-[#fff]"
                  >
                    Change
                  </label>
                </div>
              </div>
            </div>

            <div className="mt-3 flex items-center">
              <input
                id="link-checkbox"
                type="checkbox"
                value=""
                className="size-5 h-[22px] w-[19px] rounded-md border-[1px] border-[#8B8B9C]   accent-[#5D5FEF]"
              />
              <label
                htmlFor="link-checkbox"
                className="mx-3 text-[15px] font-semibold text-[#1B254B] dark:text-[#fff]"
              >
                Show download option
              </label>
            </div>

            <div className="mt-5 flex flex-col">
              <div>
                <label className="mb-2 block text-[12px] font-semibold text-gray-900 dark:text-white">
                  Title *
                </label>
                <input
                  type="text"
                  id="title"
                  placeholder="Title"
                  className="h-[45px] w-full rounded-[10px] border-[1px] border-[#73779166] bg-[#fff] px-5 text-sm text-gray-900 dark:border-[#191A1F] dark:bg-[#212430] dark:text-[#fff] dark:placeholder-[#fff]"
                />
              </div>
              <div className="mb-2 mt-2">
                <label className="mb-2 block text-[12px] font-semibold text-gray-900 dark:text-white">
                  Description
                </label>
                <input
                  type="text"
                  id="description"
                  className="h-[45px] w-full rounded-[10px] border-[1px] border-[#73779166] bg-[#fff] px-5 text-sm text-gray-900 dark:border-[#191A1F] dark:bg-[#212430] dark:text-[#fff] dark:placeholder-[#fff]"
                  placeholder="Description"
                />
              </div>
              <div className="mb-2 mt-2">
                <label className="mb-2 block text-[12px] font-semibold text-gray-900 dark:text-white">
                  Website
                </label>
                <input
                  type="url"
                  id="website"
                  className="h-[45px] w-full rounded-[10px] border-[1px] border-[#73779166] bg-[#fff] px-5 text-sm text-gray-900 dark:border-[#191A1F] dark:bg-[#212430] dark:text-[#fff] dark:placeholder-[#fff]"
                  placeholder="http://.."
                />
              </div>
              {inputs.map((input, index) => (
                <div
                  key={index}
                  className="mb-4 mt-2 flex flex-col md:flex-row md:space-x-4"
                >
                  <div className="flex w-full flex-col md:w-1/2">
                    <label className="mb-2 block text-[12px] font-semibold text-gray-900 dark:text-white">
                      Button Name
                    </label>
                    <input
                      type="text"
                      id={`button-name-${index}`}
                      className="h-[45px] w-full rounded-[10px] border-[1px] border-[#73779166] bg-[#fff] px-5 text-sm text-gray-900 dark:border-[#191A1F] dark:bg-[#212430] dark:text-[#fff] dark:placeholder-[#fff]"
                      placeholder="Button Name"
                      value={input.name}
                      onChange={(e) => {
                        const newInputs = [...inputs];
                        newInputs[index].name = e.target.value;
                        setInputs(newInputs);
                      }}
                    />
                  </div>
                  <div className="mt-2 flex w-full flex-col md:mt-0 md:w-1/2">
                    <label className="mb-2 block text-[12px] font-semibold text-gray-900 dark:text-white">
                      Button URL
                    </label>
                    <input
                      type="url"
                      id={`button-url-${index}`}
                      className="h-[45px] w-full rounded-[10px] border-[1px] border-[#73779166] bg-[#fff] px-5 text-sm text-gray-900 dark:border-[#191A1F] dark:bg-[#212430] dark:text-[#fff] dark:placeholder-[#fff]"
                      placeholder="http://.."
                      value={input.url}
                      onChange={(e) => {
                        const newInputs = [...inputs];
                        newInputs[index].url = e.target.value;
                        setInputs(newInputs);
                      }}
                    />
                  </div>
                </div>
              ))}
              {buttonVisible && (
                <button
                  type="button"
                  onClick={addInputFieldPair}
                  className="my-3 h-[37px] w-[129px] cursor-pointer rounded-full bg-[#5D5FEF]  text-sm text-white "
                >
                  Add Button
                </button>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Bacisinformation;
