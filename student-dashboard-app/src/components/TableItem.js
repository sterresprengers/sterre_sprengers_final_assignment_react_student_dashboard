import React from "react"

function TableItem({dataRow, filterNameCheckbox }) {

    return (
        <tr>
            <td><input 
                    type="checkbox" 
                    value={dataRow.name} 
                    onChange={filterNameCheckbox}
                    checked={dataRow.checked}
                />
            </td>
            <td>{dataRow.name}</td>
            <td>{dataRow.assignment}</td>
            <td>{dataRow.difficulty}</td>
            <td>{dataRow.valuation}</td>
        </tr>
    )
}

export default TableItem