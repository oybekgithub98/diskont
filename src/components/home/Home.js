import React from 'react';
import Slider from "react-slick";
import './Home.css';

import HomeImage from '../../assets/27 1.svg';
import pokupka from '../../assets/Group.png'

const Home = () => {

    return (
        <div className='home'>
            <div className="home_wrapper">
                <Slider
                    slidesToShow={1}
                    swipeToSlide={true}
                    focusOnSelect={true}
                >
                    <div className='home_slider'>
                        <div className="home_slider_left">
                            <h1>Diskont</h1>
                            <p>Ваш интернет-магазин</p>
                            <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Molestie pellentesque sodales et erat. Aliquet amet nunc diam pellentesque volutpat mi gravida purus.</span>
                        </div>
                        <div className="home_slider_right">
                            <img src={HomeImage} alt="" />
                        </div>  
                    </div>
                    <div className='home_slider'>
                        <div className="home_slider_left">
                            <h1>Diskont</h1>
                            <p>Ваш интернет-магазин</p>
                            <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Molestie pellentesque sodales et erat. Aliquet amet nunc diam pellentesque volutpat mi gravida purus.</span>
                        </div>
                        <div className="home_slider_right">
                            <img src={HomeImage} alt="homeImage" />
                        </div>  
                    </div>
                </Slider>

                <div className="home_item">
                    <div className="item">
                        <div className="item_left">
                            <img src={pokupka} alt="pokupka_image" />
                        </div>
                        <div className="item_right">
                            <h1>Покупка в рассрочку</h1>
                            <p>Удобная онлайн рассрочка на товары бытовой техники в Discont</p>
                        </div>
                    </div>
                    <div className="item">
                        <div className="item_left">
                            <img src={pokupka} alt="pokupka_image" />
                        </div>
                        <div className="item_right">
                            <h1>Бесплатная доставка</h1>
                            <p>Условия доставки товаров в Discont</p>
                        </div>
                    </div>
                    <div className="item">
                        <div className="item_left">
                            <img src={pokupka} alt="pokupka_image" />
                        </div>
                        <div className="item_right">
                            <h1>Гарантия на товары</h1>
                            <p>Узнайте всё о гарантии и возврате товара в Discont</p>
                        </div>
                    </div>
                    <div className="item">
                        <div className="item_left">
                            <img src={pokupka} alt="pokupka_image" />
                        </div>
                        <div className="item_right">
                            <h1>Помощь</h1>
                            <p>Частые вопросы</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home