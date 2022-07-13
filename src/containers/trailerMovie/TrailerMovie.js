import React, {useEffect, useRef, useState} from 'react';
import {useDispatch, useSelector} from "react-redux"


import {Autoplay, Navigation} from 'swiper';
import {Swiper, SwiperSlide,useSwiper } from 'swiper/react';


import {getRandom} from '../../feature/getRandom'
import pathImg from '../../feature/pathImg'


import TrailerItem from '../../compontents/TrailerItem/TrailerItem'
import SkeletonMovie from '../../compontents/skeletonMovie/SkeletonMovie'


import 'swiper/css';
import 'swiper/css/navigation';
import "swiper/css/scrollbar";
import './slider.scss'

import style from './trailerMovie.module.scss'



const breakpoints = {
    50: {
        slidesPerView: 1,
    },

    400: {
        slidesPerView: 2,
    },

    1200: {

        slidesPerView: 3,
    },
}

const TrailerMovie = React.memo((props) => {


    const {upcomingMovie, status,} = useSelector(state => state.upcoming)
    const [movie, setMovie] = useState([])
    const [sliceUpcomingMovie, setUpcomingMovie] = useState([])
    const [activeIndex, setActiveIndex] = useState(0)
    const [srcImg, setSrcImg] = useState()

    const swiper = useSwiper();

    const dispatch = useDispatch();

    const ref = useRef(false)


    useEffect(() => {

        if (!upcomingMovie) {
            return
        }


        upcomingMovie.map((item) => {
            if (!movie.includes(item.id)) {
                setMovie([...movie, movie.push(item.id)])
            }
        })
        if (movie.length > 6) {

            setMovie(getRandom(movie, 6))
        }
        ref.current = true;


    }, [upcomingMovie])

    useEffect(() => {
        onBgSlider()
    }, [movie])


    const trailerItems = movie.map((id, index) => {
        return (

            <SwiperSlide
                data-id={id}
                onMouseEnter={e => {
                    setActiveIndex(index)

                }}
                value={index}
                key={index}>
                <TrailerItem

                    index={index}
                    id={id}/>
            </SwiperSlide>


        )
    })


    const onBgSlider = (index = activeIndex) => {
        const indexElementObj = upcomingMovie.filter(obj => obj.id === movie[activeIndex]);
        if (indexElementObj.length) {
            setSrcImg(indexElementObj[0].backdrop_path)
        }
    }

    const skeletons = [...new Array(6)].map((_, index) => {
        return (
            <SwiperSlide key={index}>
                <SkeletonMovie height={165}/>
            </SwiperSlide>
        )
    });


    const onchangeSlide = (e) => {
        setActiveIndex(e.realIndex)
        onBgSlider()
    }


    const imgList = movie.map((item, i) => {

        const indexElementObj = upcomingMovie.filter(obj => obj.id === item);
        const src = pathImg(indexElementObj[0].backdrop_path)
        const clazz = activeIndex === i ? style.img + ' ' + style.show : style.img + ' ' + style.hide

        return (
            <div style={{
                transition: 'all .3s',
                backgroundImage: `url(${src})`
            }}
                 className={clazz}
                 key={i}
            >
            </div>


        )
    })

    const pathImgSrc = pathImg(srcImg)


    const content = status === 'loading' ? skeletons : trailerItems;
    return (
        <>
            <div className={style.title}>
                Latest movie trailers
            </div>
            <div className={style.inner}>

                <div className={style.imgList}>
                    {imgList}
                </div>
                <Swiper
                    className={'slider'}
                    centeredSlides={true}
                    onSlideChange={(e) => onchangeSlide(e)}
                    loop={true}
                    autoplay={{
                        delay: 3000,
                        disableOnInteraction: true,
                        pauseOnMouseEnter: true,

                    }}
                    slidesPerView={3}
                    modules={[Navigation, Autoplay]}
                    navigation
                    spaceBetween={30}
                    breakpoints={breakpoints}
                >
                    {content}
                </Swiper>

            </div>
        </>


    );
})


export default TrailerMovie;