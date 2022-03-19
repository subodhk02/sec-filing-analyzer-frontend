import React from "react";
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from "chart.js";
import { Bar } from "react-chartjs-2";
// import faker from "faker";

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

export function GraphV3({ graphData }) {
    console.log(graphData);
    const options = {
        responsive: true,
        plugins: {
            legend: {
                position: "top",
            },
            title: {
                display: true,
                text: "Revenue Data",
            },
        },
    };
    console.log("rawData", graphData);
    const labels = graphData.map((d) => new Date(d.timestamp).getFullYear());

    const data = {
        labels,
        datasets: [
            {
                label: "Revenue in $",
                data: graphData.map((d) => d.revenue),
                backgroundColor: "rgba(255, 99, 132, 0.5)",
            },
        ],
    };

    return <Bar options={options} data={data} />;
}
