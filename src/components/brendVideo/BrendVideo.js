import React from "react";
import Slider from "react-slick";
import arrowImg from "../../assets/brendBtnImg.png";
import { ArrowNext, ArrowPrev } from "../../assets/svg";

import "./BrendVideo.css";

const BrendVideo = () => {

    const videos = [
        {
            id: 1,
            imgUrl: "https://www.youtube.com/embed/2sBgjbVS2KA",
        },
        {
            id: 2,
            imgUrl: "https://www.youtube.com/embed/2sBgjbVS2KA",
        },
        {
            id: 3,
            imgUrl: "https://www.youtube.com/embed/2sBgjbVS2KA",
        },
        {
            id: 4,
            imgUrl: "https://www.youtube.com/embed/2sBgjbVS2KA",
        },
        {
            id: 5,
            imgUrl: "https://www.youtube.com/embed/2sBgjbVS2KA",
        },
    ];

    return (
        <div className="brendVideo">
            <div className="brendVideo_wrapper">
                <div className="brendVideo_head">
                    <h1>Обзор продуктов</h1>
                    <button>
                        Смотреть все <img src={arrowImg} alt="arrowImg" />
                    </button>
                </div>

                <Slider width={200} slidesToShow={4}>
                    {videos?.map((video) => {
                        return (
                            <div className="video_item">
                                <div className="item_wrapper">
                                    <iframe src={video.imgUrl} title="..."></iframe>
                                </div>
                            </div>
                        );
                    })}
                </Slider>
            </div>
        </div>
    );
};

export default BrendVideo;