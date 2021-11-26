import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { createCart } from '../action/Action';
import { fetchProducts } from '../action/ProductAction';

export const ProductListDetails = ({ product }) => {

  const dispatch = useDispatch();
  function Show_sweet() {
    dispatch(createCart(product))
  }

  function seeData() {
    dispatch(fetchProducts());
  }

  return (
    <div className="cartlaptop1">
      <div className="show_cart"><h3>Product Name: {product.productname}</h3>
        <img className="image" src="https://image.shutterstock.com/image-vector/realistic-tv-screen-modern-stylish-600w-605545907.jpg" alt="image is loading..." />
        <h3>M.R.P. =  ₹{product.price}</h3>
        {/* <div><p> {product.description}<br />
          <br />
        </p></div> */}
        <p>
          <Link to={`/desc/${product._id}`}>
            <a className="unactive" ><i onClick={seeData} className="fa fa-plus-square" style={{ fontSize: '20px', color: 'red' }} /></a>
          </Link>

          <Link to="/cart/add" className="unactive" ><i onClick={Show_sweet} className="fa fa-cart-plus" style={{ fontSize: '30px', color: 'green' }} /></Link>
        </p>
      </div>
    </div>
  )
}
export default ProductListDetails