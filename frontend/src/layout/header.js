import React from "react";
import logo from './images/Frame1/logo.png'
import 'font-awesome/css/font-awesome.min.css';
import { Link } from "react-router-dom";
import './header.css'

export function Header() {
    return (
        <div>
            <div className="head" >
                <div className="logo"><img src={logo} alt="logo" width="80px" height="80px" border="2px solid red" margin="10px" padding="10px" /></div>
                <div className="name">Welcome to your Store</div>
                <div className="search"><input type="text" id="ser1" name="search-item" placeholder="Search..." /></div>
                <div className="search2"><a href="#"><i className="fa fa-search fa-2x ml-1" aria-hidden="true"></i></a></div>
                <Link to='/myCart'>
                    <div className="cart"><a href="#"><i className="fa fa-shopping-cart" ></i></a></div>
                </Link>
                <div className="login"><a href="Log in.html" target="iframe_a"><i className="fa fa-sign-in" ></i></a></div>
                <div className="login"><a href="Signup.html" target="iframe_a"><i className="fa">&#xf234;</i></a></div>
                <div className="login"><a href="#"><i className="fa fa-gear" ></i></a></div>
            </div>
            <ul>

                <li className="home"><a href="" >Home</a></li>
                <li className="home"> <a href="About.html" target="iframe_a">About_us</a></li>
                <li className="home"><a href="#"> Our_Services</a></li>
                <li className="home"><a href="#">Contact_us</a></li>
                <li className="home"><a href="#">Customer_Care</a></li>
            </ul>
        </div>
    )
}