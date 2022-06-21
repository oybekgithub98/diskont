import React from 'react';

import Facebook from '../../assets/facebook.svg';
import telegram from '../../assets/telegram.png'; 
import { Maestro, Pay, PayPal, Visa, Stripe } from '../../assets/svg';

import './Footer.css';

const Footer = () => {

    return (
        <div className="footer">
            <div className="footer_wrapper">
                <div className="footer_logo">
                    <ul>
                        <li>
                            <h1>Diskont</h1>
                        </li>
                        <li>
                            <p>Телефон поддержки</p>
                        </li>
                        <li>
                            <span>(71) 207 77 88</span>
                        </li>
                        <li>
                            <div className="logoImg">
                                <img src={Facebook} alt="" />
                            </div>
                            <div className="logoImg">
                                <img src={telegram} alt="" />
                            </div>
                            <div className="logoImg">
                                <img src={telegram} alt="" />
                            </div>
                        </li>
                    </ul>
                </div>
                <div className="Company">
                    <ul>
                        <li>
                            <h2>Company</h2>
                        </li>
                        <li>
                            <a href="/#"><p>B2B продажи</p></a>
                        </li>
                        <li>
                            <a href="/#"><p>О Техномарт</p></a>
                        </li>
                        <li>
                            <a href="/#"><p>Новости и обзоры</p></a>
                        </li>
                        <li>
                            <a href="/#"><p>Проверка IMEI</p></a>
                        </li>
                    </ul>
                </div>
                <div className="Company">
                    <ul>
                        <li>
                            <h2>Информация</h2>
                        </li>
                        <li>
                            <a href="/#"><p>Бесплатная доставка</p></a>
                        </li>
                        <li>
                            <a href="/#"><p>Бонусная система</p></a>
                        </li>
                        <li>
                            <a href="/#"><p>Работа в Техномарт</p></a>
                        </li>
                        <li>
                            <a href="/#"><p>Личный кабинет</p></a>
                        </li>
                        <li>
                            <a href="/#"><p>Контактные номера</p></a>
                        </li>
                    </ul>
                </div>
                <div className="Company">
                    <ul>
                        <li>
                            <h2>Помощь покупателю</h2>
                        </li>
                        <li>
                            <a href="/#"><p>Покупка в рассрочку</p></a>
                        </li>
                        <li>
                            <a href="/#"><p>Возврат товара</p></a>
                        </li>
                        <li>
                            <a href="/#"><p>Гарантия на товары</p></a>
                        </li>
                        <li>
                            <a href="/#"><p>Часто задаваемые вопросы</p></a>
                        </li>
                    </ul>
                </div>
                <div className="paymentTypes">
                    <ul>
                        <li>
                            <h2>Виды оплаты</h2>
                        </li>
                        <li>
                            <Maestro className="maestro" />
                            <PayPal />
                            <Pay />
                            <Visa />
                            <Stripe />
                        </li>
                    </ul>
                </div>
            </div>
            <div className="copy_right">
                <p>Доставка товаров осуществляется во все регионы.</p>
                <p>Все права защищены.</p>
            </div>
        </div>
    )
}

export default Footer;