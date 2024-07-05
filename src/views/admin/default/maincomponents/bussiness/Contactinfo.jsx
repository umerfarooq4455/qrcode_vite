import React, { useState } from "react";
import defultpdfimg from "../../../../../assets/img/qrcold-icons/pdfimges/Group 191.svg";
import { RxCross1 } from "react-icons/rx";

const Contactinfo = () => {
  const [activeIndex, setActiveIndex] = useState(1);
  const [selectedFile, setSelectedFile] = useState(defultpdfimg);
  const [telephoneInputs, setTelephoneInputs] = useState([
    { telephone: "Mobile phone", mobile: "1139133924" },
  ]);
  const [emailInputs, setEmailInputs] = useState([
    { name: "Email label", email: "example@example.com" },
  ]);

  const addTelephoneInputPair = () => {
    setTelephoneInputs([...telephoneInputs, { telephone: "", mobile: "" }]);
  };

  const addEmailInput = () => {
    setEmailInputs([...emailInputs, { email: "" }]);
  };

  const removeTelephoneInput = (index) => {
    setTelephoneInputs(telephoneInputs.filter((_, i) => i !== index));
  };

  const removeEmailInput = (index) => {
    setEmailInputs(emailInputs.filter((_, i) => i !== index));
  };

  const handleTelephoneInputChange = (index, field, value) => {
    const newInputs = telephoneInputs.slice();
    newInputs[index][field] = value;
    setTelephoneInputs(newInputs);
  };

  const handleEmailInputChange = (index, value) => {
    const newInputs = emailInputs.slice();
    newInputs[index].email = value;
    setEmailInputs(newInputs);
  };

  const toggleAccordion = (index) => {
    setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <div className="space-y-2">
      <div className="rounded-[10px] border-[1px] border-gray-300 bg-white px-5 font-dm text-[14px] font-semibold shadow-sm shadow-[#003EFF1A] dark:border-[#191A1F] dark:bg-[#13151E] dark:text-[#fff]">
        <div
          className="flex h-[45px] cursor-pointer items-center justify-between"
          onClick={() => toggleAccordion(1)}
        >
          <span className="text-[16px] font-semibold text-[#1B254B] dark:text-[#fff]">
            Contact Information
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
              <div className="flex flex-col space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0">
                <div className="w-full sm:w-1/2">
                  <label className="mb-2 block text-[12px] font-semibold text-gray-900 dark:text-white">
                    Name
                  </label>
                  <input
                    type="text"
                    id="title"
                    placeholder="Title"
                    className="h-[45px] w-full rounded-[10px] border-[1px] border-[#73779166] bg-[#fff] px-5 text-sm text-gray-900 dark:border-[#191A1F] dark:bg-[#212430] dark:text-[#fff] dark:placeholder-[#fff]"
                  />
                </div>
                <div className="w-full sm:w-1/2">
                  <label className="mb-2 block text-[12px] font-semibold text-gray-900 dark:text-white">
                    Website
                  </label>
                  <input
                    type="text"
                    id="description"
                    className="h-[45px] w-full rounded-[10px] border-[1px] border-[#73779166] bg-[#fff] px-5 text-sm text-gray-900 dark:border-[#191A1F] dark:bg-[#212430] dark:text-[#fff] dark:placeholder-[#fff]"
                    placeholder="Description"
                  />
                </div>
              </div>
              {telephoneInputs.map((input, index) => (
                <div
                  key={index}
                  className="mb-4 mt-3 flex flex-col md:w-3/4 md:flex-row md:space-x-4"
                >
                  <div className="flex w-full flex-col md:w-1/2">
                    <label className="mb-2 block text-[12px] font-semibold text-gray-900 dark:text-white">
                      Telephone
                    </label>
                    <input
                      type="text"
                      className="h-[45px] w-full rounded-[10px] border-[1px] border-[#73779166] bg-[#fff] px-5 text-sm text-gray-900 dark:border-[#191A1F] dark:bg-[#212430] dark:text-[#fff] dark:placeholder-[#fff]"
                      placeholder="Mobile phone"
                      value={input.telephone}
                      onChange={(e) =>
                        handleTelephoneInputChange(
                          index,
                          "telephone",
                          e.target.value
                        )
                      }
                    />
                  </div>
                  <div className="mt-2 flex w-full flex-col md:mt-0 md:w-1/2">
                    <label className="mb-2 block text-[12px] font-semibold text-gray-900 dark:text-white">
                      Mobile Number
                    </label>
                    <input
                      type="number"
                      className="h-[45px] w-full rounded-[10px] border-[1px] border-[#73779166] bg-[#fff] px-5 text-sm text-gray-900 dark:border-[#191A1F] dark:bg-[#212430] dark:text-[#fff] dark:placeholder-[#fff]"
                      placeholder="1139133924"
                      value={input.mobile}
                      onChange={(e) =>
                        handleTelephoneInputChange(
                          index,
                          "mobile",
                          e.target.value
                        )
                      }
                    />
                  </div>
                  <button
                    type="button"
                    onClick={() => removeTelephoneInput(index)}
                    className="ml-2 mt-2  md:mt-8"
                  >
                    <RxCross1 />
                  </button>
                </div>
              ))}

              <button
                type="button"
                onClick={addTelephoneInputPair}
                className="my-3 h-[47px] w-[150px] cursor-pointer rounded-full bg-[#5D5FEF] text-[12px] text-white"
              >
                Add Phone Number
              </button>

              {emailInputs.map((input, index) => (
                <div
                  key={index}
                  className="mb-4 mt-3 flex flex-col md:w-3/4 md:flex-row md:space-x-4"
                >
                  <div className="flex w-full flex-col md:w-1/2">
                    <label className="mb-2 block text-[12px] font-semibold text-gray-900 dark:text-white">
                      Email Name
                    </label>
                    <input
                      type="text"
                      className="h-[45px] w-full rounded-[10px] border-[1px] border-[#73779166] bg-[#fff] px-5 text-sm text-gray-900 dark:border-[#191A1F] dark:bg-[#212430] dark:text-[#fff] dark:placeholder-[#fff]"
                      placeholder="Label.."
                      value={input.name}
                      onChange={(e) =>
                        handleEmailInputChange(index, e.target.value)
                      }
                    />
                  </div>
                  <div className="mt-2 flex w-full flex-col md:mt-0 md:w-1/2">
                    <label className="mb-2 block text-[12px] font-semibold text-gray-900 dark:text-white">
                      Email Address
                    </label>
                    <input
                      type="email"
                      className="h-[45px] w-full rounded-[10px] border-[1px] border-[#73779166] bg-[#fff] px-5 text-sm text-gray-900 dark:border-[#191A1F] dark:bg-[#212430] dark:text-[#fff] dark:placeholder-[#fff]"
                      placeholder="example@example.com"
                      value={input.email}
                      onChange={(e) =>
                        handleEmailInputChange(index, e.target.value)
                      }
                    />
                  </div>
                  <button
                    type="button"
                    onClick={() => removeEmailInput(index)}
                    className="ml-2 mt-2  md:mt-8"
                  >
                    <RxCross1 />
                  </button>
                </div>
              ))}
              <button
                type="button"
                onClick={addEmailInput}
                className="my-3 mb-8 h-[47px] w-[150px] cursor-pointer rounded-full bg-[#5D5FEF] text-[12px] text-white"
              >
                Add Email
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Contactinfo;
