import React from "react";

const Filter = ({ filter, setFilter }) => {
  return (
    <div>
      <select value={filter} onChange={(e) => setFilter(e.target.value)}>
        <option value="All">Mostrar Todas</option>
        <option value="completed">Completas</option>
        <option value="incomplete">Incompletas</option>
      </select>
    </div>
  );
};

export default Filter;
