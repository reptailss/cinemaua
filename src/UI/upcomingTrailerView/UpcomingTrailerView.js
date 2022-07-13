import React, {useEffect} from 'react';

import {useDispatch, useSelector} from "react-redux"

import {fetchUpcomingMovie} from "../../redux/slice/upcomingSlice"
import {setMovieVideoId} from '../../redux/slice/movieVideoSlice'

import MoviedbService from "../../services/MoviedbService"

import WithVideoMovie from '../../HOC/withVideoMovie/WithVideoMovie'
import SliderTrailer from '../../compontents/sliderTrailer/SliderTrailer'

const moviedbService = new MoviedbService;

const UpcomingTrailerView = () => {

    const {upcomingMovie, status} = useSelector(state => state.upcoming)


    const dispatch = useDispatch()

    const api = moviedbService.getUppcomingMovie(1)

    useEffect(() => {
        dispatch(fetchUpcomingMovie(api))


    }, [])




    return (
        <div>
            <div>
                latest released trailers
                <SliderTrailer data={upcomingMovie}/>
            </div>

        </div>
    );
};

export default UpcomingTrailerView;