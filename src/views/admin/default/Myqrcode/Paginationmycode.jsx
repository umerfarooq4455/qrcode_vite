import React from "react";
import ReactPaginate from "react-paginate";

function Paginationmycode({ currentPage, selectPageHandler, data }) {
  return (
    <>
      <span
        onClick={() => selectPageHandler(currentPage - 1)}
        className={currentPage > 1 ? "" : "pagination__disable"}
      >
        ◀
      </span>

      {[...Array(data.length / 10)].map((_, i) => {
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
        className={currentPage < data.length / 10 ? "" : "pagination__disable"}
      >
        ▶
      </span>
    </>
  );
}

export default Paginationmycode;
