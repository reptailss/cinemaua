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
//
// import React, {useEffect} from 'react';
// import {useSelector,useDispatch} from "react-redux"
// import {setMovie} from "../../redux/slice/movieSlice"
//
// import {useGetMovieQuery} from '../../services/MovieService'
//
// import SkeletonMovie from '../../compontents/skeletonMovie/SkeletonMovie'
// import ErrorMessage from '../../compontents/errorMessage/ErrorMessage'
//
//
// const WithMovie = (BaseComponent,heightSkeleton, movieId) => {
//
//     const {data = [],isLoading,isError} = useGetMovieQuery(movieId)
//     const dispatch = useDispatch()
//     const {movie} = useSelector(state => state.movie)
//
//
//     console.log('data',data)
//
//     useEffect(() => {
//         dispatch(setMovie(data))
//     }, [movieId])
//
//     return (props) => {
//
//         const content = isLoading ? <SkeletonMovie height={heightSkeleton}/> : isError ?
//             <ErrorMessage/> :
//             <BaseComponent
//                 {...props}
//                 {...movie}
//             />;
//         return (
//             <>
//
//                 {content}
//             </>
//
//         )
//     }
//
// };
//
// export default WithMovie;