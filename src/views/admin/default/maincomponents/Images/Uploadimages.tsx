import React, { useState } from "react";
import defultpdfimg from "../../../../../assets/img/qrcold-icons/pdfimges/Group 174.svg";
import delecticon from "../../../../../assets/img/qrcold-icons/pdfimges/Group 131.svg";
import togglescard from "../../../../../assets/img/qrcold-icons/pdfimges/Group 132.svg";
import wgrid1 from "../../../../../assets/img/qrcold-icons/links/whorizontal.svg";
import wgrid2 from "../../../../../assets/img/qrcold-icons/links/wvertical.svg";
import wgrid3 from "../../../../../assets/img/qrcold-icons/links/wgrid1.svg";
import wgrid4 from "../../../../../assets/img/qrcold-icons/links/wgrid2.svg";
import wgrid5 from "../../../../../assets/img/qrcold-icons/links/wgrid3.svg";
import wgrid6 from "../../../../../assets/img/qrcold-icons/links/wgrid4.svg";
import wgrid7 from "../../../../../assets/img/qrcold-icons/links/wgrid5.svg";
import wgrid8 from "../../../../../assets/img/qrcold-icons/links/wgrid6.svg";
import dgrid1 from "../../../../../assets/img/qrcold-icons/links/dhorzontal.svg";
import dgrid2 from "../../../../../assets/img/qrcold-icons/links/dvertical.svg";
import dgrid3 from "../../../../../assets/img/qrcold-icons/links/dgrid1.svg";
import dgrid4 from "../../../../../assets/img/qrcold-icons/links/dgrid2.svg";
import dgrid5 from "../../../../../assets/img/qrcold-icons/links/dgrid3.svg";
import dgrid6 from "../../../../../assets/img/qrcold-icons/links/dgrid4.svg";
import dgrid7 from "../../../../../assets/img/qrcold-icons/links/dgrid5.svg";
import dgrid8 from "../../../../../assets/img/qrcold-icons/links/dgrid6.svg";
import { useApiContext } from "../../../../../contextapi/contextApi";

