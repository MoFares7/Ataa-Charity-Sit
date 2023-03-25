import React from "react";
import CardLeft from "./CardLeft";
import CradNews from "./CardNews";
import CardType from "./CardType";
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
                        <div className="Show-News ">
                                <h1>Some news</h1>
                                <div className="Under-Point">

                                </div>
                                <div className="all-Card-News">
                                        <CradNews />
                                        <CradNews />
                                        <CradNews />
                                        <CradNews />
                                </div>
                        </div>
                </div>

        )
}