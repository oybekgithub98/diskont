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
  return (
    <div className='brend'>
        <div className="brend_wrapper">
            <div className="brend_header">
                <h1>Бренды</h1>
                <button>Смотреть все <img src={arrowImg} alt="arrowImg" /></button>
            </div>
            <div className="brend_body">
                <div><img src={bosch} alt="bosch img" /></div>
                <div><img src={mi} alt="mi img" /></div>
                <div><img src={indesit} alt="indesit img" /></div>
                <div><img src={lg} alt="lg img" /></div>
                <div><img src={samsung} alt="samsung img" /></div>
                <div><img src={philips} alt="philips img" /></div>
                <div><img src={holder} alt="philips img" /></div>
                <div><img src={samsung} alt="samsung img" /></div>
                <div><img src={mi} alt="mi img" /></div>
                <div><img src={philips} alt="philips img" /></div>
                <div><img src={indesit} alt="indesit img" /></div>
                <div><img src={lg} alt="lg img" /></div>
            </div>
        </div>
        
    </div>
  )
}

export default Brend