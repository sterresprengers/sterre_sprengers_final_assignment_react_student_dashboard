import React from "react"
import { Link } from "react-router-dom"

function TableItem({dataRow, filterNameCheckbox, handleOnClick }) {
    const url = dataRow.name

    return (
        <tr>
            <td><input 
                    type="checkbox" 
                    value={dataRow.name} 
                    onChange={filterNameCheckbox}
                    checked={dataRow.checked}
                />
            </td>
            <td><Link to={dataRow.name}><button onClick={handleOnClick} value={dataRow.name}>{dataRow.name}</button></Link></td>
            <td>{dataRow.assignment}</td>
            <td>{dataRow.difficulty}</td>
            <td>{dataRow.valuation}</td>
        </tr>
    )
}

export default TableItem