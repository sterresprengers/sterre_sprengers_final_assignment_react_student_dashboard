import React from "react"
import { VictoryAxis, VictoryBar, VictoryChart, VictoryGroup, VictoryTheme, VictoryLabel } from "victory"

const Chart = ({data}) => {

    const setChartData = data.filter(dataRow => {
        if (dataRow.checked === true && dataRow.filter === true) {
            console.log("Yes, let's add data to chart")
            return dataRow
        } else {
            console.log("No, shouldn't be added to chart")
            return 
        }
    })

    return (
        <VictoryChart domainPadding={5} theme={VictoryTheme.material} height={300} width={600}>
            <VictoryGroup colorScale={["brown", "gold"]} offset={2}>
                <VictoryBar
                    data={setChartData} 
                    x="assignment" 
                    y="difficulty"
                    tickValues={[1, 2, 3, 4, 5]}
                    // tickFormat={setChartData.map(
                    //     avg => avg.assignment)}
                />
                <VictoryBar 
                    data={setChartData} 
                    x="assignment" 
                    y="valuation"
                    tickValues={[1, 2, 3, 4, 5]}
                    // tickFormat={setChartData.map(avg => avg.assignment)}
                />
            </VictoryGroup>
            <VictoryAxis
                    // tickValues={[1, 2, 3, 4, 5]}
                    // tickFormat={setChartData.map(avg => avg.assignment)}
                    tickLabelComponent={<VictoryLabel style={{fontSize: '4px'}} angle={-75}/>}
            />
            <VictoryAxis dependentAxis tickLabelComponent={<VictoryLabel style={{fontSize: '5px'}} />}/>
        </VictoryChart>
    )
}
export default Chart