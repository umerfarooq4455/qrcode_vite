import React from "react";
import { RxCross2 } from "react-icons/rx";
import { GrClear } from "react-icons/gr";
import { RiListSettingsLine } from "react-icons/ri";

interface BottomSheetProps {
  isOpen: boolean;
  closeBottomSheet: () => void;
  handleCheckboxChange: (option: string) => void;
  selectedOptions: string;
  handleCheckboxChangesort: (option: string) => void;
  selectedOptionssort: string;
}

const BottomSheet: React.FC<BottomSheetProps> = ({
  isOpen,
  closeBottomSheet,
  handleCheckboxChange,
  selectedOptions,
  handleCheckboxChangesort,
  selectedOptionssort,
}) => {
  return (
    <div
      className={`bg-black fixed bottom-0 left-0 max-h-screen w-full bg-white transition-transform ${
        isOpen ? "!z-50 translate-y-0 bg-white" : "translate-y-full"
      }`}
    >
      <div className="text-black px-2 py-2">
        <div className="mt-2 flex items-center justify-between">
          <div className="flex items-center justify-center text-[12px] text-[#263CFF]">
            <GrClear className="mx-1" />
            Clear filters
          </div>
          <div className="flex justify-center font-semibold">Filter</div>
          <div className="flex justify-end font-semibold">
            <RxCross2 onClick={closeBottomSheet} />
          </div>
        </div>

        <hr className="mt-2" />

        <div className="max-h-[300px] overflow-y-auto">
          <div className="mt-4 flex flex-col pl-4 text-[14px] font-semibold">
            Sort by:
            {[
              "Most Recent",
              "Name",
              "Most Scanned",
              "Last Modified",
              "Most Visited",
            ].map((option) => (
              <label key={option}>
                <input
                  className="mx-1"
                  type="radio"
                  checked={selectedOptionssort === option}
                  onChange={() => handleCheckboxChangesort(option)}
                />
                {option}
              </label>
            ))}
          </div>

          <div className="mt-4 flex pl-4 text-[14px] font-semibold">
            Status:
            {[
              "Active",
              "Inactive",
              "Pending",
              "Resolved",
              "Rejected",
            ].map((option) => (
              <label key={option}>
                <input
                  className="mx-1"
                  type="radio"
                  checked={selectedOptions === option}
                  onChange={() => handleCheckboxChange(option)}
                />
                {option}
              </label>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BottomSheet;
