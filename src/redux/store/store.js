import {configureStore} from '@reduxjs/toolkit'
import movie from "../slice/movieSlice"
import movieData from "../slice/movieDataSlice"
import filter from '../slice/filterSlice'
import upcoming from '../slice/upcomingSlice'
import movieVideo from '../slice/movieVideoSlice'

import {movieApi} from "../../services/MovieService"


export const store = configureStore({
    reducer: {
        movie, movieData, filter, upcoming,movieVideo,
        [movieApi.reducerPath] : movieApi.reducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(movieApi.middleware)
})