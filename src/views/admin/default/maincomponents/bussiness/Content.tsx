import React, { useState } from "react";
// eslint-disable-next-line
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import CKEditorInspector from "@ckeditor/ckeditor5-inspector";

const Content: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(1);

  const toggleAccordion = (index: number) => {
    setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <div className="space-y-2">
      <div className="rounded-[10px] border-[1px] border-gray-300 bg-white px-5 font-dm text-[14px] font-semibold shadow-sm shadow-[#003EFF1A] dark:border-[#191A1F] dark:bg-[#13151E] dark:text-[#fff]">
        <div
          className="flex h-[45px] cursor-pointer items-center justify-between"
          onClick={() => toggleAccordion(1)}
        >
          <span className="text-[16px] font-semibold text-[#1B254B] dark:text-[#fff]">
            Content
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
            <div className="w-full mb-5">
              <CKEditor
                editor={ClassicEditor}
                data="<p></ul>"
                onReady={(editor) => {
                  CKEditorInspector.attach(editor);
                }}
                onChange={(event, editor) => {
                  const data = editor.getData();
                  // Use 'data' as needed
                }}
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Content;
