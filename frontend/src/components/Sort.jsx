import React from "react";
import { FaArrowDown, FaArrowUp } from "react-icons/fa";

const Sort = ({ setSort }) => {
  return (
    <div className="sort-container">
      <span>Ordem Alfabética </span>
      <button className="icon-btn" onClick={() => setSort("Asc")}>
        <FaArrowDown />
      </button>
      <button className="icon-btn" onClick={() => setSort("Desc")}>
        <FaArrowUp />
      </button>
    </div>
  );
};

export default Sort;
