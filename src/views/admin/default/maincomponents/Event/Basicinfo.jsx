import React, { useState } from "react";
import defultpdfimg from "../../../../../assets/img/qrcold-icons/pdfimges/Group 191.svg";
import plusebutton from "../../../../../assets/img/qrcold-icons/pdfimges/material-symbols_add (1).svg";
import editbutton from "../../../../../assets/img/qrcold-icons/pdfimges/material-symbols_add.svg";
import { RxCross1 } from "react-icons/rx";

const Basicinfo = () => {
  const [activeIndex, setActiveIndex] = useState(1);
  const [selectedFile, setSelectedFile] = useState(defultpdfimg);
  const [selectedCoverFile, setSelectedCoverFile] = useState(defultpdfimg);
  const [isImageSelected, setIsImageSelected] = useState(false);
  const [inputs, setInputs] = useState([]);
  const [buttonVisible, setButtonVisible] = useState(true);

  const addInputFieldPair = () => {
    setInputs([...inputs, { name: "", url: "" }]);
    setButtonVisible(false); // Hide the button after it is clicked
  };

  const handleFileChange = (event, fileType) => {
    const file = event.target.files[0];

    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        if (fileType === "cover") {
          setSelectedCoverFile(reader.result);
        } else if (fileType === "logo") {
          setSelectedFile(reader.result);
        }
      };

      reader.readAsDataURL(file);
    }
  };

  const toggleAccordion = (index) => {
    setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  const handelDeleteimg = (fileType) => {
    if (fileType === "cover") {
      setSelectedCoverFile(defultpdfimg);
    } else if (fileType === "logo") {
      setSelectedFile(defultpdfimg);
    }
  };

  const handleDeleteInput = (index) => {
    const newInputs = inputs.filter((_, i) => i !== index);
    setInputs(newInputs);
    if (newInputs.length === 0) {
      setButtonVisible(true); // Show the button if no inputs are left
    }
  };

  return (
    <div className="space-y-2">
      <div className="rounded-[10px] border-[1px] border-gray-300 bg-white px-5 font-dm text-[14px] font-semibold shadow-sm shadow-[#003EFF1A] dark:border-[#191A1F] dark:bg-[#13151E] dark:text-[#fff]">
        <div
          className="flex h-[45px] cursor-pointer items-center justify-between "
          onClick={() => toggleAccordion(1)}
        >
          <span className="text-[16px] font-semibold  text-[#1B254B] dark:text-[#fff] ">
            Basic Information
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
            <div className="py-3">
              <span className="flex text-[12px] font-bold text-[#1B254B] dark:text-[#fff]">
                Event Information
              </span>
            </div>
            <div className="flex flex-col sm:flex-row">
              <label className="flex text-[12px] font-semibold text-[#1B254B]  dark:text-[#fff]">
                Image
              </label>
            </div>

            {/* Cover Image Section */}
            <div className="mt-4 flex ">
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
                {selectedCoverFile !== defultpdfimg ? (
                  <>
                    <button
                      type="button"
                      className="cursor-pointer rounded-3xl border border-[#5D5FEF] p-3 px-7 text-sm  font-semibold text-[#5D5FEF] dark:border-[#fff] dark:text-[#fff]"
                      onClick={() => handelDeleteimg("cover")}
                    >
                      Delete
                    </button>
                  </>
                ) : (
                  ""
                )}
              </div>
            </div>

            {/* Cover Image Section */}

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

              {inputs.map((input, index) => (
                <div
                  key={index}
                  className="mb-4 mt-2 flex flex-col md:flex-row md:space-x-4 md:w-2/4"
                >
                  <div className="flex w-full flex-col md:w-1/2">
                    <label className="mb-2 block text-[12px] font-semibold text-gray-900 dark:text-white">
                      Button
                    </label>
                    <input
                      type="text"
                      id={`button-name-${index}`}
                      className="h-[45px] w-full rounded-[10px] border-[1px] border-[#73779166] bg-[#fff] px-5 text-sm text-gray-900 dark:border-[#191A1F] dark:bg-[#212430] dark:text-[#fff] dark:placeholder-[#fff]"
                      placeholder="Confirm assistance"
                      value={input.name}
                      onChange={(e) => {
                        const newInputs = inputs.slice();
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
                      placeholder="https://qrfy.com/"
                      value={input.url}
                      onChange={(e) => {
                        const newInputs = inputs.slice();
                        newInputs[index].url = e.target.value;
                        setInputs(newInputs);
                      }}
                    />
                  </div>
                  <div className="flex items-center mt-6">
                    <RxCross1 onClick={() => handleDeleteInput(index)} />
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

export default Basicinfo;
