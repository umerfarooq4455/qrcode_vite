import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { useApiContext } from "../../../contextapi/contextApi"; // Ensure to import useApiContext from your context
import web from "../../../assets/img/qrcold-icons/website.svg";
import pdf from "../../../assets/img/qrcold-icons/Group 8.svg";
import links from "../../../assets/img/qrcold-icons/links-list.svg";
import images from "../../../assets/img/qrcold-icons/images.svg";
import videosimg from "../../../assets/img/qrcold-icons/videos.svg";
import mp3 from "../../../assets/img/qrcold-icons/mp3.svg";
import business from "../../../assets/img/qrcold-icons/busniess.svg";
import vcard from "../../../assets/img/qrcold-icons/vcard.svg";
import menuimg from "../../../assets/img/qrcold-icons/Group 12.svg";
import apps from "../../../assets/img/qrcold-icons/apps.svg";
import coupon from "../../../assets/img/qrcold-icons/discount-voucher-icon2 1.svg";
import feeback from "../../../assets/img/qrcold-icons/feedback.svg";
import playlist from "../../../assets/img/qrcold-icons/Group 12.svg";
import barcode from "../../../assets/img/qrcold-icons/barcode.svg";
import landingpage from "../../../assets/img/qrcold-icons/Group 28.svg";
import event from "../../../assets/img/qrcold-icons/evnet.svg";
import previewdmobile from "../../../assets/img/qrcold-icons/previewmobile/mobmock1 2.svg";
import textimg from "../../../assets/img/qrcold-icons/text.svg";
import emailimg from "../../../assets/img/qrcold-icons/emali.svg";
import smsimg from "../../../assets/img/qrcold-icons/sms.svg";
import whatsappimg from "../../../assets/img/qrcold-icons/wahtsapp.svg";
import wifiimg from "../../../assets/img/qrcold-icons/vcardbottom.svg";
import vcardbottom from "../../../assets/img/qrcold-icons/vcard.svg";
import defaultimg from "../../../assets/img/qrcold-icons/defult.svg";
import defaultdarkmood from "../../../assets/img/qrcold-icons/darkmooddefult.svg";
import websithover from "../../../assets/img/qrcold-icons/hoverlandingimages/asdfasdf.png";
import PDFIMAG from "../../../assets/img/qrcold-icons/hoverlandingimages/Group54.png";
import listview from "../../../assets/img/qrcold-icons/pdfimges/Group 172.svg";
import listviewdark from "../../../assets/img/qrcold-icons/pdfimges/darklist.svg";
import gridview from "../../../assets/img/qrcold-icons/pdfimges/Group 171.svg";
import ho1 from "../../../assets/img/qrcold-icons/url.svg";
import ho2 from "../../../assets/img/qrcold-icons/pdf.svg";
import ho3 from "../../../assets/img/qrcold-icons/links.svg";
import ho4 from "../../../assets/img/qrcold-icons/photo.svg";
import ho5 from "../../../assets/img/qrcold-icons/video.svg";
import ho6 from "../../../assets/img/qrcold-icons/mp3hover.svg";
import ho7 from "../../../assets/img/qrcold-icons/bussineshover.svg";
import ho8 from "../../../assets/img/qrcold-icons/virtualcard.svg";
import ho9 from "../../../assets/img/qrcold-icons/menu.svg";
import ho10 from "../../../assets/img/qrcold-icons/app.svg";
import ho11 from "../../../assets/img/qrcold-icons/coupon.svg";
import ho12 from "../../../assets/img/qrcold-icons/review.svg";
import ho13 from "../../../assets/img/qrcold-icons/playlist.svg";
import ho14 from "../../../assets/img/qrcold-icons/url.svg";
import ho15 from "../../../assets/img/qrcold-icons/landingpage.svg";
import ho16 from "../../../assets/img/qrcold-icons/eventpage.svg";
import gridviewactive from "../../../assets/img/qrcold-icons/pdfimges/darkgrid.svg";
import webd from "../../../assets/img/qrcold-icons/darkmoodimges/website.svg";
import pdfd from "../../../assets/img/qrcold-icons/darkmoodimges/pdf.svg";
import linksd from "../../../assets/img/qrcold-icons/darkmoodimges/linklist.svg";
import imagesd from "../../../assets/img/qrcold-icons/darkmoodimges/images.svg";
import videosimgd from "../../../assets/img/qrcold-icons/darkmoodimges/videod.svg";
import mp3d from "../../../assets/img/qrcold-icons/darkmoodimges/mp3.svg";
import businessd from "../../../assets/img/qrcold-icons/darkmoodimges/busines.svg";
import vcardd from "../../../assets/img/qrcold-icons/darkmoodimges/vcard.svg";
import menuimgd from "../../../assets/img/qrcold-icons/darkmoodimges/menu.svg";
import appsd from "../../../assets/img/qrcold-icons/darkmoodimges/apps.svg";
import coupond from "../../../assets/img/qrcold-icons/darkmoodimges/coupon.svg";
import feebackd from "../../../assets/img/qrcold-icons/darkmoodimges/feedback.svg";
import playlistd from "../../../assets/img/qrcold-icons/darkmoodimges/playlist.svg";
import barcoded from "../../../assets/img/qrcold-icons/darkmoodimges/barcode.svg";
import landingpaged from "../../../assets/img/qrcold-icons/darkmoodimges/landigpage.svg";
import eventd from "../../../assets/img/qrcold-icons/darkmoodimges/event.svg";
import textimgd from "../../../assets/img/qrcold-icons/darkmoodimges/text.svg";
import emailimgd from "../../../assets/img/qrcold-icons/darkmoodimges/email.svg";
import smsimgd from "../../../assets/img/qrcold-icons/darkmoodimges/sms.svg";
import whatsappimgd from "../../../assets/img/qrcold-icons/darkmoodimges/whatsapp.svg";
import wifiimgd from "../../../assets/img/qrcold-icons/darkmoodimges/wifi.svg";
import vcardbottomd from "../../../assets/img/qrcold-icons/darkmoodimges/vcard.svg";
import stweb from "../../../assets/img/qrcold-icons/darkmoodimges/stweb1.svg";
import stweb1 from "../../../assets/img/qrcold-icons/darkmoodimges/stweb.svg";
import stvcard from "../../../assets/img/qrcold-icons/darkmoodimges/stvcard.svg";
import stText from "../../../assets/img/qrcold-icons/darkmoodimges/stText.svg";
import stnumber from "../../../assets/img/qrcold-icons/darkmoodimges/stnumber.svg";
import stwifi from "../../../assets/img/qrcold-icons/darkmoodimges/stwifi.svg";


