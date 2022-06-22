import React from 'react';
import { TopArrow } from '../../assets/svg';

import './ContentSidebar.css';

const ContentSidebar = () => {
  return (
    <div className='contentSidebar'>
        <div className="contentSidebar_head">
            <h4>Категории</h4>
            <TopArrow />
        </div>
        <input type="text" placeholder='Я ищу …' className='content_search'  />
        <ul className='ul_collection'>
            <li>
                <input type="checkbox" />
                <label>power bank (45)</label>
            </li>
            <li>
                <input type="checkbox" />
                <label>power bank (45)</label>
            </li>
            <li>
                <input type="checkbox" />
                <label>power bank (45)</label>
            </li>
            <li>
                <input type="checkbox" />
                <label>power bank (45)</label>
            </li>
        </ul>
    </div>
  )
}

export default ContentSidebar