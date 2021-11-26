import React from 'react';
import { useEffect } from "react";
import { useSelector, useDispatch } from 'react-redux'
import { fetchProducts } from '../action/ProductAction'
import { Dashboard } from '../layout/dashboard';

function AdminProductList() {

    const dispatch = useDispatch();

    const products = useSelector(state => state.ProductReducer.products);
    useEffect(() => {

        dispatch(fetchProducts())
        console.log("Product in admin:", products)
    }, [])

    console.log("Product is:", products)
    return (

        <div>
            {
                products.length > 0 && <div>
                    <div>

                        {products.map(p => <Dashboard key={p.id} product={p} />)}

                    </div>
                </div>
            }
        </div>

    )
}
export default AdminProductList;