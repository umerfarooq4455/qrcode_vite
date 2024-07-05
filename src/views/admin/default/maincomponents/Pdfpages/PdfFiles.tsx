import React, { useState, useEffect, ChangeEvent, DragEvent } from "react";
import image from "../../../../../assets/img/qrcold-icons/hoverlandingimages/Group54.png";
import delecticon from "../../../../../assets/img/qrcold-icons/pdfimges/Group 131.svg";
import togglescard from "../../../../../assets/img/qrcold-icons/pdfimges/Group 132.svg";
import defultpdfimg from "../../../../../assets/img/qrcold-icons/pdfimges/Group 174.svg";

const PdfFiles: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(1);
  const [selectedFile, setSelectedFile] = useState<File[]>([]);
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [draggedItem, setDraggedItem] = useState<HTMLElement | null>(null);

  const toggleHandler = () => {
    setIsOpen(!isOpen);
  };

  const toggleAccordion = (index: number) => {
    setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  const handleFileChanger = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setSelectedFile((prevFiles) => [file, ...prevFiles]);
    }
  };

  const handleDelete = () => {
    setSelectedFile([]);
  };

  const handleDragStart = (e: DragEvent<HTMLDivElement>) => {
    setDraggedItem(e.currentTarget);
    e.dataTransfer.setData("text/plain", e.currentTarget.id);
    console.log("dragStart", e.currentTarget);
  };

  const handleDragOver = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault();
  };

  const handleDrop = (e: DragEvent<HTMLDivElement>, destinationIndex: number) => {
    e.preventDefault();
    const sourceIndex = parseInt(e.dataTransfer.getData("text/plain"), 10);
    
    if (sourceIndex !== destinationIndex) {
      const filesCopy = [...selectedFile];
      const [draggedItem] = filesCopy.splice(sourceIndex, 1);
      filesCopy.splice(destinationIndex, 0, draggedItem);
      setSelectedFile(filesCopy);
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
            PDF File(s)
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
          <div className="mb-1 p-5">
            <div className="flex flex-col items-center justify-center rounded-lg border-2 border-dashed border-[#5D5FEF] bg-white py-4 dark:border-[#B8BAC74D] dark:border-gray-700 dark:bg-[#212430]">
              <input
                type="file"
                className="hidden"
                id="fileInput"
                onChange={handleFileChanger}
              />
              <label
                htmlFor="fileInput"
                className="mt-4 cursor-pointer rounded-3xl  bg-[#5D5FEF] p-3  px-14 text-sm text-white"
              >
                Upload file
              </label>

              <p className="font-sm py-4 font-bold">Maximum file size: 100MB</p>
            </div>

            {selectedFile.map((file, index) => (
              <div
                key={index}
                id={`dp${index}`}
                onDrop={(e) => handleDrop(e, index)}
                onDragOver={handleDragOver}
                draggable
                onDragStart={(e) => handleDragStart(e)}
                className="mt-4 rounded-xl border border-[#B8BAC7] dark:border-[#B8BAC74D] dark:bg-[#13151E]"
              >
                <div
                  id="dg1"
                  draggable
                  onDragStart={handleDragStart}
                  className="flex cursor-pointer items-center justify-between px-2 py-3"
                >
                  <div className="flex items-center justify-center">
                    <img src={defultpdfimg} className="rounded-full" alt="" />
                    <span className="px-2 font-medium text-[#1B254B] dark:text-gray-400">
                      {file.name}
                    </span>
                  </div>

                  <div className="flex items-center justify-center">
                    <img
                      src={delecticon}
                      className="mx-2 dark:bg-[#13151E]"
                      onClick={handleDelete}
                      alt="delete icon"
                    />
                    <img src={togglescard} onClick={toggleHandler} alt="toggle icon" />
                  </div>
                </div>

                <div>
                  {isOpen && (
                    <>
                      <div className="mt-4 flex ">
                        <div className="relative mx-3 flex flex-col py-3">
                          <label className="pb-1 text-[12px] font-semibold text-gray-900">
                            PDF File
                          </label>
                          <div className="relative">
                            <img
                              src=""
                              className="accordion-btn h-28 w-28 rounded-xl border-[1px] border-[#5D5FEF] p-2 px-3 text-sm text-white dark:border-[#fff]"
                              alt="PDF"
                            />
                            <svg
                              className="absolute -right-3 -top-2 rounded-2xl bg-[#5D5FEF] p-2 px-3 text-white dark:bg-[#fff] dark:text-[#212430]"
                              width="40"
                              height="40"
                              viewBox="0 0 24 24"
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            >
                              <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" />
                              <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z" />
                            </svg>
                          </div>
                        </div>

                        <div className="accordion-content flex items-center justify-center">
                          <button
                            type="button"
                            className="mt-4 cursor-pointer rounded-full border-2 border-[#5D5FEF] p-2.5 px-10  text-[14px]  font-semibold text-[#5D5FEF] dark:border-[#fff] dark:text-[#fff]"
                            onClick={handleDelete}
                          >
                            Delete
                          </button>
                        </div>
                      </div>

                      <div className="mx-5 py-3">
                        <div className="flex flex-col">
                          <label className="pb-1 text-[12px] font-semibold text-gray-900 dark:text-[#fff]">
                            Name
                          </label>
                          <input
                            type="text"
                            id="text"
                            className="font-sm block w-full rounded-[10px] border border-[#B8BAC7]  bg-white p-2.5 text-[13px]  dark:border-[#191A1F] dark:bg-[#212430] dark:text-white dark:placeholder-[#fff]"
                            placeholder="Name of your QR code..."
                          />
                          <textarea
                            id="message"
                            rows={4}
                            className="font-sm my-3 block w-full rounded-[10px] border border-[#B8BAC7]  bg-white p-2.5 text-[13px]  dark:border-[#191A1F] dark:bg-[#212430] dark:text-white dark:placeholder-[#fff]"
                            placeholder="Write your thoughts here..."
                          ></textarea>
                        </div>
                      </div>
                    </>
                  )}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default PdfFiles;
