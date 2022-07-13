
import { useState,memo} from 'react';

import {useGetTrendingMovieQuery} from '../../services/MovieService'

import ErrorMessage from '../../compontents/errorMessage/ErrorMessage'
import SliderMovie from '../../compontents/sliderMovie/SliderMovie'
import RadioButtons from '../../compontents/radioButtons/RadioButtons'


import style from './trenging.module.scss'
import React from "react"



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


const TrengingMovie = memo(() => {

        const [timeMovie, setTimeMovie] = useState('day')
        const [radioChecked, setRadioChecked] = useState('day');
        const {data,isLoading,error} = useGetTrendingMovieQuery(timeMovie)

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

        const dataResults = data ? data.results : [];


    const content = error ?
        <ErrorMessage/> :
        <SliderMovie
            spaceBetween={10}
            breakpoints={breakpoints}
            isLoading={isLoading}
            data={dataResults}/>;

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
                {content}
            </div>
        )
    }

)

export default TrengingMovie