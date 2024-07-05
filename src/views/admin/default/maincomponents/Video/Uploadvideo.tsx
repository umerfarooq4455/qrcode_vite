import React, { useState, ChangeEvent } from "react";
import ProgressBar from "@ramonak/react-progress-bar";
import delecticon from "../../../../../assets/img/qrcold-icons/pdfimges/Group 131.svg";
import togglescard from "../../../../../assets/img/qrcold-icons/pdfimges/Group 132.svg";
import plusebutton from "../../../../../assets/img/qrcold-icons/pdfimges/material-symbols_add (1).svg";
import editbutton from "../../../../../assets/img/qrcold-icons/pdfimges/material-symbols_add.svg";
import dimges from "../../../../../assets/img/qrcold-icons/pdfimges/Group 191.svg";

interface SelectedFile {
  file: File;
  uploadId: number;
  thumbnail?: string;
}

const Uploadvideo: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(1);
  const [selectedFiles, setSelectedFiles] = useState<SelectedFile[]>([]);
  const [uploadProgress, setUploadProgress] = useState<Record<number, number>>({});
  const [isUploading, setIsUploading] = useState<boolean>(false);
  const [uploadIds, setUploadIds] = useState<number[]>([]);
  const [isImageSelected, setIsImageSelected] = useState<boolean>(false);
  const [selectedFilee, setSelectedFilee] = useState<string>(dimges);

  const deleteImage = () => {
    setSelectedFilee(dimges);
    setIsImageSelected(false);
  };

  const toggleAccordion = (index: number) => {
    setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file && file.type.startsWith("video/")) {
      const uploadId = new Date().getTime();
      setIsUploading(true);
      setSelectedFiles((prevFiles) => [...prevFiles, { file, uploadId }]);
      setUploadIds((prevIds) => [...prevIds, uploadId]);

      // Simulate upload process
      const simulateUpload = setInterval(() => {
        setUploadProgress((prevProgress) => {
          const newProgress = { ...prevProgress };
          if (newProgress[uploadId] >= 100) {
            clearInterval(simulateUpload);
            setIsUploading(false);
            return { ...newProgress, [uploadId]: 100 };
          }
          return {
            ...newProgress,
            [uploadId]: (newProgress[uploadId] || 0) + 10,
          };
        });
      }, 1000);
    } else {
      alert("Please upload a valid video file.");
    }
  };

  const handleDelete = (uploadId: number) => {
    setSelectedFiles((prevFiles) => prevFiles.filter((file) => file.uploadId !== uploadId));
    setUploadProgress((prevProgress) => {
      const newProgress = { ...prevProgress };
      delete newProgress[uploadId];
      return newProgress;
    });
    setUploadIds((prevIds) => prevIds.filter((id) => id !== uploadId));
    setIsUploading(false);
  };

  return (
    <div className="space-y-2">
      <div className="rounded-[10px] border-[1px] border-gray-300 bg-white px-5 font-dm text-[16px] font-semibold shadow-sm shadow-[#003EFF1A] dark:border-[#191A1F] dark:bg-[#13151E] dark:text-[#fff]">
        <div
          className="flex h-[45px] cursor-pointer items-center justify-between "
          onClick={() => toggleAccordion(1)}
        >
          <span className="text-[16px] font-semibold  text-[#1B254B] dark:text-[#fff] ">
            Video
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
          <div className="mb-1">
            <label className="text-[12px] font-semibold  text-[#1B254B] dark:text-[#fff] ">
              Video URL
            </label>
            <div className="mt-2 flex flex-col justify-between sm:flex-row">
              <div className="mb-3 w-full sm:w-auto sm:flex-1">
                <input
                  type="url"
                  id="text"
                  className="block h-[47px] w-full rounded-[10px] border-[1px] border-gray-300 bg-white p-4 text-sm text-gray-900 dark:border-[#191A1F] dark:bg-[#212430]"
                  placeholder="https://www.youtube.com/watch…"
                />
              </div>
              <div className="w-full sm:ml-4 sm:w-auto">
                <button className="mt-4 w-full cursor-pointer rounded-full bg-[#5D5FEF] px-8 py-3 text-sm text-white sm:mt-0 sm:w-auto">
                  Add video
                </button>
              </div>
            </div>
            <label className=" my-2 text-[15px] font-semibold text-gray-900 dark:text-[#fff]">
              You can also upload a video
            </label>
            <div className="my-4 rounded-lg border-2 border-dashed border-[#5D5FEF]  dark:border-[#B8BAC74D]">
              {!isUploading && (
                <div className="flex flex-col items-center justify-center bg-white py-4 dark:bg-[#212430]">
                  <input
                    type="file"
                    className="hidden"
                    id="fileInput"
                    onChange={handleFileChange}
                  />
                  <label
                    htmlFor="fileInput"
                    className="mt-4 cursor-pointer rounded-3xl  bg-[#5D5FEF] p-3 px-14 text-sm text-white"
                  >
                    Upload video (s)
                  </label>
                  <p className="font-sm py-4 font-bold">
                    Maximum file size: 300MB
                  </p>
                </div>
              )}

              {isUploading &&
                uploadIds.map((uploadId) => (
                  <div key={uploadId} className="py-4">
                    <div className="flex items-center justify-center ">
                      <p className="font-sm py-2 font-bold">
                        Uploading video title.mp4
                      </p>
                    </div>
                    <ProgressBar
                      height="30px"
                      bgColor="#5D5FEF"
                      baseBgColor="#B8BAC780"
                      className="my-2 flex items-center justify-center px-20 "
                      completed={uploadProgress[uploadId] || 0}
                    />
                    <div className="mb-2 flex items-center justify-center">
                      <button
                        className="mt-4 cursor-pointer rounded-3xl border-[2px] border-[#5D5FEF] p-3 px-4  text-sm text-[#5D5FEF] dark:border-[#fff] dark:text-[#fff]"
                        onClick={() => handleDelete(uploadId)}
                      >
                        Cancel Upload
                      </button>
                    </div>
                  </div>
                ))}
            </div>

            <div className="flex items-center">
              <div className="flex items-center">
                <input
                  id="link-checkbox"
                  type="checkbox"
                  value=""
                  className="h-[22px] w-[19px] size-5 accent-[#5D5FEF] border-[#8B8B9C] border-[1px] rounded-md"
                />
                <label
                  htmlFor="link-checkbox"
                  className="mx-3 text-[15px] font-semibold text-gray-900 dark:text-[#fff]"
                >
                  Directly show the video
                </label>
              </div>
              <div className="flex items-center">
                <input
                  id="link-checkbox"
                  type="checkbox"
                  value=""
                  className="h-[22px] w-[19px] size-5 accent-[#5D5FEF] border-[#8B8B9C] border-[1px] rounded-md"
                />
                <label
                  htmlFor="link-checkbox"
                  className="mx-3 text-[15px] font-semibold text-gray-900 dark:text-[#fff]"
                >
                  Highlight the first video
                </label>
              </div>
              <div className="flex items-center py-2">
                <input
                  id="link-checkbox"
                  type="checkbox"
                  value=""
                  className="h-[22px] w-[19px] size-5 accent-[#5D5FEF] border-[#8B8B9C] border-[1px] rounded-md"
                />
                <label
                  htmlFor="link-checkbox"
                  className="mx-3 text-[15px] font-semibold text-gray-900 dark:text-[#fff]"
                >
                  Autoplay the first video
                </label>
              </div>
            </div>

            {!isUploading &&
              selectedFiles.map(({ file, uploadId, thumbnail }) => (
                <div
                  key={uploadId}
                  className="mt-4 rounded-xl border border-[#B8BAC74D]"
                >
                  <div className="flex justify-between p-2  md:p-4">
                    <div className="flex flex-col md:flex-row">
                      <div className="mx-4 h-[69px] w-[122px]">
                        <img
                          src={
                            "https://images.pexels.com/photos/4835429/pexels-photo-4835429.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                          }
                          alt="Thumbnail"
                          className="border-[3px] border-[#5D5FEF]"
                        />
                      </div>
                      <span className="font-medium text-[#1B254B] dark:text-[#fff]">
                        mockup.mp4
                      </span>
                    </div>
                    <div className="flex items-baseline">
                      <img
                        src={delecticon}
                        className="mx-2 cursor-pointer"
                        onClick={() => handleDelete(uploadId)}
                        alt="Delete"
                      />
                      <img src={togglescard} alt="Toggle" />
                    </div>
                  </div>

                  <div className="ml-[11px] mt-3 flex md:ml-[176px] ">
                    <div className="relative flex flex-col pb-5">
                      <label className="py-2">Cover</label>
                      <div className="relative">
                        <input
                          type="file"
                          accept="image/*"
                          onChange={handleFileChange}
                          style={{ display: "none" }}
                          id="coverFileInput"
                        />
                        <label htmlFor="coverFileInput">
                          <img
                            src={selectedFilee}
                            alt="Selected File"
                            className="accordion-btn relative h-[89px] w-[89px] cursor-pointer rounded-[18px] border-[3.5px] border-[#5D5FEF] p-2 text-sm text-white"
                          />
                        </label>
                        <label className="absolute -right-3 -top-3 h-[39px] w-[39px] cursor-pointer rounded-3xl bg-[#5D5FEF] p-1 text-white">
                          <img
                            src={isImageSelected ? plusebutton : editbutton}
                            alt=""
                          />
                        </label>
                      </div>
                    </div>
                  </div>

                  <div>
                    {isImageSelected && (
                      <button
                        type="button"
                        onClick={deleteImage}
                        className="cursor-pointer rounded-3xl border border-[#5D5FEF] p-3 px-7 text-sm font-semibold text-[#5D5FEF] dark:border-[#fff] dark:text-[#fff]"
                      >
                        Delete
                      </button>
                    )}
                  </div>

                  <div className="ml-[11px] flex flex-col md:ml-[176px] ">
                    <label className="py-2">Description</label>
                    <input
                      maxLength={50}
                      type="text"
                      id="company"
                      className="my-1 mb-3 block h-[95px] w-full rounded-[10px] border border-gray-300 bg-white p-2.5 text-[14px] font-normal text-[#1B254B] dark:border-[#191A1F] dark:bg-[#212430] dark:text-white dark:placeholder-[#fff]"
                      placeholder="Burger Company"
                    />
                  </div>
                </div>
              ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Uploadvideo;
