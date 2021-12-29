import React, { useState, useEffect} from "react"
import { csv } from "d3"
import Chart from "./Chart"
import Table from "./Table"

function MainContainer() {
    // string-values to numbers + adding id and filter 
    const row = d => {
    d.difficulty = +d.difficulty
    d.valuation = +d.valuation
    d.id = d.name+d.assignment
    d.filter = true
    d.checked = false
    return d
    }

    const [wincData, setData] = useState([]);
    useEffect(() => {csv('data.csv', row).then(setData)}, []);

    function filterNameCheckbox(e) {
        const selectedCheckbox = e.target.value
        console.log("checkbox was changed with", selectedCheckbox)
        setData(() => wincData.map(data => {
            if (selectedCheckbox == data.name && data.checked === false) {
                return {
                    name: data.name,
                    assignment: data.assignment,
                    difficulty: data.difficulty,
                    valuation: data.valuation,
                    id: data.id,
                    filter: data.filter,
                    checked: true
                }
            } else if (selectedCheckbox == data.name && data.checked === true) {
                return {
                    name: data.name,
                    assignment: data.assignment,
                    difficulty: data.difficulty,
                    valuation: data.valuation,
                    id: data.id,
                    filter: data.filter,
                    checked: false
                }
            } else if (selectedCheckbox !== data.name && data.checked === true) {
                return {
                    name: data.name,
                    assignment: data.assignment,
                    difficulty: data.difficulty,
                    valuation: data.valuation,
                    id: data.id,
                    filter: data.filter,
                    checked: true
                }
            } else {
                return {
                    name: data.name,
                    assignment: data.assignment,
                    difficulty: data.difficulty,
                    valuation: data.valuation,
                    id: data.id,
                    filter: data.filter,
                    checked: false
                }
            }
        }))
    }

    function filterDifficulty(e) {
        const defaultFilter = document.querySelector("#valuation-filter")
        defaultFilter.value = ""
        const selectedFilter = e.target.value
        setData(() => wincData.map(data => {
            if (selectedFilter == "") {
                return {
                    name: data.name,
                    assignment: data.assignment,
                    difficulty: data.difficulty,
                    valuation: data.valuation,
                    id: data.id,
                    filter: true,
                    checked: data.checked
                }
            } else if (selectedFilter == data.difficulty) {
                return {
                    name: data.name,
                    assignment: data.assignment,
                    difficulty: data.difficulty,
                    valuation: data.valuation,
                    id: data.id,
                    filter: true,
                    checked: data.checked
                }
            } else {
                return {
                    name: data.name,
                    assignment: data.assignment,
                    difficulty: data.difficulty,
                    valuation: data.valuation,
                    id: data.id,
                    filter: false,
                    checked: data.checked
                }
            }
        }))
    }

    function filterValuation(e) {
        const defaultFilter = document.querySelector("#difficulty-filter")
        defaultFilter.value = ""
        const selectedFilter = e.target.value
        setData(() => wincData.map(data => {
            if (selectedFilter == "") {
                return {
                    name: data.name,
                    assignment: data.assignment,
                    difficulty: data.difficulty,
                    valuation: data.valuation,
                    id: data.id,
                    filter: true,
                    checked: data.checked
                }
            } else if (selectedFilter == data.valuation) {
                return {
                    name: data.name,
                    assignment: data.assignment,
                    difficulty: data.difficulty,
                    valuation: data.valuation,
                    id: data.id,
                    filter: true,
                    checked: data.checked
                }
            } else {
                return {
                    name: data.name,
                    assignment: data.assignment,
                    difficulty: data.difficulty,
                    valuation: data.valuation,
                    id: data.id,
                    filter: false,
                    checked: data.checked
                }
            }
        }))
    }

    return (
        <div>
            <h1>Student Dashboard</h1>
            <Chart data={wincData} />
            <Table 
                data={wincData} 
                filterDifficulty={filterDifficulty} 
                filterValuation={filterValuation}
                filterNameCheckbox={filterNameCheckbox}            
            />
        </div>
    )
}

export default MainContainer