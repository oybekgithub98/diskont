import React from "react";
import { BsCart2 } from "react-icons/bs";
import { BiHeart } from "react-icons/bi";
import { HiOutlineSwitchHorizontal } from "react-icons/hi";

import productImg1 from "../../assets/productImg1.png";
import productImg2 from "../../assets/productImg2.png";
import productImg3 from "../../assets/productImg3.png";
import productImg4 from "../../assets/productImg4.png";

import { Star } from "../../assets/svg";

import "./ProductItem.css";

const ProductItem = () => {


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

  function Start(number) {
    let data = [];
    for (let i = 0; i < number; i++) {
      data.push(i + 1);
    }
    return data.map((res) => <Star key={res} />);
  }

  return (
    <div className="products">
      {productItems?.map((product, index) => {
        return (
          <div className="product_item" key={index}>
            <div className="productImage">
              <img src={product.img} alt="productImage" />
            </div>
            <ul>
              <li className="collection_item">
                <p>
                  {product.SLPrise}
                  <span>UZS</span>
                </p>
                <span>-16%</span>
              </li>
              <li className="collection_item">
                <p>{product.prise}</p>
                <sup>000</sup>
                <span>UZS</span>
              </li>
              <li className="collection_item">
                <div className="star">{Start(product.feedback)}</div>
                <span>245</span>
              </li>
              <li>
                <p>Смартфон Apple iPhone 11 128GB, черный, Slimbox</p>
              </li>
              <li>
                <button>
                  <BsCart2 className="btnCart" />В корзину
                </button>
                <HiOutlineSwitchHorizontal className="" />
              </li>
            </ul>
            <BiHeart className="item_heart" />
          </div>
        );
      })}
    </div>
  );
};

export default ProductItem;
