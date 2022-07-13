import MoviedbService from '../../services/MoviedbService'

import React, {useEffect, useState} from 'react';
import {useSelector,useDispatch} from "react-redux"

import {fetchMovieData} from "../../redux/slice/movieDataSlice"

import ErrorMessage from '../../compontents/errorMessage/ErrorMessage'
import ListSearch from "../../compontents/listSearch/ListSearch"
import Pagination from "../filterMovie/FilterMovie"



const moviedbService = new MoviedbService();

const SeachMovie = () => {

    const search = useSelector(state => state.filter.searchValue)
    const {movieData, status,page,totalPage} = useSelector(state => state.movieData)

    const dispatch = useDispatch()

    const api = moviedbService.getSearchMovie(search,page);

    useEffect(() => {
        if(!search){
            return
        }
        dispatch(fetchMovieData(api))
    }, [page,search])


    const content = status === 'error' ?
        <ErrorMessage/> :
        <ListSearch data={movieData}
                    
        status={status}
        />

    const NoResults = () => {
        return(
            <div style={{color: 'white'}} className='mt-2 p-xl-3'>
                No results
            </div>
        )
    }

    return (
        <>
            {!movieData.length > 0 ? <NoResults/> : null}
            {content}
            {totalPage > 1 ?  <Pagination/> : null}
        </>
    )


};

export default SeachMovie;