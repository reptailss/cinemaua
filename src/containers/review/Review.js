import React, {useEffect, useState} from 'react';



import MoviedbService from '../../services/MoviedbService'


import SkeletonMovie from '../../compontents/skeletonMovie/SkeletonMovie'
import ReviewView from '../../UI/reviewView/ReviewView'
import ErrorMessage from '../../compontents/errorMessage/ErrorMessage'


const moviedbService = new MoviedbService;

const Review = ({movieId}) => {


    const [review, setReview] = useState([])
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(false)


    useEffect(() => {

        reviewUpdate(movieId)
    }, [])


    const reviewUpdate = () => {

        if (!movieId) {
            return
        }
        onReviewLoading();
        moviedbService.getReviewMovie(movieId).then((res) => {
            onReviewLoaded(res.results)
        })
            .catch(() => {
                setError(true)
            })
    }

    const onReviewLoading = () => {
        setLoading(true);
    }

    const onReviewLoaded = (res) => {
        setLoading(false)
        setError(false)
        setReview(res)
    }



    const content = !(loading || error || !review)  ? <ReviewView
        data={review}

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

export default Review;