import React from "react";
import './footer.css';

export function Footer() {
    return (
        <div className="footer">
            <div className="left">
                <h3>Quick LINKS</h3>
                <ul className="left">
                    <li>Instagram</li>
                    <li>Twitter</li>
                </ul>
            </div>

            <div id="mid"> <p>All Right Reserved</p> </div>

            <div id="right">
                <p>Contact us: 000987654321</p>
                <p>Mail us : snoppy@gmail.com</p>
            </div>
        </div>
    )
}