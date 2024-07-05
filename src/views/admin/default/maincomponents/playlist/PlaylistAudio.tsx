import React, { useState } from "react";
import ProgressBar from "@ramonak/react-progress-bar";
import { RxCross1 } from "react-icons/rx";
import upload from "../mp3/mp3imges/upload.svg";
import dimges from "../../../../../assets/img/qrcold-icons/pdfimges/Group 191.svg";

interface AudioSection {
  id: number;
  name: string;
}

const PlaylistAudio: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [selectedFiles, setSelectedFiles] = useState<{ file: File; uploadId: number }[]>([]);
  const [uploadProgress, setUploadProgress] = useState<{ [key: number]: number }>({});
  const [isUploading, setIsUploading] = useState(false);
  const [uploadIds, setUploadIds] = useState<number[]>([]);
  const [audioSections, setAudioSections] = useState<AudioSection[]>([]);

  const addAudioSection = () => {
    const newSection: AudioSection = {
      id: new Date().getTime(),
      name: `Audio ${audioSections.length + 1}`,
    };
    setAudioSections((prevSections) => [...prevSections, newSection]);
  };

  const toggleAccordion = (index: number) => {
    setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file && file.type === "audio/mpeg") {
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
      alert("Please upload a valid MP3 file.");
    }
  };

  const handleDelete = (sectionId: number) => {
    setAudioSections((prevSections) =>
      prevSections.filter((section) => section.id !== sectionId)
    );
    setUploadProgress((prevProgress) => {
      const newProgress = { ...prevProgress };
      delete newProgress[sectionId];
      return newProgress;
    });
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
            Playlist
          </span>
          <svg
            className={`h-3 w-3 transform ${
              activeIndex === 1 ? "rotate-180" : ""
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
              {audioSections.map((section) => (
                <div key={section.id}>
                  <div className="mt-2 flex items-center justify-between">
                    <div className="font-bold">{section.name}</div>
                    <div className="font-bold">
                      <RxCross1 onClick={() => handleDelete(section.id)} />
                    </div>
                  </div>
                  <label className="text-[12px] font-bold  text-[#1B254B] dark:text-[#fff] ">
                    Name
                  </label>
                  <div className="mt-1 flex flex-col justify-between sm:flex-row">
                    <div className="mb-3 w-full sm:w-auto sm:flex-1">
                      <input
                        type="text"
                        id="text"
                        className="block h-[47px] w-full rounded-[10px] border-[1px] border-gray-300 bg-white p-4 text-sm text-gray-900 dark:border-[#191A1F] dark:bg-[#212430]"
                        placeholder="Song Name"
                      />
                    </div>
                  </div>

                  <div className="my-4 rounded-lg border-2 border-dashed border-[#B8BAC7]  dark:border-[#B8BAC74D]">
                    {isUploading ? (
                      uploadIds.map((uploadId) => (
                        <div key={uploadId} className="py-4">
                          <div className="flex items-center justify-center ">
                            <p className="font-sm py-2 font-bold">
                              Uploading{" "}
                              {
                                selectedFiles.find(
                                  (f) => f.uploadId === uploadId
                                )?.file.name
                              }
                            </p>
                          </div>
                          <ProgressBar
                            height="30px"
                            bgColor="#5D5FEF"
                            baseBgColor="#B8BAC780"
                            className="my-2 flex items-center justify-center px-20"
                            completed={uploadProgress[uploadId] || 0}
                          />
                          <div className="mb-2 flex items-center justify-center">
                            <button
                              className="mt-4 cursor-pointer rounded-3xl border-[2px] border-[#5D5FEF] p-3 px-4 text-sm text-[#5D5FEF] dark:border-[#fff] dark:text-[#fff]"
                              onClick={() => handleDelete(uploadId)}
                            >
                              Cancel Upload
                            </button>
                          </div>
                        </div>
                      ))
                    ) : (
                      <>
                        {selectedFiles.length > 0 ? (
                          selectedFiles.map(({ file, uploadId }) => (
                            <div key={uploadId} className="mt-4 rounded-xl">
                              <div className="flex w-full flex-col justify-between p-6 md:flex-row">
                                <div className="flex items-center">
                                  <div className="flex h-[137px] w-[137px] items-center justify-center rounded-[6px] bg-[#F3F4F4] p-[37px]">
                                    <img
                                      className="h-[56px] w-[46px]"
                                      src={upload}
                                      alt=""
                                    />
                                  </div>
                                  <div className="ml-5">
                                    <h3 className="text-[14px] font-semibold text-[#000000] dark:text-[#fff]">
                                      {file.name}
                                    </h3>
                                  </div>
                                </div>
                                <div className="mt-[16px] flex items-center md:mt-0">
                                  <input
                                    type="file"
                                    accept=".mp3"
                                    className="hidden"
                                    id="file-input"
                                    onChange={handleFileChange}
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
                          ))
                        ) : (
                          <>
                            {!isUploading && selectedFiles.length === 0 && (
                              <div className="flex flex-col items-center justify-center bg-white py-4 dark:bg-[#212430]">
                                <input
                                  type="file"
                                  className="hidden"
                                  id="fileInput"
                                  onChange={handleFileChange}
                                  accept="audio/mp3"
                                />
                                <label
                                  htmlFor="fileInput"
                                  className="mt-4 cursor-pointer rounded-3xl bg-[#5D5FEF] p-3 px-14 text-sm text-white"
                                >
                                  Upload Mp3
                                </label>
                                <p className="font-sm py-4 font-bold">
                                  Maximum file size: 15MB
                                </p>
                              </div>
                            )}
                          </>
                        )}
                      </>
                    )}
                  </div>
                </div>
              ))}
            </div>
            <hr />
            <div className="py-4 flex ">
              <button
                type="button"
                className=" h-[37px] w-[129px] cursor-pointer rounded-full bg-[#5D5FEF]  text-sm text-white "
                onClick={addAudioSection}
              >
                Add Audio
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default PlaylistAudio;
