import { createApi,fetchBaseQuery } from '@reduxjs/toolkit/query/react'

import {API_URL,API_KEY} from "../constans/api"

export const movieApi = createApi({
    reducerPath: 'movieApi',
    baseQuery: fetchBaseQuery({baseUrl: API_URL}),
   endpoints: (build) => ({
       getMovie: build.query({
           query: (id='') => `movie/${id}?${API_KEY}&language=en-US`
       }),
       getMovieSimilar: build.query({
           query: (id) => `movie/${id}/similar?${API_KEY}&language=en-US&page=1`
       }),
       getTrendingMovie: build.query({
           query: (time) => `trending/movie/${time}?${API_KEY}`
       }),
       getFilteredMovie: build.query({
           query: ({filterProps,page}) => `discover/movie?${API_KEY}&language=en-US&sort_by=${filterProps.sort}.${filterProps.order}&include_adult=false&include_video=${filterProps.video}&page=${page}&release_date.gte=${filterProps.releaseGte}&release_date.lte=${filterProps.releaseLte}&with_genres=${filterProps.withGenres}`
       }),


   })

})

export const {useGetMovieQuery,useGetMovieSimilarQuery,useGetTrendingMovieQuery,useGetFilteredMovieQuery} = movieApi



