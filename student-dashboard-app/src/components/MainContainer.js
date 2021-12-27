import React, { useState, useEffect} from "react"
import { csv } from "d3"
import Chart from "./Chart"
import Table from "./Table"

// string-values to numbers + adding id and filter 
const row = d => {
    d.difficulty = +d.difficulty
    d.valuation = +d.valuation
    d.id = d.name+d.assignment
    d.filter = true
    return d;
}

function MainContainer() {
    const [wincData, setData] = useState([]);
    useEffect(() => {csv('data.csv', row).then(setData)}, []);

    function filterDifficulty(e) {
        //resets value, but of both select-boxes...
        const defaultFilter = document.querySelector("#valuation-filter")
        console.log("valuation-filter", defaultFilter)
        defaultFilter.value = ""

        const selectedFilter = e.target.value
        // console.log("filterDifficulty was activated with", selectedFilter)
        setData(() => wincData.map(data => {
            if (selectedFilter == "") {
                return {
                    name: data.name,
                    assignment: data.assignment,
                    difficulty: data.difficulty,
                    valuation: data.valuation,
                    id: data.id,
                    filter: true
                }
            }
            else if (selectedFilter == data.difficulty) {
                return {
                    name: data.name,
                    assignment: data.assignment,
                    difficulty: data.difficulty,
                    valuation: data.valuation,
                    id: data.id,
                    filter: true
                }
            } else {
                return {
                    name: data.name,
                    assignment: data.assignment,
                    difficulty: data.difficulty,
                    valuation: data.valuation,
                    id: data.id,
                    filter: false
                }
            }
        })
        )
    }


    //works but only once, because wincData gets overwritten with new array
    // function filterDifficulty(e) {
    //     const selectedFilter = e.target.value
    //     console.log("filteredDifficulty activated with", selectedFilter)
    //     setData(() => wincData.filter(data => {
    //         if (selectedFilter == data.difficulty) {
    //             return data
    //         } else {
    //             console.log("not selected")
    //         }
    //     })
    //     )
    //     console.log("wincData", wincData)
    // }

    function filterValuation(e) {
        const selectedFilter = e.target.value
        // console.log("filterValuation was activated with", selectedFilter)
        setData(() => wincData.map(data => {
            if (selectedFilter == "") {
                return {
                    name: data.name,
                    assignment: data.assignment,
                    difficulty: data.difficulty,
                    valuation: data.valuation,
                    id: data.id,
                    filter: true
                }
            }
            else if (selectedFilter == data.valuation) {
                return {
                    name: data.name,
                    assignment: data.assignment,
                    difficulty: data.difficulty,
                    valuation: data.valuation,
                    id: data.id,
                    filter: true
                }
            } else {
                return {
                    name: data.name,
                    assignment: data.assignment,
                    difficulty: data.difficulty,
                    valuation: data.valuation,
                    id: data.id,
                    filter: false
                }
            }
        })
        )
    }

    return (
        <div>
            <h1>hello world</h1>
            <Chart data={wincData} />
            <Table 
                data={wincData} 
                filterDifficulty={filterDifficulty} 
                filterValuation={filterValuation}
            />
        </div>
    )
}

export default MainContainer