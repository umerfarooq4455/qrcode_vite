import React, { useState, Fragment } from "react";
import mobile from "./vcarimages/Vector (1).svg";
import home from "./vcarimages/Vector (2).svg";
import work from "./vcarimages/Vector.svg";
import faz from "./vcarimages/Group 1000003048.svg";
import other from "./vcarimages/Group 1000002832.svg";
import { Listbox, Transition } from "@headlessui/react";
import { RxCross1 } from "react-icons/rx";

type Option = {
  value: string;
  label: string;
  icon: string;
};

const options: Option[] = [
  { value: "option1", label: "Mobile", icon: work },
  { value: "option2", label: "Home", icon: mobile },
  { value: "option3", label: "Work", icon: faz },
  { value: "option4", label: "Fax", icon: other },
  { value: "option5", label: "Other", icon: home },
];

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

const VcardFirst: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(1);
  const [selectedOption, setSelectedOption] = useState<Option>(options[0]);
  const [phoneNumbers, setPhoneNumbers] = useState<string[]>([""]);

  const toggleAccordion = (index: number) => {
    setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  const addPhoneNumber = () => {
    setPhoneNumbers([...phoneNumbers, ""]);
  };

  const deletePhoneNumber = (index: number) => {
    const newPhoneNumbers = [...phoneNumbers];
    newPhoneNumbers.splice(index, 1);
    setPhoneNumbers(newPhoneNumbers);
  };

  const handlePhoneNumberChange = (
    index: number,
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const newPhoneNumbers = [...phoneNumbers];
    newPhoneNumbers[index] = event.target.value;
    setPhoneNumbers(newPhoneNumbers);
  };

  return (
    <div className="space-y-2">
      <div className="rounded-[10px] border-[1px] border-gray-300 bg-white px-5 font-dm text-[16px] font-semibold shadow-sm shadow-[#003EFF1A] dark:border-[#191A1F] dark:bg-[#13151E] dark:text-[#fff]">
        <div
          className="flex h-[45px] cursor-pointer items-center justify-between"
          onClick={() => toggleAccordion(1)}
        >
          <span className="text-[16px] font-semibold text-[#1B254B] dark:text-[#fff]">
            Basic Information
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
          <div>
            <div className="py-3 text-[14px] font-bold">About you</div>
            <div className="mb-3 flex flex-col space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0">
              <div className="w-full sm:w-1/2">
                <label className="mb-2 block text-[12px] font-semibold text-gray-900 dark:text-white">
                  Name
                </label>
                <input
                  type="text"
                  id="title"
                  placeholder="Enter Name"
                  className="h-[45px] w-full rounded-[10px] border-[1px] border-[#73779166] bg-[#fff] px-5 text-sm text-gray-900 dark:border-[#191A1F] dark:bg-[#212430] dark:text-[#fff] dark:placeholder-[#fff]"
                />
              </div>
              <div className="w-full sm:w-1/2">
                <label className="mb-2 block text-[12px] font-semibold text-gray-900 dark:text-white">
                  Surname
                </label>
                <input
                  type="text"
                  id="description"
                  className="h-[45px] w-full rounded-[10px] border-[1px] border-[#73779166] bg-[#fff] px-5 text-sm text-gray-900 dark:border-[#191A1F] dark:bg-[#212430] dark:text-[#fff] dark:placeholder-[#fff]"
                  placeholder="Surname"
                />
              </div>
            </div>
            <div className="mb-3 flex flex-col">
              <div className="flex">
                <label className="mb-2 block text-[14px] font-bold text-gray-900 dark:text-white">
                  Contact Info
                </label>
              </div>
              {phoneNumbers.map((phoneNumber, index) => (
                <div
                  key={index}
                  className="flex w-full flex-col items-center sm:flex-row"
                >
                  <div className="mb-2 w-full ">
                    <Listbox
                      value={selectedOption}
                      onChange={setSelectedOption}
                    >
                      {({ open }) => (
                        <>
                          <div className="relative mt-2">
                            <Listbox.Button className="relative h-[45px] w-full md:w-[110px] cursor-default rounded-[10px] border-[1px] border-[#B8BAC7]  bg-white py-1.5 pl-3 pr-10 text-left text-gray-900 dark:border-[#191A1F] dark:bg-[#212430] dark:text-[#fff]">
                              <span className="flex items-center">
                                <img
                                  src={selectedOption.icon}
                                  alt=""
                                  className="h-5 w-5 flex-shrink-0 dark:rounded-full  dark:bg-[#fff]"
                                />
                                {/* <span className="ml-3 block truncate">
                                {selectedOption.label}
                              </span> */}
                              </span>
                              <span className="pointer-events-none absolute inset-y-0 right-0 ml-3 flex items-center pr-2">
                                <svg
                                  width="14"
                                  height="7"
                                  viewBox="0 0 14 7"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    d="M1.00261 1L6.54427 5.75L12.0859 1"
                                    stroke="black"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                  />
                                </svg>
                              </span>
                            </Listbox.Button>

                            <Transition
                              show={open}
                              as={Fragment}
                              leave="transition ease-in duration-100"
                              leaveFrom="opacity-100"
                              leaveTo="opacity-0"
                            >
                              <Listbox.Options className="ring-black absolute z-10  mt-1 max-h-60 w-full md:w-[110px] overflow-auto rounded-md bg-white py-1  text-base shadow-lg dark:bg-[#212430] ">
                                {options.map((option) => (
                                  <Listbox.Option
                                    key={option.value}
                                    className={({ active }) =>
                                      classNames(
                                        active
                                          ? "bg-[#E8E9F0] text-gray-900 dark:bg-indigo-600 dark:text-[#fff]"
                                          : "text-gray-900 dark:text-[#fff]",
                                        "relative cursor-default select-none py-2 pl-3 "
                                      )
                                    }
                                    value={option}
                                  >
                                    {({ selected, active }) => (
                                      <>
                                        <div className="flex items-center">
                                          <img
                                            src={option.icon}
                                            alt=""
                                            className="h-5 w-5 flex-shrink-0 dark:rounded-full dark:bg-[#fff]"
                                          />
                                          <span
                                            className={classNames(
                                              selected
                                                ? "font-semibold"
                                                : "font-normal",
                                              "ml-3 block truncate"
                                            )}
                                          >
                                            {option.label}
                                          </span>
                                        </div>

                                        {/* {selected ? (
                                        <span
                                          className={classNames(
                                            active
                                              ? "text-gray-900"
                                              : "text-indigo-600",
                                            "absolute inset-y-0 right-0 flex items-center pr-4"
                                          )}
                                        >
                                          <CheckIcon
                                            className="h-5 w-5"
                                            aria-hidden="true"
                                          />
                                        </span>
                                      ) : null} */}
                                      </>
                                    )}
                                  </Listbox.Option>
                                ))}
                              </Listbox.Options>
                            </Transition>
                          </div>
                        </>
                      )}
                    </Listbox>
                  </div>
                  <div className="ml-2 flex ">
                    <input
                      type="number"
                      id="description"
                      onChange={(e) =>
                        handlePhoneNumberChange(index, e)
                      }
                      className="h-[45px] w-full rounded-[10px] border-[1px] border-[#73779166] bg-[#fff] px-5 text-sm text-gray-900 dark:border-[#191A1F] dark:bg-[#212430] dark:text-[#fff] dark:placeholder-[#fff] md:w-[342px]"
                      placeholder="567897865544"
                    />
                  </div>
                  <div className="ml-2 flex ">
                    <RxCross1 onClick={() => deletePhoneNumber(index)} />
                  </div>
                </div>
              ))}
            </div>

            <div className="mb-4">
              <button
                className=" h-[47px] w-full rounded-[55px] border-[1px] border-[#B8BAC7] bg-[#5D5FEF]  text-[#fff] dark:bg-[#212430] sm:mb-0 sm:w-[150px]"
                type="button"
                onClick={addPhoneNumber}
              >
                Add Phone
              </button>
            </div>

            <div className="mb-4 flex w-full flex-col">
              <div className="mb-4 w-full sm:mb-0 sm:mr-2 ">
                <label className="mb-2 block text-[12px] font-semibold text-gray-900 dark:text-white">
                  Email
                </label>
                <input
                  type="email"
                  id="title"
                  placeholder="dummy@gmail.com"
                  className="h-[45px] w-full rounded-[10px] border-[1px] border-[#73779166] bg-[#fff] px-5 text-sm text-gray-900 dark:border-[#191A1F] dark:bg-[#212430] dark:text-[#fff] dark:placeholder-[#fff]"
                />
              </div>
              <div className="mb-2 mt-3 w-full">
                <label className="mb-2 block text-[12px] font-semibold text-gray-900 dark:text-white">
                  Personal website
                </label>
                <input
                  type="url"
                  id="title"
                  placeholder="https://..."
                  className="h-[45px] w-full rounded-[10px] border-[1px] border-[#73779166] bg-[#fff] px-5 text-sm text-gray-900 dark:border-[#191A1F] dark:bg-[#212430] dark:text-[#fff] dark:placeholder-[#fff]"
                />
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default VcardFirst;
