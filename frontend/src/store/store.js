import { createStore, applyMiddleware, compose, combineReducers } from "redux";
import { ProductReducer } from "../Reducer/ProductReducer";
import { UserReducer } from "../Reducer/UserReducer"
import createSagaMiddleware from 'redux-saga';
import ProductSaga from './../saga/ProductSaga'
import UserSaga from "../saga/UserSaga";
import { CartReducer } from "../Reducer/CartReducer";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const sagaMiddleware = createSagaMiddleware();
const rootReducer = combineReducers({
    ProductReducer,
    UserReducer,
    CartReducer,
});

const store = createStore(rootReducer, composeEnhancers(applyMiddleware(sagaMiddleware)));
sagaMiddleware.run(ProductSaga);
sagaMiddleware.run(UserSaga);

export default store;
