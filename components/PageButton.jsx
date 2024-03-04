"use client";
import { mergeClasses } from "@/app/utils/style";
import React, { useMemo, useState } from "react";

const Pagination = ({ totalCount, currentPage, setCurrentPage }) => {
  const totalPages = useMemo(() => {
    return Math.ceil(totalCount / 10);
  }, [totalCount]);

  const pages = new Array(totalPages).fill(true).map((_, index) => index);

  const goToPage = (page) => {
    setCurrentPage(page);
  };

  const goToPrevPage = () => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 1);
    }
  };

  const goToNextPage = () => {
    if (currentPage < totalPages - 1) {
      setCurrentPage(currentPage + 1);
    }
  };

  return (
    <div className="flex gap-4 justify-center">
      <button
        class="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-l"
        onClick={goToPrevPage}
      >
        Prev
      </button>
      <div className="grid place-items-center sm:hidden">
        page {currentPage + 1} of {totalPages}
      </div>
      <div className="gap-2 hidden sm:flex">
        {pages.map((pageNumber, index) => {
          return (
            <button
              key={index}
              class={mergeClasses(
                "font-semibold py-2 px-4 border rounded shadow",
                currentPage === index
                  ? "border-blue-500 bg-blue-500 hover:bg-blue-300"
                  : "bg-white hover:bg-gray-100 text-gray-800 border-gray-400"
              )}
              onClick={() => {
                goToPage(index);
              }}
            >
              {pageNumber + 1}
            </button>
          );
        })}
      </div>
      <button
        class="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-r"
        onClick={goToNextPage}
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;
