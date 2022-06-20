import React from 'react';
import ProductItem from '../productItem/ProductItem';

import './Product.css';

const Product = () => {
    return (
        <div className='product'>
            <div className="product_wrapper">
                <h1>Популярные товары</h1>
                <ProductItem />
                <h1 className='novinki' >Новинки</h1>
                <ProductItem />
            </div>
        </div>
    )
}

export default Product;