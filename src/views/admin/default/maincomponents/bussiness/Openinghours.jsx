import React, { useState } from "react";
import plusicon from "./imges/dd.svg";
import { RxCross1 } from "react-icons/rx";
import { FaPlus } from "react-icons/fa";

const daysOfWeek = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
];

const defaultTimeSlots = [{ start: "08:00", end: "19:00" }];

const Openinghours = () => {
  const [activeIndex, setActiveIndex] = useState(1);
  const [hours, setHours] = useState(
    daysOfWeek.reduce((acc, day) => {
      acc[day] = [...defaultTimeSlots];
      return acc;
    }, {})
  );
  const [timeFormat, setTimeFormat] = useState("24");

  const handleAddTimeSlot = (day) => {
    setHours((prevHours) => ({
      ...prevHours,
      [day]: [...prevHours[day], { start: "", end: "" }],
    }));
  };

  const handleTimeChange = (day, index, field, value) => {
    const newTimeSlots = [...hours[day]];
    newTimeSlots[index][field] = value;
    setHours({
      ...hours,
      [day]: newTimeSlots,
    });
  };

  const handleDeleteTimeSlot = (day, index) => {
    const newTimeSlots = hours[day].filter((_, i) => i !== index);
    setHours({
      ...hours,
      [day]: newTimeSlots,
    });
  };

  const convertTo12HourFormat = (time) => {
    let [hours, minutes] = time.split(":");
    const suffix = hours >= 12 ? "PM" : "AM";
    hours = hours % 12 || 12;
    return `${hours}:${minutes} ${suffix}`;
  };

  const convertTo24HourFormat = (time) => {
    let [hours, minutes] = time.split(":");
    const suffix = time.includes("PM") ? "PM" : "AM";
    if (suffix === "PM" && hours !== "12") {
      hours = parseInt(hours, 10) + 12;
    } else if (suffix === "AM" && hours === "12") {
      hours = "00";
    }
    return `${hours}:${minutes}`;
  };

  const render12HourTimePicker = (time, onChange) => {
    const [hoursMinutes, suffix] = time.split(" ");
    const [hours, minutes] = hoursMinutes.split(":");
    return (
      <div className="flex items-center">
        <input
          type="time"
          value={`${hours.padStart(2, "0")}:${minutes}`}
          onChange={(e) =>
            onChange(convertTo24HourFormat(`${e.target.value} ${suffix}`))
          }
          className="data-twe-timepicker-toggle-button mt-2 md:mt-0 md:mr-2 md:h-[47px] md:w-[244.18px] rounded-[10px] border border-gray-300 p-2 text-center dark:border-[#191A1F] dark:bg-[#212430]"
          data-twe-toggle
        />
      </div>
    );
  };

  return (
    <div className="space-y-2">
      <div className="rounded-[10px] border-[1px] border-gray-300 bg-white px-5 font-dm text-[14px] font-semibold shadow-sm shadow-[#003EFF1A] dark:border-[#191A1F] dark:bg-[#13151E] dark:text-[#fff]">
        <div
          className="flex h-[45px] cursor-pointer items-center justify-between"
          onClick={() => setActiveIndex((prev) => (prev === 1 ? -1 : 1))}
        >
          <span className="text-[16px] font-semibold text-[#1B254B] dark:text-[#fff]">
            Opening Hours
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
              <div className="container mx-auto">
                <div className="mb-7 flex justify-start">
                  <button
                    type="button"
                    onClick={() => setTimeFormat("12")}
                    className={`mb-2 mr-3 h-[47px] w-full rounded-[55px] sm:mb-0 sm:w-[150px] ${
                      timeFormat === "12"
                        ? "bg-[#5D5FEF] text-[#fff]"
                        : "border-[1px]  bg-[#fff] text-[#B8BAC7] dark:border-[#191A1F] dark:bg-[#212430]"
                    }`}
                  >
                    12 Hours
                  </button>
                  <button
                    type="button"
                    onClick={() => setTimeFormat("24")}
                    className={`mb-2 h-[47px] w-full rounded-[55px] sm:mb-0 sm:w-[150px] ${
                      timeFormat === "24"
                        ? "bg-[#5D5FEF] text-[#fff]"
                        : "border-[1px]  bg-[#fff] text-[#B8BAC7] dark:border-[#191A1F] dark:bg-[#212430]"
                    }`}
                  >
                    24 Hours
                  </button>
                </div>
                {daysOfWeek.map((day) => (
                  <div key={day} className="mb-6">
                    <div className=" flex items-baseline justify-between ">
                      <div className="flex">
                        <input
                          type="checkbox"
                          id={day}
                          className="mr-2 h-[22px] w-[22px] text-center accent-[#5D5FEF]"
                          defaultChecked
                        />
                        <label
                          htmlFor={day}
                          className="ml-3 text-center text-[16px] font-semibold dark:text-[#fff]"
                        >
                          {day}
                        </label>
                      </div>

                      <div className="flex flex-col">
                        {hours[day].map((timeSlot, index) => (
                          <div key={index} className="mb-2 flex flex-col md:flex-row items-center">
                            {timeFormat === "24" ? (
                              <input
                                type="time"
                                value={timeSlot.start}
                                onChange={(e) =>
                                  handleTimeChange(
                                    day,
                                    index,
                                    "start",
                                    e.target.value
                                  )
                                }
                                className="data-twe-timepicker-toggle-button mt-2 md:mt-0 md:mr-2 md:h-[47px] md:w-[244.18px] rounded-[10px] border border-gray-300 p-2  text-center dark:border-[#191A1F] dark:bg-[#212430]"
                                data-twe-toggle
                              />
                            ) : (
                              render12HourTimePicker(
                                convertTo12HourFormat(timeSlot.start),
                                (value) =>
                                  handleTimeChange(day, index, "start", value)
                              )
                            )}

                            {timeFormat === "24" ? (
                              <input
                                type="time"
                                value={timeSlot.end}
                                onChange={(e) =>
                                  handleTimeChange(
                                    day,
                                    index,
                                    "end",
                                    e.target.value
                                  )
                                }
                                className="data-twe-timepicker-toggle-button mt-2 md:mt-0 md:mr-2 md:h-[47px] md:w-[244.18px] rounded-[10px] border border-gray-300 p-2  text-center dark:border-[#191A1F] dark:bg-[#212430]"
                                data-twe-toggle
                              />
                            ) : (
                              render12HourTimePicker(
                                convertTo12HourFormat(timeSlot.end),
                                (value) =>
                                  handleTimeChange(day, index, "end", value)
                              )
                            )}
                            {index === 0 && (
                              <div className="flex h-[47px] w-[60px] items-center mt-2 md:mt-0 justify-center rounded-[10px] border-[1px] border-[#B8BAC7] dark:border-[#191A1F] dark:bg-[#212430]">
                                <FaPlus
                                  onClick={() => handleAddTimeSlot(day)}
                                />
                              </div>
                            )}
                            {index !== 0 && (
                              <div className="flex h-[47px] w-[60px] items-center justify-center ">
                                <RxCross1
                                  onClick={() =>
                                    handleDeleteTimeSlot(day, index)
                                  }
                                />
                              </div>
                            )}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Openinghours;
