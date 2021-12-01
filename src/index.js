import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Navigation from "./navigation/Navigation";
import Dashboard from "./dashboard/Dashboard";
import Prediction from "./prediction/Prediction";
import AboutUs from "./aboutus/AboutUs";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import axios from "axios";

function CreateApp() {
  const latitude = "45.52345";
  const  longitude = "-122.67621";

  var url =
    "https://api.open-meteo.com/v1/forecast?latitude=" +
    latitude +
    "&longitude=" +
    longitude +
    "&hourly=temperature_2m,relativehumidity_2m,precipitation,cloudcover,windspeed_10m,soil_temperature_0cm&daily=weathercode,temperature_2m_max,temperature_2m_min&windspeed_unit=mph&timezone=America%2FLos_Angeles";

  console.log(url);

  axios.get(url).then((res) => {
    ReactDOM.render(
      <React.StrictMode>
        <BrowserRouter>
          <Navigation />
          <Routes>
            <Route path="/weatherdash" element={<Dashboard data={res.data} />} />
            <Route
              path="/Prediction"
              element={<Prediction data={res.data} />}
            />
            <Route path="/AboutUs" element={<AboutUs />} />
          </Routes>
        </BrowserRouter>
      </React.StrictMode>,
      document.getElementById("root")
    );
  });
}

CreateApp();

export default CreateApp;
