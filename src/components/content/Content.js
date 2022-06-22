import React from 'react';
import { Link } from 'react-router-dom';

import { ElectronicArrow } from '../../assets/svg';
import ContentProduct from '../contentProduct/ContentProduct';
import ContentSidebar from '../contentSidebar/ContentSidebar';


import './Content.css';


const Content = () => {
    return (
        <div className='content'>
            <div className="content_wrapper">
                <div className='content_head'>
                    <Link to="/">Главная</Link>
                    <ElectronicArrow />
                    <Link to="/electronik">Электроника</Link>
                    <ElectronicArrow />
                    <p>Мобильные телефоны</p>
                </div>
                <div className='contett_text'>
                    <h1>Мобильные телефоны</h1>
                    <p>183 756 товаров</p>
                </div>
                <div className='content_body'>
                    <div className='content_body_left'><ContentSidebar /></div>
                    <div className='content_body_right'><ContentProduct /></div>
                </div>
            </div>
        </div>
    )
}

export default Content