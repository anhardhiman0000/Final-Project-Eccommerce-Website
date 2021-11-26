import { call, put, takeLatest } from 'redux-saga/effects';

import {
    FETCH_PRODUCTS, fetchProductsSuccess, fetchProductsFailure, CREATE_PRODUCT, createProductSuccess, createProductFailure,
    UPDATE_PRODUCT, updateProductSuccess, updateProductFailure, DELETE_PRODUCT, deleteProductSuccess, deleteProductFailure

} from '../action/ProductAction';

import api from './ProductApi'

//GET PRODUCT
function* getProducts() {
    console.log("Get PRODUCTS Saga");
    
    try {
        const data = yield call(api.products);
        console.log("Data is", data);
        yield put(fetchProductsSuccess(data));

    } catch (error) {
        console.log("Products Fetch Error")
        yield put(fetchProductsFailure());
        console.error(error) // eslint-disable-line

    }
}

//CREATE PRODUCT
function* createProduct(action) {
    console.log("Action create Product is" + JSON.stringify(action))
    try {
        const { productname, price, description } = action;
        let { data } = yield call(api.addproduct, { productname, price, description }); //going to api
        console.log("add Product saga" + JSON.stringify(data)) //server responds
        yield put(createProductSuccess(data));  
    } catch (err) {
        yield put(createProductFailure());
        console.log("ERROR IS" + JSON.stringify(err.response.data));
        return err
    }
}


//EDIT PRODUCT
function* updateProduct(action) {
    console.log("Action update Product is" + JSON.stringify(action))
    try {
        const { _id, price } = action;
        let { data } = yield call(api.modifyproduct, { _id, price });
        console.log("update Product saga" + JSON.stringify(data));
        yield put(updateProductSuccess(data));
    } catch (err) {
        yield put(updateProductFailure());
        console.log("ERROR IS" + JSON.stringify(err.response.data));
        return err
    }
}


//DELETE PRODUCT
function* deleteProduct(action) {
    console.log("Action delete Product is" + JSON.stringify(action))
    try {
        const { _id } = action;
        let { data } = yield call(api.removeproduct, { _id });
        console.log("delete Product saga" + JSON.stringify(data));
        yield put(deleteProductSuccess(data));
    } catch (err) {
        yield put(deleteProductFailure());
        console.log("ERROR IS" + JSON.stringify(err.response.data));
        return err
    }
}

export default function* ProductSaga() {

    yield takeLatest(FETCH_PRODUCTS, getProducts);
    yield takeLatest(CREATE_PRODUCT, createProduct);
    yield takeLatest(UPDATE_PRODUCT, updateProduct);
    yield takeLatest(DELETE_PRODUCT, deleteProduct);

}