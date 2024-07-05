import React, { useState } from "react";
import f1 from "./imges/socail/Group 142.svg";
import f2 from "./imges/socail/Group 143.svg";
import f3 from "./imges/socail/Group 144.svg";
import f4 from "./imges/socail/Group 147.svg";
import f5 from "./imges/socail/Group 148.svg";
import f6 from "./imges/socail/Group 149.svg";
import f7 from "./imges/socail/Signal_ultramarine_icon.svg 1.svg";
import f8 from "./imges/socail/apple-music 1.svg";
import f9 from "./imges/socail/blue-linkedin-logo-15916 1.svg";
import f10 from "./imges/socail/dribble-circle-logo-16646 1.svg";
import f11 from "./imges/socail/facebook-messenger-circle-blue-logo-16641 1.svg";
import f12 from "./imges/socail/github-logo-6532 1.svg";
import f13 from "./imges/socail/icons8-line 1.svg";
import f14 from "./imges/socail/icons8-trustpilot 1.svg";
import f15 from "./imges/socail/icons8-uber-eats 1.svg";
import f16 from "./imges/socail/instagram-logo-8869 1.svg";
import f17 from "./imges/socail/reddit-logo-2436 1.svg";
import f18 from "./imges/socail/skype-132 1.svg";
import f19 from "./imges/socail/spotify-logo-5434 1.svg";
import f20 from "./imges/socail/telegram-logo-5941 1.svg";
import f21 from "./imges/socail/tiktok-logo-10296 1.svg";
import f22 from "./imges/socail/tumblr-134 1.svg";
import f23 from "./imges/socail/twitter-x-logo-black-round-20851 1.svg";
import f24 from "./imges/socail/viber-logo-14132 1.svg";
import f25 from "./imges/socail/vimeo-circle-blue-logo-16639 1.svg";
import f26 from "./imges/socail/vk-120 1.svg";
import f27 from "./imges/socail/website-5793 1.svg";
import f28 from "./imges/socail/whatsapp-logo-4456 1.svg";
import f29 from "./imges/socail/xing-logo-2447 1.svg";
import f30 from "./imges/socail/yelp-svgrepo-com 1.svg";
import { RxCross1 } from "react-icons/rx";

const Socailmedia = () => {
  const [activeIndex, setActiveIndex] = useState(1);
  const [selectedImages, setSelectedImages] = useState([]);
  const [titles, setTitles] = useState([]);

  const toggleAccordion = (index) => {
    setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  const handleImageClick = (url) => {
    setSelectedImages([...selectedImages, url]);
    setTitles([...titles, ""]);
  };

  const handleCrossClick = (index) => {
    const updatedImages = selectedImages.filter((_, i) => i !== index);
    const updatedTitles = titles.filter((_, i) => i !== index);
    setSelectedImages(updatedImages);
    setTitles(updatedTitles);
  };

  const handleInputChange = (e, index) => {
    const updatedTitles = [...titles];
    updatedTitles[index] = e.target.value;
    setTitles(updatedTitles);
  };

  const imageUrls = [
    f1,
    f2,
    f3,
    f4,
    f5,
    f6,
    f7,
    f8,
    f9,
    f10,
    f11,
    f12,
    f13,
    f14,
    f15,
    f16,
    f17,
    f18,
    f19,
    f20,
    f21,
    f22,
    f23,
    f24,
    f25,
    f26,
    f27,
    f28,
    f29,
    f30,
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
          <div className="mb-1">
            <div className="mt-5 flex flex-col">
              <div className="w-full">
                <label className="mb-2 block text-[12px] font-semibold text-gray-900 dark:text-white">
                  Title
                </label>
                <input
                  type="text"
                  placeholder="Title"
                  className="mb-2 h-[45px] w-full rounded-[10px] border-[1px] border-[#73779166] bg-[#fff] px-5 text-sm text-gray-900 dark:border-[#191A1F] dark:bg-[#212430] dark:text-[#fff] dark:placeholder-[#fff]"
                />
              </div>
            </div>
          </div>
        )}

        {selectedImages.map((selectedImage, index) => (
          <div
            key={index}
            className="mt-2 flex items-center"
            style={{ width: "50%" }}
          >
            <img
              src={selectedImage}
              alt="Selected Image"
              className="mb-2 mr-2 flex  h-[32px] w-[32px] items-center justify-center rounded-full border-[1px] border-[#DDDDDD] p-1 dark:bg-white  sm:h-[32px] sm:w-[32px] md:h-[32px] md:w-[32px] lg:h-[32px] lg:w-[32px]"
            />
            <input
              type="url"
              value={titles[index]}
              onChange={(e) => handleInputChange(e, index)}
              placeholder="https://..."
              className="mb-2 mr-2 h-[45px] w-full rounded-[10px] border-[1px] border-[#73779166] bg-[#fff] px-5 text-sm text-gray-900 dark:border-[#191A1F] dark:bg-[#212430] dark:text-[#fff] dark:placeholder-[#fff]"
            />
            <RxCross1
              className="h-5 w-5 cursor-pointer"
              onClick={() => handleCrossClick(index)}
            />
          </div>
        ))}

        <div className="mt-5 flex flex-col">
          <div>
            <span className="text-[16px] text-[#1B254B] dark:text-white">
              Add More
            </span>
          </div>
          <div
            className="mb-6 mt-2 flex flex-wrap items-center"
            style={{ width: "75%" }}
          >
            {imageUrls.map((url, index) => (
              <div
                key={index}
                onClick={() => handleImageClick(url)}
                className="mb-2 mr-2 flex  h-[32px] w-[32px] items-center justify-center rounded-full border-[1px] border-[#DDDDDD] dark:bg-white  sm:h-[32px] sm:w-[32px] md:h-[32px] md:w-[32px] lg:h-[32px] lg:w-[32px]"
              >
                <img
                  src={url}
                  alt={`Image ${index + 1}`}
                  className="h-[24px] w-[24px] rounded-full sm:h-[24px] sm:w-[25px] md:h-[25px] md:w-[25px] lg:h-[25px] lg:w-[25px]"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Socailmedia;
