import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import Accordion from "../../../../../../components/Accordions/Accordion";
import Createfolder from "../../../../../../components/Toplevelcomponent/folder/Createfolder";
import Passwordfield from "../../../../../../components/Toplevelcomponent/password/Passwordfield";

import Urlconfig from "../../../../../../components/Toplevelcomponent/urlconfiguration/Urlconfig";
import Scanlimt from "../../../../../../components/Toplevelcomponent/scanlimt/Scanlimt";
import Mobilepreview from "../../../../../../components/Toplevelcomponent/Mobilepreview/Mobilepreview";
import { useApiContext } from "../../../../../../contextapi/contextApi";
import Schedule from "../../../../../../components/Toplevelcomponent/schedule/Schedule";
import Stwhataappfrist from "./Stwhataappfrist";
import StWelcom from "./StWelcom";

const StWhatsapp = () => {
  const {
    fromDate,
    toDate,
    formData,
    setFormData,
    contenttypeid,
    handlePreviousStep,
  } = useApiContext();
  const navigate = useNavigate();

  // useEffect(() => {
  //   if (!contenttypeid) {
  //     navigate("/qr-code-generator");
  //   }
  // }, [contenttypeid, navigate]);

  useEffect(() => {
    const dateObject = new Date(fromDate);
    const dateObjectd = new Date(toDate);

    const options = {
      month: "2-digit",
      day: "2-digit",
      year: "numeric",
      hour: "numeric",
      minute: "numeric",
      hour12: true,
      timeZoneName: "short",
    };

    const fromDates = dateObject.toLocaleString("en-US", options);
    const toDates = dateObjectd.toLocaleString("en-US", options);

    setFormData((prevFormData) => ({
      ...prevFormData,
      schedule: {
        from: fromDates,
        to: toDates,
      },
    }));
  }, [fromDate, toDate]);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };

  const handleFolder = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };

  const handleChangeurl = (e) => {
    if (e.target.id === "url") {
      setFormData((prevData) => ({
        ...prevData,
        content: {
          ...prevData.content,
          url: e.target.value,
        },
      }));
    } else {
      setFormData((prevData) => ({
        ...prevData,
        [e.target.id]: e.target.value,
      }));
    }
  };

  const handleChangeuri = (e) => {
    if (e.target.id === "uri") {
      setFormData((prevData) => ({
        ...prevData,
        content: {
          ...prevData.content,
          uri: e.target.value,
        },
      }));
    } else {
      setFormData((prevData) => ({
        ...prevData,
        [e.target.id]: e.target.value,
      }));
    }
  };

  return (
    <>
      <div className="dark:text-white ">
        {/* heading  */}
        <div className="mt-[14px]">
          <h1 className="text-lg font-bold md:text-xl">
          Complete the content of the QR
          </h1>
          <p className="text-sm">
            Enter the Email related content to complete the QR Code.
          </p>
        </div>
        {/* heading  */}

        {/* dynamic qrcodes  */}

        <div className="flex w-full flex-col justify-between py-4  lg:flex-row ">
          {/* Types cards  */}
          <div className="h-auto lg:h-[750px] lg:w-full  lg:overflow-y-scroll xl:w-full">
            <form>
              <div className="">
                <div className="mb-3 p-[1px]">
                  <input
                    type="text"
                    id="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="  h-[45px] w-full rounded-[10px] border-[1px] border-[#73779166] bg-[#fff] px-5 text-sm text-gray-900 dark:border-[#191A1F] dark:bg-[#212430]   dark:text-[#fff] dark:placeholder-[#fff] "
                    placeholder="Name of your QR code..."
                  />
                </div>
              </div>

              <div className="mb-3 mt-2">
                <Stwhataappfrist
                  onChange={handleChangeurl}
                  // ={onSubmitForm}onSubmitForm
                />
              </div>
              <div className="mb-3 mt-2">
                <StWelcom
                  // onChange={handleChangeurl}
                  // ={onSubmitForm}onSubmitForm
                />
              </div>
              <div className="mb-3 mt-2">
                <Createfolder
                  onChange={handleFolder}
                  // onSubmitForm={onSubmitForm}
                />
              </div>
              <div className="mb-3 mt-2">
                <Passwordfield
                  onChange={handleChange}
                  // onSubmitForm={onSubmitForm}
                />
              </div>
              <div className="mb-3 mt-2">
                <Schedule />
              </div>
              <div className="mb-3 mt-2">
                <Urlconfig
                  onChange={handleChangeuri}
                  // onSubmitForm={onSubmitForm}
                />
              </div>
              <div className="mb-3 mt-2 w-full">
                <Scanlimt onChange={handleChange} />
              </div>
            </form>
          </div>

          <Mobilepreview />
        </div>
      </div>
    </>
  );
};

export default StWhatsapp;