const Dashboard = () => {
  const {
    activeStep,
    handleNextStep,
    handlePreviousStep,
    contenttypeid,
    setContenttypeid,
    setQrcodetype,
    darkmode,
  } = useApiContext(); // Removed redundant useApiContext call

  const [hoveredLink, setHoveredLink] = useState<any>(null); // Adjust any type if linksData structure is known
  const [viewMode, setViewMode] = useState("grid");
  const navigate = useNavigate();

  const handleGridButtonClick = () => {
    setViewMode("grid");
  };

  const handleListButtonClick = () => {
    setViewMode("list");
  };

  const isGridView = viewMode === "grid";

  const handleLinkMouseEnter = (link: any) => {
    setHoveredLink(link);
  };

  const handleLinkMouseLeave = () => {
    setHoveredLink(null);
  };

  const handleCardClick = (index: any) => {
    console.log("Card clicked with index:", index);

    if (index < 0 || index >= linksData.length) {
      console.error("Invalid index:", index);
      return;
    }

    const selectedLink = linksData[index];
    if (!selectedLink || !selectedLink.route) {
      console.error("Route not defined for index:", index);
      return;
    }

    setContenttypeid(index);
    localStorage.setItem("nexstepid", index.toString()); // Ensure to stringify if not already
    handleNextStep();
    navigate(selectedLink.route);
  };

  const handletype = (link: any) => {
    setQrcodetype(link.title);
    localStorage.setItem("type", link.title);
  };

  const overlayStyle: React.CSSProperties = {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    display: "flex",
    justifyContent: "center",
    background: "none",
    zIndex: 10,
    flexDirection: "column", // Corrected spelling
  };


   // dynamic qrcode array //
   const linksData = [
    {
      id: "1",
      title: "Website ",
      description: "Open a URL in a browser",
      image: web,
      image1: ho1,
      darkimage: webd,
      route: "/qr-code-generator/web1",
    },
    {
      id: "2",
      title: "PDF",
      description: "Show a PDF file",
      image: pdf,
      image1: ho2,
      darkimage: pdfd,
      route: "/qr-code-generator/pdf1",
    },
    {
      id: "3",
      title: "Links List",
      description: "Display group of lists",
      image: links,
      image1: ho3,
      darkimage: linksd,
      route: "/qr-code-generator/links1",
    },
    {
      id: "4",
      title: "Images",
      description: "Show an images gallery",
      image: images,
      image1: ho4,
      darkimage: imagesd,
      route: "/qr-code-generator/imgurl1",
    },
    {
      id: "5",
      title: "Videos",
      description: "Show a video",
      image: videosimg,
      image1: ho5,
      darkimage: videosimgd,
      route: "/qr-code-generator/videourl1",
    },
    {
      id: "6",
      title: "Mp3",
      description: "Play an audio file",
      image: mp3,
      image1: ho6,
      darkimage: mp3d,
      route: "/qr-code-generator/mp3url1",
    },
    {
      id: "7",
      title: "Business",
      description: "Share your business info",
      image: business,
      image1: ho7,
      darkimage: businessd,
      route: "/qr-code-generator/business1",
    },
    {
      id: "8",
      title: "vCard Pro",
      description: "Share contact details",
      image: vcard,
      image1: ho8,
      darkimage: vcardd,
      route: "/qr-code-generator/vcard1",
    },
    {
      id: "9",
      title: "Menu",
      description: "Display Restaurant menu",
      image: menuimg,
      image1: ho9,
      darkimage: menuimgd,
      route: "/qr-code-generator/menu1",
    },
    {
      id: "10",
      title: "Apps",
      description: "Share your business ifo",
      image: apps,
      image1: ho10,
      darkimage: appsd,
      route: "/qr-code-generator/apps1",
    },
    {
      id: "11",
      title: "Coupon",
      description: "Share a coupon",
      image: coupon,
      image1: ho11,
      darkimage: coupond,
      route: "/qr-code-generator/coupon1",
    },
    {
      id: "12",
      title: "Feedback",
      description: "Get rated by feedbacks",
      image: feeback,
      image1: ho12,
      darkimage: feebackd,
      route: "/qr-code-generator/feedback1",
    },
    {
      id: "13",
      title: "Playlist",
      description: "Share your own music",
      image: playlist,
      image1: ho13,
      darkimage: playlistd,
      route: "/qr-code-generator/playlist1",
    },
    {
      id: "14",
      title: "Barcode",
      description: "Share your barcode ",
      image: barcode,
      image1: ho14,
      darkimage: barcoded,
      route: "/qr-code-generator/barcode1",
    },
    {
      id: "15",
      title: "Landing Page",
      description: "create your own page",
      image: landingpage,
      image1: ho15,
      darkimage: landingpaged,
      route: "/qr-code-generator/langpage1",
    },
    {
      id: "16",
      title: "Event",
      description: "Promote and share event",
      image: event,
      image1: ho16,
      darkimage: eventd,
      route: "/qr-code-generator/event1",
    },

    // Add more objects for other links
  ];

  // static qrcode array //
  const Staticqrcode = [
    {
      id: "17",
      title: "Website",
      description: "Open a URL in a browser",
      image: web,
      image1: stweb,
      darkimage: webd,
      route: "/qr-code-generator/web-static1",
    },
    {
      id: "18",
      title: "Text",
      description: "Displays plain text",
      image: textimg,
      image1: stText,
      darkimage: textimgd,
      route: "/qr-code-generator/text1",
    },
    {
      id: "19",
      title: "Email",
      description: "Email with predefined text",
      image: emailimg,
      image1: stweb1,
      darkimage: emailimgd,
      route: "/qr-code-generator/email1",
    },
    {
      id: "20",
      title: "SMS",
      description: "Send a mobile text",
      image: smsimg,
      image1: stnumber,
      darkimage: smsimgd,
      route: "/qr-code-generator/sms1",
    },
    {
      id: "21",
      title: "Whatsapp",
      description: "Send a Whatsapp text",
      image: whatsappimg,
      image1: stnumber,
      darkimage: whatsappimgd,
      route: "/qr-code-generator/whatsapp1",
    },
    {
      id: "22",
      title: "WiFi",
      description: "Connect to WiFi network ",
      image: wifiimg,
      image1: stwifi,
      darkimage: wifiimgd,
      route: "/qr-code-generator/wifi1",
    },
    {
      id: "23",
      title: "vCard",
      description: "Share contact details",
      image: vcardbottom,
      image1: stvcard,
      darkimage: vcardbottomd,
      route: "/qr-code-generator/vcard-static1",
    },

    // Add more objects for other links
  ];

  return (
    <div className="dark:text-white">
      <div className="mt-[14px] flex justify-between">
        <div>
          <h1 className="text-lg font-bold md:text-xl">Dynamic QR</h1>
          <p className="text-sm">
            Tracking of your QR without changing your code and update the
            content in real time
          </p>
        </div>
        <div className="">
          <div className="text-black mt-4 flex w-[86px] items-center justify-center rounded-full  border border-[#EFEFEF]  bg-[#FFFFFF] dark:border-[#1F2025] dark:bg-[#13151E]">
            <div
              className={`flex h-[33px] w-[101px] items-center justify-center  ${
                isGridView ? "active" : ""
              }`}
              style={{ borderRadius: "20px 0 0 20px" }}
              onClick={handleGridButtonClick}
            >
              <img
                width={17}
                src={isGridView ? gridviewactive : gridview}
                alt="QR Code"
              />
            </div>
            <div className="h-8 border border-[#EFEFEF] dark:border-[#1F2025] "></div>
            <div
              className={`flex h-[33px] w-[101px] items-center justify-center  ${
                !isGridView ? "active" : ""
              }`}
              style={{ borderRadius: "0 20px 20px 0" }}
              onClick={handleListButtonClick}
            >
              <img
                width={17}
                src={!isGridView ? listview : listviewdark}
                alt="Preview"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col justify-between py-4  md:mx-auto md:flex-row">
        <div
          className={`h-auto md:w-full lg:h-[750px] lg:overflow-y-scroll xl:w-full ${
            !isGridView ? "w-full" : ""
          }`}
        >
          <div
            className={`grid  md:grid-cols-1 lg:grid-cols-1 xl:grid-cols-1 ${
              isGridView
                ? "grid gap-3 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3"
                : ""
            }`}
          >
            {linksData.map((link: any, index: number) => (
              <div
                key={link.id}
                onClick={() => {
                  handleCardClick(index);
                  navigate(link.route);
                  handletype(link);
                }}
                onMouseEnter={() => handleLinkMouseEnter(link)}
                onMouseLeave={handleLinkMouseLeave}
                className={`shdowcards flex cursor-pointer items-center justify-start  rounded-[12px] border-[2px] bg-white px-2 py-2 hover:border-[#FE8E3E] dark:border-[#191A1F] dark:bg-[#13151E] dark:text-white dark:hover:border-[#FFFFFF] ${
                  isGridView ? "" : "mb-3"
                }`}
              >
                <div className="rounded-[9px] bg-[#F4F5F6] p-4 dark:bg-[#212430]">
                  <img
                    src={darkmode ? link.darkimage : link.image}
                    width={100}
                    style={{ width: "44.95px", height: "40px" }}
                    alt={`Website ${link.id}`}
                  />
                </div>
                <div
                  className={`ml-4 flex flex-row ${
                    isGridView ? "flex flex-col items-start justify-start " : ""
                  }`}
                >
                  <h1 className="font-bold">{link.title}</h1>
                  <p
                    className={`flex items-center justify-center text-xs dark:text-[#A3AED0] ${
                      !isGridView ? "mx-4" : ""
                    }`}
                  >
                    {link.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="mb-5 mt-24">
            <h1 className="text-lg font-bold md:text-xl">Static QR </h1>
            <p className="text-sm">
              Tracking of your QR, without changing your code and update the
              content in real time.
            </p>
          </div>

          <div
            className={`grid  md:grid-cols-1 lg:grid-cols-1 xl:grid-cols-1 ${
              isGridView
                ? "grid  gap-3 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3"
                : ""
            }`}
          >
            {Staticqrcode.map((link: any) => (
              <Link
                key={link.id}
                to={link.route}
                onMouseEnter={() => handleLinkMouseEnter(link)}
                onMouseLeave={handleLinkMouseLeave}
                className={`shdowcards flex cursor-pointer items-center justify-start  rounded-[12px] border-[2px] bg-white px-2 py-2 hover:border-[#FE8E3E] dark:border-[#191A1F] dark:bg-[#13151E] dark:text-white dark:hover:border-[#FFFFFF]  ${
                  isGridView ? "" : "mb-4"
                }`}
              >
                <div className="rounded-[9px] bg-[#F4F5F6] p-4 dark:bg-[#212430]">
                  <img
                    src={darkmode ? link.darkimage : link.image}
                    width={100}
                    style={{ width: "44.95px", height: "40px" }}
                    alt={`Website ${link.id}`}
                  />
                </div>

                <div
                  className={`ml-4 flex flex-row ${
                    isGridView ? "flex flex-col items-start justify-start " : ""
                  }`}
                >
                  <h1 className="font-bold">{link.title}</h1>
                  <p
                    className={`flex items-center justify-center text-xs dark:text-[#A3AED0] ${
                      !isGridView ? "mx-4" : ""
                    }`}
                  >
                    {link.description}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>

        <div className="ml-2 hidden h-fit rounded-md bg-[#FFFFFF] px-4 py-2 pb-5 dark:bg-[#13151E] dark:text-white lg:block   ">
          <div className="flex justify-center py-4  text-[18px] font-bold">
            Preview
          </div>

          <div className="view pt-2">
            <div className="relative ">
              <img
                className="bg-transparent !z-10 "
                src={previewdmobile}
                alt="Mobile Preview"
              />

              {hoveredLink ? (
                <div
                  style={overlayStyle}
                  className="flex-grow-1 mx-19 inset-0 rounded-[2.5rem] opacity-100 dark:bg-[#13151E]  lg:mb-[4px] lg:ml-[17px] lg:mr-[16px] lg:mt-[4px] xl:my-[5px] xl:ml-[18px] xl:mr-[17px]  "
                >
                  <img
                    className="!z-0 h-full w-full"
                    src={hoveredLink.image1}
                    alt={``}
                  />
                </div>
              ) : (
                <div
                  style={overlayStyle}
                  className="flex-grow-1 mx-19 inset-0 rounded-[2.5rem] opacity-100 dark:bg-[#1A1C27]  lg:mb-[4px] lg:ml-[20px] lg:mr-[22px] lg:mt-[7px] xl:my-[7px] xl:ml-[18px] xl:mr-[17px]  "
                >
                  <img
                    className="!z-0 h-full w-full rounded-[28px] bg-[#FFFFFF] dark:bg-[#1A1C27]"
                    src={darkmode ? defaultdarkmood : defaultimg}
                    alt={``}
                  />
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
