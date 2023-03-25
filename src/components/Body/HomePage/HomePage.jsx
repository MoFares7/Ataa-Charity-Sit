import React from "react";
import CardLeft from "./CardLeft";
import CardType from "./CardType";
import DonationCampigen from "./CardType";
import "./css/HomePage.css";



export default function HomePage() {
        return (
                <div className="main-back-home">
                        <div className="Show-FirstSection">
                        <CardLeft />
                        <div className="Show-CardType">
                                <CardType />
                                <CardType />
                                <CardType />
                        </div>
                                   
                        </div>
                   
                </div>
        )
}