import React from 'react';
import { useSelector } from 'react-redux';
export const DescriptionOfProduct = () => {

    const descri = window.location.pathname.split('/');
    const id = descri[descri.length - 1];

    const finalData = useSelector(state => state.ProductReducer.products);

    console.log("Product FinalData", finalData);
    const data = finalData.filter(checkid);
    function checkid(product1) {
        return product1._id === id;
    }
    console.log("Product Filter", data);

    return (
        <div className="cartlaptop1">
            <div className="show_cart"><h3>Product Name: {data[0].productname}</h3>
                <img className="image" src="https://image.shutterstock.com/image-vector/realistic-tv-screen-modern-stylish-600w-605545907.jpg" alt="image is loading..." />
                <h3>M.R.P. =  ₹{data[0].price}</h3>
                <div><p> {data[0].description}<br />
                    <br />
                </p></div>

            </div>
        </div>
    )
}
export default DescriptionOfProduct