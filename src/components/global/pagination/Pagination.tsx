"use client";
import { useDispatch, useSelector } from "react-redux";
import styles from "./pagination.module.scss";
import { setSeletedPage } from "@/store/slices/paginationSlice";
import { useState } from "react";

const Pagination = ({ pagination }: any) => {
  const dispatch = useDispatch();

  const currentPage = pagination?.current_page;
  const totalPages = Math.ceil(pagination?.total / pagination?.per_page);

  const [pageChunk, setPageChunk] = useState(1);

  const handlePagePrev = () => {
    if (pageChunk > 1) {
      const newPage = startPage - 1;
      setPageChunk(pageChunk - 1);

      dispatch(setSeletedPage(newPage));
    }
  };

  const handlePageNext = () => {
    if (pageChunk < totalPages / 5) {
      const newPage = startPage + 5;
      setPageChunk(pageChunk + 1);

      dispatch(setSeletedPage(newPage));
    }
  };

  const handlePageSelect = (value: any) => {
    dispatch(setSeletedPage(value));
  };

  const pageNumbers = [];

  const startPage = (pageChunk - 1) * 5 + 1;
  const endPage = Math.min(startPage + 4, totalPages);

  if (startPage > 1) {
    pageNumbers.push(
      <li key="prev" onClick={() => handlePagePrev()}>
        prev
      </li>
    );
  }

  for (let i = startPage; i <= endPage; i++) {
    const isCurrent = i == currentPage;
    pageNumbers.push(
      <li
        key={i}
        className={isCurrent ? `${styles.current_page}` : ""}
        onClick={() => handlePageSelect(i.toString())}
      >
        {i}
      </li>
    );
  }

  if (endPage < totalPages) {
    pageNumbers.push(
      <li key="next" onClick={() => handlePageNext()}>
        next
      </li>
    );
  }

  return (
    <div className={styles.wsSearchCardShow_pagination}>
      <div className={styles.wsSearchCardShow_pagination_left}>
        Showing {pagination?.from} - {pagination?.to} Records Of{" "}
        {pagination?.total}
      </div>
      <div className={styles.wsSearchCardShow_pagination_right}>
        <ul className="d-flex p-0 mb-0">{pageNumbers}</ul>
      </div>
    </div>
  );
};

export default Pagination;
