import React, { useState, useEffect, useRef } from 'react';
import './css/Header.css';
import { FiMenu } from 'react-icons/fi'

import { Link, useNavigate } from 'react-router-dom';

export default function Header() {

        const navigation = useNavigate();

        const navigateToSignUp = () => {

                navigation("./SignUp");
        };
        const [isMenuOpen, setIsMenuOpen] = useState(false);
        const menuRef = useRef(null);

        function handleMenuClick() {
                setIsMenuOpen(!isMenuOpen);
        }

        function handleOutsideClick(event) {
                if (menuRef.current && !menuRef.current.contains(event.target)) {
                        setIsMenuOpen(false);
                }
        }

        useEffect(() => {
                document.addEventListener('mousedown', handleOutsideClick);
                return () => {
                        document.removeEventListener('mousedown', handleOutsideClick);
                };
        }, []);

        return (
                <nav className='navbar'>
                        <div className='logo' >

                                <div className="overly">
                                        <h1 className="h1-home">Change is the end result of all true news.</h1>
                                        <p className="h3-home">Like what you are news</p>
                                        <p className="h3-home2">Get started today</p>

                                        <button className='button-login' onClick={navigateToSignUp}>GET STARTED NOW {'>'}</button>
                                </div> </div>
                        <div className='link'>
                                <ul>
                                        <li><Link to="/" className='link'> Home </Link></li>
                                        <li><Link to='/SignUp' className='link'>About</Link></li>
                                        <li>Contact</li>
                                </ul>

                        </div>
                        <div className='menus'>
                                <button className="navbar-toggle" onClick={handleMenuClick}>
                                        <FiMenu />
                                </button>
                                <ul className={`navbar-menu ${isMenuOpen ? 'navbar-menu--open' : ''}`} ref={menuRef}>
                                        <li><Link to="/" className='link'> Home </Link></li>
                                        <li><Link to='/SignUp' className='link'>About</Link></li>
                                        <li>Contact</li>
                                </ul>
                        </div>
                </nav>

        );
}

