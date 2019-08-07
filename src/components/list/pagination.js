import React from "react";
import "./pagination.css";
import { PropTypes } from "prop-types";

const Pagination = ({ page, totalPages, handlePaginationclick }) => {
  return (
    <div className="Pagination">
      <button
        className="Pagination-button"
        onClick={() => handlePaginationclick("prev")}
        disabled={page <= 1}
      >
        &larr;
      </button>
      <span className="Pagination-info">
        Page <b>{page}</b> of <b>{totalPages}</b>
      </span>
      <button
        className="Pagination-button"
        onClick={() => handlePaginationclick("next")}
        disabled={page >= totalPages}
      >
        &rarr;
      </button>
    </div>
  );
};

Pagination.propTypes = {
  totalPages: PropTypes.number.isRequired,
  page: PropTypes.number.isRequired,
  handlePaginationclick: PropTypes.func.isRequired
};

export default Pagination;
