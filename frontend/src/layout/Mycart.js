
import React from 'react'
import { useSelector } from 'react-redux';
import ProductListDetails from '../Product/ProductListDetails';

const MyCart = () => {
    const cartData = useSelector((state) => {

        console.log("My Cart", state.CartReducer.userproducts);

        return state.CartReducer.userproducts
    })
    console.log('Cart Data is', cartData);

    return (<div>
            {cartData.map(p => <ProductListDetails key={p.id} product={p} />)}
            </div>)
}

export default MyCart
