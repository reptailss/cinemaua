import MoviedbService from '../../services/MoviedbService'

import React, {useEffect} from 'react';
import {useSelector,useDispatch} from "react-redux"

import {setTotalPage} from "../../redux/slice/filterSlice"
import {fetchMovieData} from "../../redux/slice/movieDataSlice"



import ErrorMessage from '../../compontents/errorMessage/ErrorMessage'
import ListSearch from "../../compontents/listSearch/ListSearch"
import Pagination from "../../compontents/Pagination/Pagination"

const moviedbService = new MoviedbService();

const FilterMovie = () => {

    const {filterProps} = useSelector(state => state.filter)

    const {movieData, status,page,totalPage} = useSelector(state => state.movieData)

    const dispatch = useDispatch()

    const {order,video,releaseGte,releaseLte,sort,withGenres} = filterProps;

    const genresString = withGenres.toString();

    const api = moviedbService.getFilterMovie(page,sort,order,video,releaseGte,releaseLte,genresString)


    useEffect(() => {
        dispatch(fetchMovieData(api))
    }, [page,totalPage,sort,video,releaseGte,releaseLte,withGenres])



    const NoResults = () => {
        return(
            <div style={{color: 'white'}} className='mt-2 p-xl-3'>
                No results
            </div>
        )
    }

    const content = status === 'error' ?
        <ErrorMessage/> :
        <ListSearch lengtOverview={350} data={movieData}/>

    return (
        <>
            {!movieData.length > 0 ? <NoResults/> : null}
            {content}
            {totalPage > 1 ?  <Pagination/> : null}
        </>
    )




};

export default FilterMovie;