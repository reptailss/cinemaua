import React, {useEffect} from 'react';
import ErrorMessage from '../../compontents/errorMessage/ErrorMessage'
import SliderMovie from '../../compontents/sliderMovie/SliderMovie'

import style from './upcomingMovieView.module.scss'

const UpcomingMovieView = ({upcomingMovie, status,breakpointsProp}) => {


    const breakpoints =  {
        50: {
            slidesPerView: 2,
        },

        400: {
            slidesPerView: 3,
        },
        600: {

            slidesPerView: 5,
        },
        900: {

            slidesPerView: 7,
        },
        1200: {

            slidesPerView: 3,
        },
    }
    const breakpointsValue = breakpointsProp ? breakpointsProp : breakpoints;





    const content = status === 'error' ?
        <ErrorMessage/> :
        <SliderMovie
            status={status}
            spaceBetween={10}
            data={upcomingMovie}
            breakpoints={breakpointsValue}
        />;

    return (
        <>

            <div className={style.upcoming}>
                <div className={style.title}>Upcoming films:
                </div>
                {content}
            </div>

        </>
    )

}

export default UpcomingMovieView;