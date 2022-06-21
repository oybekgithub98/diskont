import React from 'react';
import ProductItem from '../productItem/ProductItem';

import './Product.css';

const Product = ({ title = "Популярные товары" , data}) => {
    return (
        <div className='product_wrapper'>
            <h1>{title}</h1>
            <ProductItem data={data} />
        </div>
    )
}

export default Product;