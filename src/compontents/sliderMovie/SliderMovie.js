import React from "react";

import {Navigation, Scrollbar} from 'swiper';
import {Swiper, SwiperSlide} from 'swiper/react';


import ItemMovie from '../itemMovie/ItemMovie'
import SkeletonMovie from "../skeletonMovie/SkeletonMovie"

import 'swiper/css';
import 'swiper/css/navigation';
import "swiper/css/scrollbar";

import './slider.scss'



const SliderMovie = ({data, spaceBetween, breakpoints, status,isLoading}) => {


    const itemsSlide = data.map((item) => {
        return (
            <SwiperSlide key={item.id}>
                <ItemMovie
                    {...item}
                />
            </SwiperSlide>
        )
    });

    const skeletons = [...new Array(6)].map((_, index) => {
        return (
            <SwiperSlide key={index}>
                <SkeletonMovie height={160}/>
            </SwiperSlide>
        )
    });


    return (
        <Swiper
            breakpoints={breakpoints}
            modules={[Navigation]}
            navigation
            spaceBetween={spaceBetween}
        >

            {isLoading ? skeletons : itemsSlide}


        </Swiper>


    )


}

export default SliderMovie;