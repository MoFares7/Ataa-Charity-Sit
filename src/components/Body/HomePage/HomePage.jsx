import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import AppleApi from "../../../Services/NewsApi/AppleApi";
import CardLeft from "./CardLeft";
import CardList from "./CardType";
import "./css/HomePage.css"; import { css } from '@emotion/react';
import LatestNewApi from "../../../Services/NewsApi/LatestNewsApi";
import CardLists from "./CardNews";

export default function HomePage() {
        const [articles, setArticles] = useState([]);
        const [articles1, setArticles1] = useState([]);
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

        useEffect(() => {

                LatestNewApi()
                        .then(json => {
                                setArticles1(json.articles);

                        })
                        .catch(error => console.log(error));
        }, [])
        const slideLeft = () => {
                var slider = document.getElementById('slider');
                slider.scrollLeft = slider.scrollLeft - 500;
        };

        const slideRight = () => {
                var slider = document.getElementById('slider');
                slider.scrollLeft = slider.scrollLeft + 500;
        };
        return (
                <div className="main-back-home">
                        <div className="Show-FirstSection">
                                <CardLeft />
                                <div className="Show-CardType">
                                        <h1>Some news</h1>
                                        <div className="Under-Point"></div>
                                        {isLoading ? <div className="spinner"></div>
                                                : <CardList articles={articles} />} {
                                        }
                                </div>

                        </div>

                        <div className="Show-News" >
                                <div className="AllButton">
                                        <h1>Latest News</h1>
                                </div>
                                <div className="Under-Point"> </div>
                                <div className="all-Card-News" >

                                        <div className="Buttons">
                                                <button className="Button" onClick={slideLeft}>{'<'}</button>

                                        </div>

                                        <div id="slider" className="all-Card-News">
                                                {isLoading ? <div className="spinner"></div>
                                                        :
                                                        <CardLists
                                                                articles1={articles1}
                                                        />
                                                }
                                        </div>
                                        <button className="Button" onClick={slideRight}>{'>'}</button>
                                </div>

                        </div>
                </div >
        )
}