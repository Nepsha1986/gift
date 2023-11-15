import React from "react";
import styles from "./styles.module.scss";

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (pageNumber: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({
  currentPage,
  totalPages,
  onPageChange,
}) => {
  const renderPageNumbers = () => {
    const pageNumbers = [];

    for (let i = 1; i <= totalPages; i++) {
      pageNumbers.push(
        <li
          key={i}
          className={`${styles.pageItem} ${
            i === currentPage ? styles.pageItem_active : ""
          }`}
          onClick={() => onPageChange(i)}
        >
          {i}
        </li>,
      );
    }

    return pageNumbers;
  };

  return (
    <div>
      <ul className={styles.pagination}>{renderPageNumbers()}</ul>
    </div>
  );
};

export default Pagination;
