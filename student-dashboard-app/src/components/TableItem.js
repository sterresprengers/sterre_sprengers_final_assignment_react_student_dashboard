import React from "react";
import { Link } from "react-router-dom";

function TableItem({ dataRow, filterNameCheckbox, handleOnClick }) {
  return (
    <tr className="table-data-row">
      <td>
        <input
          type="checkbox"
          className="table-data-checkbox"
          value={dataRow.name}
          onChange={filterNameCheckbox}
          checked={dataRow.checked}
        />
      </td>
      <td>
        <Link to={dataRow.name}>
          <button
            className="table-data-name-button"
            onClick={handleOnClick}
            value={dataRow.name}
          >
            {dataRow.name}
          </button>
        </Link>
      </td>
      <td className="table-data-assignment">{dataRow.assignment}</td>
      <td className="table-data-rating">{dataRow.difficulty}</td>
      <td className="table-data-rating">{dataRow.valuation}</td>
    </tr>
  );
}
export default TableItem;
