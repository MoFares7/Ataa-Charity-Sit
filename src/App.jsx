import React from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import HomePage from "./components/Body/HomePage/HomePage";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import MainRoutes from "./Routes/Routs";

function App() {
  return (
    <div className="App">
      <MainRoutes />
    </div>
  );
}

export default App;
