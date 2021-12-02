import React, { Component } from "react";
import { useState } from "react";
import { Line } from "react-chartjs-2";
import "./Prediction.css";
import { Chart } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";
import backg from "../bg.jpg";


function Prediction({ data }) {

  const time = data.hourly.time.map((time) => {
      return time.replace("T", " ");

  });

  //Initialization of stat variables for hourly chart representation

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

  //Function that will change representation according selection by user

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
  };

  //chart details and configuration

  const chartDetails = {
    labels: chart.label,
    datasets: [
      {
        label: chart.title,
        fill: false,
        lineTension: 0.1,
        backgroundColor: "rgba(255,255,255,1)",
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

  const options = {

    maintainAspectRatio:false,
    scales: {
      x: {
          ticks: {
              font: {
                  size: 18,
              }
          }
      },
      y: {
        ticks: {
            font: {
                size: 18,
            }
        }
    }
  },
    plugins: {
      legend: {
        labels: {
          font: {
            size: 20,
          },
        },
      },
    },

  };

  function changeMyChart(chartName) {
    setSelected(chartName);
    setMyChart(chartName);
  }


  const titles = [
    "Temperature",
    "Humidity",
    "Windspeed",
    "Precipitation",
    "Soil temperature",
  ];

  return (

    <div class="bg" style={{ backgroundImage:`url(${backg})`}}>
    <div>
      <div className="container">
        <p className="card prediction-title">7-days Weather Prediction</p>
        <div className="flex-container">
          <>
            {titles.map((tempTitle) => {
              if (tempTitle == selected) {
                return (
                  <p key={tempTitle} className="selected-chart"onClick={() => changeMyChart(tempTitle)}>
                    <b>{tempTitle}</b>
                  </p>
                );
              } else {
                return <p key={tempTitle} className="normal-chart" onClick={() => changeMyChart(tempTitle)}>{tempTitle}</p>;
              }
            })}
          </>
        </div>
        
        <div className="chartcard">
          <div className="chartbox">
                  <Line className="chart" data={chartDetails} options={options} />
          </div>
        </div> 
         
        
        
      </div>
    </div>
    </div>
  );
}

export default Prediction;
