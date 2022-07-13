import React, {useEffect, useState} from 'react';



import MoviedbService from '../../services/MoviedbService'


import SkeletonMovie from '../../compontents/skeletonMovie/SkeletonMovie'
import SidebarMovieView from '../../UI/sidebarMovieView/SidebarMovieView'
import ErrorMessage from '../../compontents/errorMessage/ErrorMessage'


const moviedbService = new MoviedbService;

const SidebarMovie = ({movieId}) => {


    const [movie, setMovie] = useState({})
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(false)


    useEffect(() => {

        movieUpdate(movieId)
    }, [])


    const movieUpdate = () => {

        if (!movieId) {
            return
        }
        onMovieLoading();
        moviedbService.getMovie(movieId).then((res) => {
            onMovieLoaded(res)
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
        setMovie(res)
    }

    const {title,original_title,status,budget,spoken_languages,original_language} = movie;



    const content = !(loading || error || !movie)  ? <SidebarMovieView
        title={title}
        original_title={original_title}
        status={status}
        budget={budget}
        original_language={original_language}
        spoken_languages={spoken_languages}
    /> : null;

    const skeleton =   loading && !error  ?   <SkeletonMovie height={382} /> :  null ;
    const errorMessage = error ? <ErrorMessage/> : null;


    return (
        <>
            {skeleton}
            {content}
            {errorMessage}

        </>

    )
};

export default SidebarMovie;