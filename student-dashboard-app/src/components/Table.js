import React from "react";
import TableItem from "./TableItem";

function Table({
  data,
  filterDifficulty,
  filterValuation,
  filterNameCheckbox,
  handleNameRoute,
}) {
  const setTable = data.map((dataRow) => {
    if (dataRow.filter === true) {
      return (
        <TableItem
          key={dataRow.id}
          dataRow={dataRow}
          filterNameCheckbox={filterNameCheckbox}
          handleOnClick={handleNameRoute}
        />
      );
    } else {
      return;
    }
  });

  return (
    <table className="table-wrapper">
      <thead className="table-header">
        <tr className="table-header-text">
          <th>Select</th>
          <th>Name</th>
          <th>Assignment</th>
          <th className="filter-column">
            <select
              id="difficulty-filter"
              className="filter-selectbox"
              onChange={filterDifficulty}
            >
              <option value="">Difficulty</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
            </select>
          </th>
          <th className="filter-column">
            <select
              id="valuation-filter"
              className="filter-selectbox"
              onChange={filterValuation}
            >
              <option value="">Valuation</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
            </select>
          </th>
        </tr>
      </thead>
      <tbody>{setTable}</tbody>
    </table>
  );
}
export default Table;
