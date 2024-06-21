import React from 'react';
import './header.css';

 const Header =()=>{
    return(
        <section className="h-wrapper">
            <div className="flexCenter paddings innerWidth h-container">
                <img src="./public/logo.png" alt="logo" width ="100" />
                <div className="h-menu flexCenter">
                    <a href="">Residencies</a>
                    <a href="">Our Value</a>
                    <a href="">Contact Us</a>
                    <a href="">Get Started</a>
                  <button class ="button"><a href="">Contact</a></button>
                </div>
            </div>

        </section>
    );
 }
 
 export default Header;
 