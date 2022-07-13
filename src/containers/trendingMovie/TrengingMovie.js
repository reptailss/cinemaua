import * as React from 'react';
import {useEffect, useState} from 'react';

import ErrorMessage from '../../compontents/errorMessage/ErrorMessage'
import SliderMovie from '../../compontents/sliderMovie/SliderMovie'
import MoviedbService from '../../services/MoviedbService'
import RadioButtons from '../../compontents/radioButtons/RadioButtons'


import style from './trenging.module.scss'
import SkeletonMovie from "../../compontents/skeletonMovie/SkeletonMovie"


const moviedbService = new MoviedbService;


const TrengingMovie = () => {

    const [movie, setMovie] = useState([])
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(false)
    const [timeMovie, setTimeMovie] = useState('day')
    const [radioChecked, setRadioChecked] = useState('day');

    const onSetTimeMovieWeek = () => {
        setTimeMovie('week')
        setRadioChecked('week')
    }

    const onSetTimeMovieDay = () => {
        setTimeMovie('day')
        setRadioChecked('day')
    }


    const buttonsArray = [
        {value: 'week', name: 'week', checkedValue: radioChecked, onChangeInput: onSetTimeMovieWeek,},
        {value: 'day', name: 'day', checkedValue: radioChecked, onChangeInput: onSetTimeMovieDay,}
    ]


    useEffect(() => {

        movieUpdate()
    }, [timeMovie])


    const movieUpdate = () => {
        onMovieLoading();
        moviedbService.getTrendingMovie(timeMovie).then((res) => {
            onMovieLoaded(res);
        })
            .catch(() => {
                setError(true)
            })
    }

    const onMovieLoading = () => {
        setLoading(true);
    }

    const onMovieLoaded = (res) => {
        setLoading(false)
        setError(false)
        setMovie(res.results)
    }

    const breakpoints = {
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

            slidesPerView: 8,
        },
    }


    const content = !(loading || error) ?
        <SliderMovie
            spaceBetween={10}
            breakpoints={breakpoints}
            loading={loading}
            data={movie}/> : null;

    const skeleton = loading && !error ? <SkeletonMovie/> : null;
    const errorMessage = error ? <ErrorMessage/> : null;

    return (


        <div className={style.trenging}>
            <div className={style.title}>
                <RadioButtons title={'Movies are trending:'}
                              row group={'time'}
                              data={buttonsArray}
                              styleInner={{
                                  justifyContent: 'space-between'
                              }}/>
            </div>


            {skeleton}
            {content}
            {errorMessage}


        </div>
    )
}


export default TrengingMovie