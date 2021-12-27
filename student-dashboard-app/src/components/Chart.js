import React from "react"
import { VictoryBar, VictoryChart } from "victory"

const Chart = ({data}) => {

    return (
        <VictoryChart>
            <VictoryBar 
                data={data}
                x="assignment"
                y="difficulty"
            />
        </VictoryChart>
    )
}
export default Chart