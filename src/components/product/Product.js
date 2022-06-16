import React from 'react';
import { BsCart2 } from 'react-icons/bs';
import { BiHeart } from 'react-icons/bi';
import { HiOutlineSwitchHorizontal } from 'react-icons/hi';


import productImg1 from '../../assets/productImg1.png';
import productImg2 from '../../assets/productImg2.png';
import productImg3 from '../../assets/productImg3.png';
import productImg4 from '../../assets/productImg4.png';
import star1 from '../../assets/Star1.png';
import star3 from '../../assets/Star3.png';


import './Product.css';

const Product = () => {
    return (
        <div className='product'>
            <div className="product_wrapper">
                <h1>Популярные товары</h1>
                <div className="products">
                    <div className="product_item">
                        <img src={productImg1} alt="productImage" />
                        <ul>
                            <li className='collection_item'>
                                <p>16 245 000 UZS</p>
                                <span>-16%</span>
                            </li>
                            <li className='collection_item'>
                                <p>16 245 000 <sup>000</sup></p>
                                <span>UZS</span>
                            </li>
                            <li className='collection_item'>
                                <div className="star">
                                    <img src={star1} alt="star" />
                                    <img src={star1} alt="star" />
                                    <img src={star3} alt="star" />
                                    <img src={star3} alt="star" />
                                    <img src={star3} alt="star" />
                                </div>
                                <span>245</span>
                            </li>
                            <li>
                                <p>Смартфон Apple iPhone 11 128GB, черный, Slimbox</p>
                            </li>
                            <li>
                                <button>
                                    <BsCart2 className='btnCart' />
                                    В корзину
                                </button>
                                <HiOutlineSwitchHorizontal className="" />
                            </li>
                        </ul>
                        <BiHeart className='item_heart' />
                    </div>
                    <div className="product_item">
                        <img src={productImg2} alt="productImage" />
                        <ul>
                            <li className='collection_item'>
                                <p>16 245 000 UZS</p>
                                <span>-16%</span>
                            </li>
                            <li className='collection_item'>
                                <p>16 245 000 <sup>000</sup></p>
                                <span>UZS</span>
                            </li>
                            <li className='collection_item'>
                                <div className="star">
                                    <img src={star1} alt="star" />
                                    <img src={star1} alt="star" />
                                    <img src={star3} alt="star" />
                                    <img src={star3} alt="star" />
                                    <img src={star3} alt="star" />
                                </div>
                                <span>245</span>
                            </li>
                            <li>
                                <p>Смартфон Apple iPhone 11 128GB, черный, Slimbox</p>
                            </li>
                            <li>
                                <button>
                                    <BsCart2 className='btnCart' />
                                    В корзину
                                </button>
                                <HiOutlineSwitchHorizontal className="" />
                            </li>
                        </ul>
                        <BiHeart className='item_heart' />
                    </div>
                    <div className="product_item">
                        <img src={productImg3} alt="productImage" />
                        <ul>
                            <li className='collection_item'>
                                <p>16 245 000 UZS</p>
                                <span>-16%</span>
                            </li>
                            <li className='collection_item'>
                                <p>16 245 000 <sup>000</sup></p>
                                <span>UZS</span>
                            </li>
                            <li className='collection_item'>
                                <div className="star">
                                    <img src={star1} alt="star" />
                                    <img src={star1} alt="star" />
                                    <img src={star3} alt="star" />
                                    <img src={star3} alt="star" />
                                    <img src={star3} alt="star" />
                                </div>
                                <span>245</span>
                            </li>
                            <li>
                                <p>Смартфон Apple iPhone 11 128GB, черный, Slimbox</p>
                            </li>
                            <li>
                                <button>
                                    <BsCart2 className='btnCart' />
                                    В корзину
                                </button>
                                <HiOutlineSwitchHorizontal className="" />
                            </li>
                        </ul>
                        <BiHeart className='item_heart' />
                    </div>
                    <div className="product_item">
                        <img src={productImg4} alt="productImage" />
                        <ul>
                            <li className='collection_item'>
                                <p>16 245 000 UZS</p>
                                <span>-16%</span>
                            </li>
                            <li className='collection_item'>
                                <p>16 245 000 <sup>000</sup></p>
                                <span>UZS</span>
                            </li>
                            <li className='collection_item'>
                                <div className="star">
                                    <img src={star1} alt="star" />
                                    <img src={star1} alt="star" />
                                    <img src={star3} alt="star" />
                                    <img src={star3} alt="star" />
                                    <img src={star3} alt="star" />
                                </div>
                                <span>245</span>
                            </li>
                            <li>
                                <p>Смартфон Apple iPhone 11 128GB, черный, Slimbox</p>
                            </li>
                            <li>
                                <button>
                                    <BsCart2 className='btnCart' />
                                    В корзину
                                </button>
                                <HiOutlineSwitchHorizontal className="" />
                            </li>
                        </ul>
                        <button className="rekomandatsiya">Рекомендация</button>
                        <BiHeart className='item_heart' />
                    </div>
                </div>

                <h1 className='novinki' >Новинки</h1>
                <div className="products">
                    <div className="product_item">
                        <img src={productImg3} alt="productImage" />
                        <ul>
                            <li className='collection_item'>
                                <p>16 245 000 UZS</p>
                                <span>-16%</span>
                            </li>
                            <li className='collection_item'>
                                <p>16 245 000 <sup>000</sup></p>
                                <span>UZS</span>
                            </li>
                            <li className='collection_item'>
                                <div className="star">
                                    <img src={star1} alt="star" />
                                    <img src={star1} alt="star" />
                                    <img src={star3} alt="star" />
                                    <img src={star3} alt="star" />
                                    <img src={star3} alt="star" />
                                </div>
                                <span>245</span>
                            </li>
                            <li>
                                <p>Смартфон Apple iPhone 11 128GB, черный, Slimbox</p>
                            </li>
                            <li>
                                <button>
                                    <BsCart2 className='btnCart' />
                                    В корзину
                                </button>
                                <HiOutlineSwitchHorizontal className="" />
                            </li>
                        </ul>
                        <BiHeart className='item_heart' />
                    </div>
                    <div className="product_item">
                        <img src={productImg4} alt="productImage" />
                        <ul>
                            <li className='collection_item'>
                                <p>16 245 000 UZS</p>
                                <span>-16%</span>
                            </li>
                            <li className='collection_item'>
                                <p>16 245 000 <sup>000</sup></p>
                                <span>UZS</span>
                            </li>
                            <li className='collection_item'>
                                <div className="star">
                                    <img src={star1} alt="star" />
                                    <img src={star1} alt="star" />
                                    <img src={star3} alt="star" />
                                    <img src={star3} alt="star" />
                                    <img src={star3} alt="star" />
                                </div>
                                <span>245</span>
                            </li>
                            <li>
                                <p>Смартфон Apple iPhone 11 128GB, черный, Slimbox</p>
                            </li>
                            <li>
                                <button>
                                    <BsCart2 className='btnCart' />
                                    В корзину
                                </button>
                                <HiOutlineSwitchHorizontal className="" />
                            </li>
                        </ul>
                        <button className="rekomandatsiya">Рекомендация</button>
                        <BiHeart className='item_heart' />
                    </div>
                    <div className="product_item">
                        <img src={productImg1} alt="productImage" />
                        <ul>
                            <li className='collection_item'>
                                <p>16 245 000 UZS</p>
                                <span>-16%</span>
                            </li>
                            <li className='collection_item'>
                                <p>16 245 000 <sup>000</sup></p>
                                <span>UZS</span>
                            </li>
                            <li className='collection_item'>
                                <div className="star">
                                    <img src={star1} alt="star" />
                                    <img src={star1} alt="star" />
                                    <img src={star3} alt="star" />
                                    <img src={star3} alt="star" />
                                    <img src={star3} alt="star" />
                                </div>
                                <span>245</span>
                            </li>
                            <li>
                                <p>Смартфон Apple iPhone 11 128GB, черный, Slimbox</p>
                            </li>
                            <li>
                                <button>
                                    <BsCart2 className='btnCart' />
                                    В корзину
                                </button>
                                <HiOutlineSwitchHorizontal className="" />
                            </li>
                        </ul>
                        <BiHeart className='item_heart' />
                    </div>
                    <div className="product_item">
                        <img src={productImg2} alt="productImage" />
                        <ul>
                            <li className='collection_item'>
                                <p>16 245 000 UZS</p>
                                <span>-16%</span>
                            </li>
                            <li className='collection_item'>
                                <p>16 245 000 <sup>000</sup></p>
                                <span>UZS</span>
                            </li>
                            <li className='collection_item'>
                                <div className="star">
                                    <img src={star1} alt="star" />
                                    <img src={star1} alt="star" />
                                    <img src={star3} alt="star" />
                                    <img src={star3} alt="star" />
                                    <img src={star3} alt="star" />
                                </div>
                                <span>245</span>
                            </li>
                            <li>
                                <p>Смартфон Apple iPhone 11 128GB, черный, Slimbox</p>
                            </li>
                            <li>
                                <button>
                                    <BsCart2 className='btnCart' />
                                    В корзину
                                </button>
                                <HiOutlineSwitchHorizontal className="" />
                            </li>
                        </ul>
                        <BiHeart className='item_heart' />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Product;