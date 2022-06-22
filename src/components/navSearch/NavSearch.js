import React from 'react';
import './NavSearch.css';

// icons
import {TbQrcode} from 'react-icons/tb';
import {FiSearch, FiShoppingCart} from 'react-icons/fi';
import {BiHeart} from 'react-icons/bi';
import {HiOutlineSwitchHorizontal, HiOutlineUser} from 'react-icons/hi';
import {Link} from 'react-router-dom';

const NavSearch = () => {
  return (
    <div className='navSearch'>
        <div className="navSearch_wrapper">
            <ul>
                <li>
                    <Link to="/" ><h1>Diskont</h1></Link>
                </li>
                <li>
                    <button><TbQrcode className='navSearch_Icon' /> Каталог</button>
                </li>
                <li>
                    <div className='navSearch_input'>
                        <input type="text" placeholder='Я ишу...'/>
                        <button><FiSearch className='search' /> Найти</button>
                    </div>
                </li>
            </ul>
            <ul>
                <li>
                    <div className='navSearch_icons'>
                        <HiOutlineUser className='navSearch_icons_icon' />
                        <span>Кабинет</span>
                    </div>
                </li>
                <li>
                    <div className='navSearch_icons'>
                        <HiOutlineSwitchHorizontal className='navSearch_icons_icon' />
                        <span>Кабинет</span>
                    </div>
                </li>
                <li>
                    <div className='navSearch_icons'>
                        <BiHeart className='navSearch_icons_icon' />
                        <span>Кабинет</span>
                    </div>
                </li>
                <li>
                    <div className='navSearch_icons'>
                        <FiShoppingCart className='navSearch_icons_icon' />
                        <span>Кабинет</span>
                    </div>
                </li>
            </ul>
        </div>
    </div>
  )
}

export default NavSearch;