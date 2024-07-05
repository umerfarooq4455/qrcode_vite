import { MdOutlineVisibility, MdOutlineVisibilityOff } from "react-icons/md";
import Checkbox from "../../checkbox";
import React, { useState, useEffect } from "react";
import { useApiContext } from "../../../contextapi/contextApi";

interface PasswordFieldProps {
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const Passwordfield: React.FC<PasswordFieldProps> = ({ onChange }) => {
  const { onSubmitForm } = useApiContext();
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [accessPassword, setAccessPassword] = useState<string>("");
  const [isInputValid, setIsInputValid] = useState<boolean>(true);
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [urlError, setUrlError] = useState<string>("");
  const [isCheckboxChecked, setIsCheckboxChecked] = useState<boolean>(false);

  const toggleAccordion = (index: number) => {
    setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAccessPassword(e.target.value);
    onChange(e);
    if (isCheckboxChecked) {
      validateInput();
    }
  };

  const handleCheckboxChange = () => {
    setIsCheckboxChecked(!isCheckboxChecked);
    setIsInputValid(true);
    setUrlError("");
  };

  useEffect(() => {
    if (isCheckboxChecked) {
      validateInput();
    }
  }, [accessPassword, isCheckboxChecked]);

  const validateInput = () => {
    if (isCheckboxChecked) {
      if (accessPassword.trim().length === 0) {
        setIsInputValid(false);
        setUrlError("Password is required");
      } else if (accessPassword.trim().length < 3) {
        setIsInputValid(false);
        setUrlError("Password must be at least 3 characters");
      } else {
        setIsInputValid(true);
        setUrlError("");
        onSubmitForm();
      }
    } else {
      setIsInputValid(true);
      setUrlError("");
      onSubmitForm();
    }
  };

  const handleInputBlur = () => {
    validateInput();
  };

  const handleTogglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="space-y-2">
      <div className="rounded-[10px] border-[1px] border-gray-300 bg-white px-5 font-dm text-[16px] font-semibold shadow-sm shadow-[#003EFF1A] dark:border-[#191A1F] dark:bg-[#13151E] dark:text-[#fff]">
        <div
          className="flex h-[45px] cursor-pointer items-center justify-between"
          onClick={() => toggleAccordion(1)}
        >
          <span className="text-[16px] font-semibold text-[#1B254B] dark:text-[#fff]">
            Password
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
          <>
            <div className="mb-2 text-[12px] font-medium text-[#A5A5A5] dark:text-[#FFFFFF]">
              <p>
                Include an access control so that when the QR code is scanned, a
                password will be required in order to view the content.
              </p>
            </div>
            <div className="">
              <div className="mb-5">
                <div className="flex py-3">
                  <Checkbox
                    style={{
                      backgroundColor: isCheckboxChecked ? "#5D5FEF" : "white",
                    }}
                    checked={isCheckboxChecked}
                    onChange={handleCheckboxChange}
                  />
                  <span className="text-black mx-2 text-[12px] font-medium">
                    Activate password to access the QR code
                  </span>
                </div>

                <div className="relative">
                  <input
                    type={showPassword ? "text" : "password"}
                    id="accessPassword"
                    value={accessPassword}
                    onChange={handleInputChange}
                    required
                    onBlur={handleInputBlur}
                    disabled={!isCheckboxChecked}
                    className={`block h-[45px] w-full rounded-[10px] border-[1px] text-sm ${
                      isInputValid
                        ? "border-gray-300 dark:border-[#191A1F]"
                        : "border-red-500"
                    } bg-white p-2.5 ${
                      isInputValid ? "text-gray-900" : "text-red-500"
                    } dark:border-[#191A1F] dark:bg-[#212430] dark:text-[#fff] dark:placeholder-[#fff]`}
                    placeholder="Enter password (max 3 characters)"
                  />
                  <div
                    className="absolute right-3 top-1/2 -translate-y-1/2 transform cursor-pointer"
                    onClick={handleTogglePasswordVisibility}
                  >
                    {showPassword ? (
                      <MdOutlineVisibilityOff />
                    ) : (
                      <MdOutlineVisibility />
                    )}
                  </div>
                </div>

                {!isInputValid && urlError && (
                  <p className="mt-1 text-sm text-red-500">{urlError}</p>
                )}
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Passwordfield;
