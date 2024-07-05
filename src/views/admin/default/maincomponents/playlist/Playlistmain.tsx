import React, { useState } from "react";
import previewdmobile from "../../../../../assets/img/qrcold-icons/previewmobile/mobmock1 2.svg";
import { useNavigate } from "react-router-dom";
import { useApiContext } from "../../../../../contextapi/contextApi";
import qrcode from "../../../../../assets/img/qrcold-icons/previewmobile/Vector.svg";
import Preview from "../../../../../assets/img/qrcold-icons/previewmobile/prime_mobile.svg";
import Createfolder from "../../../../../components/Toplevelcomponent/folder/Createfolder";
import Passwordfield from "../../../../../components/Toplevelcomponent/password/Passwordfield";
import Urlconfig from "../../../../../components/Toplevelcomponent/urlconfiguration/Urlconfig";
import Schedule from "../../../../../components/Toplevelcomponent/schedule/Schedule";
import Scanlimt from "../../../../../components/Toplevelcomponent/scanlimt/Scanlimt";
import PlaylistColor from "./PlaylistColor";
import Fonts from "./Fonts";
import Playlistinfo from "./Playlistinfo";
import PlaylistAudio from "./PlaylistAudio";
import Socail from "./Socail";
import PlayWelcom from "./PlayWelcom";

const Playlistmain: React.FC = () => {
  const { setQRCode, websiteUrl, webbackendurl, darkmode } = useApiContext();
  const [isToggleButtonActive, setIsToggleButtonActive] =
    useState<boolean>(false);
  const [showMobileView, setShowMobileView] = useState<boolean>(true);
  const navigate = useNavigate();

  const toggleMobileView = () => {
    setShowMobileView(true);
  };

  const toggleQrCodeView = () => {
    setShowMobileView(false);
    const storedQRCodeData = localStorage.getItem("qrcodeData");
    setQRCode(storedQRCodeData ? JSON.parse(storedQRCodeData) : null);
  };

  const overlayStyle: React.CSSProperties = {
    position: "absolute",
    top: "0",
    left: "0",
    right: "0",
    bottom: "0",
    display: "flex",
    justifyContent: "center",
    backgroundColor: "rgba(255, 255, 255, 0.8)",
    zIndex: 10,
    flexDirection: "column",
  };

  const handleToggleButtonClick = () => {
    setIsToggleButtonActive(!isToggleButtonActive);
  };

  return (
    <>
      <div className="dark:text-white">
        {/* heading */}
        <div className="mt-[14px]">
          <h1 className="text-lg font-bold md:text-xl">
            Complete the content of the QR
          </h1>
          <p className="text-sm">
            Enter the Playlist related content to complete the QR Code.
          </p>
        </div>
        {/* heading */}

        {/* dynamic qrcodes */}
        <div className="flex w-full flex-col justify-between py-4 lg:flex-row">
          {/* Types cards */}
          <div className="h-auto lg:h-[750px] lg:w-full lg:overflow-y-scroll xl:w-full">
            <form>
              <div className="">
                <div className="mb-3 p-[1px]">
                  <input
                    type="text"
                    id="text"
                    className="h-[45px] w-full rounded-[10px] border-[1px] border-[#73779166] bg-[#fff] px-5 text-sm text-gray-900 dark:border-[#191A1F] dark:bg-[#212430] dark:text-[#fff] dark:placeholder-[#fff]"
                    placeholder="Name of your QR code..."
                  />
                </div>
              </div>

              {/* toggles */}
              <label className="relative ml-[4px] inline-flex cursor-pointer items-center">
                <input
                  style={{
                    backgroundColor: isToggleButtonActive ? "#5D5FEF" : "white",
                  }}
                  type="checkbox"
                  value=""
                  className="peer sr-only bg-red-600"
                  checked={isToggleButtonActive}
                  onChange={handleToggleButtonClick}
                />
                <div className="peer h-4 w-11 rounded-full bg-[#989898] after:absolute after:-top-0.5 after:start-[-2px] after:h-6 after:w-6 after:rounded-full after:border after:bg-[#F1F1F1] after:transition-all after:content-[''] peer-checked:bg-[#BAC6F3] peer-checked:after:translate-x-full peer-checked:after:border-none peer-checked:after:bg-[#5D5FEF] dark:border-gray-600 dark:bg-gray-700 dark:peer-focus:ring-[#5D5FEF] rtl:peer-checked:after:-translate-x-full"></div>
                <span className="ms-3 text-sm font-medium text-[#191A1F] dark:text-[#fff]">
                  Autocomplete fields
                </span>
              </label>

              <div className="mb-3 mt-2">
                <PlaylistColor />
              </div>
              <div className="mb-3 mt-2">
                <Fonts />
              </div>
              <div className="mb-3 mt-2">
                <Playlistinfo />
              </div>
              <div className="mb-3 mt-2">
                <PlaylistAudio />
              </div>
              <div className="mb-3 mt-2">
                <Socail />
              </div>
              <div className="mb-3 mt-2">
                <PlayWelcom />
              </div>
              <div className="mb-3 mt-2">
                <Createfolder />
              </div>
              <div className="mb-3 mt-2">
                <Passwordfield />
              </div>
              <div className="mb-3 mt-2">
                <Urlconfig />
              </div>
              <div className="mb-3 mt-2">
                <Schedule />
              </div>
              <div className="mb-3 mt-2 w-full">
                <Scanlimt />
              </div>
            </form>
          </div>

          {/* mobile view on desktop */}
          <div className="flex flex-col items-center">
            <div className="ml-2 hidden rounded-md bg-white px-5 py-2 dark:bg-[#13151E] dark:text-white lg:block">
              <div className="">
                <div className="flex items-center justify-center py-4 text-[18px] font-bold">
                  Preview
                </div>
                <div className="view py-4">
                  <div className="relative">
                    <img
                      className="bg-transparent"
                      src={previewdmobile}
                      alt="Mobile Preview"
                    />

                    {/* Overlay div */}
                    <div
                      style={overlayStyle}
                      className="flex-grow-1 mx-19 inset-0 rounded-[2.5rem] opacity-100 dark:bg-[#7d8cc5] lg:mb-[4px] lg:ml-[17px] lg:mr-[16px] lg:mt-[4px] xl:my-[5px] xl:ml-[18px] xl:mr-[17px]"
                    >
                      {/* Overlay content */}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* mobile view and qrcode view buttons */}
            <div className="hidden lg:block">
              <div className="text-black mt-4 flex w-[86px] items-center justify-center rounded-full border-[1px] border-[#C7C9D3] bg-[#fff] dark:border-[#202125] dark:bg-[#13151E]">
                <button
                  className={`flex h-[33px] w-[101px] items-center justify-center ${
                    !showMobileView || !websiteUrl ? "" : "hover:border-none"
                  }`}
                  style={{ borderRadius: "20px 0 0 20px" }}
                  onClick={toggleQrCodeView}
                >
                  <img width={17} src={qrcode} alt="QR Code" />
                </button>
                <div className="h-8 border-[1px] border-[#C7C9D3] bg-[#fff] dark:border-[#202125] dark:bg-[#13151E]"></div>
                <div
                  className={`flex h-[33px] w-[101px] items-center justify-center ${
                    showMobileView ? "" : ""
                  }`}
                  style={{ borderRadius: "0 20px 20px 0" }}
                  onClick={toggleMobileView}
                >
                  <img width={24} src={Preview} alt="Preview" />{" "}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Playlistmain;
