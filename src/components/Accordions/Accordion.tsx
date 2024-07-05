import React, { useState, useEffect, ChangeEvent, FocusEvent } from "react";
import { AiOutlineDelete } from "react-icons/ai";
import { useApiContext } from "../../contextapi/contextApi";

interface Parameter {
  id: number;
  name: string;
  value: string;
}

interface AccordionProps {
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
}

const Accordion: React.FC<AccordionProps> = ({ onChange }) => {
  const {
    isInputValid,
    setIsInputValid,
    websiteUrl,
    setWebsiteUrl,
    onSubmitForm,
  } = useApiContext();
  const [activeIndex, setActiveIndex] = useState<number | null>(1);
  const [urlError, setUrlError] = useState<string>("");
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [parameters, setParameters] = useState<Parameter[]>([
    { id: 1, name: "utm_source", value: "" },
    { id: 2, name: "utm_medium", value: "" },
    { id: 3, name: "utm_campaign", value: "" },
  ]);

  const toggleAccordion = (index: number) => {
    setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  const [customParameters, setCustomParameters] = useState<Parameter[]>([]);
  const [newCustomParam, setNewCustomParam] = useState<Parameter>({
    id: 0,
    name: "",
    value: "",
  });
  const [urlWithCustomParams, setUrlWithCustomParams] = useState<string>("");

  useEffect(() => {
    updateUrl([...parameters, ...customParameters]);
    setWebsiteUrl((prevUrl: string) => `${prevUrl}`);
  }, [parameters, customParameters, setWebsiteUrl]);

  useEffect(() => {
    validateInput();
    updateUrl([...parameters, ...customParameters]);
  }, [websiteUrl, parameters, customParameters]);

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
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

  const handleInputBlur = (event: FocusEvent<HTMLInputElement>) => {
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

      setNewCustomParam({ id: 0, name: "", value: "" });
    }
  };

  const deleteCustomParameter = (id: number) => {
    const updatedCustomParameters = customParameters.filter(
      (param) => param.id !== id
    );
    setCustomParameters(updatedCustomParameters);
    updateUrl(updatedCustomParameters);
  };

  const updateUrl = (customParams: Parameter[]) => {
    let modifiedUrl = websiteUrl;
    let addedParams: string[] = [];

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
          className="flex h-[45px] cursor-pointer items-center justify-between"
          onClick={() => toggleAccordion(1)}
        >
          <span className="text-[16px] font-semibold text-[#1B254B] dark:text-[#fff]">
            Website Information
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
            <div className="mb-4">
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
                className={`block h-[45px] w-full rounded-[10px] border-[1px] ${
                  isInputValid
                    ? "border-gray-300 dark:border-[#191A1F]"
                    : "border-red-500 dark:border-red-500"
                } bg-white p-2.5 text-sm ${
                  isInputValid ? "text-gray-900" : "text-red-500"
                } dark:border-[#191A1F] dark:bg-[#212430] dark:text-[#fff] dark:placeholder-[#FFFFFF]`}
                placeholder="E.g https://www.myweb.com/"
              />
              {!isInputValid && urlError && (
                <p className="mt-1 text-[12px] text-red-500">{urlError}</p>
              )}
              <button
                type="button"
                onClick={handleEditParametersClick}
                className={`mb-2 mt-4 rounded-3xl border ${
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
                  className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-75"
                >
                  <div className="relative rounded-[10px] bg-white shadow dark:border-[#191A1F] dark:bg-[#13151E]">
                    <button
                      onClick={closeModal}
                      type="button"
                      className="absolute top-3 right-2.5 ml-auto inline-flex items-center rounded-lg bg-transparent p-1.5 text-sm text-gray-400 hover:bg-gray-200 hover:text-gray-900 dark:hover:bg-gray-800 dark:hover:text-white"
                    >
                      <svg
                        aria-hidden="true"
                        className="h-5 w-5"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fillRule="evenodd"
                          d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </button>
                    <div className="p-6 text-center">
                      <h2 className="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">
                        Edit Parameters
                      </h2>
                      <ul className="mb-4 space-y-2">
                        {parameters.map((parameter) => (
                          <li key={parameter.id} className="flex items-center">
                            <input
                              type="text"
                              value={parameter.value}
                              onChange={(e) =>
                                setParameters((prevParameters) =>
                                  prevParameters.map((param) =>
                                    param.id === parameter.id
                                      ? { ...param, value: e.target.value }
                                      : param
                                  )
                                )
                              }
                              className="mr-2 flex-1 rounded-md border border-gray-300 p-2 dark:bg-[#212430] dark:text-[#fff]"
                              placeholder={parameter.name}
                            />
                          </li>
                        ))}
                      </ul>
                      <div>
                        <h2 className="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">
                          Custom Parameters
                        </h2>
                        <ul className="mb-4 space-y-2">
                          {customParameters.map((parameter) => (
                            <li
                              key={parameter.id}
                              className="flex items-center"
                            >
                              <input
                                type="text"
                                value={parameter.name}
                                readOnly
                                className="mr-2 flex-1 rounded-md border border-gray-300 p-2 dark:bg-[#212430] dark:text-[#fff]"
                              />
                              <input
                                type="text"
                                value={parameter.value}
                                onChange={(e) =>
                                  setCustomParameters((prevParameters) =>
                                    prevParameters.map((param) =>
                                      param.id === parameter.id
                                        ? { ...param, value: e.target.value }
                                        : param
                                    )
                                  )
                                }
                                className="mr-2 flex-1 rounded-md border border-gray-300 p-2 dark:bg-[#212430] dark:text-[#fff]"
                                placeholder="Value"
                              />
                              <button
                                type="button"
                                onClick={() =>
                                  deleteCustomParameter(parameter.id)
                                }
                                className="rounded-full bg-red-500 p-1 text-white"
                              >
                                <AiOutlineDelete />
                              </button>
                            </li>
                          ))}
                        </ul>
                        <div className="flex items-center">
                          <input
                            type="text"
                            value={newCustomParam.name}
                            onChange={(e) =>
                              setNewCustomParam({
                                ...newCustomParam,
                                name: e.target.value,
                              })
                            }
                            className="mr-2 flex-1 rounded-md border border-gray-300 p-2 dark:bg-[#212430] dark:text-[#fff]"
                            placeholder="Name"
                          />
                          <input
                            type="text"
                            value={newCustomParam.value}
                            onChange={(e) =>
                              setNewCustomParam({
                                ...newCustomParam,
                                value: e.target.value,
                              })
                            }
                            className="mr-2 flex-1 rounded-md border border-gray-300 p-2 dark:bg-[#212430] dark:text-[#fff]"
                            placeholder="Value"
                          />
                          <button
                            type="button"
                            onClick={addCustomParameter}
                            className="rounded-full bg-green-500 p-1 text-white"
                          >
                            Add
                          </button>
                        </div>
                      </div>
                      <button
                        type="button"
                        onClick={handleSaveClick}
                        className="mt-4 inline-flex items-center rounded bg-[#5D5FEF] px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-800"
                      >
                        Save
                      </button>
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

export default Accordion;
