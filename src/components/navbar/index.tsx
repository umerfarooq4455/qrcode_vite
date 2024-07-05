import React from 'react';
import Dropdown from '../../components/dropdown';
import { FiAlignJustify } from 'react-icons/fi';
import { BsArrowBarUp } from 'react-icons/bs';
import qrcode from '../../assets/img/qrcold-icons/previewmobile/Vector.svg';
import StepperComponent from '../formstepper/StepperComponent';
import { useApiContext } from '../../contextapi/contextApi';
import { useLocation } from 'react-router-dom';
import billicon from '../../assets/img/qrcold-icons/sidebaricons/tdesign_notification.svg';
import moon from '../../assets/img/qrcold-icons/sidebaricons/material-symbols-light_dark-mode.svg';
import { RiSunFill } from 'react-icons/ri';

interface NavbarProps {
  onOpenSidenav: () => void;
  brandText: string;
}

const Navbar: React.FC<NavbarProps> = (props) => {
  const { onOpenSidenav, brandText } = props;
  const {
    activeStep,
    handleNextStep,
    handlePreviousStep,
    darkmode,
    setDarkmode,
  } = useApiContext();
  const location = useLocation();

  const hideStepperRoutes = ['/bulkqr', '/statistics', '/templates'];
  const additionalHideHeadtextRoutes = ['/bulkqr', '/my-qrcodes', '/templates'];
  const hideHeadtextRegex = /^\/qr-code-generator(\/.*)?$/;
  const hideHdtext =
    hideHeadtextRegex.test(location.pathname) ||
    additionalHideHeadtextRoutes.includes(location.pathname);

  // Check if current path is in hideStepperRoutes
  const hideStepper = hideStepperRoutes.includes(location.pathname);

  return (
    <nav className="z-40 mt-3 flex flex-row flex-wrap items-center justify-between rounded-xl p-2 backdrop-blur-xl dark:bg-[#03040a] md:flex-wrap-reverse">
      {/* Title */}
      {!hideHdtext && (
        <h1 className="hidden py-2 text-[25px] font-bold text-[#1B254B] dark:text-[#fff] md:block">
          Statistics
        </h1>
      )}

      {/* Stepper Component */}
      <div className="ml-[-6px] flex flex-col md:mt-5 lg:mt-0 lg:flex-row">
        {!hideStepper && <StepperComponent activeStep={activeStep} />}
      </div>

      {/* Notification and Dark Mode */}
      <div className="relative order-first mt-[3px] flex h-[43px] w-[185px] flex-grow items-center justify-around gap-2 rounded-full border border-[#EFEFEF] bg-white shadow-xl shadow-shadow-500 dark:border-[#26282F] dark:!bg-[#03040a] dark:shadow-none md:order-last md:w-full md:flex-grow-0 md:gap-1 xl:w-[120px] xl:gap-2">
        {/* Menu Icon */}
        <span
          className="flex cursor-pointer text-xl text-gray-600 dark:text-white xl:hidden"
          onClick={onOpenSidenav}
        >
          <FiAlignJustify className="h-5 w-5" />
        </span>

        {/* Notification Dropdown */}
        <Dropdown
          button={
            <p className="cursor-pointer">
              <img src={billicon} alt="" className="h-[18px] w-[18px] xl:ml-2" />
            </p>
          }
          animation="origin-[65%_0%] md:origin-top-right transition-all duration-300 ease-in-out"
          children={
            <div className="flex w-[360px] flex-col gap-3 rounded-[20px] bg-white p-4 shadow-xl shadow-shadow-500 dark:!bg-navy-700 dark:text-white dark:shadow-none sm:w-[460px]">
              <div className="flex items-center justify-between">
                <p className="text-base font-bold text-navy-700 dark:text-white">
                  Notification
                </p>
                <p className="text-sm font-bold text-navy-700 dark:text-white">
                  Mark all read
                </p>
              </div>

              {/* Notification Items */}
              <button className="flex w-full items-center">
                <div className="flex h-full w-[85px] items-center justify-center rounded-xl bg-gradient-to-b from-brandLinear to-brand-500 py-4 text-2xl text-white">
                  <BsArrowBarUp />
                </div>
                <div className="ml-2 flex h-full w-full flex-col justify-center rounded-lg px-1 text-sm">
                  <p className="mb-1 text-left text-base font-bold text-gray-900 dark:text-white">
                    New Update: Horizon UI Dashboard PRO
                  </p>
                  <p className="font-base text-left text-xs text-gray-900 dark:text-white">
                    A new update for your downloaded item is available!
                  </p>
                </div>
              </button>

              {/* Second Notification Item */}
              <button className="flex w-full items-center">
                <div className="flex h-full w-[85px] items-center justify-center rounded-xl bg-gradient-to-b from-brandLinear to-brand-500 py-4 text-2xl text-white">
                  <BsArrowBarUp />
                </div>
                <div className="ml-2 flex h-full w-full flex-col justify-center rounded-lg px-1 text-sm">
                  <p className="mb-1 text-left text-base font-bold text-gray-900 dark:text-white">
                    New Update: Horizon UI Dashboard PRO
                  </p>
                  <p className="font-base text-left text-xs text-gray-900 dark:text-white">
                    A new update for your downloaded item is available!
                  </p>
                </div>
              </button>
            </div>
          }
          classNames={'py-2 top-4 -left-[230px] md:-left-[440px] w-max'}
        />

        {/* Dark Mode Toggle */}
        <div
          className="cursor-pointer text-gray-600"
          onClick={() => {
            if (darkmode) {
              document.body.classList.remove('dark');
              setDarkmode(false);
            } else {
              document.body.classList.add('dark');
              setDarkmode(true);
            }
          }}
        >
          {darkmode ? (
            <RiSunFill className="h-[24px] w-[24px] text-gray-600 dark:text-white" />
          ) : (
            <img src={moon} alt="" className="h-[24px] w-[24px]" />
          )}
        </div>

        {/* Profile Dropdown */}
        <Dropdown
          button={<img className="h-[35px] w-[35px] rounded-full" src={qrcode} alt="" />}
          children={
            <div className="flex w-56 flex-col justify-start rounded-[20px] bg-white bg-cover bg-no-repeat shadow-xl shadow-shadow-500 dark:!bg-navy-700 dark:text-white dark:shadow-none">
              <div className="mt-1 px-4 py-2">
                <a
                  href=" "
                  className="text-sm text-gray-800 dark:text-white hover:dark:text-white"
                >
                  Profile Settings
                </a>
              </div>
              <div className="h-px w-full bg-gray-200 dark:bg-white/20" />
              <div className="flex flex-col px-4 py-2">
                <a
                  href="/"
                  className="mb-2 text-sm font-medium text-red-500 hover:text-red-500"
                >
                  Log Out
                </a>
              </div>
            </div>
          }
          classNames={'py-2 top-8 -left-[180px] w-max'}
        />
      </div>
    </nav>
  );
};

export default Navbar;
