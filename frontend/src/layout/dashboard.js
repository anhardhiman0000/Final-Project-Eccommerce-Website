import React from 'react';
import './dashboard.css';

import { Link } from 'react-router-dom';

export function Dashboard({ product }) {

    return (
        <div>
            <table >
                <tbody>
                    <tr>
                        <th className="p1">Product</th>
                        <th className="p2">Price</th>
                    </tr>
                    <hr />
                    <tr>
                        <td className="p1">{product.productname}</td>

                        <td className="p2">₹{product.price}</td>
                        <Link to='/AdminAddProduct'>
                            <td><button className="a1">Add</button></td>
                        </Link>
                        <hr />
                        <Link to={`/AdminAddProduct/${product._id}`} >
                            <td><button className="a2">Edit</button></td>
                            <hr />
                        </Link>
                        <Link to={`/AdminDeleteProduct/${product._id}`}>
                            <td><button className="a2">Delete</button></td>
                        </Link>
                        <hr />
                    </tr>
                </tbody>
            </table>
        </div>
    )
}