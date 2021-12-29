import React from "react"

function TableItem({dataRow}) {
    return (
        <tr>
            <td><input type="checkbox" value="checkbox" name="checkbox"/></td>
            <td>{dataRow.name}</td>
            <td>{dataRow.assignment}</td>
            <td>{dataRow.difficulty}</td>
            <td>{dataRow.valuation}</td>
        </tr>
    )
}

export default TableItem