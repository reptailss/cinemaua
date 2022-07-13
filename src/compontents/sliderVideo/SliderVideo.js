import React, { useRef, useState } from "react";
import {Navigation,Scrollbar} from 'swiper';
import {Swiper, SwiperSlide} from 'swiper/react';
import YouTube from 'react-youtube';


import 'swiper/css';
import 'swiper/css/navigation';
import "swiper/css/scrollbar";


const SliderVideo = ({data, loading, slidesPerView, spaceBetween}) => {




    let itemsSlide;


    itemsSlide = data.map((item, i) => {

        const {id,key} = item;
        const opts = {
            host: 'http://www.youtube.com',

            playerVars: {
                'origin': 'http://localhost:3000'
            },
        };

        if (i > 3) {
            return
        }
        return (

            <SwiperSlide key={id}>
                <YouTube
                    videoId={key}
                    opts={opts}
                />
            </SwiperSlide>

        )
    });


    return (


        <Swiper
            breakpoints={{
                50: {
                    slidesPerView: 1,
                },
                500: {

                    slidesPerView: 2,
                }
            }}
            style={{
                paddingBottom: '30px'
            }}
            scrollbar={{
                hide: false,
                draggable: true,
            }}
            modules={[Navigation,Scrollbar]}
            navigation
            spaceBetween={spaceBetween}
            slidesPerView={slidesPerView}
        >

            {itemsSlide}
        </Swiper>


    )


}

export default SliderVideo;