import React from 'react';

import bosch from '../../assets/brendImg1.png';
import mi from '../../assets/brendImg2.png';
import indesit from '../../assets/brendImg3.png';
import lg from '../../assets/brendImg4.png';
import samsung from '../../assets/brendImg5.png';
import philips from '../../assets/brendImg6.png';
import holder from '../../assets/brendImg7.png';
import arrowImg from '../../assets/brendBtnImg.png';


import './Brend.css';

const Brend = () => {

  const BrendImg = [
    {
      id: 1,
      img: bosch
    },
    {
      id: 2,
      img: mi
    },
    {
      id: 3,
      img: indesit
    },
    {
      id: 4,
      img: lg
    },
    {
      id: 5,
      img: samsung
    },
    {
      id: 6,
      img: philips
    },
    {
      id: 7,
      img: holder
    },
    {
      id: 8,
      img: samsung
    },
    {
      id: 9,
      img: mi
    },
    {
      id: 10,
      img: philips
    },
    {
      id: 9,
      img: indesit
    },
    {
      id: 10,
      img: lg
    },
  ]

  return (
    <div className='brend'>
      <div className="brend_wrapper">
        <div className="brend_header">
          <h1>Бренды</h1>
          <button>Смотреть все <img src={arrowImg} alt="arrowImg" /></button>
        </div>
        <div className="brend_body">
          {
            BrendImg?.map((brend_img) => {
              return (
                <div>
                  <img src={brend_img.img} alt="bosch img" />
                </div>
              )
            })
          }
        </div>
      </div>

    </div>
  )
}

export default Brend;