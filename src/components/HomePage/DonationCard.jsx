import React from "react";
import "./HomePage.css";

export default function DonationCampigen() {
        return (
                <div className="donation-card">
                        <img className="img-card" src="https://images.unsplash.com/photo-1679189792474-6c2796dc78ab?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=928&q=80" />
                        <div className="type-camp">
                                <h6 className="name-type-camp">Education</h6>
                     </div>
                        <h5 className="donation-name">wewe</h5>
                        <div className="don-total-money">
                                <h5 className="donation-totla-money">Totla Money</h5>
                                <h6 className="donation-totla-money">120000</h6></div>
                        <button className="donation-now">Donation Now</button>

                </div>
        )
}