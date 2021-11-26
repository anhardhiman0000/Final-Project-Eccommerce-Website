import React from "react";
import { useDispatch } from 'react-redux';
import { createProduct, updateProduct } from '../action/ProductAction';
import { useState } from "react";
import { useNavigate } from "react-router";
// import ProductList2 from "./Product/Adminproductlist";

export function AdminAddProduct() {
    const [pname, setProductname] = useState('')
    const [price, setCurrentPrice] = useState('')
    const [description, setCurrentdescription] = useState('')
    const navigate = useNavigate();
    const dispatch = useDispatch();

    function submit1() {
        const hello = window.location.pathname.split('/');
        const _id = hello[hello.length - 1];
        // console.log("windowww",hello[hello.length-1]);
        const productname = pname;
        console.log("Admin Add Product", _id);

        if (_id === undefined) {
            console.log("Admin Add", _id);
            dispatch(createProduct({ productname, price, description }));
        }
        else {

            dispatch(updateProduct({ _id, productname, price, description }));

        }
    }

    function handleName(e) {
        setProductname(e.target.value);
    }
    function handlePrice(e) {
        setCurrentPrice(e.target.value);
    }
    function handledesc(e) {
        setCurrentdescription(e.target.value);
    }
    function submit2() {
        navigate('/admin');
    }
    return (
        <div>
            <label>productname</label>
            <input type='text' onChange={handleName} />
            <br />
            <br />
            <label>price</label>
            <input type='number' onChange={handlePrice} />
            <br />
            <br />
            <label>description</label>
            <input type='text' onChange={handledesc} />
            <br />
            <br />
            <button onClick={submit1}>Submit</button>
            <button onClick={submit2}>Back</button>

        </div>
    )
}