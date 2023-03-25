import React, { useState, useEffect, useRef } from 'react';
import './css/Header.css';
import { FiMenu } from 'react-icons/fi'
import  m  from '../../assets/logo.svg'

export default function Header() {

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
                                                <h1 className="h1-home">Great futures are built
                                                        with a small charity</h1>
                                                <p className="h3-home">The World's largest social fundraising platform,
                                                        optimized for your charity in a more easy way</p>

                                       

                                </div>
                              
                        </div>
                        <div className='link'>
                                <ul>
                                        <li>Home</li>
                                        <li>About</li>
                                        <li>Contact</li>
                                </ul>

                        </div>
                        <div className='menus'>
                                <button className="navbar-toggle" onClick={handleMenuClick}>
                                        <FiMenu />
                                </button>
                                <ul className={`navbar-menu ${isMenuOpen ? 'navbar-menu--open' : ''}`} ref={menuRef}>
                                        <li>Home</li>
                                        <li>About</li>
                                        <li>Contact</li>
                                </ul>
                        </div>
                </nav>

        );
}

