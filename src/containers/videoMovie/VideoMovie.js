import React, {useEffect, useState} from 'react';



import MoviedbService from '../../services/MoviedbService'


import SkeletonMovie from '../../compontents/skeletonMovie/SkeletonMovie'
import SliderVideo from '../../compontents/sliderVideo/SliderVideo'
import ErrorMessage from '../../compontents/errorMessage/ErrorMessage'



const moviedbService = new MoviedbService;

const VideoMovie = ({movieId}) => {


    const [video, setVideo] = useState([])
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(false)


    useEffect(() => {

        videoUpdate(movieId)
    }, [])


    const videoUpdate = () => {

        if (!movieId) {
            return
        }
        onVideoLoading();
        moviedbService.getVideoMovie(movieId).then((res) => {
            onVideoLoaded(res.results)
        })
            .catch(() => {
                setError(true)
            })
    }

    const onVideoLoading = () => {
        setLoading(true);
    }

    const onVideoLoaded = (res) => {
        setLoading(false)
        setError(false)
        setVideo(res)
        console.log(res)
    }



    const content = !(loading || error) ?
        <SliderVideo
            data={video}
            spaceBetween={10}
            slidesPerView={2}
            loading={loading}
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

export default VideoMovie;