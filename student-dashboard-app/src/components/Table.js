import React, {useState} from "react"
import TableItem from "./TableItem"

function Table({data, filterDifficulty, filterValuation}) {    
    const setTable = data.map((dataRow) => {
        if (dataRow.filter === true) {
            return <TableItem key={dataRow.id} dataRow={dataRow}/>
        } else {
            return
        }
    })

    return (
        <table>
            <thead>
                <tr>
                    <th>Select</th>
                    <th>Name</th>
                    <th>Assignment</th>
                    <th>
                        <select id="difficulty-filter" onChange={filterDifficulty}>
                            <option value="">--Difficulty--</option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                        </select>
                    </th>
                    <th>
                        <select id="valuation-filter" onChange={filterValuation}>
                            <option value="">--Valuation--</option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                        </select>
                    </th>
                </tr>
            </thead>
            <tbody>
                {setTable}
            </tbody>
        </table>
    )
}
export default Table