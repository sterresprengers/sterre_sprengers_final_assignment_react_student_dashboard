import React from "react";
import {
  VictoryAxis,
  VictoryBar,
  VictoryChart,
  VictoryGroup,
  VictoryTheme,
  VictoryLabel,
} from "victory";

const Chart = ({ data }) => {
  const setChartData = data.filter((dataRow) => {
    if (dataRow.checked === true && dataRow.filter === true) {
      return dataRow;
    } else {
      return;
    }
  });

  return (
    <VictoryChart
      domainPadding={5}
      theme={VictoryTheme.material}
      height={300}
      width={600}
    >
      <VictoryGroup colorScale={["#DF5B57", "#3EB489"]} offset={2}>
        <VictoryBar
          data={setChartData}
          x="assignment"
          y="difficulty"
          tickValues={[1, 2, 3, 4, 5]}
        />
        <VictoryBar
          data={setChartData}
          x="assignment"
          y="valuation"
          tickValues={[1, 2, 3, 4, 5]}
        />
      </VictoryGroup>
      <VictoryAxis
        tickLabelComponent={
          <VictoryLabel style={{ fontSize: "5px" }} angle={-75} />
        }
      />
      <VictoryAxis
        dependentAxis
        tickLabelComponent={<VictoryLabel style={{ fontSize: "6px" }} />}
      />
    </VictoryChart>
  );
};
export default Chart;
