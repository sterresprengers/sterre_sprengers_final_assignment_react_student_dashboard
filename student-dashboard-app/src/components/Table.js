import React, {useState} from "react"
import TableItem from "./TableItem"

function Table({data, filterDifficulty, filterValuation}) {
    // console.log("props given to Table is", data)
    
    const setTable = data.map((dataRow) => {
        if (dataRow.filter === true) {
            // console.log("will be rendered")
            return <TableItem key={dataRow.id} dataRow={dataRow}/>
        }
        else {
            console.log("will not be rendered")
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
                        <select value="difficulty-filter" onChange={filterDifficulty}>
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