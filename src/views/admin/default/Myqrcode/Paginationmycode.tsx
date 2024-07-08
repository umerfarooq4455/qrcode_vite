import React from "react";

interface PaginationProps {
  currentPage: number;
  selectPageHandler: (page: number) => void;
  data: any[]; // Replace 'any[]' with the actual type of your data array
}

const Paginationmycode: React.FC<PaginationProps> = ({
  currentPage,
  selectPageHandler,
  data,
}) => {
  return (
    <>
      <span
        onClick={() => selectPageHandler(currentPage - 1)}
        className={currentPage > 1 ? "" : "pagination__disable"}
      >
        ◀
      </span>

      {[...Array(Math.ceil(data.length / 10))].map((_, i) => {
        return (
          <span
            key={i}
            className={currentPage === i + 1 ? "" : ""}
            onClick={() => selectPageHandler(i + 1)}
          >
            {i + 1}
          </span>
        );
      })}

      <span
        onClick={() => selectPageHandler(currentPage + 1)}
        className={currentPage < Math.ceil(data.length / 10) ? "" : "pagination__disable"}
      >
        ▶
      </span>
    </>
  );
};

export default Paginationmycode;
