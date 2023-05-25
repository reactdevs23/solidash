import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";
import styles from "./BarChart.module.css";
import getGradient from "./getGratient";
import { presentation } from "../../../images/image";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  BarElement,
  Title,
  Tooltip,
  Legend
);

let options = {
  responsive: true,
  aspectRatio: false,

  animations: {
    tension: {
      duration: 1000,
      easing: "linear",
    },
  },
  plugins: {
    legend: {
      display: false,
    },
  },
  elements: {
    point: {
      radius: 0,
    },
  },
  scales: {
    x: {
      ticks: {
        color: "rgb(255 255 255 / 50%)",
        font: {
          family: '"Outfit", Verdana, Geneva, Tahoma, sans-serif',
          size: 9,
          lineHeight: "1.26",
        },
        padding: 0,
      },
      border: {
        display: false,
      },
      grid: {
        display: false,
        offset: true,
      },
      offset: true,
    },
    y: {
      ticks: {
        color: "rgb(255 255 255 / 50%)",
        font: {
          family: '"Outfit", Verdana, Geneva, Tahoma, sans-serif',
          size: 9,
          lineHeight: "1.26",
        },
        count: 6,
        padding: 10,
      },
      border: {
        display: false,
      },
      grid: {
        display: true,
        color: "rgb(255 255 255 / 6%)",
      },
    },
  },
};

let data = {
  labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
  datasets: [
    {
      label: " Inventory",
      data: [73, 113, 59, 63, 48, 73, 54],
      borderColor: "#616161",
      borderWidth: 6,
      borderRadius: 30,
      barThickness: 20,
      backgroundColor: function (context) {
        const chart = context.chart;
        const { ctx, chartArea } = chart;

        if (!chartArea) {
          // This case happens on initial chart load
          return null;
        }
        return getGradient(ctx, chartArea);
      },
    },
  ],
};

const BarChart = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.invebar}>
        <div className={styles.inveTitle}>
          <div className={styles.iconContainer}>
            <img src={presentation} alt="" />
          </div>
          <b>Inventory of Requests</b>
        </div>
        <div>
          <a href="#/" className={styles.seemore}>
            See more
          </a>
        </div>
      </div>
      <div className={styles.chartWrapper}>
        <div className={styles.inveChart}>
          <Bar options={options} data={data} />
        </div>
      </div>
    </div>
  );
};

export default BarChart;
