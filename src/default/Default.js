import React from 'react'
import Footer from '../components/footer/Footer'
import Home from '../components/home/Home'
import Nav from '../components/nav/Nav'
import NavSearch from '../components/navSearch/NavSearch'
import {Routes, Route} from 'react-router-dom';
import Electronik from '../components/electronik/Electronik';
import Content from '../components/content/Content'

import productImg1 from "../assets/productImg1.png";
import productImg2 from "../assets/productImg2.png";
import productImg3 from "../assets/productImg3.png";
import productImg4 from "../assets/productImg4.png";

const Default = () => {

  const productItems = [
    {
      id: 1,
      img: productImg1,
      SLPrise: "16 245 000",
      price: "16 245",
      text: "Смартфон Apple iPhone 11 128GB, черный, Slimbox",
      feedback: 5,
    },
    {
      id: 2,
      img: productImg2,
      SLPrise: "16 245 000",
      price: "16 245",
      text: "Смартфон Apple iPhone 11 128GB, черный, Slimbox",
      feedback: 5,
    },
    {
      id: 3,
      img: productImg3,
      SLPrise: "16 245 000",
      price: "16 245",
      text: "Смартфон Apple iPhone 11 128GB, черный, Slimbox",
      feedback: 5,
    },
    {
      id: 4,
      img: productImg4,
      SLPrise: "16 245 000",
      price: "16 245",
      text: "Смартфон Apple iPhone 11 128GB, черный, Slimbox",
      feedback: 5,
    },
  ];

  return (
    <div>
        <Nav />
        <NavSearch />
        <Routes>
          <Route path='/' element={<Home data={productItems} />} />
          <Route path='/electronik' element={<Electronik data={productItems} />} />
          <Route path="/content/:id" element={<Content />} />
        </Routes>
        
        <Footer />
    </div>
  )
}

export default Default