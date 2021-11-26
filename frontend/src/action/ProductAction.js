export const FETCH_PRODUCTS = "FETCH_PRODUCTS";
export const FETCH_PRODUCTS_FAILURE = "FETCH_PRODUCTS_FAILURE";
export const FETCH_PRODUCTS_SUCCESS = "FETCH_PRODUCTS_SUCCESS";

export const CREATE_PRODUCT = "CREATE_PRODUCT";
export const CREATE_PRODUCT_SUCCESS = "CREATE_PRODUCT_SUCCESS";
export const CREATE_PRODUCT_FAILURE = "CREATE_PRODUCT_FAILURE";

export const UPDATE_PRODUCT = "UPDATE_PRODUCT";
export const UPDATE_PRODUCT_SUCCESS = "UPDATE_PRODUCT_SUCCESS";
export const UPDATE_PRODUCT_FAILURE = "UPDATE_PRODUCT_FAILURE";

export const DELETE_PRODUCT = "DELETE_PRODUCT";
export const DELETE_PRODUCT_SUCCESS = "DELETE_PRODUCT_SUCCESS";
export const DELETE_PRODUCT_FAILURE = "DELETE_PRODUCT_FAILURE";

//FETCH
export const fetchProducts = () => {
    console.log("Product Action")
    return {
        type: FETCH_PRODUCTS,
    }
}

//CREATE
export const createProduct = ({ productname, price, description }) => {
    return {
        type: CREATE_PRODUCT,
        productname,
        price,
        description
    };
}

//EDIT
export const updateProduct = ({_id,price})=>{
    return{
        type:UPDATE_PRODUCT,
        _id,
        price
    };
}

//DELETE
export const deleteProduct = ({_id})=>{
    return{
        type:DELETE_PRODUCT,
        _id
    };
}

export const createProductSuccess = data => {return{ type: CREATE_PRODUCT_SUCCESS, data };}
export const createProductFailure = () => ({ type: CREATE_PRODUCT_FAILURE });

export const fetchProductsSuccess = data => ({ type: FETCH_PRODUCTS_SUCCESS, data });
export const fetchProductsFailure = () => ({ type: FETCH_PRODUCTS_FAILURE });

export const updateProductSuccess = data =>{return{type:UPDATE_PRODUCT_SUCCESS,data};}
export const updateProductFailure =() =>({type:UPDATE_PRODUCT_FAILURE});

export const deleteProductSuccess = data =>{return{type:DELETE_PRODUCT_SUCCESS,data};}
export const deleteProductFailure =() =>({type:DELETE_PRODUCT_FAILURE});
