import React from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import About from "./components/Header/About";
import Navbar from "./components/Header/Header";
import HomePage from "./components/HomePage/HomePage";
import LoginPage from "./components/LoginPage/LoginPage";
import SignUpPage from "./components/SignUpPage/SignUpPage";

function App() {
  return (
    <div className="App">
      <BrowserRouter>

        <Navbar />

        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<About />} />
          <Route path="/loginPage" element={<LoginPage />} />
          <Route path="/signupPage" element={<SignUpPage />} />

        </Routes>


      </BrowserRouter>
    </div>
  );
}

export default App;
