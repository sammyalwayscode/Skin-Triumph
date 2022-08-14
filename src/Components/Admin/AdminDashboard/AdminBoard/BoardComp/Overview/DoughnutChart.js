import React from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";

const DoughnutChart = () => {
  ChartJS.register(ArcElement, Tooltip, Legend);
  const data = {
    // labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
    labels: ["Income", "Expenses"],
    datasets: [
      {
        label: "# of Votes",
        data: [7923021, 4263990],
        backgroundColor: [
          "#ffb703",
          "#5fa8d3",
          //   "rgba(255, 99, 132, 0.2)",
          //   "rgba(54, 162, 235, 0.2)",
          //   "rgba(255, 206, 86, 0.2)",
          //   "rgba(75, 192, 192, 0.2)",
          //   "rgba(153, 102, 255, 0.2)",
          //   "rgba(255, 159, 64, 0.2)",
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          //   "rgba(255, 206, 86, 1)",
          //   "rgba(75, 192, 192, 1)",
          //   "rgba(153, 102, 255, 1)",
          //   "rgba(255, 159, 64, 1)",
        ],
        borderWidth: 1,
      },
    ],
  };
  return (
    <div>
      <Doughnut data={data} />
    </div>
  );
};

export default DoughnutChart;
