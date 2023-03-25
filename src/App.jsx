import React from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from "./components/Header/Header";
import MainRoutes from "./Routes/Routs";

function App() {
  return (
    <div className="App">
      <Header />
    </div>
  );
}

export default App;
