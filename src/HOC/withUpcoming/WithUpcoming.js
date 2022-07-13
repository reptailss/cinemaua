import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux"

import {fetchUpcomingMovie} from "../../redux/slice/upcomingSlice"

import ErrorMessage from '../../compontents/errorMessage/ErrorMessage'

import MoviedbService from '../../services/MoviedbService'
import useWhyDidYouUpdate from "ahooks/lib/useWhyDidYouUpdate"


 const moviedbService = new MoviedbService;

const WithUpcoming = (BaseComponent) => {

    useWhyDidYouUpdate('WithUpcoming',BaseComponent);

    const {upcomingMovie, status} = useSelector(state => state.upcoming)


    const dispatch = useDispatch()

    const api = moviedbService.getUppcomingMovie(1)

    useEffect(() => {
        dispatch(fetchUpcomingMovie(api))
    }, [])

    return (props) => {

        const content =  status === 'error' ?
            <ErrorMessage/> :
            <BaseComponent
                staus={status}
                upcomingMovie={upcomingMovie}
            />;
        return (
            <>
                {content}
            </>

        )
    }

};

export default WithUpcoming;