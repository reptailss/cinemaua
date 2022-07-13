
import React, { useRef, useState } from "react";
import {Navigation,Scrollbar} from 'swiper';
import {Swiper, SwiperSlide} from 'swiper/react';


import ItemActor from '../itemActor/ItemActor'

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';


const SliderMovie = ({data, loading, slidesPerView, spaceBetween, onMovieId}) => {


    let itemsSlide;


    itemsSlide = data.map((item, i) => {

        const {name,profile_path,character, id} = item;

        if (i > 15) {
            return
        }
        return (

            <SwiperSlide key={id}>

                <ItemActor
                    name={name}
                    profile_path={profile_path}
                    character={character}
                    id={id}
                />
            </SwiperSlide>

        )
    });


    return (


        <Swiper
            breakpoints={{
                50: {
                    slidesPerView: 2,
                },
                360: {

                    slidesPerView: 3,
                },
                700: {

                    slidesPerView: 7,
                },
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

export default SliderMovie;