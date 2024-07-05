import React, { useState, useEffect } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { FaCalendar } from "react-icons/fa";
import calendar from "../../../assets/img/qrcold-icons/carbon_calendar.png";

interface Props {
  Sincedate: string;
  Untildate: string;
  isDisabled: boolean;
  onChange: (date: Date | null) => void;
  valide: boolean;
  errorurl: string;
}

const Dateinput: React.FC<Props> = ({
  Sincedate,
  Untildate,
  isDisabled,
  onChange,
  valide,
  errorurl,
}) => {
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [error, setError] = useState<boolean>(false);

  const handleDateChange = (date: Date | null) => {
    setSelectedDate(date);
    onChange(date);
  };

  const handleBlur = () => {
    if (!selectedDate && isDisabled) {
      setError(false);
    } else if (selectedDate && !isDisabled) {
      setError(true);
    }
  };

  useEffect(() => {
    if (selectedDate) {
      setSelectedDate(selectedDate);
    }
  }, [selectedDate]);

  return (
    <div className="">
      <label
        htmlFor="datepicker"
        className="block font-sans text-[12px] font-semibold text-[#000] dark:text-[#fff]"
      >
        {Sincedate || Untildate}
      </label>
      <div className="relative">
        <DatePicker
          id="datepicker"
          required
          selected={selectedDate}
          onChange={handleDateChange}
          onBlur={handleBlur}
          dateFormat="MM/dd/yyyy h:mm aa"
          className={`mt-1 w-full rounded-[10px] border-[1px] p-2 pl-14 text-sm focus:outline-none dark:border-[#191A1F]  ${
            !selectedDate && isDisabled && !error
              ? "border-red-300 text-red-400 dark:border-red-300 dark:bg-[#212430] dark:text-red-400 "
              : "border-gray-500 text-[#000] dark:bg-[#212430]  dark:text-[#fff] "
          } p-2.5  ${
            !selectedDate && isDisabled && !error
              ? "border-red-300 text-red-400 dark:border-red-300 dark:bg-[#212430] dark:text-red-400 "
              : valide && selectedDate
              ? "border-gray-400 text-gray-300 dark:bg-[#212430]  dark:text-gray-300"
              : ""
          }`}
          showTimeSelect
          disabled={!isDisabled}
          placeholderText="Select a date and time"
        />
        <span className="absolute left-3 top-4 text-gray-500">
          <img src={calendar} alt="" />
        </span>
      </div>

      {!valide && (error || (!selectedDate && isDisabled)) && (
        <p className="mt-1 text-[12px] text-red-500">{errorurl}</p>
      )}
    </div>
  );
};

export default Dateinput;
