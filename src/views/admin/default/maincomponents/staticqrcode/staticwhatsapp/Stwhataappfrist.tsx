import React, { useState, useEffect } from "react";
import { AiOutlineDelete } from "react-icons/ai";
import { useApiContext } from "../../../../../../contextapi/contextApi";

interface CustomParameter {
  id: number;
  name: string;
  value: string;
}

const Stwhataappfrist: React.FC<{ onChange: (event: React.ChangeEvent<HTMLInputElement>) => void }> = ({ onChange }) => {
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
  const [parameters, setParameters] = useState<Array<CustomParameter>>([
    { id: 1, name: "utm_source", value: "" },
    { id: 2, name: "utm_medium", value: "" },
    { id: 3, name: "utm_campaign", value: "" },
  ]);

  const toggleAccordion = (index: number) => {
    setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  const [customParameters, setCustomParameters] = useState<Array<CustomParameter>>([]);
  const [newCustomParam, setNewCustomParam] = useState<CustomParameter>({
    name: "",
    value: "",
    id: 0, // You might want to generate unique IDs properly
  });
  const [urlWithCustomParams, setUrlWithCustomParams] = useState<string>("");

  useEffect(() => {
    updateUrl([...parameters, ...customParameters]);
    setWebsiteUrl((prevUrl) => `${prevUrl}`);
  }, [parameters, customParameters]);

  useEffect(() => {
    validateInput();
    updateUrl([...parameters, ...customParameters]);
  }, [websiteUrl]);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLTextAreaElement>) => {
    const { value } = event.target;
    setWebsiteUrl(value);
    setIsInputValid(true);
    setUrlError("");
    onChange(event as React.ChangeEvent<HTMLInputElement>);
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
    if (newCustomParam.name.trim() !== "" && newCustomParam.value.trim() !== "") {
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

      setNewCustomParam({ name: "", value: "", id: 0 });
    }
  };

  const deleteCustomParameter = (id: number) => {
    const updatedCustomParameters = customParameters.filter(
      (param) => param.id !== id
    );
    setCustomParameters(updatedCustomParameters);
    updateUrl(updatedCustomParameters);
  };

  const updateUrl = (customParams: CustomParameter[]) => {
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
            <div className="py-3 text-[14px] font-bold">Whatsapp information</div>
            <div className="mb-4 ">
              <label
                htmlFor="website"
                className="mb-1 block text-[12px] font-semibold text-[#1B254B] dark:text-[#fff]"
              >
                Number
              </label>
              <input
                type="number"
                className="mt-1 block w-full rounded-[10px] border border-gray-300 bg-white p-2.5 text-[14px] font-normal text-[#1B254B]  dark:border-[#191A1F] dark:bg-[#212430] dark:text-white dark:placeholder-[#fff]"
                id="url"
                required
                placeholder="retrreer"
              />
            </div>
            <div className="mb-4 ">
              <label
                htmlFor="website"
                className="mb-1 block text-[12px] font-semibold text-[#1B254B] dark:text-[#fff]"
              >
                Message
              </label>
              <textarea
                type="text"
                id="url"
                value={websiteUrl}
                onChange={handleInputChange}
                onBlur={handleInputBlur}
                required
                className="mt-1 block w-full rounded-[10px] border border-gray-300 bg-white p-2.5 text-[14px] font-normal text-[#1B254B]  dark:border-[#191A1F] dark:bg-[#212430] dark:text-white dark:placeholder-[#fff]"
                placeholder="Enter some text..."
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Stwhataappfrist;
