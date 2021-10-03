import React from "react";
import { Bar } from "react-chartjs-2";

const options = {
  tooltips: { mode: "index", intersect: false },
  plugins: {
    legend: {
      display: false,
    },
  },
  scales: {
    x: {
      grid: {
        display: false,
        drawBorder: false,
      },
      ticks: { color: "#F680BC", padding: 20 },
    },
    y: {
      grid: {
        display: false,
        drawBorder: false,
      },
      ticks: { color: "#F680BC", padding: 20 },
    },
  },
};

const days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

const labels = [...Array(7)].map((_, i) => {
  const date = new Date();
  date.setDate(date.getDate() + i);
  return days[date.getDay()];
});

export default function WeatherChart({ latLng }) {
  console.log(latLng);
  return (
    <Bar
      options={options}
      data={{
        labels: labels,
        datasets: [
          {
            label: "Highs",
            data: [100, 200, 300, 234, 199, 302, 280],
            backgroundColor: "#EC9CAC",
            borderColor: "#EC9CAC",
          },
          {
            label: "Lows",
            data: [20, 80, 120, 80, 40, 90, 100],
            backgroundColor: "#9CCAF6",
            borderColor: "#9CCAF6",
          },
        ],
      }}
    />
  );
}
