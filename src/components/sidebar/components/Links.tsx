import React from "react";
import { NavLink, useLocation } from "react-router-dom";
import classNames from "classnames";
import newqrcode from "../../../assets/img/qrcold-icons/sidebaricons/creartnewqr.svg";
import newqrcodedark from "../../../assets/img/qrcold-icons/sidebaricons/creatnewdark.svg";
import bulkwhite from "../../../assets/img/qrcold-icons/sidebaricons/blukwhite.svg";
import bulkdark from "../../../assets/img/qrcold-icons/sidebaricons/blukdark.svg";
import myqrcodeswhite from "../../../assets/img/qrcold-icons/sidebaricons/myqrcodeswhite.svg";
import myqrcodesdark from "../../../assets/img/qrcold-icons/sidebaricons/myqrcodedark.svg";
import staticswhite from "../../../assets/img/qrcold-icons/sidebaricons/staticswhite.svg";
import staticsdark from "../../../assets/img/qrcold-icons/sidebaricons/staticsdark.svg";
import tempwhite from "../../../assets/img/qrcold-icons/sidebaricons/templatewhite.svg";
import tempdark from "../../../assets/img/qrcold-icons/sidebaricons/templatedark.svg";
import { useApiContext } from "../../../contextapi/contextApi";

const Links: React.FC = () => {
  const location = useLocation();
  const {
    activeStep,
    setActiveStep,
    open,
    setOpen,
    isCollapsed,
    setIsCollapsed,
  } = useApiContext();

  const handelresetStepper = () => {
    setActiveStep(0);
  };

  return (
    <div className="mt-9 flex flex-col items-center ">
      <NavLink
        to="/qr-code-generator"
        onClick={handelresetStepper}
        className={classNames(
          "relative mb-3 flex   items-center p-2 hover:cursor-pointer",
          {
            "text-black rounded-lg bg-[#5D5FEF] font-bold":
              location.pathname === "/qr-code-generator" ||
              location.pathname.startsWith("/qr-code-generator/"),
            "text-[#A3AED0]": !(
              location.pathname === "/qr-code-generator" ||
              location.pathname.startsWith("/qr-code-generator/")
            ),
            "h-[43px] w-[43px] items-center justify-center": isCollapsed,
            "h-[49px] w-[193px]": !isCollapsed,
          }
        )}
      >
        {location.pathname === "/qr-code-generator" ||
        location.pathname.startsWith("/qr-code-generator/") ? (
          <img
            src={newqrcode}
            className={`h-[22px] w-[22px] ${
              isCollapsed ? "ml-0" : "ml-3 block "
            }`}
            alt=""
          />
        ) : (
          <img
            src={newqrcodedark}
            className={`h-[22px] w-[22px] ${
              isCollapsed ? "ml-0" : "ml-3 block "
            }`}
            alt=""
          />
        )}
        <span
          className={` ${
            location.pathname === "/qr-code-generator" ||
            location.pathname.startsWith("/qr-code-generator/")
              ? "flex cursor-pointer items-center pl-4 font-dm text-[13px]  font-bold  text-white"
              : "flex cursor-pointer items-center pl-4 font-dm text-[13px]  font-bold text-[#737791] "
          } ${isCollapsed ? "hidden " : "block"}`}
        >
          Create New QR
        </span>
      </NavLink>

      <NavLink
        to="/bulkqr"
        onClick={handelresetStepper}
        className={classNames(
          "relative mb-3 flex   items-center p-2 hover:cursor-pointer",
          {
            "text-black  rounded-lg bg-[#5D5FEF]  font-bold":
              location.pathname === "/bulkqr" ||
              location.pathname.startsWith("/bulkqr/"),
            "text-[#A3AED0]": !(
              location.pathname === "/bulkqr" ||
              location.pathname.startsWith("/bulkqr/")
            ),
            "h-[43px] w-[43px] items-center justify-center": isCollapsed,
            "h-[49px] w-[193px]": !isCollapsed,
          }
        )}
      >
        {location.pathname === "/bulkqr" ||
        location.pathname.startsWith("/bulkqr/") ? (
          <img
            src={bulkwhite}
            className={`h-[22px] w-[22px] ${
              isCollapsed ? "ml-0" : "ml-3 block "
            }`}
            alt=""
          />
        ) : (
          <img
            src={bulkdark}
            className={`h-[22px] w-[22px] ${
              isCollapsed ? "ml-0" : "ml-3 block "
            }`}
            alt=""
          />
        )}

        <span
          className={` ${
            location.pathname === "/bulkqr" ||
            location.pathname.startsWith("/bulkqr/")
              ? "flex cursor-pointer items-center pl-4 font-dm text-[13px]  font-bold  text-white"
              : "flex cursor-pointer items-center pl-4 font-dm text-[13px]  font-bold text-[#737791] "
          } ${isCollapsed ? "hidden" : "block"}`}
        >
          Generate Bulk QR
        </span>
      </NavLink>

      <NavLink
        to="/my-qrcodes"
        onClick={handelresetStepper}
        className={classNames(
          "relative mb-3 flex   items-center  p-2 hover:cursor-pointer",
          {
            "text-black rounded-lg bg-[#5D5FEF]  font-bold":
              location.pathname === "/my-qrcodes" ||
              location.pathname.startsWith("/my-qrcodes/"),
            "text-[#A3AED0]": !(
              location.pathname === "/my-qrcodes" ||
              location.pathname.startsWith("/my-qrcodes/")
            ),
            "h-[43px] w-[43px] items-center justify-center": isCollapsed,
            "h-[49px] w-[193px]": !isCollapsed,
          }
        )}
      >
        {location.pathname === "/my-qrcodes" ||
        location.pathname.startsWith("/my-qrcodes/") ? (
          <img
            src={myqrcodeswhite}
            className={`h-[22px] w-[22px] ${
              isCollapsed ? "ml-0" : "ml-3 block "
            }`}
            alt=""
          />
        ) : (
          <img
            src={myqrcodesdark}
            className={`h-[22px] w-[22px] ${
              isCollapsed ? "ml-0" : "ml-3 block "
            }`}
            alt=""
          />
        )}

        <span
          className={` ${
            location.pathname === "/my-qrcodes" ||
            location.pathname.startsWith("/my-qrcodes/")
              ? "flex cursor-pointer items-center pl-4 font-dm text-[13px]  font-bold  text-white"
              : "flex cursor-pointer items-center pl-4 font-dm text-[13px]  font-bold text-[#737791] "
          } ${isCollapsed ? "hidden" : "block"}`}
        >
          My QR Codes
        </span>
      </NavLink>

      <NavLink
        to="/statistics"
        onClick={handelresetStepper}
        className={classNames(
          "relative mb-3 flex   items-center  p-2 hover:cursor-pointer",
          {
            "text-black  rounded-lg bg-[#5D5FEF]  font-bold":
              location.pathname === "/statistics" ||
              location.pathname.startsWith("/statistics/"),
            "text-[#A3AED0]": !(
              location.pathname === "/statistics" ||
              location.pathname.startsWith("/statistics/")
            ),
            "h-[43px] w-[43px] items-center justify-center": isCollapsed,
            "h-[49px] w-[193px]": !isCollapsed,
          }
        )}
      >
        {location.pathname === "/statistics" ||
        location.pathname.startsWith("/statistics/") ? (
          <img
            src={staticswhite}
            className={`h-[22px] w-[22px] ${
              isCollapsed ? "ml-0" : "ml-3 block "
            }`}
            alt=""
          />
        ) : (
          <img
            src={staticsdark}
            className={`h-[22px] w-[22px] ${
              isCollapsed ? "ml-0" : "ml-3 block "
            }`}
            alt=""
          />
        )}

        <span
          className={` ${
            location.pathname === "/statistics" ||
            location.pathname.startsWith("/statistics/")
              ? "flex cursor-pointer items-center pl-4 font-dm text-[13px]  font-bold  text-white"
              : "flex cursor-pointer items-center pl-4 font-dm text-[13px]  font-bold text-[#737791] "
          } ${isCollapsed ? "hidden" : "block"}`}
        >
          Statistics
        </span>
      </NavLink>

      <NavLink
        to="/templates"
        onClick={handelresetStepper}
        className={classNames(
          "relative mb-3 flex  items-center  p-2 hover:cursor-pointer",
          {
            "text-black  rounded-lg bg-[#5D5FEF]  font-bold":
              location.pathname === "/templates" ||
              location.pathname.startsWith("/templates/"),
            "text-[#A3AED0]": !(
              location.pathname === "/templates" ||
              location.pathname.startsWith("/templates/")
            ),
            "h-[43px] w-[43px] items-center justify-center": isCollapsed,
            "h-[49px] w-[193px]": !isCollapsed,
          }
        )}
      >
        {location.pathname === "/templates" ||
        location.pathname.startsWith("/templates/") ? (
          <img
            src={tempwhite}
            className={`h-[22px] w-[22px] ${
              isCollapsed ? "ml-0" : "ml-3 block "
            }`}
            alt=""
          />
        ) : (
          <img
            src={tempdark}
            className={`h-[22px] w-[22px] ${
              isCollapsed ? "ml-0" : "ml-3 block "
            }`}
            alt=""
          />
        )}

        <span
          className={` ${
            location.pathname === "/templates" ||
            location.pathname.startsWith("/templates/")
              ? "flex cursor-pointer items-center pl-4 font-dm text-[13px]  font-bold  text-white"
              : "flex cursor-pointer items-center pl-4 font-dm text-[13px]  font-bold text-[#737791] "
          } ${isCollapsed ? "hidden" : "block"}`}
        >
          Templates
        </span>
      </NavLink>
    </div>
  );
};

export default Links;