const Uploadimages: React.FC = () => {
  const { darkmode } = useApiContext();
  const [activeIndex, setActiveIndex] = useState<number | null>(1);
  const [selectedFiles, setSelectedFiles] = useState<File[]>([]);
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [draggedItem, setDraggedItem] = useState<number | null>(null);

  const toggleHandler = () => {
    setIsOpen(!isOpen);
  };

  const toggleAccordion = (index: number) => {
    setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files.length > 0) {
      const file = event.target.files[0];
      setSelectedFiles((prevFiles) => [...prevFiles, file]);
    }
  };

  const handleDelete = (index: number) => {
    const updatedFiles = [...selectedFiles];
    updatedFiles.splice(index, 1);
    setSelectedFiles(updatedFiles);
  };

  // Event handler for drag start
  const handleDragStart = (e: React.DragEvent<HTMLDivElement>, index: number) => {
    setDraggedItem(index);
    e.dataTransfer.setData("text/plain", index.toString());
  };

  // Event handler for drag over
  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
  };

  // Event handler for drop
  const handleDrop = (e: React.DragEvent<HTMLDivElement>, destinationIndex: number) => {
    e.preventDefault();
    const sourceIndex = parseInt(e.dataTransfer.getData("text/plain"), 10);

    // Ensure that the source and destination indices are different
    if (sourceIndex !== destinationIndex) {
      const filesCopy = [...selectedFiles];
      const [draggedItem] = filesCopy.splice(sourceIndex, 1);
      filesCopy.splice(destinationIndex, 0, draggedItem);
      setSelectedFiles(filesCopy);
    }
  };

  return (
    <div className="space-y-2">
      <div className="rounded-[10px] border-[1px] border-gray-300 bg-white px-5 font-dm text-[16px] font-semibold shadow-sm shadow-[#003EFF1A] dark:border-[#191A1F] dark:bg-[#13151E] dark:text-[#fff]">
        <div
          className="flex h-[45px] cursor-pointer items-center justify-between"
          onClick={() => toggleAccordion(1)}
        >
          <span className="text-[16px] font-semibold text-[#1B254B] dark:text-[#fff]">
            Images
          </span>
          <svg
            className={`h-3 w-3 transform ${activeIndex === 1 ? "rotate-180" : ""}`}
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
          <div className="mb-1 p-2 md:p-5">
            <div className="flex flex-col items-center justify-center rounded-lg border-2 border-dashed border-[#5D5FEF] bg-white py-4 dark:border-[#B8BAC74D] dark:bg-[#212430]">
              <input
                type="file"
                className="hidden"
                id="fileInput"
                onChange={handleFileChange}
              />
              <label
                htmlFor="fileInput"
                className="mt-4 cursor-pointer rounded-3xl bg-[#5D5FEF] p-3 px-14 text-sm text-white"
              >
                Upload file
              </label>

              <p className="py-4 text-[12px] font-bold">
                Maximum file size: 100MB
              </p>
            </div>

            {/* selected file accordion card */}
            {selectedFiles.map((file, index) => (
              <div
                key={index}
                onDrop={(e) => handleDrop(e, index)}
                onDragOver={handleDragOver}
                draggable
                onDragStart={(e) => handleDragStart(e, index)}
                className="mt-4 rounded-xl border border-[#B8BAC7] dark:border-[#B8BAC74D] dark:bg-[#13151E]"
              >
                <div
                  id={`dg${index}`}
                  draggable
                  onDragStart={(e) => handleDragStart(e, index)}
                  className="flex cursor-pointer items-center justify-between px-2 py-3"
                >
                  <div className="flex items-center justify-center">
                    <img src={defultpdfimg} className="rounded-full" alt="" />
                    <span className="px-2 font-medium text-[#1B254B] dark:text-gray-400">
                      {file.name || "mockup01.pdf"}
                    </span>
                  </div>

                  <div className="flex items-center justify-center">
                    <img
                      src={delecticon}
                      className="mx-2 dark:bg-[#13151E]"
                      onClick={() => handleDelete(index)}
                      alt="delete"
                    />
                    <img src={togglescard} onClick={toggleHandler} alt="toggle" />
                  </div>
                </div>
              </div>
            ))}

            <div className="mt-5">
              <label className="text-[12px] font-semibold text-[#1B254B] dark:text-[#fff]">
                View Type
              </label>
              <div className="mt-3 flex flex-wrap items-center justify-center sm:justify-start">
                <div className="mx-2 my-2 flex flex-col items-center">
                  <div className="flex h-[47px] w-[72px] items-center justify-center rounded-[3px] border-[2px] border-[#B8BAC780] dark:border-[#191A1F] dark:bg-[#212430]">
                    <img
                      className="h-[28px] w-[28px]"
                      src={darkmode ? dgrid1 : wgrid1}
                      alt="Horizontal"
                    />
                  </div>
                  <div>
                    <label className="text-xs font-medium text-[#CCCCCC] dark:text-[#fff]">
                      Horizontal
                    </label>
                  </div>
                </div>
                <div className="mx-2 my-2 flex flex-col items-center">
                  <div className="flex h-[47px] w-[72px] items-center justify-center rounded-[3px] border-[2px] border-[#B8BAC780] dark:border-[#191A1F] dark:bg-[#212430]">
                    <img
                      className="h-[28px] w-[28px]"
                      src={darkmode ? dgrid2 : wgrid2}
                      alt="Vertical"
                    />
                  </div>
                  <div>
                    <label className="text-xs font-medium text-[#CCCCCC] dark:text-[#fff]">
                      Vertical
                    </label>
                  </div>
                </div>
                <div className="mx-2 my-2 flex flex-col items-center">
                  <div className="flex h-[47px] w-[72px] items-center justify-center rounded-[3px] border-[2px] border-[#B8BAC780] dark:border-[#191A1F] dark:bg-[#212430]">
                    <img
                      className="h-[28px] w-[28px]"
                      src={darkmode ? dgrid3 : wgrid3}
                      alt="Grid 1"
                    />
                  </div>
                  <div>
                    <label className="text-xs font-medium text-[#CCCCCC] dark:text-[#fff]">
                      Grid 1
                    </label>
                  </div>
                </div>
                <div className="mx-2 my-2 flex flex-col items-center">
                  <div className="flex h-[47px] w-[72px] items-center justify-center rounded-[3px] border-[2px] border-[#B8BAC780] dark:border-[#191A1F] dark:bg-[#212430]">
                    <img
                      className="h-[28px] w-[28px]"
                      src={darkmode ? dgrid4 : wgrid4}
                      alt="Grid 2"
                    />
                  </div>
                  <div>
                    <label className="text-xs font-medium text-[#CCCCCC] dark:text-[#fff]">
                      Grid 2
                    </label>
                  </div>
                </div>
                <div className="mx-2 my-2 flex flex-col items-center">
                  <div className="flex h-[47px] w-[72px] items-center justify-center rounded-[3px] border-[2px] border-[#B8BAC780] dark:border-[#191A1F] dark:bg-[#212430]">
                    <img
                      className="h-[28px] w-[28px]"
                      src={darkmode ? dgrid5 : wgrid5}
                      alt="Grid 3"
                    />
                  </div>
                  <div>
                    <label className="text-xs font-medium text-[#CCCCCC] dark:text-[#fff]">
                      Grid 3
                    </label>
                  </div>
                </div>
                <div className="mx-2 my-2 flex flex-col items-center">
                  <div className="flex h-[47px] w-[72px] items-center justify-center rounded-[3px] border-[2px] border-[#B8BAC780] dark:border-[#191A1F] dark:bg-[#212430]">
                    <img
                      className="h-[28px] w-[28px]"
                      src={darkmode ? dgrid6 : wgrid6}
                      alt="Grid 4"
                    />
                  </div>
                  <div>
                    <label className="text-xs font-medium text-[#CCCCCC] dark:text-[#fff]">
                      Grid 4
                    </label>
                  </div>
                </div>
                <div className="mx-2 my-2 flex flex-col items-center">
                  <div className="flex h-[47px] w-[72px] items-center justify-center rounded-[3px] border-[2px] border-[#B8BAC780] dark:border-[#191A1F] dark:bg-[#212430]">
                    <img
                      className="h-[28px] w-[28px]"
                      src={darkmode ? dgrid7 : wgrid7}
                      alt="Grid 5"
                    />
                  </div>
                  <div>
                    <label className="text-xs font-medium text-[#CCCCCC] dark:text-[#fff]">
                      Grid 5
                    </label>
                  </div>
                </div>
                <div className="mx-2 my-2 flex flex-col items-center">
                  <div className="flex h-[47px] w-[72px] items-center justify-center rounded-[3px] border-[2px] border-[#B8BAC780] dark:border-[#191A1F] dark:bg-[#212430]">
                    <img
                      className="h-[28px] w-[28px]"
                      src={darkmode ? dgrid8 : wgrid8}
                      alt="Grid 6"
                    />
                  </div>
                  <div>
                    <label className="text-xs font-medium text-[#CCCCCC] dark:text-[#fff]">
                      Grid 6
                    </label>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Uploadimages;
