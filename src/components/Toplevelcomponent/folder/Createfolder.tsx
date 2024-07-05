import React, { useState, useEffect } from "react";
import { useApiContext } from "../../../contextapi/contextApi";

const Createfolder: React.FC<{
  onChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
}> = ({ onChange }) => {
  const { instance, selectedFolder, setSelectedFolder } = useApiContext();
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [websiteUrl, setWebsiteUrl] = useState<string>("");
  const [isInputValid, setIsInputValid] = useState<boolean>(false);
  const [urlError, setUrlError] = useState<string>("");
  const [showNewFolderInput, setShowNewFolderInput] = useState<boolean>(false);
  const [newFolderName, setNewFolderName] = useState<string>("");
  const [folders, setFolders] = useState<{ id: number; folder_name: string }[]>(
    []
  );

  const toggleAccordion = (index: number) => {
    setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedFolder(Number(event.target.value));
    onChange(event);
    setIsInputValid(true);
    setUrlError("");
  };

  useEffect(() => {
    validateInput();
  }, [websiteUrl]);

  const validateInput = () => {
    if (!websiteUrl.trim()) {
      setIsInputValid(false);
      setUrlError("URL is required");
    } else if (!/^(http|https):\/\//.test(websiteUrl)) {
      setIsInputValid(false);
      setUrlError("URL must start with http or https://");
    } else {
      setIsInputValid(true);
      setUrlError("");
    }
  };

  useEffect(() => {
    const fetchFolders = async () => {
      try {
        const response = await instance.get("/user/get_user_folders");
        setFolders(response.data.result);
        if (response.data.result.length > 0) {
          setSelectedFolder(response.data.result[0].id); // Set first folder by default
        }
      } catch (error) {
        console.error("Error fetching folders:", error);
      }
    };

    fetchFolders();
  }, [instance]);

  const handleCreateFolderClick = () => {
    setShowNewFolderInput(true);
  };

  const handleCreateNewFolder = async () => {
    try {
      const response = await instance.post("/user/create_folder", {
        folder_name: newFolderName,
        barcode_id: 0,
      });

      const newFolder = response.data.result;

      setSelectedFolder(newFolder.id);
    } catch (error) {
      console.error("Error creating folder:", error);
    }

    setShowNewFolderInput(false);
    setNewFolderName("");
  };

  return (
    <div className="space-y-2">
      <div className="rounded-[10px] border-[1px] border-gray-300 bg-white px-5 font-dm text-[16px] font-semibold shadow-sm shadow-[#003EFF1A] dark:border-[#191A1F] dark:bg-[#13151E] dark:text-[#fff]">
        <div
          className="flex h-[45px] cursor-pointer items-center justify-between"
          onClick={() => toggleAccordion(1)}
        >
          <span className="text-[16px] font-semibold text-[#1B254B] dark:text-[#fff]">
            Folder
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
            <div className="mb-1 md:h-[136px]">
              <label
                htmlFor="folder"
                className="mb-2 block text-[12px] font-semibold text-gray-900 dark:text-white"
              >
                Organize Folders
              </label>
              <div className="relative">
                <select
                  id="folder"
                  className="block w-full appearance-none rounded-lg border border-gray-300 bg-white px-2 py-2 text-base text-gray-900 dark:border-[#191A1F] dark:bg-[#212430] dark:text-[#fff] dark:placeholder-[#fff] dark:focus:border-[#191A1F] dark:active:border-[#191A1F]"
                  value={selectedFolder}
                  onChange={handleInputChange}
                >
                  {folders.length > 0 ? (
                    folders.map((folder) => (
                      <option
                        key={folder.id}
                        value={folder.id}
                        className="text-black bg-white dark:bg-[#13151E] dark:text-[#fff]"
                      >
                        &#x1F5BF; {folder.folder_name}
                      </option>
                    ))
                  ) : (
                    <option value="" className="text-black bg-white">
                      Loading folders...
                    </option>
                  )}
                </select>
              </div>
              <button
                type="button"
                className="mb-2 mt-4 w-[151px] rounded-3xl bg-[#5D5FEF] px-5 py-3 text-sm text-white dark:border-none md:mb-0 md:h-[37px] md:py-0"
                onClick={handleCreateFolderClick}
              >
                Create Folder
              </button>
            </div>
            {showNewFolderInput && (
              <div className="mb-1 py-2">
                <label
                  htmlFor="newFolder"
                  className="mb-2 block text-[12px] font-semibold text-gray-900 dark:text-white"
                >
                  New Folder Name
                </label>
                <input
                  type="text"
                  id="newFolder"
                  value={newFolderName}
                  onChange={(e) => setNewFolderName(e.target.value)}
                  className="block h-[45px] w-full rounded-[10px] border border-gray-300 bg-white p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-[#212430] dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
                  placeholder="Enter new folder name"
                />
                <button
                  type="button"
                  className="mt-4 h-[37px] w-[97px] rounded-3xl border-[2px] border-[#5D5FEF] px-4 text-sm text-[#5D5FEF] dark:border-[#fff] dark:text-[#fff]"
                  onClick={handleCreateNewFolder}
                >
                  Create
                </button>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default Createfolder;
