import React, { Component } from "react";
import { useState } from "react";
import { Line } from "react-chartjs-2";
import "./Prediction.css";
import { Chart } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";
import ChartSelector from "./chartselector/ChartSelector";

function Prediction({ data }) {
  const time = data.hourly.time.map((time) => {
    return time.replace("T", " ");
  });

  const temperature = data.hourly.temperature_2m;
  const humidity = data.hourly.relativehumidity_2m;
  const windspeed = data.hourly.windspeed_10m;
  const precipitation = data.hourly.precipitation;
  const soiltemperature = data.hourly.soil_temperature_0cm;

  const [chart, setChart] = useState({
    id: 1,
    title: "Temperature",
    label: time,
    data: temperature,
  });

  const [selected, setSelected] = useState("Temperature");
  const setMyChart = (chartName) => {
    
    console.log("this is prediction : " + chartName);

    if (chartName == "Temperature") {
      setChart({
        id: 1,
        title: "Temperature",
        label: time,
        data: temperature,
      });
    } else if (chartName == "Humidity") {
      setChart({
        id: 2,
        title: "Humidity",
        label: time,
        data: humidity,
      });
    } else if (chartName == "Windspeed") {
      setChart({
        id: 3,
        title: "Windspeed",
        label: time,
        data: windspeed,
      });
    } else if (chartName == "Precipitation") {
      setChart({
        id: 4,
        title: "Precipitation",
        label: time,
        data: precipitation,
      });
    } else if (chartName == "Soil temperature") {
      setChart({
        id: 5,
        title: "Soil temperature",
        label: time,
        data: soiltemperature,
      });
    }
  }

  const chartDetails = {
    labels: chart.label,
    datasets: [
      {
        label: "My First dataset",
        fill: false,
        lineTension: 0.1,
        backgroundColor: "rgba(75,192,192,0.4)",
        borderColor: "rgba(75,192,192,1)",
        borderCapStyle: "butt",
        borderDash: [],
        borderDashOffset: 0.0,
        borderJoinStyle: "miter",
        pointBorderColor: "rgba(75,192,192,1)",
        pointBackgroundColor: "#fff",
        pointBorderWidth: 1,
        pointHoverRadius: 5,
        pointHoverBackgroundColor: "rgba(75,192,192,1)",
        pointHoverBorderColor: "rgba(220,220,220,1)",
        pointHoverBorderWidth: 2,
        pointRadius: 1,
        pointHitRadius: 10,
        data: chart.data,
      },
    ],
  };

  function shoot(chartName) {
    setSelected(chartName);
    setMyChart( chartName);
  }

  const titles = [
    "Temperature",
    "Humidity",
    "Windspeed",
    "Precipitation",
    "Soil temperature",
  ];


  return (
    <div>
      <div className="container">
        <p className="card prediction-title">7-days Weather Prediction</p>
        <div className="flex-container">
         <>{
  titles.map((tempTitle) => {
    if (tempTitle == selected) {
       return <p onClick={() => shoot(tempTitle)}><b>{tempTitle}</b></p>;
    } else {
      return  <p onClick={() => shoot(tempTitle)}>{tempTitle}</p>;
    }
  })
}</>
        </div>
        <Line data={chartDetails} />
      </div>
    </div>
  );
}

export default Prediction;
