import React from 'react';
import { Link } from 'react-router-dom';

import './ElectronikItem.css';

const ElectronikItem = ({ electronikProduct = [] }) => {

    return (
        <>
            {
                electronikProduct.map((item) => (
                    <Link to={`${`/content/`+ item.id}`} key={item.id}>
                        <div className="electronic_item">
                            <h4>{item.text}</h4>
                            <img src={item.img} alt="" />
                        </div>
                    </Link>
                ))
            }
        </>
    )
}

export default ElectronikItem;