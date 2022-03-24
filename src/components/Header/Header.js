import React from 'react';
import './Header.css'

const Header = () => {
    return (
        <nav>
            <div className="nav-container">
                <h2>Meal DB</h2>
                <div>
                    <a href="/home">Home</a>
                    <a href="/orders">Orders</a>
                    <a href="/about">About</a>
                </div>
            </div>
        </nav>
    );
};

export default Header;