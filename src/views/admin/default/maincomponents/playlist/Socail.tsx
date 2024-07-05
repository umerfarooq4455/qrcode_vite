import React, { useState } from "react";
import f3 from "./Playlistimages/Group 1000002954.svg";
import f2 from "./Playlistimages/Group 1000002956.svg";
import f1 from "./Playlistimages/images (1) 2.svg";
import f4 from "./Playlistimages/Mask group.svg";
import f5 from "./Playlistimages/pngaaa 1.svg";
import { RxCross1 } from "react-icons/rx";

interface ImageUrl {
  id: number;
  text: string;
  url: string;
}

const Socail: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(1);
  const [selectedImages, setSelectedImages] = useState<string[]>([]);
  const [titles, setTitles] = useState<string[]>([]);

  const toggleAccordion = (index: number) => {
    setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  const handleImageClick = (url: string) => {
    setSelectedImages([...selectedImages, url]);
    setTitles([...titles, ""]);
  };

  const handleCrossClick = (index: number) => {
    const updatedImages = selectedImages.filter((_, i) => i !== index);
    const updatedTitles = titles.filter((_, i) => i !== index);
    setSelectedImages(updatedImages);
    setTitles(updatedTitles);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>, index: number) => {
    const updatedTitles = [...titles];
    updatedTitles[index] = e.target.value;
    setTitles(updatedTitles);
  };

  const imageUrls: ImageUrl[] = [
    { id: 1, text: "name1", url: f1 },
    { id: 2, text: "name2", url: f2 },
    { id: 3, text: "name3", url: f3 },
    { id: 4, text: "name4", url: f4 },
    { id: 5, text: "name5", url: f5 },
  ];

  return (
    <div className="space-y-2">
      <div className="rounded-[10px] border-[1px] border-gray-300 bg-white px-5 font-dm text-[14px] font-semibold shadow-sm shadow-[#003EFF1A] dark:border-[#191A1F] dark:bg-[#13151E] dark:text-[#fff]">
        <div
          className="flex h-[45px] cursor-pointer items-center justify-between"
          onClick={() => toggleAccordion(1)}
        >
          <span className="text-[16px] font-semibold text-[#1B254B] dark:text-[#fff]">
            Social Networks
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
          <div className="mb-3">
            <div className="flex h-[124px] flex-col rounded-[10px] bg-[#F2F3F6] px-4 py-4">
              <div>
                <span className="text-[14px] text-[#1B254B] ">Add Music</span>
              </div>
              <div
                className="mb-6 mt-2 flex flex-wrap items-center"
                style={{ width: "75%" }}
              >
                {imageUrls.map((image) => (
                  <div
                    key={image.id}
                    onClick={() => handleImageClick(image.url)}
                    className="mb-2 mr-2 mt-4 flex h-[35px] w-[35px] items-center justify-center sm:h-[32px] sm:w-[32px] md:h-[32px] md:w-[32px] lg:h-[32px] lg:w-[32px]"
                  >
                    <img
                      src={image.url}
                      alt={`Image ${image.id}`}
                      className="h-[35px] w-[35px]"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {selectedImages.map((selectedImage, index) => (
          <div key={index} className="mb-4 mt-3">
            <div className="flex items-center">
              <img
                src={selectedImage}
                alt="Selected Image"
                className="mb-2 mr-2 flex h-[35px] w-[35px] items-center justify-center"
              />
              <span>
                <span>{titles[index]}</span>
              </span>
            </div>
            <div className="mt-2 flex flex-col items-center md:flex-row">
              <div className="w-full md:mr-2 md:w-auto">
                <label className="mb-2 block text-[12px] font-semibold text-gray-900 dark:text-white">
                  URL
                </label>
                <input
                  type="url"
                  id="text"
                  placeholder="https://"
                  className="h-[45px] w-full rounded-[10px] border-[1px] border-[#73779166] bg-[#fff] px-5 text-sm text-gray-900 dark:border-[#191A1F] dark:bg-[#212430] dark:text-[#fff] dark:placeholder-[#fff] md:w-auto"
                />
              </div>
              <div className="w-full md:mr-2 md:w-auto">
                <label className="mb-2 block text-[12px] font-semibold text-gray-900 dark:text-white">
                  Text
                </label>
                <input
                  type="text"
                  id="text"
                  placeholder="Text"
                  value={titles[index]}
                  onChange={(e) => handleInputChange(e, index)}
                  className="h-[45px] w-full rounded-[10px] border-[1px] border-[#73779166] bg-[#fff] px-5 text-sm text-gray-900 dark:border-[#191A1F] dark:bg-[#212430] dark:text-[#fff] dark:placeholder-[#fff] md:w-auto"
                />
              </div>
              <div className="w-full md:mr-2 md:w-auto">
                <label className="mb-2 block text-[12px] font-semibold text-gray-900 dark:text-white">
                  Button Text
                </label>
                <input
                  type="text"
                  id="text"
                  placeholder="Button Text"
                  className="h-[45px] w-full rounded-[10px] border-[1px] border-[#73779166] bg-[#fff] px-5 text-sm text-gray-900 dark:border-[#191A1F] dark:bg-[#212430] dark:text-[#fff] dark:placeholder-[#fff] md:w-auto"
                />
              </div>
              <div className="mt-5 w-full md:w-auto">
                <RxCross1
                  className="h-5 w-5 cursor-pointer"
                  onClick={() => handleCrossClick(index)}
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Socail;
