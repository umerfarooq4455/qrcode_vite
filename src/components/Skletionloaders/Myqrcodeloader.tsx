import React from "react";

const Myqrcodeloader: React.FC = () => {
  return (
    <div className="mt-4 flex animate-pulse items-center justify-between space-x-4 rounded-md bg-white p-3">
      <div className="flex items-center justify-center">
        <div className="mr-2 h-5 w-5 rounded-md bg-gray-300"></div>
        <div className="h-16 w-16 rounded-lg bg-gray-300"></div>
        <div className="ml-2">
          <div className="mb-2 h-3 md:w-16 w-4 rounded bg-gray-300"></div>
          <div className="h-3 md:w-28 w-7 rounded bg-gray-300"></div>
        </div>
      </div>
      <div className="flex items-center justify-center">
        <div className="mr-48 hidden 2xl:block">
          <div className="ml-2 flex">
            <div className="mr-4 h-16 w-1 rounded-lg bg-gray-300"></div>
            <div className="flex flex-col justify-center">
              <div className="mb-2 h-3 w-16 rounded bg-gray-300"></div>
              <div className="mb-2 h-3 w-24 rounded bg-gray-300"></div>
              <div className="h-3 w-28 rounded bg-gray-300"></div>
            </div>
          </div>
        </div>
        <div className="hidden lg:block">
          <div className="ml-2 flex">
            <div className="mr-4 h-16 w-1 rounded-lg bg-gray-300"></div>
            <div className="flex flex-col justify-center">
              <div className="mb-2 h-3 w-16 rounded bg-gray-300"></div>
              <div className="mb-2 h-3 w-24 rounded bg-gray-300"></div>
              <div className="h-3 w-28 rounded bg-gray-300"></div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex items-center">
        <div className="mr-4 hidden h-16 w-1 rounded-lg bg-gray-300 2xl:block"></div>
        <div className="ml-2 mr-2 hidden md:block">
          <div className="flex">
            <div className="mr-2 h-9 w-24 rounded-full bg-gray-300"></div>
            <div className="h-9 w-24 rounded-full bg-gray-300"></div>
          </div>
        </div>
        <div className="h-9 w-9 rounded-full bg-gray-300"></div>
      </div>
    </div>
  );
};

export default Myqrcodeloader;
