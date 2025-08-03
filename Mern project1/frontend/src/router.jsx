// make routes here:

import React from 'react'
import ProductComponent from './components/ProductsComponent'
import {createBrowserRouter} from 'react-router-dom';
import Layout from './components/Layout';
import AddProduct from './components/AddProducts';

const router = createBrowserRouter([
    {
        path: '/',
        element: <Layout />,
        children:[
            {
                path: '/',
                element: <ProductComponent />
            },
            {
                path: '/addproducts',
                element: <AddProduct />
            },
        ]
    },
])

export default router

