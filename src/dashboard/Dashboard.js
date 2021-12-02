import "./Dashboard.css";
import "../index.css";
import { useState } from "react";
import l_temperature from "../temperature.png";
import l_wind from "../wind.png";
import l_soil from "../soil.png";
import l_precipitation from "../precipitation.png";
import l_humidity from "../humidity.png";
import { Line } from "react-chartjs-2";
import { Chart } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";
import WeatherTiles from "./weathertiles/WeatherTiles";

//API has different code for different weateher type, so assigning values to related weather type

function Dashboard({ data }) {
  function getWeather(weathercode) {
    if (weathercode === 0) {
      return "Clear Sky";
    } else if (weathercode === 1) {
      return "Mainly Clear";
    } else if (weathercode === 2) {
      return "Partly Cloudy";
    } else if (weathercode === 3) {
      return "Overcast";
    } else if (weathercode === 45) {
      return "Fog";
    } else if (weathercode === 48) {
      return "Depositing rime fog";
    } else if (weathercode === 51) {
      return "Light Drizzle";
    } else if (weathercode === 53) {
      return "Dense Drizzle";
    } else if (weathercode === 55) {
      return "Dense Drizzle";
    } else if (weathercode === 56) {
      return "Light Freezing Drizzle";
    } else if (weathercode === 57) {
      return "Dense Freezing Drizzle";
    } else if (weathercode === 61) {
      return "Slight Rain";
    } else if (weathercode === 63) {
      return "Moderate Rain";
    } else if (weathercode === 65) {
      return "Heavy Rain";
    } else if (weathercode === 66) {
      return "Light Freezing Rain";
    } else if (weathercode === 67) {
      return "Heavy Freezing Rain";
    } else if (weathercode === 71) {
      return "Slight Snow Fall";
    } else if (weathercode === 73) {
      return "Moderate Snow Fall";
    } else if (weathercode === 75) {
      return "Heavy Snow Fall";
    } else if (weathercode === 77) {
      return "Snow Grains";
    } else if (weathercode === 80) {
      return "Slight Rain Showers";
    } else if (weathercode === 81) {
      return "Moderate Rain Showers";
    } else if (weathercode === 82) {
      return "Heavy Rain Showers";
    } else if (weathercode === 85) {
      return "Slight Snow Showers";
    } else if (weathercode === 86) {
      return "Heavy Snow Showers";
    } else if (weathercode === 95) {
      return "Slight Thunderstorm";
    } else if (weathercode === 96) {
      return "Slight Hail Thunderstorm";
    } else if (weathercode === 99) {
      return "Heavy Hail Thunderstorm";
    }
  }

  const cityName = "Portland, Oregon";
  const date = data.daily.time[0];
  const weather = getWeather(data.daily.weathercode[0]);
  const max_temp = data.daily.temperature_2m_max[0];
  const min_temp = data.daily.temperature_2m_min[0];
  const temp_unit = data.hourly_units.temperature_2m;
  const soil_temp_unit = data.hourly_units.soil_temperature_0cm;
  const windspeed_unit = data.hourly_units.windspeed_10m;
  const precipitation_unit = data.hourly_units.precipitation;
  const humidity_unit = data.hourly_units.relativehumidity_2m;

  const tempTime = data.hourly.time.map((time) => {
    // return time.replace("T", " ");
    return time.split("T").pop();
  });

  const tempTemperature = data.hourly.temperature_2m;
  const tempHumidity = data.hourly.relativehumidity_2m;
  const tempWindspeed = data.hourly.windspeed_10m;
  const tempPrecipitation = data.hourly.precipitation;
  const tempSoiltemperature = data.hourly.soil_temperature_0cm;

  //Intitialization of an array that takes first 24 entries from the API

  const time = tempTime.slice(0, 24);
  const temperature = tempTemperature.slice(0, 24);
  const humidity = tempHumidity.slice(0, 24);
  const windspeed = tempWindspeed.slice(0, 24);
  const precipitation = tempPrecipitation.slice(0, 24);
  const soiltemperature = tempSoiltemperature.slice(0, 24);

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
  };

  //Chart details and configuration

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
    scales: {
      x: {
        ticks: {
          font: {
            size: 18,
          },
        },
      },
      y: {
        ticks: {
          font: {
            size: 18,
          },
        },
      },
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

   //intitialization of function that is called when the chart stat is changed with Onclick

  function changeMyChart(chartName) {
    console.log("change my chart is called");

    setSelected(chartName);
    setMyChart(chartName);
  }

  const titles = [
    {
      id: 1,
      title: "Temperature",
      value: temperature[0] + temp_unit,
      img: l_temperature,
    },
    {
      id: 2,
      title: "Humidity",
      value: humidity[0] + humidity_unit,
      img: l_humidity,
    },
    {
      id: 3,
      title: "Windspeed",
      value: windspeed[0] + windspeed_unit,
      img: l_wind,
    },
    {
      id: 4,
      title: "Precipitation",
      value: precipitation[0] + precipitation_unit,
      img: l_precipitation,
    },
    {
      id: 5,
      title: "Soil temperature",
      value: soiltemperature[0] + soil_temp_unit,
      img: l_soil,
    },
  ];

  return (
    <div>
      <div className="container">
        <div className="dashboard-flex-container">
          
            <div className="card weather-details">
              <p className="text city-name">{cityName}</p>
              {/* <p className="text">{date}</p> */}
              <p className="text temp">Temperature: </p>
              <p className="text title">Record Highest- Record Lowest </p>
              <p className="text temperature">{max_temp + temp_unit + " - " + min_temp + temp_unit}</p>
              <p className="text weather">{weather}</p>
            </div>
          
        </div>
        <Line className="chart" data={chartDetails} options={options} />
        <div className="dashboard-horizontal-flex-container">
          <>
            {titles.map((tempTile) => {
              return (
                <div onClick={() => changeMyChart(tempTile.title)}>
                  <WeatherTiles
                    key={tempTile.id}
                    className="weather-tile"
                    data={tempTile}
                  />
                </div>
              );
            })}
          </>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
