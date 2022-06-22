import React from 'react';
import { ElectronicArrow } from '../../assets/svg';
import { Link } from 'react-router-dom';
import ElectronikItem from '../electronikItem/ElectronikItem';
import Product from '../product/Product';

import './Electronik.css';

const Electronik = ({data}) => {

  const electronikProduct = [
    {
        id: 1,
        text: "Смартфоны",
        img: "https://diskount.techdatasoft.uz/static/media/phone.d0c0a66598673217d00c.png"
    },
    {
        id: 2,
        text: "Аксессуары для смартфонов и гаджетов",
        img: "https://diskount.techdatasoft.uz/static/media/smart.e3d33598bdb67609d434.png"
    },
    {
        id: 3,
        text: "Планшеты",
        img: "https://diskount.techdatasoft.uz/static/media/planshet.d21636a623430ef186c3.png"
    },
    {
        id: 4,
        text: "Smart Watches",
        img: "https://diskount.techdatasoft.uz/static/media/watches.5c573436eb85495260df.png"
    },
    {
        id: 5,
        text: "Кнопочные телефоны",
        img: "https://diskount.techdatasoft.uz/static/media/keyboard.62f4209a6543aeccdd6a.png"
    },
    {
        id: 6,
        text: "Планшеты",
        img: "https://diskount.techdatasoft.uz/static/media/planshet.d21636a623430ef186c3.png"
    },
    {
        id: 7,
        text: "Smart Watches",
        img: "https://diskount.techdatasoft.uz/static/media/watches.5c573436eb85495260df.png"
    },
    {
        id: 8,
        text: "Смартфоны",
        img: "https://diskount.techdatasoft.uz/static/media/phone.d0c0a66598673217d00c.png"
    },
]

  return (
    <div className="electronik">
      <div className="electronik_wrapper">
        <div className='electronik_head'>
          <Link to="/">Главная</Link>
          <ElectronicArrow className="electronicArrowImg" />
          <p>Электроника</p>
        </div>
        <h1>Электроника</h1>
        <div className="electronik_content">
          <ElectronikItem electronikProduct={electronikProduct} />
        </div>
      </div>
      <Product data={data} title="Скидки на электронику" />
      
    </div>
  )
}

export default Electronik;

