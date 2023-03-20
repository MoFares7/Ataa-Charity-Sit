import React from "react";
import DonationCampigen from "./DonationCard";
import "./HomePage.css";

export default function HomePage() {
        return (
                <div className="main-back-home">
                        <div className="home-info">
                                <img src="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" />
                                <div className="overly">
                                        <h1 className="h1-home">Great futures are built
                                                with a small charity</h1>
                                        <p className="h3-home">The World's largest social fundraising platform,
                                                optimized for your charity in a more easy way</p>

                                </div>

                        </div>
                        <div className="Main-Donation-cards">
                                <h4 className="title-camp1">Donation Campigen </h4>
                                <h4 className="more-camp"> more {'<<'} </h4>
                        </div>
                        <div className="d">
                                <DonationCampigen />
                                <DonationCampigen />
                                <DonationCampigen />
                                <DonationCampigen />
                                <DonationCampigen />
                                <DonationCampigen />
                                <DonationCampigen />

                        </div>
                        <div className="Main-Volunteer-cards">
                                <h4 className="title-camp2">Volunteer Campigen </h4>
                                <h4 className="more-camp"> more {'<<'} </h4>
                        </div>
                </div>
        )
}