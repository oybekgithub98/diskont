import React from 'react';
import ProductItem from '../productItem/ProductItem';
import arrowImg from '../../assets/brendBtnImg.png';

import './Product.css';

const Product = ({ title = "Популярные товары" , data}) => {
    return (
        <div className='product_wrapper'>
            <div className='product_text'>
                <h1>{title}</h1>
                <button>Смотреть все <img src={arrowImg} alt="arrowImg" /></button>
            </div>
            <ProductItem data={data} />
        </div>
    )
}

export default Product;