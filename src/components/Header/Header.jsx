import React from 'react'
import "./Header.css"
import q from "../../assets/ataa.png"
import { Link } from "react-router-dom";

export default function Header() {
        return (
                <div className='nav'>
                        <nav>
                                <div className='main-nav'>
                                        <div className='card-info-nav'>
                                                <img className='image-nav' src={q} />
                                                <h4 className='title-nav'>Ataa Charity</h4>
                                        </div>
                                        <div className="option--nav">
                                                <Link className='a' to="/">Home</Link>
                                                <Link className='a' to="/about">About</Link>
                                                <Link className='a' to="/signupPage">Auth</Link>

                                        </div>  </div>
                        </nav>



                </div >
        )
}
