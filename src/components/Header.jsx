import React from 'react'
import './Header.css'
import logo  from '../assets/logo.svg'
import logo1  from '../assets/logo1.svg'



export default function Header() {
  return (
    <header>
        <div className="container">
        <div className="header-parent">
            <div className="header-left">
                <img src={logo} alt="" />
            </div>
            <div className="header-center">
                <a href="">Home</a>
                <a href="">Contact</a>
                <a href="">About</a>
                <a href="">Sign Up</a>
            </div>
            <div className="header-right">
                <input type="text" placeholder='What are you looking for?' />
                <img src={logo1} alt="" />
            </div>
        </div>
        </div>
    </header>
  )
}
