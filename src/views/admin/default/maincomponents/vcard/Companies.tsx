import React, { useState } from "react";
import defultpdfimg from "../../../../../assets/img/qrcold-icons/pdfimges/Group 191.svg";
import { RxCross1 } from "react-icons/rx";

interface Company {
  companyName: string;
  professions: string[];
}

const Companies: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(1);
  const [companies, setCompanies] = useState<Company[]>([{ companyName: "", professions: [""] }]);

  const toggleAccordion = (index: number) => {
    setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  const handleAddCompany = () => {
    setCompanies([...companies, { companyName: "", professions: [""] }]);
  };

  const handleDeleteCompany = (index: number) => {
    setCompanies(companies.filter((_, i) => i !== index));
  };

  const handleAddProfession = (companyIndex: number) => {
    setCompanies(
      companies.map((company, i) =>
        i === companyIndex
          ? { ...company, professions: [...company.professions, ""] }
          : company
      )
    );
  };

  const handleDeleteProfession = (companyIndex: number, professionIndex: number) => {
    setCompanies(
      companies.map((company, i) =>
        i === companyIndex
          ? {
              ...company,
              professions: company.professions.filter((_, pi) => pi !== professionIndex),
            }
          : company
      )
    );
  };

  const handleProfessionChange = (companyIndex: number, professionIndex: number, value: string) => {
    setCompanies(
      companies.map((company, i) =>
        i === companyIndex
          ? {
              ...company,
              professions: company.professions.map((profession, pi) =>
                pi === professionIndex ? value : profession
              ),
            }
          : company
      )
    );
  };

  return (
    <div className="space-y-2">
      <div className="rounded-[10px] border-[1px] border-gray-300 bg-white px-5 font-dm text-[14px] font-semibold shadow-sm shadow-[#003EFF1A] dark:border-[#191A1F] dark:bg-[#13151E] dark:text-[#fff]">
        <div
          className="flex h-[45px] cursor-pointer items-center justify-between"
          onClick={() => toggleAccordion(1)}
        >
          <span className="text-[16px] font-semibold text-[#1B254B] dark:text-[#fff]">
            Companies
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
              {companies.map((company, companyIndex) => (
                <div key={companyIndex} className="relative mt-5 space-y-4">
                  <div className="flex flex-col space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0">
                    <div className="w-full">
                      <label className="mb-2 block text-[12px] font-semibold text-gray-900 dark:text-white">
                        Company {companyIndex + 1}
                      </label>
                      <input
                        type="text"
                        id="title"
                        placeholder="Big Company"
                        className="h-[45px] w-full rounded-[10px] border-[1px] border-[#73779166] bg-[#fff] px-5 text-sm text-gray-900 dark:border-[#191A1F] dark:bg-[#212430] dark:text-[#fff] dark:placeholder-[#fff]"
                        value={company.companyName}
                        onChange={(e) =>
                          setCompanies(
                            companies.map((c, i) =>
                              i === companyIndex
                                ? { ...c, companyName: e.target.value }
                                : c
                            )
                          )
                        }
                      />
                    </div>

                    <RxCross1
                      size={24}
                      onClick={() => handleDeleteCompany(companyIndex)}
                    />
                  </div>
                  {company.professions.map((profession, professionIndex) => (
                    <div
                      key={professionIndex}
                      className="mt-2 flex items-center justify-start"
                    >
                      <div className="flex  w-full flex-col md:flex-row">
                        <div className=" ">
                          <label className="mb-2 block text-[12px] font-semibold text-gray-900 dark:text-white">
                            Profession {professionIndex + 1}
                          </label>
                          <input
                            type="text"
                            id="title"
                            placeholder="Big Company"
                            className="h-[45px] w-full  rounded-[10px] border-[1px] border-[#73779166] bg-[#fff] px-5 text-sm text-gray-900 dark:border-[#191A1F] dark:bg-[#212430] dark:text-[#fff] dark:placeholder-[#fff] md:w-[653px]"
                            value={profession}
                            onChange={(e) =>
                              handleProfessionChange(
                                companyIndex,
                                professionIndex,
                                e.target.value
                              )
                            }
                          />
                        </div>
                        {professionIndex === 0 && (
                          <div className="ml-2 flex mt-2 md:mt-0  md:items-end md:justify-center">
                            <button
                              type="button"
                              className="h-[47px] w-[150px]  px-2 cursor-pointer rounded-full bg-[#5D5FEF] text-[12px] text-white"
                              onClick={() => handleAddProfession(companyIndex)}
                            >
                              Add Profession
                            </button>
                          </div>
                        )}
                        {professionIndex > 0 && (
                          <div className="ml-2 mt-6  flex items-center">
                            <RxCross1
                              size={24}
                              onClick={() =>
                                handleDeleteProfession(
                                  companyIndex,
                                  professionIndex
                                )
                              }
                            />
                          </div>
                        )}
                      </div>
                    </div>
                  ))}

                  <hr className="mt-5" />
                </div>
              ))}
              <button
                type="button"
                className="my-3 h-[47px] w-[150px] cursor-pointer rounded-full bg-[#5D5FEF] text-[12px] text-white"
                onClick={handleAddCompany}
              >
                Add Company
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Companies;
