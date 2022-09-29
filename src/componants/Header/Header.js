import React from 'react';
import './Header.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faPenClip } from '@fortawesome/free-solid-svg-icons'

const Header = () => {
    return (
        <div className='header'>
            <h2 className='title'> <FontAwesomeIcon icon={faPenClip}></FontAwesomeIcon> WRITING ACTIVE CLUB</h2>
            <div>
                <a href="/home">Home</a>
                <a href="/cart">Cart</a>
                <a href="/contact_us">Contact Us</a>
                <a href="/about">About</a>
            </div>
        </div>
    );
};

export default Header;