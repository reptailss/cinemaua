// import MoviedbService from '../../services/MoviedbService'
//
//
// import React, {useEffect} from 'react';
// import {useDispatch, useSelector} from "react-redux"
//
//
// import {fetchMovieData} from "../../redux/slice/movieDataSlice"
// import {useGetMovieSimilarQuery} from '../../services/MovieService'
//
//
// import SliderMovie from '../../compontents/sliderMovie/SliderMovie'
// import ErrorMessage from '../../compontents/errorMessage/ErrorMessage'
//
// import style from './similarMovie.module.scss'
//
//
// const moviedbService = new MoviedbService;
//
// const breakpoints =  {
//     50: {
//         slidesPerView: 2,
//     },
//
//     400: {
//         slidesPerView: 3,
//     },
//     600: {
//
//         slidesPerView: 5,
//     },
//     900: {
//
//         slidesPerView: 7,
//     },
//     1200: {
//
//         slidesPerView: 3,
//     },
// }
//
//
// const SimilarMovie = ({breakpointsProp}) => {
//
//         const {movieData, status} = useSelector(state => state.movieData)
//         const {movieId} = useSelector(state => state.movie)
//
//         const dispatch = useDispatch()
//
//         const api = moviedbService.getMovieSimilar(movieId)
//
//     const {data} = useGetMovieSimilarQuery(movieId)
//
//
//
//         useEffect(() => {
//             dispatch(fetchMovieData(api))
//         }, [movieId])
//
//
//
//
//
//         const breakpointsValue = breakpointsProp ? breakpointsProp : breakpoints;
//
//         console.log(data)
//
//         const content = status === 'error' ?
//             <ErrorMessage/> :
//             <SliderMovie
//                 status={status}
//                 spaceBetween={10}
//                 breakpoints={breakpointsValue}
//                 data={movieData}
//             />;
//
//         return (
//             <>
//                 <div className={style.similarMovie}>
//                     <div className={style.title}>related movies to this:
//                     </div>
//                     {content}
//                 </div>
//
//             </>
//         )
//
//     }
// ;
//
// export default SimilarMovie;



import React, {memo} from 'react';
import {useSelector} from "react-redux"
import {useGetMovieSimilarQuery} from '../../services/MovieService'


import SliderMovie from '../../compontents/sliderMovie/SliderMovie'
import ErrorMessage from '../../compontents/errorMessage/ErrorMessage'

import style from './similarMovie.module.scss'


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

        slidesPerView: 3,
    },
}


const SimilarMovie = memo(({breakpointsProp}) => {



        const {movieId} = useSelector(state => state.movie)

        const {data, isLoading, error} = useGetMovieSimilarQuery(movieId)

        const breakpointsValue = breakpointsProp ? breakpointsProp : breakpoints;


    const dataResults = data ? data.results : [];

        const content = error ?
            <ErrorMessage/> :
            <SliderMovie
                isLoading={isLoading}
                spaceBetween={10}
                breakpoints={breakpointsValue}
                data={dataResults}
            />;

        return (
            <>
                <div className={style.similarMovie}>
                    <div className={style.title}>related movies to this:
                    </div>
                    {content}
                </div>

            </>
        )

    })
;

export default SimilarMovie;