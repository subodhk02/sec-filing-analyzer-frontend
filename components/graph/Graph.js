import React, { Fragment } from "react";
import * as V from "victory";
import { VictoryBar, VictoryChart, VictoryAxis, VictoryStack } from "victory";
import { VictoryTooltip } from "victory-tooltip";

function Graph({ bar, graphData, area }) {
    const CustomContainerComponent = V.createContainer("zoom", "voronoi");
    const legendData = [];
    for (let i = 0; i < graphData.dataList.length; i++) {
        legendData.push({
            name: graphData.dataList[i].title,
            symbol: {
                fill: graphData.dataList[i].color,
            },
        });
    }
    console.log(legendData);
    return (
        <div style={{ overflow: "hidden", boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px", padding: "20px" }}>
            {bar && (
                <div>
                    <VictoryChart
                        padding={{ top: 40, bottom: 60, left: 55, right: 50 }}
                        domainPadding={50}
                        animate={{ duration: 500, easing: "quadInOut" }}
                        // labelComponent={<V.VictoryTooltip />}
                        containerComponent={
                            <CustomContainerComponent
                                selectionDimension="x"
                                selectionStyle={{
                                    fill: "tomato",
                                    fillOpacity: 0.5,
                                    stroke: "tomato",
                                    strokeWidth: 2,
                                }}
                                brushDimension="x"
                            />
                        }
                    >
                        <VictoryAxis
                            label={`${graphData.xLabel}`}
                            tickFormat={graphData.labelList}
                            style={{
                                axis: { stroke: "black" },
                                axisLabel: { fontSize: 10, padding: 35 },
                                grid: { stroke: "none " },
                                ticks: { stroke: "black", size: 2 },
                                tickLabels: { fontSize: 10, padding: 5 },
                            }}
                        />
                        <VictoryAxis
                            dependentAxis
                            label={`${graphData.yLabel}`}
                            tickFormat={(x) => `${x}`}
                            style={{
                                axis: { stroke: "black" },
                                axisLabel: { fontSize: 10, padding: 40 },
                                grid: { stroke: "none " },
                                ticks: { stroke: "black", size: 5 },
                                tickLabels: { fontSize: 10, padding: 5 },
                            }}
                        />
                        <V.VictoryLegend
                            x={25}
                            // y={10}
                            itemsPerRow={4}
                            centerTitle
                            orientation="horizontal"
                            gutter={20}
                            style={{ title: { fontSize: 10 } }}
                            data={legendData}
                        />
                        <VictoryStack standalone>
                            {graphData.dataList.map((barComponent, index) => {
                                return (
                                    <VictoryBar
                                        // key={`Bar_${index}`}
                                        data={barComponent.data}
                                        y="y"
                                        x="x"
                                        style={{ data: { fill: `${barComponent.color}` } }}
                                        labels={({ datum }) => `${graphData.yLabel}: ${datum.y}`}
                                        labelComponent={<V.VictoryTooltip />}
                                        dataComponent={
                                            <V.Bar tabIndex={0} ariaLabel={({ datum }) => `x: ${datum.value}`} />
                                        }
                                    />
                                );
                            })}
                        </VictoryStack>
                    </VictoryChart>
                </div>
            )}
            {area && (
                <div style={{ overflow: "hidden" }}>
                    <VictoryChart
                        padding={{ top: 40, bottom: 40, left: 55, right: 50 }}
                        responsive={true}
                        animate={{ duration: 500, easing: "quadInOut" }}
                        containerComponent={
                            <CustomContainerComponent
                                selectionDimension="x"
                                selectionStyle={{
                                    fill: "tomato",
                                    fillOpacity: 0.5,
                                    stroke: "tomato",
                                    strokeWidth: 2,
                                }}
                                brushDimension="x"
                            />
                        }
                    >
                        <VictoryAxis
                            dependentAxis
                            tickFormat={(x) => `${x}`}
                            label={`${graphData.xLabel}`}
                            style={{
                                axis: { stroke: "black" },
                                axisLabel: { fontSize: 10, padding: 35 },
                                grid: { stroke: "none " },
                                ticks: { stroke: "black", size: 5 },
                                tickLabels: { fontSize: 7, padding: 5 },
                            }}
                        />
                        <VictoryAxis
                            label={`${graphData.yLabel}`}
                            style={{
                                axis: { stroke: "black" },
                                axisLabel: { fontSize: 10, padding: 30 },
                                grid: { stroke: "none " },
                                ticks: { stroke: "black", size: 5 },
                                tickLabels: { fontSize: 10, padding: 5 },
                            }}
                        />
                        <V.VictoryLegend
                            x={25}
                            standalone
                            centerTitle
                            orientation="horizontal"
                            gutter={20}
                            style={{ title: { fontSize: 7 }, data: { fontSize: 1 } }}
                            data={legendData}
                        />
                        {graphData.dataList.map((areaComponent, index) => {
                            console.log(areaComponent);
                            return (
                                <V.VictoryArea
                                    standalone
                                    // style={{ data: { fill: ({ active }) => (active ? "tomato" : "gray") }, overflow: "hidden" }}
                                    style={{ data: { fill: `${areaComponent.color}` }, overflow: "hidden" }}
                                    data={areaComponent.data}
                                    interpolation="natural"
                                    animate={{
                                        duration: 2000,
                                        onLoad: { duration: 1000 },
                                    }}
                                    labels={({ datum }) =>
                                        `(${graphData.xLabel} : ${datum.x}, ${graphData.yLabel}:${datum.y})`
                                    }
                                    labelComponent={<VictoryTooltip />}
                                />
                            );
                        })}
                    </VictoryChart>
                </div>
            )}
        </div>
    );
}

export default Graph;
