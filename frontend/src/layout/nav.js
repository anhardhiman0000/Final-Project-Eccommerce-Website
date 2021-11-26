import React from "react"
import { Link } from 'react-router-dom';
export function Nav() {
    return (
        <nav>
            <ul className="navigation">
                <li className="nav1"><Link to="/admin" >AdminDash</Link></li>
                <li className="nav1"><Link to="/admin1" >Category</Link></li>
                <li className="nav1"><Link to="/admin2" >Your Profile</Link></li>
            </ul>
        </nav>
    )
}