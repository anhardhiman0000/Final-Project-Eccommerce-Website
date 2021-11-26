import React from 'react';
import { useEffect } from "react";
import { useSelector, useDispatch } from 'react-redux'
import ProductListDetails from './ProductListDetails'
import { fetchProducts } from '../action/ProductAction'

function ProductList() {

    const dispatch = useDispatch();
    // const loading = useSelector(state => state.ProductReducer.loading)
    const products = useSelector(state => state.ProductReducer.products);

    useEffect(() => {
        dispatch(fetchProducts())
        console.log("Product is:", products)
    }, []);

    //if (!loading) return <div> No Products or Cant fetch from server </div>
    console.log("Product is:", products)
    return (
        <div>
            {
                products.length > 0 && <div>
                    <div>
                        {products.map(p => <ProductListDetails key={p.id} product={p} />)}
                    </div>
                </div>
            }
        </div>
    )
}
export default ProductList;