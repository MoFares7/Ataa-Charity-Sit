import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import AppleApi from "../../../Services/NewsApi/AppleApi";
import CardLeft from "./CardLeft";
import CradNews from "./CardNews";
import CardList from "./CardType";
import CardType from "./CardType";
import "./css/HomePage.css"; import { css } from '@emotion/react';
import { BeatLoader } from 'react-spinners';


export default function HomePage() {
        const [articles, setArticles] = useState([]);
        const [isLoading, setIsLoading] = useState(true);

        useEffect(() => {
                setIsLoading(true);
                AppleApi()
                        .then(json => {
                                setArticles(json.articles);
                                setIsLoading(false);
                        })
                        .catch(error => console.log(error));
        }, [])

        return (
                <div className="main-back-home">
                        <div className="Show-FirstSection">
                                <CardLeft />
                                <div className="Show-CardType">
                                        {isLoading ? <div className="spinner"></div> : <CardList articles={articles} />} {
                                        }
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