"use client";
import React, { useState } from "react";
const count = [1, 2, 3];
const Pagination = () => {
  const [currentPage, setCurrentPage] = useState(1);
  return (
    <div className="d-flex" style={{ gap: "5px" }}>
      {currentPage >= 5 && (
        <div className="pagination" onClick={() => setCurrentPage(1)}>
          {"<"}
        </div>
      )}
      {count.map((item, index) => (
        <>
          <div
            key={index}
            onClick={() => setCurrentPage(item)}
            className="pagination"
          >
            {item}
          </div>
        </>
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
