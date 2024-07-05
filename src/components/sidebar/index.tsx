/* eslint-disable */
import { useEffect } from "react";
import { HiX } from "react-icons/hi";
import Links from "./components/Links";
import Logo from "./sidebaricons/logo.svg";
import Logo1 from "./sidebaricons/ligtlogo.svg";
import darkarrow from "./sidebaricons/darkarrow.svg";
import lightarrow from "./sidebaricons/lightarrow.svg";
import collaps from "./sidebaricons/logonotcollaps.svg";
import { useApiContext } from "../../contextapi/contextApi";


const Sidebar: React.FC = () => {
  const { open, setOpen, isCollapsed, setIsCollapsed, darkmode } = useApiContext();

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 1200) {
        setOpen(false);
        if (isCollapsed) {
          setIsCollapsed(false);
        }
      } else {
        setOpen(true);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [setOpen, isCollapsed, setIsCollapsed]);

  // Function to toggle collapse state only on larger devices
  const toggleCollapse = () => {
    if (window.innerWidth >= 768) {
      setIsCollapsed(!isCollapsed);
    }
  };

  return (
    <div className={`fixed z-50 flex min-h-full ${isCollapsed ? "w-[109px]" : "w-[248px] dark:bg-[#13151E]"} duration-175 flex-col bg-white py-3 shadow-md transition-all dark:bg-[#13151E] dark:text-white dark:shadow-[#0D0E17] ${open ? "translate-x-0" : "-translate-x-64"}`}>
      {/* Icon for small devices */}
      <span className="absolute right-3 top-2 block cursor-pointer xl:hidden" onClick={() => setOpen(false)}>
        <HiX />
      </span>

      {/* Icon for large devices */}
      {/* {isCollapsed ? (
        ""
      ) : (
        <div className={`hidden items-center justify-end  px-2 lg:flex`}>
          <RxCross2 onClick={toggleCollapse} />
        </div>
      )} */}

      <div className={`${isCollapsed ? "mx-0 flex items-center justify-center  py-1 md:pt-4" : "mx-4 flex items-center justify-between py-1 md:pt-4"}`}>
        <div className={`relative mt-4 flex h-2.5 items-center justify-center px-3 py-3 font-dm text-[20px] font-bold text-navy-700 dark:text-white md:mt-1 md:text-[20px] lg:text-[26px] ${isCollapsed ? "ml-0" : "block "}`}>
          {darkmode ? (
            <img
              onClick={toggleCollapse}
              className={`${isCollapsed ? "h-[25px] w-[49px]" : "block h-[42px] w-[167px]"} `}
              src={isCollapsed ? collaps : Logo}
              alt=""
            />
          ) : (
            <img
              onClick={toggleCollapse}
              className={`${isCollapsed ? "h-[25px] w-[49px]" : "block h-[42px] w-[167px] "} `}
              src={isCollapsed ? collaps : Logo1}
              alt=""
            />
          )}
        </div>
        <div className="absolute left-[220px] top-[35px] flex items-center justify-center">
          {darkmode ? (
            <img
              className={` h-[20px] w-[20px] font-dm font-bold ${isCollapsed ? "hidden" : "block "}`}
              src={darkarrow}
              alt=""
              onClick={toggleCollapse}
            />
          ) : (
            <img
              className={` h-[20px] w-[20px] font-dm font-bold ${isCollapsed ? "hidden" : "block "}`}
              src={lightarrow}
              alt=""
              onClick={toggleCollapse}
            />
          )}
        </div>
      </div>
      {/* Collapse button */}

      {/* Nav item */}
      <ul className="mb-auto pt-1">
        <Links />
      </ul>
      {/* Nav item end */}
    </div>
  );
};

export default Sidebar;
