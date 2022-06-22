import React from 'react';
import Slider from "react-slick";
import './Home.css';

import HomeImage from '../../assets/home.png';
import pokupka from '../../assets/Group.png';
import vector from '../../assets/Vector.png';
import vector2 from '../../assets/Vector (2).png';
import galichka from '../../assets/galichka.png';
import PoiskCategoriy from '../poiskCategoriya/PoiskCategoriy';
import Product from '../product/Product';
import Brend from '../brend/Brend';
import BrendVideo from '../brendVideo/BrendVideo';



const Home = ({data}) => {

    const homeSlider = [
        {
            id: 1,
            homeh1: "Diskont",
            text: "Ваш интернет-магазин",
            deck: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Molestie pellentesque sodales et erat. Aliquet amet nunc diam pellentesque volutpat mi gravida purus.",
            img: HomeImage
        },
        {
            id: 2,
            homeh1: "Diskont",
            text: "Ваш интернет-магазин",
            deck: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Molestie pellentesque.",
            img: HomeImage
        },
        {
            id: 3,
            homeh1: "Diskont",
            text: "Ваш интернет-магазин",
            deck: "Lorem ipsum dolor sit amet, sodales et erat. Aliquet amet nunc diam pellentesque volutpat, mi gravida purus.",
            img: HomeImage
        },

    ]

    const homeItem = [
        {
            id: 1,
            img: pokupka,
            text: `Покупка в рассрочку`,
            desc: `Удобная онлайн рассрочка на товары бытовой техники в Discont`
        },
        {
            id: 2,
            img: vector,
            text: `Бесплатная доставка`,
            desc: `Удобная онлайн рассрочка на товары бытовой техники в Discont`
        },
        {
            id: 3,
            img: galichka,
            text: `Гарантия на товары`,
            desc: `Удобная онлайн рассрочка на товары бытовой техники в Discont`
        },
        {
            id: 4,
            img: vector2,
            text: `Помощь`,
            desc: `Удобная онлайн рассрочка на товары бытовой техники в Discont`
        }
    ]

    

    return (
        <>
            <div className='home'>
                <div className="home_wrapper">
                    <Slider
                        slidesToShow={1}
                        swipeToSlide={true}
                        focusOnSelect={true}
                        dots={true}
                    >
                        {
                            homeSlider?.map((homeSlid, index) => {
                                return (
                                    <div className='home_slider' key={index}>
                                        <div className="home_slider_left">
                                            <h1>{homeSlid.homeh1}</h1>
                                            <p>{homeSlid.text}</p>
                                            <span>{homeSlid.deck}</span>
                                        </div>
                                        <div className="home_slider_right">
                                            <img src={homeSlid.img} alt="HomeImage" />
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </Slider>

                    <div className="home_item">
                        {
                            homeItem?.map((home, index) => {
                                return (
                                    <div className="item" key={index}>
                                        <div className="item_left">
                                            <img src={home.img} alt="pokupka_image" />
                                        </div>
                                        <div className="item_right">
                                            <h1>{home.text}</h1>
                                            <p>{home.desc}</p>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </div>

            <PoiskCategoriy />
            <Product data={data} />
            <Product data={data} title="Новинки" />
            <Brend />
            <Product title="Часто бывает нужно" data={data} />
            <BrendVideo />
        </>
    )
}

export default Home