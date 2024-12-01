"use client";
import React, { useState } from "react";
const count = [1, 2, 3];
const Pagination = () => {
  const [currentPage, setCurrentPage] = useState(1);
   const [selectedOption, setSelectedOption] = useState("10");

   // Array of options for rows per page
   const rowOptions = ["10", "25", "50", "100"];

   const handleSelect = (value: string) => {
     setSelectedOption(value);
   };
  return (
    <div
      className="d-flex w-100 justify-content-end align-items-center"
      style={{ gap: "5px" }}
    >
      <div className="dropdown w-25">
        <button
          className="btn btn-secondary dropdown-toggle"
          type="button"
          id="dropdownMenuButton"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          Rows per page: {selectedOption}
        </button>
        <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton">
          {rowOptions.map((option) => (
            <li key={option}>
              <button
                className="dropdown-item"
                onClick={() => handleSelect(option)}
              >
                {option}
              </button>
            </li>
          ))}
        </ul>
      </div>

      {currentPage >= 5 && (
        <div className="pagination" onClick={() => setCurrentPage(1)}>
          {"<"}
        </div>
      )}
      {count.map((item, index) => (
        <div
          key={index}
          onClick={() => setCurrentPage(item)}
          className="pagination"
        >
          {item}
        </div>
      ))}
      {count.length - 5 > currentPage && (
        <div
          className="pagination"
          onClick={() => setCurrentPage(count.length)}
        >
          {">"}
        </div>
      )}
    </div>
  );
};

export default Pagination;
