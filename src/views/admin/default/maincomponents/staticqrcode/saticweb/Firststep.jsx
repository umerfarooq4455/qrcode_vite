import React, { useState, useEffect } from "react";
import { AiOutlineDelete } from "react-icons/ai";
import { useApiContext } from "../../../../../../contextapi/contextApi";

const Firststep = ({ onChange }) => {
  const {
    isInputValid,
    setIsInputValid,
    websiteUrl,
    setWebsiteUrl,
    onSubmitForm,
  } = useApiContext();
  const [activeIndex, setActiveIndex] = useState(1);
  const [urlError, setUrlError] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [parameters, setParameters] = useState([
    { id: 1, name: "utm_source", value: "" },
    { id: 2, name: "utm_medium", value: "" },
    { id: 3, name: "utm_campaign", value: "" },
  ]);

  const toggleAccordion = (index) => {
    setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  const [customParameters, setCustomParameters] = useState([]);
  const [newCustomParam, setNewCustomParam] = useState({
    name: "",
    value: "",
  });
  const [urlWithCustomParams, setUrlWithCustomParams] = useState("");

  useEffect(() => {
    updateUrl([...parameters, ...customParameters]);
    setWebsiteUrl((prevUrl) => `${prevUrl}`);
  }, [parameters, customParameters]);

  useEffect(() => {
    validateInput();
    updateUrl([...parameters, ...customParameters]);
  }, [websiteUrl]);

  const handleInputChange = (event) => {
    setWebsiteUrl(event.target.value);
    setIsInputValid(true);
    setUrlError("");
    onChange(event);
  };

  useEffect(() => {
    validateInput();
  }, [websiteUrl]);

  const validateInput = () => {
    if (!websiteUrl.trim()) {
      setIsInputValid(false);
      setUrlError("Required field");
    } else if (!/^(http|https):\/\/www\./.test(websiteUrl)) {
      setIsInputValid(false);
      setUrlError("URL must start with http or https://www.");
    } else {
      setIsInputValid(true);
      setUrlError("");
    }
  };

  const handleInputBlur = () => {
    validateInput();
  };

  const handleEditParametersClick = () => {
    validateInput();
    if (isInputValid) {
      setIsModalOpen(true);
    }
  };

  const addCustomParameter = () => {
    if (
      newCustomParam.name.trim() !== "" &&
      newCustomParam.value.trim() !== ""
    ) {
      const existingParamIndex = customParameters.findIndex(
        (param) => param.name === newCustomParam.name
      );

      if (existingParamIndex !== -1) {
        const updatedCustomParameters = customParameters.map((param, index) =>
          index === existingParamIndex
            ? { ...param, value: newCustomParam.value }
            : param
        );
        setCustomParameters(updatedCustomParameters);
      } else {
        const newCustomParameters = [
          ...customParameters,
          { id: customParameters.length + 1, ...newCustomParam },
        ];
        setCustomParameters(newCustomParameters);
      }

      setNewCustomParam({ name: "", value: "" });
    }
  };

  const deleteCustomParameter = (id) => {
    const updatedCustomParameters = customParameters.filter(
      (param) => param.id !== id
    );
    setCustomParameters(updatedCustomParameters);
    updateUrl(updatedCustomParameters);
  };

  const updateUrl = (customParams) => {
    let modifiedUrl = websiteUrl;
    let addedParams = [];

    // Remove existing custom parameters from the URL
    customParams.forEach((param) => {
      modifiedUrl = modifiedUrl.replace(
        new RegExp(`[?&]${param.name}=[^&]*`, "g"),
        ""
      );
    });

    // Add default parameters first
    parameters.forEach((param, index) => {
      if (param.name.trim() !== "" && param.value.trim() !== "") {
        const paramExists = modifiedUrl.includes(
          `${param.name}=${param.value}`
        );

        if (!paramExists && !addedParams.includes(param.name)) {
          modifiedUrl += `${index === 0 ? "?" : "&"}${param.name}=${
            param.value
          }`;
          addedParams.push(param.name);
        }
      }
    });

    // Add updated custom parameters
    if (Array.isArray(customParams)) {
      customParams.forEach((param, index) => {
        if (param.name.trim() !== "" && param.value.trim() !== "") {
          const paramExists = modifiedUrl.includes(
            `${param.name}=${param.value}`
          );

          if (!paramExists && !addedParams.includes(param.name)) {
            modifiedUrl += `${addedParams.length === 0 ? "?" : "&"}${
              param.name
            }=${param.value}`;
            addedParams.push(param.name);
          }
        }
      });
    }

    setUrlWithCustomParams(modifiedUrl);
  };

  const handleSaveClick = () => {
    if (urlWithCustomParams !== "") {
      setUrlWithCustomParams("");
      setWebsiteUrl(urlWithCustomParams);
      // Call the onSubmitForm callback function to submit the form
      onSubmitForm();
    }

    closeModal();
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="space-y-2">
      <div className="rounded-[10px] border-[1px] border-gray-300 bg-white px-5 font-dm text-[16px] font-semibold shadow-sm shadow-[#003EFF1A] dark:border-[#191A1F] dark:bg-[#13151E] dark:text-[#fff]">
        <div
          className="flex h-[45px] cursor-pointer items-center justify-between "
          onClick={() => toggleAccordion(1)}
        >
          <span className="text-[16px] font-semibold  text-[#1B254B] dark:text-[#fff] ">
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
          <div className="">
            <div className="mb-4 ">
              <label
                htmlFor="website"
                className="mb-1 block text-[12px] font-semibold text-[#1B254B] dark:text-[#fff]"
              >
                Name of your QR code
              </label>
              <input
                type="text"
                className="mt-1 block w-full rounded-[10px] border border-gray-300 bg-white p-2.5 text-[14px] font-normal text-[#1B254B]  dark:border-[#191A1F] dark:bg-[#212430] dark:text-white dark:placeholder-[#fff]"
                id="url"
                required
                placeholder="Enter here"
              />
            </div>
            <div className="mb-4 ">
              <label
                htmlFor="website"
                className="mb-1 block text-[12px] font-semibold text-[#1B254B] dark:text-[#fff]"
              >
                Website URL
              </label>
              <input
                type="url"
                id="url"
                value={websiteUrl}
                onChange={handleInputChange}
                onBlur={handleInputBlur}
                required
                className={` block h-[45px] w-full rounded-[10px] border-[1px]  ${
                  isInputValid
                    ? "border-gray-300 dark:border-[#191A1F]"
                    : "border-red-500 dark:border-red-500 "
                } bg-white p-2.5 text-sm ${
                  isInputValid ? "text-gray-900" : "text-red-500 "
                }  dark:border-[#191A1F] dark:bg-[#212430] dark:text-[#fff] dark:placeholder-[#FFFFFF] `}
                placeholder="E.g https://www.myweb.com/"
              />
              {!isInputValid && urlError && (
                <p className="mt-1 text-[12px] text-red-500">{urlError}</p>
              )}
              <button
                type="button"
                onClick={handleEditParametersClick}
                className={`mb-2 mt-4  rounded-3xl border ${
                  isInputValid
                    ? "border-2 border-[#5D5FEF] text-[#5D5FEF] dark:border-[#fff] dark:text-[#fff]"
                    : "border-[#A3AED0] text-gray-400"
                } px-5 py-3 text-center text-sm md:mb-0 md:h-[37px] md:py-0`}
              >
                Edit Parameters
              </button>
              {isModalOpen && (
                <div
                  id="popup-modal"
                  tabIndex="-1"
                  className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-75"
                >
                  <div className="relative rounded-[10px] bg-white shadow dark:border-[#191A1F] dark:bg-[#13151E]">
                    <button
                      onClick={closeModal}
                      type="button"
                      className="bg-transparent absolute end-2.5 top-3 ms-auto inline-flex h-8 w-8 items-center justify-center rounded-[10px] text-sm text-gray-400 hover:bg-gray-200 hover:text-gray-900 dark:hover:bg-gray-600 dark:hover:text-white"
                    >
                      <svg
                        className="h-3 w-3"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 14 14"
                      >
                        <path
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                        ></path>
                      </svg>
                    </button>
                    <div className="p-4 text-center ">
                      <h3 className="mb-5 mt-4 text-[24px] text-lg font-normal text-[#000] dark:text-gray-400">
                        Parameters
                      </h3>
                      <div className="mb-3 flex justify-between">
                        <div className="font-medium">Name</div>
                        <div className="font-medium">Value</div>
                        <div className="font-medium"></div>
                      </div>
                      {parameters.map((param) => (
                        <div
                          key={param.id}
                          className="mb-3 flex w-[92%] items-center justify-between"
                        >
                          <div className="mr-2 max-w-64">{param.name}</div>
                          <div>
                            <input
                              type="text"
                              id={`value_${param.id}`}
                              className="block w-full rounded-[10px] border-[1px] border-gray-300 bg-[#fff] p-2.5 text-sm text-gray-900 dark:border-[#191A1F] dark:bg-[#212430] dark:text-white dark:placeholder-[#fff]"
                              value={param.value}
                              onChange={(e) => {
                                const updatedParams = parameters.map((p) =>
                                  p.id === param.id
                                    ? { ...p, value: e.target.value }
                                    : p
                                );
                                setParameters(updatedParams);
                              }}
                            />
                          </div>
                        </div>
                      ))}
                      {customParameters.map((param) => (
                        <div
                          key={param.id}
                          className="mb-3 flex w-[100%] items-center justify-between"
                        >
                          <div className="mr-12">
                            <input
                              type="text"
                              id={`custom_name_${param.id}`}
                              className="block w-full rounded-[10px] border-[1px] border-gray-300 bg-white p-2.5 text-sm text-gray-900 dark:border-[#191A1F] dark:bg-[#212430] dark:text-white dark:placeholder-[#fff]"
                              value={param.name}
                              onChange={(e) => {
                                const updatedParams = customParameters.map(
                                  (p) =>
                                    p.id === param.id
                                      ? { ...p, name: e.target.value }
                                      : p
                                );
                                setCustomParameters(updatedParams);
                              }}
                            />
                          </div>
                          <div>
                            <input
                              type="text"
                              id={`custom_value_${param.id}`}
                              className="block w-full rounded-[10px] border-[1px] border-gray-300 bg-white p-2.5 text-sm text-gray-900 dark:border-[#191A1F] dark:bg-[#212430] dark:text-white dark:placeholder-[#fff]"
                              value={param.value}
                              onChange={(e) => {
                                const updatedParams = customParameters.map(
                                  (p) =>
                                    p.id === param.id
                                      ? { ...p, value: e.target.value }
                                      : p
                                );
                                setCustomParameters(updatedParams);
                              }}
                            />
                          </div>
                          <div className="ml-[11px] flex items-center justify-center">
                            <button
                              type="button"
                              onClick={() => deleteCustomParameter(param.id)}
                              className="ml-2  text-red-500 "
                            >
                              <AiOutlineDelete />
                            </button>
                          </div>
                        </div>
                      ))}
                      <div className="mb-3 flex w-[92%] items-center justify-between">
                        <div className="mr-2 max-w-64">
                          <input
                            type="text"
                            id="name"
                            className="block w-full rounded-[10px] border-[1px] border-gray-300 bg-white p-2.5 text-sm text-gray-900 dark:border-[#191A1F] dark:bg-[#212430]  dark:text-white dark:placeholder-[#fff]"
                            placeholder="Enter name"
                            value={newCustomParam.name}
                            onChange={(e) =>
                              setNewCustomParam({
                                ...newCustomParam,
                                name: e.target.value,
                              })
                            }
                          />
                        </div>
                        <div className="">
                          <input
                            type="text"
                            id="parameter"
                            className="block w-full rounded-[10px] border-[1px] border-gray-300 bg-white p-2.5 text-sm text-gray-900 dark:border-[#191A1F] dark:bg-[#212430] dark:text-white dark:placeholder-[#fff]"
                            placeholder="Enter value"
                            value={newCustomParam.value}
                            onChange={(e) =>
                              setNewCustomParam({
                                ...newCustomParam,
                                value: e.target.value,
                              })
                            }
                          />
                        </div>
                      </div>
                      <div className="mb-2">
                        <button
                          type="button"
                          onClick={addCustomParameter}
                          className="rounded-full border-2 border-[#5D5FEF] px-3 py-2 text-[#5D5FEF] hover:bg-[#5D5FEF] hover:text-white dark:border-[#fff] dark:text-[#fff] hover:dark:border-[#5D5FEF]"
                        >
                          Add Parameter
                        </button>
                      </div>
                      <hr />
                      <div className="mt-4 flex items-center justify-center">
                        <div className="mr-3">
                          <button
                            type="button"
                            onClick={closeModal}
                            className="h-[45px] min-w-28 rounded-full border-2 border-[#5D5FEF] px-3 py-2 text-[#5D5FEF] hover:bg-[#5D5FEF] hover:text-white dark:border-[#fff] dark:text-[#fff] hover:dark:border-[#5D5FEF]"
                          >
                            Cancel
                          </button>
                        </div>
                        <div>
                          <button
                            type="button"
                            onClick={handleSaveClick}
                            className="h-[45px] min-w-28 rounded-full bg-[#5D5FEF] text-white hover:border-2  hover:border-[#5D5FEF]  hover:bg-[#fff] hover:text-[#5D5FEF] hover:dark:border-[#fff]  hover:dark:bg-[#212430] hover:dark:text-[#fff]"
                          >
                            Save
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Firststep;
