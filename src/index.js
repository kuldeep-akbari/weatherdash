import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Navigation from "./navigation/Navigation";
import Dashboard from "./dashboard/Dashboard";
import Prediction from "./prediction/Prediction";
import AboutUs from "./aboutus/AboutUs";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import axios from "axios";

var latitude = "45.52345";
var longitude = "-122.67621";

function abcd() {

  var url =
    'https://api.open-meteo.com/v1/forecast?latitude='
    + latitude 
    + '&longitude='
    + longitude 
    + '&hourly=temperature_2m,relativehumidity_2m,precipitation,cloudcover,windspeed_10m,soil_temperature_0cm&daily=weathercode,temperature_2m_max,temperature_2m_min&windspeed_unit=mph&timezone=America%2FLos_Angeles';

  axios.get(url).then((res) => {
    console.log(res.data);

    ReactDOM.render(
      <React.StrictMode>
        <BrowserRouter>
          <Navigation />
          <Routes>
            <Route exact path="/" element={<Dashboard />} />
            <Route path="/Prediction" element={<Prediction />} />
            <Route path="/AboutUs" element={<AboutUs />} />
          </Routes>
        </BrowserRouter>
      </React.StrictMode>,
      document.getElementById("root")
    );
  });
}

abcd();
