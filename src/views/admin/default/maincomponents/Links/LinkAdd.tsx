import React, { useState } from "react";
import defultpdfimg from "../../../../../assets/img/qrcold-icons/pdfimges/Group 174.svg";
import delecticon from "../../../../../assets/img/qrcold-icons/pdfimges/Group 131.svg";
import togglescard from "../../../../../assets/img/qrcold-icons/pdfimges/Group 132.svg";
import plusebutton from "../../../../../assets/img/qrcold-icons/pdfimges/material-symbols_add (1).svg";
import editbutton from "../../../../../assets/img/qrcold-icons/pdfimges/material-symbols_add.svg";
import helpicon from "../../../../../assets/img/qrcold-icons/pdfimges/material-symbols_help.svg";
import sidecornericon from "../../../../../assets/img/qrcold-icons/pdfimges/Polygon 10.svg";
import defultpdfimsg from "../../../../../assets/img/qrcold-icons/pdfimges/Group 191.svg";

interface File {
  id: number;
  name: string;
}

const LinkAdd: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(1);
  const [selectedFiles, setSelectedFiles] = useState<File[]>([]);
  const [isOpen, setIsOpen] = useState(false);
  const [draggedItem, setDraggedItem] = useState<number | null>(null);
  const [activeNestetcard, setActiveNestetcard] = useState<number | null>(1);
  const [popoverVisible, setPopoverVisible] = useState(false);
  const [selectedFile, setSelectedFile] = useState<string>(defultpdfimsg);

  const toggleHandler = () => {
    setIsOpen(!isOpen);
  };

  const togglePopover = () => {
    setPopoverVisible(!popoverVisible);
  };

  const toggleNestedAccordion = (index: number) => {
    setActiveNestetcard((prevIndex) => (prevIndex === index ? null : index));
  };

  const toggleAccordion = (index: number) => {
    setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>, fileType: boolean) => {
    const file = event.target.files?.[0];

    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        if (fileType) {
          setSelectedFile(reader.result as string);
        }
      };
      reader.readAsDataURL(file);
    }
  };

  const handleDelete = (index: number) => {
    const updatedFiles = [...selectedFiles];
    updatedFiles.splice(index, 1);
    setSelectedFiles(updatedFiles);
  };

  const handleAddLink = () => {
    const newFile = {
      id: new Date().getTime(), // Unique identifier based on timestamp
      name: "title",
    };
    setSelectedFiles((prevFiles) => [...prevFiles, newFile]);
  };

  const handleDragStart = (e: React.DragEvent<HTMLDivElement>, index: number) => {
    setDraggedItem(index);
    e.dataTransfer.setData("text/plain", index.toString());
  };

  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
  };

  const handleDrop = (e: React.DragEvent<HTMLDivElement>, destinationIndex: number) => {
    e.preventDefault();
    const sourceIndex = parseInt(e.dataTransfer.getData("text/plain"), 10);

    if (sourceIndex !== destinationIndex) {
      const filesCopy = [...selectedFiles];
      const [draggedItem] = filesCopy.splice(sourceIndex, 1);
      filesCopy.splice(destinationIndex, 0, draggedItem);
      setSelectedFiles(filesCopy);
    }
  };

  const handelDeleteimg = (fileType: boolean) => {
    if (fileType) {
      setSelectedFile(defultpdfimsg);
    }
  };

  return (
    <div className="space-y-2">
      <div className="rounded-[10px] border-[1px] border-gray-300 bg-white px-5 font-dm text-[16px] font-semibold shadow-sm shadow-[#003EFF1A] dark:border-[#191A1F] dark:bg-[#13151E] dark:text-[#fff]">
        <div
          className="flex h-[45px] cursor-pointer items-center justify-between "
          onClick={() => toggleAccordion(1)}
        >
          <span className="text-[16px] font-semibold  text-[#1B254B] dark:text-[#fff] ">
            Links
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
          <>
            <div className="mb-1">
              {selectedFiles.map((item, index) => (
                <div
                  key={item.id}
                  onDrop={(e) => handleDrop(e, index)}
                  onDragOver={handleDragOver}
                  draggable
                  onDragStart={(e) => handleDragStart(e, index)}
                  className="mt-2 rounded-[10px] border border-[#F2F3F6] bg-[#F2F3F6] dark:border-[#0D0E17] dark:bg-[#0D0E17]"
                >
                  <div
                    id={`dg${item.id}`}
                    draggable
                    onDragStart={(e) => handleDragStart(e, index)}
                    className="flex cursor-pointer items-center justify-between px-2 py-3"
                  >
                    <div className="flex items-center justify-center">
                      <svg
                        className={`h-3 w-3 transform ${
                          activeNestetcard === 1 ? "rotate-180" : "rotate-90"
                        }`}
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 10 6"
                        onClick={() => toggleNestedAccordion(1)}
                      >
                        <path
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M9 5 5 1 1 5"
                        />
                      </svg>
                      <span className="px-2 font-medium text-[#1B254B] dark:text-gray-400">
                        {item.name || "title"}
                      </span>
                    </div>

                    <div className="flex items-center justify-center">
                      <img
                        src={delecticon}
                        className="mx-2"
                        onClick={() => handleDelete(index)}
                        alt="Delete"
                      />
                      <img src={togglescard} onClick={toggleHandler} alt="Toggle" />
                    </div>
                  </div>

                  {activeNestetcard === 1 && (
                    <>
                      <div className="px-5">
                        <div className="flex flex-col sm:flex-row">
                          <label className="mb-2 flex  text-[12px] font-semibold text-gray-900 dark:text-white">
                            Cover image
                            <img
                              data-popover-target="popover-default"
                              onClick={togglePopover}
                              className="mx-2"
                              src={helpicon}
                              alt="Help"
                            />
                          </label>
                          <div className="relative">
                            <div
                              data-popover
                              id="popover-default"
                              role="tooltip"
                              className={`absolute z-10 inline-block w-full rounded-md bg-[#000] text-sm text-white shadow-sm transition-opacity duration-300 dark:border-[#191A1F] dark:bg-[#13151E] sm:w-64 ${
                                popoverVisible
                                  ? "visible opacity-100"
                                  : "invisible opacity-0"
                              } dark:border-gray-600 dark:bg-gray-800 dark:text-gray-400`}
                            >
                              <div className="relative rounded-md border  border-[#000] px-3 py-2 dark:border-[#212430] dark:bg-[#13151E]">
                                <h3 className="font-sm text-white dark:text-white">
                                  We suggest 380px by 380px image
                                </h3>
                                <img
                                  className="absolute -left-2 top-1.5 "
                                  src={sidecornericon}
                                  alt="Corner Icon"
                                />
                              </div>
                              <div data-popper-arrow></div>
                            </div>
                          </div>
                        </div>

                        <div className="mt-4 flex ">
                          <div className="relative flex pb-5">
                            <div className="relative">
                              <label htmlFor="logoFileInput">
                                <img
                                  src={selectedFile}
                                  alt="Selected File"
                                  className="accordion-btn relative h-[89px] w-[89px] cursor-pointer rounded-[18px] border-[3.5px] border-[#5D5FEF] p-2 text-sm text-white"
                                />
                              </label>
                              {selectedFile !== defultpdfimg ? (
                                <label
                                  htmlFor="logoFileInput"
                                  className="absolute -right-3 -top-3 h-[39px] w-[39px] cursor-pointer rounded-3xl bg-[#5D5FEF] p-1 text-white"
                                >
                                  <img src={editbutton} alt="Edit Button" />
                                </label>
                              ) : (
                                <label
                                  htmlFor="logoFileInput"
                                  className="absolute -right-3 -top-3 h-[39px] w-[39px] cursor-pointer rounded-3xl bg-[#5D5FEF] p-1 text-white"
                                >
                                  <img src={plusebutton} alt="Plus Button" />
                                </label>
                              )}
                            </div>

                            <input
                              type="file"
                              accept="image/*"
                              onChange={(e) => handleFileChange(e, true)}
                              className="hidden"
                              id="logoFileInput"
                            />
                          </div>
                        </div>

                        <div className="mt-5 flex flex-col">
                          <div>
                            <label className="mb-2 flex  text-[12px] font-semibold text-gray-900 dark:text-white">
                              Link Text
                            </label>
                            <input
                              type="text"
                              id="text"
                              className="  h-[45px] w-full rounded-[10px] border-[1px] border-[#73779166] bg-[#fff] px-5 text-sm text-gray-900 dark:border-[#191A1F] dark:bg-[#212430]   dark:text-[#fff] dark:placeholder-[#fff] "
                              placeholder="Name "
                            />
                          </div>
                          <div className="mb-4 mt-4">
                            <label className="mb-2 flex  text-[12px] font-semibold text-gray-900 dark:text-white">
                              URL
                            </label>
                            <input
                              type="url"
                              id="text"
                              className="  h-[45px] w-full rounded-[10px] border-[1px] border-[#73779166] bg-[#fff] px-5 text-sm text-gray-900 dark:border-[#191A1F] dark:bg-[#212430]   dark:text-[#fff] dark:placeholder-[#fff] "
                              placeholder="http://www.ramasdefennoodles.com"
                            />
                          </div>
                        </div>
                      </div>
                    </>
                  )}
                </div>
              ))}
            </div>

            <div className="mb-4 mt-3">
              <button
                type="button"
                className="cursor-pointer rounded-full border border-[#5D5FEF] p-3 px-7 text-sm  font-semibold text-[#5D5FEF] dark:border-[#fff] dark:text-[#fff]"
                onClick={handleAddLink}
              >
                Add Link
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default LinkAdd;
