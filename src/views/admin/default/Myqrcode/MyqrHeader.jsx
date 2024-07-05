import React, { useState } from "react";
import { IoChevronBack } from "react-icons/io5";
import { IoChevronForwardOutline } from "react-icons/io5";
import listview from "../../../../assets/img/qrcold-icons/pdfimges/Group 172.svg";
import gridview from "../../../../assets/img/qrcold-icons/pdfimges/Group 171.svg";
import BottomSheet from "./Bottomsheet";
import { RiListSettingsLine } from "react-icons/ri";
import Checkbox from "../../../../components/checkbox";
import { RxCrossCircled } from "react-icons/rx";
import { FaCirclePlus } from "react-icons/fa6";
import clearfilter from "./myqrcodeimges/mdi_clear.svg";
import MyCard from "./MyCard";
import { useApiContext } from "../../../../contextapi/contextApi";

const MyqrHeader = () => {
  const {
    viewMode,
    setViewMode,
    handleGridButtonClick,
    handleListButtonClick,
    limit,
    setLimit,
    selectedOptionssort,
    setSelectedOptionssort,
    selectedQrcodeIds,
    setSelectedQrcodeIds,
    selectedTypeIds,
    setSelectedTypeIds,
    typeOptions,
    qrcodeStatus,
  } = useApiContext(useApiContext);
  const initialOptions = ["5", "10", "25", "50"];

  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isCheckboxChecked, setIsCheckboxChecked] = useState(false);

  const [isDropdownOpesort, setIsDropdownOpesort] = useState(false);
  const [isBottomSheetOpen, setIsBottomSheetOpen] = useState(false);
  // const [viewMode, setViewMode] = useState("grid");
  const [istypeOpen, setIstypeOpen] = useState(false);
  const [isqrcodeOpen, setIsqrcodeOpen] = useState(false);
  const [selectedType, setSelectedType] = useState("5");

  const sortoptions = [
    "updated_at",
    "Name",
    "Most Scanned",
    "Last Modified",
    "Most Visited",
  ];

  const handleCheckboxChange = (value) => {
    setLimit(value);
  };

  const handleTypecheck = (value) => {
    setSelectedType(value);
  };

  const handleCheckboxChangesort = (value) => {
    setSelectedOptionssort(value);
  };

  const toggleDropdownsort = () => {
    setIsDropdownOpesort(!isDropdownOpesort);
  };
  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const toggleType = () => {
    setIstypeOpen(!istypeOpen);
  };

  const toggleQrcode = () => {
    setIsqrcodeOpen(!isqrcodeOpen);
  };

  // const handleGridButtonClick = () => {
  //   setViewMode("grid");
  // };

  // const handleListButtonClick = () => {
  //   setViewMode("list");
  // };
  const handleClearFilters = () => {
    setLimit("5");
    setSelectedOptionssort("updated_at");
    setSelectedQrcodeIds([]);
    setSelectedTypeIds([]);
  };
  const isGridView = viewMode === "grid";

  const openBottomSheet = () => {
    setIsBottomSheetOpen(true);
  };

  const closeBottomSheet = () => {
    setIsBottomSheetOpen(false);
  };

  const tablechecked = () => {
    setIsCheckboxChecked(!isCheckboxChecked);
  };

  const handleTypeCheck = (id) => {
    if (selectedTypeIds.includes(id)) {
      setSelectedTypeIds(selectedTypeIds.filter((typeId) => typeId !== id));
    } else {
      setSelectedTypeIds([...selectedTypeIds, id]);
    }
  };

  const handleQrcodeCheck = (id) => {
    if (selectedQrcodeIds.includes(id)) {
      setSelectedQrcodeIds(selectedQrcodeIds.filter((typeId) => typeId !== id));
    } else {
      setSelectedQrcodeIds([...selectedQrcodeIds, id]);
    }
  };

  return (
    <>
      <div className="flex flex-col">
        {/* part */}
        <div className="order-last py-2.5 dark:bg-gray-800 md:order-1 md:mt-10 ">
          <div className="flex justify-between sm:flex-col lg:flex-row">
            <div
              className="flex w-full items-center justify-between lg:flex lg:w-auto"
              id="mobile-menu-2"
            >
              <div className="mr-1 mt-2 flex  md:hidden ">
                <Checkbox
                  style={{
                    backgroundColor: isCheckboxChecked ? "#768BD9" : "white",
                  }}
                  checked={isCheckboxChecked}
                  onChange={tablechecked}
                />
              </div>
              <div className="mt-4 flex items-center overflow-y-hidden overflow-x-scroll font-medium  md:overflow-x-hidden md:overflow-y-hidden lg:mt-0">
                <button className="mr-2 rounded-md border-2 p-1 active:bg-[#768BD9] md:mr-0 md:rounded-none md:border-none md:p-2 md:px-2 md:py-2">
                  <span className=" border-gray-100  text-gray-700 active:bg-[#768BD9] active:text-white ">
                    All
                  </span>
                </button>
                <button className="mr-2 rounded-md border-2 p-1 active:bg-[#768BD9] md:mr-0 md:rounded-none md:border-none md:p-2 md:px-2 md:py-2">
                  <span className=" border-gray-100  text-gray-700 active:bg-[#768BD9] active:text-white ">
                    Dynamic
                  </span>
                </button>
                <button className="mr-2 rounded-md border-2 p-1 active:bg-[#768BD9] md:mr-0 md:rounded-none md:border-none md:p-2 md:px-2 md:py-2">
                  <span className=" border-gray-100  text-gray-700 active:bg-[#768BD9] active:text-white ">
                    Static
                  </span>
                </button>
                <button className="rounded-md border-2 p-1 active:bg-[#768BD9] md:rounded-none md:border-none md:p-2 md:px-2 md:py-2">
                  <span className=" border-gray-100 text-gray-700 active:bg-[#768BD9] active:text-white ">
                    Favorites
                  </span>
                </button>
              </div>
              <div className="ml-1 mt-3">
                <button className="md:hidden">
                  <RiListSettingsLine
                    className="text-[20px]"
                    onClick={openBottomSheet}
                  />
                </button>
              </div>
            </div>

            <div className="flex items-center md:justify-end ">
              <div className="hidden items-center md:flex  ">
                <button className="rounded-full bg-white p-2 shadow-md">
                  <IoChevronBack />
                </button>
                <p className="mx-2">1 of 10</p>
                <button className="rounded-full bg-white p-2 shadow-md">
                  <IoChevronForwardOutline />
                </button>
              </div>

              {/* quantitiy  */}
              <div className="mx-2 hidden items-center justify-center md:flex ">
                <div className="relative inline-block text-left">
                  <div>
                    <span className="rounded-full shadow-sm">
                      <button
                        type="button"
                        className="inline-flex justify-center  rounded-full border bg-white p-2 text-sm font-medium leading-5 transition duration-150 ease-in-out "
                        id="options-menu"
                        onClick={toggleDropdown}
                        aria-haspopup="true"
                        aria-expanded={isDropdownOpen}
                      >
                        Quantity: {limit}
                        <svg
                          className="-mr-1 ml-2 h-5 w-5"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path
                            fillRule="evenodd"
                            d="M5.293 7.293a1 1 0 011.414 0L10 11.586l3.293-3.293a1 1 0 011.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </button>
                    </span>
                  </div>

                  <div
                    className={`ring-black absolute  right-0 mt-2 w-28 origin-top-right rounded-md bg-white shadow-lg  ${
                      isDropdownOpen ? "visible" : "hidden"
                    }`}
                  >
                    <div className="py-1">
                      {initialOptions.map((option) => (
                        <label
                          key={option}
                          className="flex cursor-pointer items-center px-4 py-2 text-sm leading-5 text-gray-700"
                        >
                          <input
                            type="radio"
                            className="form-checkbox h-5 w-5 rounded-full text-[#768BD9]"
                            checked={limit === option}
                            onChange={() => handleCheckboxChange(option)}
                          />
                          <span className="ml-2">{option}</span>
                        </label>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
              {/* quantitiy  */}

              {/* sortby  */}
              <div className="hidden items-center justify-center md:flex">
                <div className="relative inline-block text-left">
                  <div>
                    <span className="rounded-full shadow-sm">
                      <button
                        type="button"
                        className="inline-flex w-48 justify-between rounded-full border bg-white p-2 text-sm font-medium leading-5 transition duration-150 ease-in-out "
                        id="options-menu"
                        onClick={toggleDropdownsort}
                        aria-haspopup="true"
                        aria-expanded={isDropdownOpesort}
                      >
                        Sort by: {selectedOptionssort}
                        <svg
                          className=" h-5 w-5 px-0"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path
                            fillRule="evenodd"
                            d="M5.293 7.293a1 1 0 011.414 0L10 11.586l3.293-3.293a1 1 0 011.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </button>
                    </span>
                  </div>

                  <div
                    className={`ring-black absolute right-0 mt-2 w-48 origin-top-right rounded-md bg-white shadow-lg  ${
                      isDropdownOpesort ? "visible" : "hidden"
                    }`}
                  >
                    <div className="py-1">
                      {sortoptions.map((option) => (
                        <label
                          key={option}
                          className="flex cursor-pointer items-center px-4 py-2 text-sm leading-5 text-gray-700"
                        >
                          <input
                            type="radio"
                            className="form-checkbox h-5 w-5  rounded  text-[#768BD9]"
                            checked={selectedOptionssort === option}
                            onChange={() => handleCheckboxChangesort(option)}
                          />
                          <span className="ml-2">{option}</span>
                        </label>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
              {/* sortby  */}

              {/* grid button */}
              <div className="hidden md:block">
                <div className="text-black mx-1 flex w-[86px] items-center  justify-center rounded-full  border border-gray-400   ">
                  <div
                    className={`flex h-[33px] w-[101px] items-center justify-center hover:border-2  hover:border-[#768BD9] ${
                      isGridView ? "active" : ""
                    }`}
                    style={{ borderRadius: "20px 0 0 20px" }}
                    onClick={handleGridButtonClick}
                  >
                    <img width={17} src={gridview} alt="QR Code" />
                  </div>
                  <div className="h-8 border border-[#D9D9D9]"></div>
                  <div
                    className={`flex h-[33px] w-[101px] items-center justify-center hover:border-2  hover:border-[#768BD9] ${
                      !isGridView ? "active" : ""
                    }`}
                    style={{ borderRadius: "0 20px 20px 0" }}
                    onClick={handleListButtonClick}
                  >
                    <img width={17} src={listview} alt="Preview" />
                  </div>
                </div>
              </div>

              {/* grid button */}

              {/* Mobile Bottom Sheet */}
              {/* Mobile Bottom Sheet Trigger Button */}

              {/* Render BottomSheet component */}
              <BottomSheet
                isOpen={isBottomSheetOpen}
                closeBottomSheet={closeBottomSheet}
                handleCheckboxChange={handleCheckboxChange}
                selectedOptions={limit}
                handleCheckboxChangesort={handleCheckboxChangesort}
                selectedOptionssort={selectedOptionssort}
              />
            </div>
          </div>
          <div className="mt-4 border-b-[2px]" />
        </div>

        <div className="order-1 mt-8 flex md:mt-0 ">
          <div className="mr-1 mt-2 hidden  md:flex">
            <Checkbox
              style={{
                backgroundColor: isCheckboxChecked ? "#768BD9" : "white",
              }}
              checked={isCheckboxChecked}
              onChange={tablechecked}
            />
          </div>

          {/* search bar */}
          <div className="w-full md:w-60">
            <form className="mx-2  ">
              <label
                htmlFor="default-search"
                className="sr-only mb-2 text-sm font-medium text-[#B6C5FF] dark:text-white"
              >
                Search
              </label>
              <div className="relative">
                <div className="pointer-events-none absolute inset-y-0 start-0 flex items-center ps-3">
                  <svg
                    className="h-4 w-4  dark:text-gray-400"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 20 20"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                    />
                  </svg>
                </div>
                <input
                  type="search"
                  id="default-search"
                  className="block h-9 w-full rounded-full border border-gray-300 bg-white px-2 ps-10 text-sm   "
                  placeholder="Search..."
                  required
                />
              </div>
            </form>
          </div>
          {/* search bar */}

          {/* QR code status */}
          <div className="hidden items-center justify-center md:flex ">
            <div className="relative inline-block text-left">
              <div>
                <span className="rounded-full  shadow-sm">
                  <button
                    type="button"
                    className="inline-flex justify-center  rounded-full border bg-white p-2 text-sm font-medium leading-5 transition duration-150 ease-in-out "
                    id="options-menu"
                    onClick={toggleQrcode}
                    aria-haspopup="true"
                    aria-expanded={isqrcodeOpen}
                  >
                    <RxCrossCircled className="mr-2 mt-1 flex items-center justify-center rounded-full bg-gray-500 text-white" />{" "}
                    QR code status:
                    {selectedQrcodeIds.length <= 3
                      ? selectedQrcodeIds
                          .map(
                            (id) =>
                              qrcodeStatus.find((option) => option.id === id)
                                ?.name
                          )
                          .join("/ ")
                      : `${selectedQrcodeIds
                          .slice(0, 3)
                          .map(
                            (id) =>
                              qrcodeStatus.find((option) => option.id === id)
                                ?.name
                          )
                          .join("/ ")} + ${selectedQrcodeIds.length - 3}`}
                    <svg
                      className="-mr-1 ml-2 h-5 w-5"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M5.293 7.293a1 1 0 011.414 0L10 11.586l3.293-3.293a1 1 0 011.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </button>
                </span>
              </div>

              <div
                className={`ring-black absolute left-1 right-0 mt-2 w-40 origin-top-right rounded-md bg-white shadow-lg ${
                  isqrcodeOpen ? "visible" : "hidden"
                }`}
              >
                <div className="max-h-48 overflow-x-hidden overflow-y-visible py-1">
                  {qrcodeStatus.map((option) => (
                    <label
                      key={option.id}
                      className="flex  cursor-pointer items-center px-4 py-2 text-sm leading-5 text-gray-700"
                    >
                      <input
                        type="checkbox"
                        className="h-4 w-4  rounded-full text-[#768BD9]"
                        checked={selectedQrcodeIds.includes(option.id)}
                        onChange={() => handleQrcodeCheck(option.id)}
                      />
                      <span className="ml-2">{option.name}</span>
                    </label>
                  ))}
                </div>
              </div>
            </div>
          </div>
          {/* QR code status   */}

          {/* type */}
          <div className="ml-2 hidden items-center justify-center md:flex">
            <div className="relative inline-block text-left">
              <div>
                <span className="rounded-full  shadow-sm">
                  <button
                    type="button"
                    className="inline-flex justify-center  rounded-full border bg-white p-2 text-sm font-medium leading-5 transition duration-150 ease-in-out "
                    id="options-menu"
                    onClick={toggleType}
                    aria-haspopup="true"
                    aria-expanded={istypeOpen}
                  >
                    <FaCirclePlus className="mr-2 mt-1 flex items-center justify-center rounded-full text-gray-400" />{" "}
                    QR Code Type:
                    {selectedTypeIds.length <= 3
                      ? selectedTypeIds
                          .map(
                            (id) =>
                              typeOptions.find((option) => option.id === id)
                                ?.name
                          )
                          .join("/ ")
                      : `${selectedTypeIds
                          .slice(0, 3)
                          .map(
                            (id) =>
                              typeOptions.find((option) => option.id === id)
                                ?.name
                          )
                          .join("/ ")} + ${selectedTypeIds.length - 3}`}
                    <svg
                      className="-mr-1 ml-2 h-5 w-5"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M5.293 7.293a1 1 0 011.414 0L10 11.586l3.293-3.293a1 1 0 011.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </button>
                </span>
              </div>

              <div
                className={`ring-black absolute left-1 right-0 mt-2 w-40 origin-top-right rounded-md bg-white shadow-lg ${
                  istypeOpen ? "visible" : "hidden"
                }`}
              >
                <div className="max-h-48 overflow-x-hidden overflow-y-visible py-1">
                  {typeOptions.map((option) => (
                    <label
                      key={option.id}
                      className="flex cursor-pointer items-center px-4 py-2 text-sm leading-5 text-gray-700"
                    >
                      <input
                        type="checkbox"
                        className="h-4 w-4 rounded-full text-[#768BD9]"
                        checked={selectedTypeIds.includes(option.id)}
                        onChange={() => handleTypeCheck(option.id)}
                      />
                      <span className="ml-2">{option.name}</span>
                    </label>
                  ))}
                </div>
              </div>
            </div>
          </div>
          {/* type   */}

          <div className="hidden items-center md:flex ">
            <img src={clearfilter} className="mx-2 w-[16px]" alt="" />
            <button
              className="text-[16px] text-[#768BD9]"
              onClick={handleClearFilters}
            >
              Clear filters
            </button>
          </div>
        </div>

        <div className="order-last flex">
          <MyCard />
        </div>
      </div>
    </>
  );
};

export default MyqrHeader;
