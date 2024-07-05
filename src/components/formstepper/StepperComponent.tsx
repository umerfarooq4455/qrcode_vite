import { useEffect, useState } from "react";
import { useApiContext } from "../../contextapi/contextApi";
import { useLocation, useNavigate } from "react-router-dom";
import stepeline from "../../assets/img/qrcold-icons/sidebaricons/Line 1.svg";
import qrcode from "../../assets/img/qrcold-icons/previewmobile/Vector.svg";
import Preview from "../../assets/img/qrcold-icons/previewmobile/prime_mobile.svg";
const StepperComponent = () => {
  const {
    activeStep,
    handleNextStep,
    handlePreviousStep,
    contenttypeid,
    handleSubmit,
    onSubmitForm,
    isInputValid,
    nextstepid,
    setNextstepid,
    isLoading,
    websiteUrl,
    accessPassword,
    selectedDate,
    handlesqrcode,
    scanlimt,
  } = useApiContext();
  const navigate = useNavigate();
  const cardData = [
    { title: "Choose Type" },
    { title: "Content" },
    { title: "QR Design" },
  ];
  const location = useLocation();
  const [previousRoutes, setPreviousRoutes] = useState<string[]>([]);

  useEffect(() => {
    localStorage.setItem("activeStep", activeStep.toString());
    setPreviousRoutes((prevRoutes) => [...prevRoutes, location.pathname]);
  }, [location.pathname, activeStep]);

  const handleGoBack = () => {
    if (activeStep === 0) {
      navigate("/qr-code-generator");
    } else {
      handlePreviousStep();
      const previousRoutesCopy = [...previousRoutes];
      previousRoutesCopy.pop();

      if (previousRoutesCopy.length > 0) {
        const previousRoute = previousRoutesCopy.pop();
        setPreviousRoutes(previousRoutesCopy);
        navigate(previousRoute || "/");
      }
    }
  };

  const currentPath = window.location.pathname;
  const isMyQrcodesRoute = location.pathname === "/my-qrcodes";

  return (
    <>
      <div
        className={`${
          isMyQrcodesRoute ? "hidden" : "visible flex flex-col md:flex-row"
        }`}
      >
        <div>
          <ol className="text-black flex w-full items-center  rounded-lg py-3  text-center text-sm  font-medium dark:text-[#737791]  sm:text-base md:px-0  md:py-3 ">
            {cardData.map((card, index) => (
              <li
                key={index}
                className={`ml-1 flex items-center  font-semibold dark:text-[#5D5FEF]  ${
                  index === activeStep
                    ? "text-black dark:text-blue-500 "
                    : "text-gray-500 dark:text-gray-400"
                } `}
              >
                <span
                  className={`me-1 flex h-[25px] w-[25px] shrink-0 items-center justify-center rounded-full border  ${
                    index < activeStep
                      ? "border-[2px] border-green-500 bg-[#FFFFFF]  text-[#FFFFFF] dark:border-green-500  "
                      : "border-[2px] border-[#737791] text-[#5b6083]"
                  } dark:border-[#212430] ${
                    index === activeStep
                      ? "border-0 bg-[#5D5FEF] text-[#FFFFFF] dark:text-white"
                      : "text-[#737791]  dark:bg-[#13151E] dark:text-[#737791]"
                  }`}
                >
                  {index < activeStep ? (
                    <svg
                      className="w-[25px] text-green-500 md:w-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M5 13l4 4L19 7"
                      ></path>
                    </svg>
                  ) : (
                    index + 1
                  )}
                </span>
                <span>
                  <h3
                    className={`${
                      index === activeStep
                        ? " text-[10px] font-bold text-[#03040a] dark:text-[#5D5FEF]  md:text-[16px]"
                        : "text-[10px] font-bold text-[#737791] dark:text-[#737791]  md:text-[16px]"
                    }`}
                  >
                    {card.title}
                  </h3>
                </span>
                {index < cardData.length - 1 && (
                  <img
                    src={stepeline}
                    className="ml-1 h-3 w-3 md:mx-2 "
                    alt=""
                  />
                )}
              </li>
            ))}
          </ol>
        </div>

        <div className="mx-2 flex md:mx-4">
          {activeStep > 0 && (
            <>
              <button className="mr-2 " onClick={handleGoBack}>
                <div className="flex items-center justify-center rounded-full border-[2px] border-[#737791] p-2 font-semibold text-[#737791] hover:border-[#5D5FEF] hover:text-[#5D5FEF]  dark:text-[#737791] dark:hover:text-[#5D5FEF] ">
                  <svg
                    className="w-3  md:w-5"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M7.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l2.293 2.293a1 1 0 010 1.414z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                  <span className="mx-2 text-[14px] font-bold ">Previous</span>
                </div>
              </button>
              {contenttypeid === 0 && (
                <button
                  disabled={!isInputValid}
                  className="mr-2"
                  onClick={() => {
                    if (!isInputValid || !scanlimt) {
                      handleSubmit();
                      handleNextStep();
                    }
                  }}
                >
                  <div
                    className={`flex items-center justify-center rounded-full border-[2px] border-[#5D5FEF] bg-[#5D5FEF] p-2 font-semibold text-[#fff] hover:bg-[#5759e2] ${
                      currentPath === "/qr-code-generator/design"
                        ? "hidden"
                        : ""
                    }`}
                  >
                    {isLoading ? (
                      <>
                        <div className="flex items-center">
                          <svg
                            className="w-3 md:w-5 "
                            fill="currentColor"
                            viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              fillRule="evenodd"
                              d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                              clipRule="evenodd"
                            ></path>
                          </svg>
                          <svg
                            aria-hidden="true"
                            role="status"
                            className="me-3 ml-2 inline h-4 w-4 animate-spin text-white"
                            viewBox="0 0 100 101"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                              fill="#E5E7EB"
                            />
                            <path
                              d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                              fill="currentColor"
                            />
                          </svg>
                        </div>
                      </>
                    ) : (
                      <>
                        <svg
                          className="w-3 md:w-5 "
                          fill="currentColor"
                          viewBox="0 0 20 20"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fillRule="evenodd"
                            d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                            clipRule="evenodd"
                          ></path>
                        </svg>
                        <span className="mx-2 text-[14px] font-bold  ">
                          Next
                        </span>
                      </>
                    )}
                  </div>
                </button>
              )}
              {contenttypeid === 0 || nextstepid ? (
                <button
                  disabled={!isInputValid}
                  className="mr-2"
                  onClick={handlesqrcode}
                >
                  <div
                    className={`flex items-center justify-center rounded-full border bg-[#5D5FEF] p-2 text-white hover:bg-[#576dbf] ${
                      currentPath === "/qr-code-generator/design"
                        ? "bg-green-500 text-white hover:bg-green-600"
                        : currentPath === "/qr-code-generator/web1"
                        ? "hidden"
                        : ""
                    }`}
                  >
                    {isLoading ? (
                      <>
                        <div className="flex items-center">
                          <svg
                            className="w-3 md:w-5 "
                            fill="currentColor"
                            viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              fillRule="evenodd"
                              d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                              clipRule="evenodd"
                            ></path>
                          </svg>
                          <svg
                            aria-hidden="true"
                            role="status"
                            className="me-3 ml-2 inline h-4 w-4 animate-spin text-white"
                            viewBox="0 0 100 101"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                              fill="#E5E7EB"
                            />
                            <path
                              d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                              fill="currentColor"
                            />
                          </svg>
                        </div>
                      </>
                    ) : (
                      <>
                        <svg
                          className="w-3 md:w-5 "
                          fill="currentColor"
                          viewBox="0 0 20 20"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fillRule="evenodd"
                            d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                            clipRule="evenodd"
                          ></path>
                        </svg>
                        <span
                          className={`mx-2 text-xs md:text-sm ${
                            currentPath === "/qr-code-generator/design"
                              ? "text-white"
                              : ""
                          }`}
                        >
                          Completed
                        </span>
                      </>
                    )}
                  </div>
                </button>
              ) : (
                ""
              )}
              {/* //  : (
            //   nextstepid ==
            //   true(
            //     <button */}
              {/* //       className="mr-2"
            //       onClick={() => { */}
              {/* //         handleSubmit(), handleNextStep();
            //       }}
            //     >
            //       <div className="flex items-center justify-center rounded-full border  bg-[#5D5FEF]  p-2 text-white hover:bg-[#576dbf] ">
            //         <svg */}
              {/* //           className="w-3 md:w-5 "
            //           fill="currentColor"
            //           viewBox="0 0 20 20"
            //           xmlns="http://www.w3.org/2000/svg"
            //         >
            //           <path
            //             fillRule="evenodd"
            //             d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
            //             clipRule="evenodd"
            //           ></path>
            //         </svg>
            //         <span className="mx-2  text-xs md:text-sm ">completed</span>
            //       </div>
            //     </button>
            //   )
            // )
            // } */}
              {contenttypeid === 1 && (
                <button className="mr-2" onClick={handleNextStep}>
                  <div className="flex items-center justify-center rounded-full border  bg-[#5D5FEF]  p-2 text-white hover:bg-[#576dbf] ">
                    <svg
                      className="w-3 md:w-5 "
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                    <span className="mx-2  text-xs md:text-sm ">pdf</span>
                  </div>
                </button>
              )}
              {contenttypeid === 2 && (
                <button className="mr-2" onClick={handleNextStep}>
                  <div className="flex items-center justify-center rounded-full border  bg-[#5D5FEF]  p-2 text-white hover:bg-[#576dbf] ">
                    <svg
                      className="w-3 md:w-5 "
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                    <span className="mx-2  text-xs md:text-sm ">pdf</span>
                  </div>
                </button>
              )}
              {contenttypeid === 3 && (
                <button className="mr-2" onClick={handleNextStep}>
                  <div className="flex items-center justify-center rounded-full border  bg-[#5D5FEF]  p-2 text-white hover:bg-[#576dbf] ">
                    <svg
                      className="w-3 md:w-5 "
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                    <span className="mx-2  text-xs md:text-sm ">pdf</span>
                  </div>
                </button>
              )}
              {contenttypeid === 4 && (
                <button className="mr-2" onClick={handleNextStep}>
                  <div className="flex items-center justify-center rounded-full border  bg-[#5D5FEF]  p-2 text-white hover:bg-[#576dbf] ">
                    <svg
                      className="w-3 md:w-5 "
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                    <span className="mx-2  text-xs md:text-sm ">pdf</span>
                  </div>
                </button>
              )}
              {contenttypeid === 5 && (
                <button className="mr-2" onClick={handleNextStep}>
                  <div className="flex items-center justify-center rounded-full border  bg-[#5D5FEF]  p-2 text-white hover:bg-[#576dbf] ">
                    <svg
                      className="w-3 md:w-5 "
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                    <span className="mx-2  text-xs md:text-sm ">pdf</span>
                  </div>
                </button>
              )}
              {contenttypeid === 6 && (
                <button className="mr-2" onClick={handleNextStep}>
                  <div className="flex items-center justify-center rounded-full border  bg-[#5D5FEF]  p-2 text-white hover:bg-[#576dbf] ">
                    <svg
                      className="w-3 md:w-5 "
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                    <span className="mx-2  text-xs md:text-sm ">pdf</span>
                  </div>
                </button>
              )}
              {contenttypeid === 7 && (
                <button className="mr-2" onClick={handleNextStep}>
                  <div className="flex items-center justify-center rounded-full border  bg-[#5D5FEF]  p-2 text-white hover:bg-[#576dbf] ">
                    <svg
                      className="w-3 md:w-5 "
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                    <span className="mx-2  text-xs md:text-sm ">pdf</span>
                  </div>
                </button>
              )}
              {contenttypeid === 8 && (
                <button className="mr-2" onClick={handleNextStep}>
                  <div className="flex items-center justify-center rounded-full border  bg-[#5D5FEF]  p-2 text-white hover:bg-[#576dbf] ">
                    <svg
                      className="w-3 md:w-5 "
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                    <span className="mx-2  text-xs md:text-sm ">pdf</span>
                  </div>
                </button>
              )}
              {contenttypeid === 9 && (
                <button className="mr-2" onClick={handleNextStep}>
                  <div className="flex items-center justify-center rounded-full border  bg-[#5D5FEF]  p-2 text-white hover:bg-[#576dbf] ">
                    <svg
                      className="w-3 md:w-5 "
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                    <span className="mx-2  text-xs md:text-sm ">pdf</span>
                  </div>
                </button>
              )}
              {contenttypeid === 10 && (
                <button className="mr-2" onClick={handleNextStep}>
                  <div className="flex items-center justify-center rounded-full border  bg-[#5D5FEF]  p-2 text-white hover:bg-[#576dbf] ">
                    <svg
                      className="w-3 md:w-5 "
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                    <span className="mx-2  text-xs md:text-sm ">pdf</span>
                  </div>
                </button>
              )}
              {contenttypeid === 11 && (
                <button className="mr-2" onClick={handleNextStep}>
                  <div className="flex items-center justify-center rounded-full border  bg-[#5D5FEF]  p-2 text-white hover:bg-[#576dbf] ">
                    <svg
                      className="w-3 md:w-5 "
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                    <span className="mx-2  text-xs md:text-sm ">pdf</span>
                  </div>
                </button>
              )}
              {contenttypeid === 12 && (
                <button className="mr-2" onClick={handleNextStep}>
                  <div className="flex items-center justify-center rounded-full border  bg-[#5D5FEF]  p-2 text-white hover:bg-[#576dbf] ">
                    <svg
                      className="w-3 md:w-5 "
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                    <span className="mx-2  text-xs md:text-sm ">pdf</span>
                  </div>
                </button>
              )}
              {contenttypeid === 13 && (
                <button className="mr-2" onClick={handleNextStep}>
                  <div className="flex items-center justify-center rounded-full border  bg-[#5D5FEF]  p-2 text-white hover:bg-[#576dbf] ">
                    <svg
                      className="w-3 md:w-5 "
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                    <span className="mx-2  text-xs md:text-sm ">pdf</span>
                  </div>
                </button>
              )}
              {contenttypeid === 14 && (
                <button className="mr-2" onClick={handleNextStep}>
                  <div className="flex items-center justify-center rounded-full border  bg-[#5D5FEF]  p-2 text-white hover:bg-[#576dbf] ">
                    <svg
                      className="w-3 md:w-5 "
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                    <span className="mx-2  text-xs md:text-sm ">pdf</span>
                  </div>
                </button>
              )}
              {contenttypeid === 15 && (
                <button className="mr-2" onClick={handleNextStep}>
                  <div className="flex items-center justify-center rounded-full border  bg-[#5D5FEF]  p-2 text-white hover:bg-[#576dbf] ">
                    <svg
                      className="w-3 md:w-5 "
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                    <span className="mx-2  text-xs md:text-sm ">pdf</span>
                  </div>
                </button>
              )}
              {contenttypeid === 16 && (
                <button className="mr-2" onClick={handleNextStep}>
                  <div className="flex items-center justify-center rounded-full border  bg-[#5D5FEF]  p-2 text-white hover:bg-[#576dbf] ">
                    <svg
                      className="w-3 md:w-5 "
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                    <span className="mx-2  text-xs md:text-sm ">pdf</span>
                  </div>
                </button>
              )}
              {contenttypeid === 17 && (
                <button className="mr-2" onClick={handleNextStep}>
                  <div className="flex items-center justify-center rounded-full border  bg-[#5D5FEF]  p-2 text-white hover:bg-[#576dbf] ">
                    <svg
                      className="w-3 md:w-5 "
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                    <span className="mx-2  text-xs md:text-sm ">pdf</span>
                  </div>
                </button>
              )}
              {contenttypeid === 18 && (
                <button className="mr-2" onClick={handleNextStep}>
                  <div className="flex items-center justify-center rounded-full border  bg-[#5D5FEF]  p-2 text-white hover:bg-[#576dbf] ">
                    <svg
                      className="w-3 md:w-5 "
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                    <span className="mx-2  text-xs md:text-sm ">pdf</span>
                  </div>
                </button>
              )}
              {contenttypeid === 19 && (
                <button className="mr-2" onClick={handleNextStep}>
                  <div className="flex items-center justify-center rounded-full border  bg-[#5D5FEF]  p-2 text-white hover:bg-[#576dbf] ">
                    <svg
                      className="w-3 md:w-5 "
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                    <span className="mx-2  text-xs md:text-sm ">pdf</span>
                  </div>
                </button>
              )}
              {contenttypeid === 20 && (
                <button className="mr-2" onClick={handleNextStep}>
                  <div className="flex items-center justify-center rounded-full border  bg-[#5D5FEF]  p-2 text-white hover:bg-[#576dbf] ">
                    <svg
                      className="w-3 md:w-5 "
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                    <span className="mx-2  text-xs md:text-sm ">pdf</span>
                  </div>
                </button>
              )}
              {contenttypeid === 21 && (
                <button className="mr-2" onClick={handleNextStep}>
                  <div className="flex items-center justify-center rounded-full border  bg-[#5D5FEF]  p-2 text-white hover:bg-[#576dbf] ">
                    <svg
                      className="w-3 md:w-5 "
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                    <span className="mx-2  text-xs md:text-sm ">pdf</span>
                  </div>
                </button>
              )}
              {contenttypeid === 22 && (
                <button className="mr-2" onClick={handleNextStep}>
                  <div className="flex items-center justify-center rounded-full border  bg-[#5D5FEF]  p-2 text-white hover:bg-[#576dbf] ">
                    <svg
                      className="w-3 md:w-5 "
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                    <span className="mx-2  text-xs md:text-sm ">pdf</span>
                  </div>
                </button>
              )}
            </>
          )}

          {activeStep > 0 && (
            <div className="text-black  flex items-center justify-center rounded-full border  border-gray-400   lg:hidden">
              <span className="mx-2 flex items-center justify-center">
                <button className="mx-1 mr-3">
                  <img width={17} src={qrcode} alt="QR Code" />{" "}
                </button>
                <div className="h-8 border border-[#D9D9D9]"></div>
                <button className="mx-1 ml-2 ">
                  <img width={24} src={Preview} alt="Preview" />{" "}
                </button>
              </span>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default StepperComponent;
