import React from 'react';
import Slider from 'react-slick';

import Iphone from '../../assets/iphone.png'

import './PoiskCategoriy.css';

const PoiskCategoriy = () => {
    return (
        <div className='poiskCategory'>
            <div className="poiskCategory_wrapper">
                <h1>Поиск по категориям</h1>
                <Slider
                    slidesToShow={6}
                    swipeToSlide={true}
                    focusOnSelect={true}
                >
                    <div className='item'>
                        <div className="item_img">
                            <img src={Iphone} alt="iphone" />
                        </div>
                        <p>Смартфоны, гаджеты, аксессуары</p>
                    </div>
                    <div className='item'>
                        <div className="item_img">
                            <img src={Iphone} alt="iphone" />
                        </div>
                        <p>Смартфоны, гаджеты, аксессуары</p>
                    </div>
                    <div className='item'>
                        <div className="item_img">
                            <img src={Iphone} alt="iphone" />
                        </div>
                        <p>Смартфоны, гаджеты, аксессуары</p>
                    </div>
                    <div className='item'>
                        <div className="item_img">
                            <img src={Iphone} alt="iphone" />
                        </div>
                        <p>Смартфоны, гаджеты, аксессуары</p>
                    </div>
                    <div className='item'>
                        <div className="item_img">
                            <img src={Iphone} alt="iphone" />
                        </div>
                        <p>Смартфоны, гаджеты, аксессуары</p>
                    </div>
                    <div className='item'>
                        <div className="item_img">
                            <img src={Iphone} alt="iphone" />
                        </div>
                        <p>Смартфоны, гаджеты, аксессуары</p>
                    </div>
                    <div className='item'>
                        <div className="item_img">
                            <img src={Iphone} alt="iphone" />
                        </div>
                        <p>Смартфоны, гаджеты, аксессуары</p>
                    </div>
                </Slider>
            </div>
        </div>
    )
}

export default PoiskCategoriy;