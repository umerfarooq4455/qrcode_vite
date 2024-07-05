import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Accordion from "../../../../../components/Accordions/Accordion";
import Createfolder from "../../../../../components/Toplevelcomponent/folder/Createfolder";
import Passwordfield from "../../../../../components/Toplevelcomponent/password/Passwordfield";
import Scanlimt from "../../../../../components/Toplevelcomponent/scanlimt/Scanlimt";
import Schedule from "../../../../../components/Toplevelcomponent/schedule/Schedule";
import Urlconfig from "../../../../../components/Toplevelcomponent/urlconfiguration/Urlconfig";
import Mobilepreview from "../../../../../components/Toplevelcomponent/Mobilepreview/Mobilepreview";
import StepperComponent from "../../../../../components/formstepper/StepperComponent";
import { useApiContext } from "../../../../../contextapi/contextApi";

interface FormData {
  name?: string;
  schedule?: {
    from: string;
    to: string;
  };
  content?: {
    url?: string;
    uri?: string;
  };
  [key: string]: any;
}

const Webcontent: React.FC = () => {
  const {
    fromDate,
    toDate,
    formData,
    setFormData,
    contenttypeid,
    handlePreviousStep,
  } = useApiContext();
  const navigate = useNavigate();

  useEffect(() => {
    const dateObject = new Date(fromDate);
    const dateObjectd = new Date(toDate);

    const options: Intl.DateTimeFormatOptions = {
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

    setFormData((prevFormData: FormData) => ({
      ...prevFormData,
      schedule: {
        from: fromDates,
        to: toDates,
      },
    }));
  }, [fromDate, toDate, setFormData]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };

  const handleFolder = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };

  const handleChangeurl = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.id === "url") {
      setFormData((prevData: FormData) => ({
        ...prevData,
        content: {
          ...prevData.content,
          url: e.target.value,
        },
      }));
    } else {
      setFormData((prevData: FormData) => ({
        ...prevData,
        [e.target.id]: e.target.value,
      }));
    }
  };

  const handleChangeuri = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.id === "uri") {
      setFormData((prevData: FormData) => ({
        ...prevData,
        content: {
          ...prevData.content,
          uri: e.target.value,
        },
      }));
    } else {
      setFormData((prevData: FormData) => ({
        ...prevData,
        [e.target.id]: e.target.value,
      }));
    }
  };

  return (
    <div className="dark:text-white ">
      <div className="mt-[14px]">
        <h1 className="text-lg font-bold md:text-xl">
          Complete the website content
        </h1>
        <p className="text-sm">
          Enter the website related content to complete the QR Code.
        </p>
      </div>

      <div className="flex w-full flex-col justify-between py-4 lg:flex-row ">
        <div className="h-auto lg:h-[750px] lg:w-full lg:overflow-y-scroll xl:w-full">
          <form>
            <div className="">
              <div className="mb-3 p-[1px]">
                <input
                  type="text"
                  id="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="h-[45px] w-full rounded-[10px] border-[1px] border-[#73779166] bg-[#fff] px-5 text-sm text-gray-900 dark:border-[#191A1F] dark:bg-[#212430] dark:text-[#fff] dark:placeholder-[#fff]"
                  placeholder="Name of your QR code..."
                />
              </div>
            </div>

            <div className="mb-3 mt-2">
              <Accordion onChange={handleChangeurl} />
            </div>
            <div className="mb-3 mt-2">
              <Createfolder onChange={handleFolder} />
            </div>
            <div className="mb-3 mt-2">
              <Passwordfield onChange={handleChange} />
            </div>
            <div className="mb-3 mt-2">
              <Schedule />
            </div>
            <div className="mb-3 mt-2">
              <Urlconfig onChange={handleChangeuri} />
            </div>
            <div className="mb-3 mt-2 w-full">
              <Scanlimt onChange={handleChange} />
            </div>
          </form>
        </div>

        <Mobilepreview />
      </div>
    </div>
  );
};

export default Webcontent;
