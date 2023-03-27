import React from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import CradNews from "../components/Body/HomePage/CardNews";
import HomePage from "../components/Body/HomePage/HomePage";
import LoginPage from "../components/Body/LoginPage/LoginPage";
import SignUpPage from "../components/Body/SignUpPage/SignUpPage";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";


export default function MainRoutes() {
        return (
                <div>
                        <BrowserRouter>
                                <Header />
                                <Routes>
                                        <Route path="/" element={<HomePage />} />
                                        <Route path="/SignUp" element={<SignUpPage />} />
                                        <Route path="/Login" element={<LoginPage />} />
                                        <Route path="/Card" element={<CradNews />} />

                                </Routes>
                                <Footer />
                        </BrowserRouter>
                </div>
        )
}