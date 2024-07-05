import React, { useState } from "react";
import previewdmobile from "../../../assets/img/qrcold-icons/previewmobile/mobmock1 2.svg";
import image from "../../../assets/img/qrcold-icons/previewmobile/previewdmobile.svg";
import imagew from "../../../assets/img/qrcold-icons/previewmobile/darkmode.svg";
import Qrcodest from "../../../Qrcodest";
import qrcode from "../../../assets/img/qrcold-icons/previewmobile/Vector.svg";
import Preview from "../../../assets/img/qrcold-icons/previewmobile/prime_mobile.svg";
import { useApiContext } from "../../../contextapi/contextApi";

const Mobilepreview: React.FC = () => {
  const { setQRCode, websiteUrl, webbackendurl, darkmode } = useApiContext();
  const [showMobileView, setShowMobileView] = useState<boolean>(true);

  const toggleMobileView = () => {
    setShowMobileView(true);
  };

  const toggleQrCodeView = () => {
    setShowMobileView(false);
    const storedQRCodeData = localStorage.getItem("qrcodeData");
    if (storedQRCodeData) {
      setQRCode(JSON.parse(storedQRCodeData));
    }
  };

  const overlayStyle: React.CSSProperties = {
    position: "absolute",
    top: "0",
    left: "0",
    right: "0",
    bottom: "0",
    display: "flex",
    justifyContent: "center",
    backgroundColor: "#fff",
    zIndex: 10,
    flexDirection: "column",
  };

  return (
    <>
      {/* mobile view on desktop */}
      <div
        className={`flex flex-col items-center ${
          showMobileView
            ? "overflow-y-scroll lg:max-h-[600px] xl:max-h-[600px] 2xl:max-h-[730px]"
            : "overflow-x-hidden overflow-y-hidden"
        }`}
      >
        <div>
          {showMobileView ? (
            <>
              {/* mobile view */}
              <div className="ml-2 hidden rounded-md bg-white px-4 py-2 dark:bg-[#13151E] dark:text-white lg:block">
                <div className="flex justify-center py-4 text-[18px] font-bold">
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
                      className="flex-grow-1 mx-19 inset-0 rounded-[2.5rem] bg-white opacity-100 dark:bg-[#13151E] lg:mb-[4px] lg:ml-[17px] lg:mr-[16px] lg:mt-[4px] xl:my-[6px] xl:ml-[18px] xl:mr-[17px]"
                    >
                      <img
                        className="h-full w-full rounded-[1.5rem] dark:bg-[#13151E]"
                        src={darkmode ? imagew : image}
                        alt=""
                      />
                    </div>
                  </div>
                </div>
              </div>
            </>
          ) : (
            <>
              <div className="mx-1 hidden w-full rounded-2xl bg-white px-24 py-4 dark:bg-[#131D41] dark:text-white md:flex md:items-center md:justify-center lg:block">
                <div className="py-2 text-center font-semibold">QR Code</div>
                <div className="h-auto w-[250px] py-2">
                  <Qrcodest />
                </div>
              </div>
            </>
          )}
        </div>

        {/* mobile view and qrcode view buttons */}
        <div className="hidden lg:block">
          <div className="text-black mt-4 flex w-[86px] items-center justify-center rounded-full border-[1px] border-[#C7C9D3] bg-[#fff] dark:border-[#202125] dark:bg-[#13151E]">
            <button
              className={`flex h-[33px] w-[101px] items-center justify-center ${
                !showMobileView ? "" : !websiteUrl ? "hover:border-none" : ""
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
              <img width={24} src={Preview} alt="Preview" />
            </div>
          </div>
        </div>
      </div>
      {/* mobile view on desktop */}
    </>
  );
};

export default Mobilepreview;
