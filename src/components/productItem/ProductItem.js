import React from "react";
import { BsCart2 } from "react-icons/bs";
import { BiHeart } from "react-icons/bi";
import { HiOutlineSwitchHorizontal } from "react-icons/hi";


import { Star } from "../../assets/svg";

import "./ProductItem.css";

const ProductItem = ({data=[]}) => {


  

  function Start(number) {
    let data = [];
    for (let i = 0; i < number; i++) {
      data.push(i + 1);
    }
    return data.map((res) => <Star key={res} />);
  }

  return (
    <div className="products">
      {data?.map((product, index) => {
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
