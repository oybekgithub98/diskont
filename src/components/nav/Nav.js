import React from 'react';
import {Link} from 'react-router-dom';
import './Nav.css';

import {MdOutlineHeadsetMic} from 'react-icons/md';

const Nav = () => {
  return (
    <div className='nav'>
        <div className="nav_wrapper">
            <ul>
                <li><Link to="/electronik">О Нас</Link></li>
                <li><a href="#">Рассрочка</a></li>
                <li><a href="#">Оферта</a></li>
                <li><a href="#">Доставка и оплата</a></li>
                <li><a href="#">Сервисные центры</a></li>
                <li><a href="#">Наши магазины</a></li>
            </ul>
            <ul className='ul_collection'>
                <li className='nav_icons_number'>
                    <MdOutlineHeadsetMic className='nav_icon'/>
                    <span>71 207 77 88</span>
                </li>
                <li>
                    <select>
                        <option value="ru">ru</option>
                        <option value="en">en</option>
                        <option value="uz">uz</option>
                    </select>
                </li>
            </ul>
        </div>
    </div>
  )
}

export default Nav