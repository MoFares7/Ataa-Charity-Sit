import React from "react";
import './Footer.css';
import phone from '../../assets/phone.svg'
import email from '../../assets/email.svg'
import git from '../../assets/git.png'

export default function Footer() {
        return (
                <div>
                        <footer className="footer">
                                <div className="container">
                                        <div className="row">
                                                <div className="col">
                                                        <p>FM NEWS</p>


                                                        <p className="quicklinks">

                                                                <p className="ph">
                                                                        <img className="Phone-icon" src={email} />
                                                                        <p className="phone-number">faresdabbas1@gmail.com</p>

                                                                </p>
                                                                <p className="ph">
                                                                        <img className="Phone-icon" src={phone} />
                                                                        <p className="phone-number">0943632624</p>
                                                                </p>
                                                                <p className="ph">
                                                                        <img className="git-icon" src={git} />
                                                                        <p className="phone-number">MoFares7</p>
                                                                </p>

                                                        </p>

                                                </div>


                                        </div>
                                        <div className="col2">
                                                <h2>COMPANY</h2>
                                                <p>Apple</p>
                                                <p>Tesla</p>
                                                <p>BMV</p>
                                                <p>Volvo</p>
                                        </div>
                                        <div className="col3">
                                                <h2>SUPPORT</h2>
                                                <p>Apple</p>
                                                <p>Tesla</p>
                                                <p>BMV</p>
                                                <p>Volvo</p>
                                        </div>
                                        <div className="col4">
                                                <h2>COMMUNITY</h2>
                                                <p>Apple</p>
                                                <p>Tesla</p>
                                                <p>BMV</p>
                                                <p>Volvo</p>
                                        </div>
                                </div>
                        </footer>
                </div>
        );
}

