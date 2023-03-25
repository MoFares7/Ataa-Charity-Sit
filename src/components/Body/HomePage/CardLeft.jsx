import React from "react";
import computer from "../../../assets/computer.svg";
import car from "../../../assets/car.svg";
import bus from "../../../assets/bus.svg";

export default function CardLeft() {
        return (
                <div className="left-card">
                        <img className="computer-image" src={computer} />
                        <p className="lab1"> New Tecnologies</p>
                        <img className="computer-image" src={car} />
                        <p className="lab1"> all about Tesla</p>
                        <img className="computer-image" src={bus} />
                        <p className="lab1"> business in USA</p>
                </div>
        )
}