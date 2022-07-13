import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux"
import {fetchMovie} from "../../redux/slice/movieSlice"


import SkeletonMovie from '../../compontents/skeletonMovie/SkeletonMovie'
import ErrorMessage from '../../compontents/errorMessage/ErrorMessage'


const WithMovie = (BaseComponent,heightSkeleton, movieId) => {

    const {status, movie} = useSelector(state => state.movie)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(fetchMovie(movieId))
    }, [movieId])

    return (props) => {

        const content = status === 'loading' ? <SkeletonMovie height={heightSkeleton}/> : status === 'error' ?
            <ErrorMessage/> :
            <BaseComponent
                {...props}
                {...movie}
            />;
        return (
            <>
                {content}
            </>

        )
    }

};

export default WithMovie;