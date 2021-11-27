import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Navigation from './navigation/Navigation';
import Dashboard from './dashboard/Dashboard';
import Prediction from './prediction/Prediction';
import AboutUs from './aboutus/AboutUs';
import { BrowserRouter, Routes, Route } from "react-router-dom";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
    <Navigation />
      <Routes>
        <Route exact path="/" element={<Dashboard/>} />
        <Route path="/Prediction" element={<Prediction/>} />
        <Route path="/AboutUs" element={<AboutUs/>} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
