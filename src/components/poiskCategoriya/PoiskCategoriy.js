import React from 'react';
import Slider from 'react-slick';

import Iphone from '../../assets/iphone.png';
import Notebook from '../../assets/notebook.png';
import Televizor from '../../assets/televizor.png';
import Texnika from '../../assets/texnika.png';
import Mebel from '../../assets/mebel.png';
import SportImage from '../../assets/sportImage.png';

import './PoiskCategoriy.css';

const PoiskCategoriy = () => {

    const categoryCarouselImg = [
        {
            id: 1,
            img: Iphone,
            text: "Смартфоны, гаджеты, аксессуары"
        },
        {
            id: 2,
            img: Notebook,
            text: "Ноутбуки, принтеры, компьютеры"
        },
        {
            id: 3,
            img: Televizor,
            text: "Телевизоры, фото-видео и аудио"
        },
        {
            id: 4,
            img: Texnika,
            text: "Бытовая техника"
        },
        {
            id: 5,
            img: Mebel,
            text: "Мебель"
        },
        {
            id: 6,
            img: SportImage,
            text: "Спорт товары"
        },
        {
            id: 7,
            img: Televizor,
            text: "Телевизоры, фото-видео и аудио"
        },

    ]

    return (
        <div className='poiskCategory'>
            <div className="poiskCategory_wrapper">
                <h1>Поиск по категориям</h1>
                <Slider
                    slidesToShow={6}
                    swipeToSlide={true}
                    focusOnSelect={true}
                >
                    {
                        categoryCarouselImg?.map((carouselImg) => {
                            return (
                                <div className='item' key={carouselImg.id}>
                                    <div className="item_img">
                                        <img src={carouselImg.img} alt="iphone" />
                                    </div>
                                    <p>{carouselImg.text}</p>
                                </div>
                            )
                        })
                    }
                </Slider>
            </div>
        </div>
    )
}

export default PoiskCategoriy;