import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Header } from './header'
import { Nav } from './nav.js'
import { Article } from './article'
import { Footer } from './footer'
import ProductList from '../Product/Productlist'
import { useSelector } from 'react-redux'
import { Login } from './login'
import MyCart from './Mycart'
import AdminProductList from '../admin/adminProductList'
import { AdminAddProduct } from '../admin/adminAddProduct'
import { AdminDeleteProduct } from '../admin/adminDeleteProduct'
import DescriptionOfProduct from '../Description/descriptionProduct'
// import { Dashboard } from './dashboard'

export function Layout() {
    const isloggedin = useSelector(state => state.UserReducer.isloggedin);
    console.log("isloggedin", isloggedin);
    return (
        <BrowserRouter>

            <div>
                <header>
                    <Header />
                </header>

                <div className="middle">

                    <nav>
                        <Nav />
                    </nav>

                    <article>
                        <Routes>
                            <Route exact path='/' element={<ProductList />} />
                            <Route exact path='/myCart' element={<MyCart />} />
                            <Route exact path='/cart/add' element={isloggedin ?
                                <ProductList /> : <Login />} />

                            <Route exact path='/admin' element={<AdminProductList />} />
                            <Route exact path='/AdminAddProduct' element={<AdminAddProduct />} />
                            <Route exact path='/AdminAddProduct/:id' element={<AdminAddProduct />} />
                            <Route exact path='/AdminDeleteProduct/:id' element={<AdminDeleteProduct />} />
                            <Route exact path='/desc/:id' element={<DescriptionOfProduct />} />
                            {/* <Route exact path='/admin' element={<Dashboard/>} /> */}
                        </Routes>
                        <Article />
                    </article>

                </div>

                <footer>
                    <Footer />
                </footer>

            </div>

        </BrowserRouter>
    );
}