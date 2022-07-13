

import {createAsyncThunk, createSlice, PayloadAction} from '@reduxjs/toolkit'

const initialState = {
    movieVideo: [],
    status: 'loading',
    page: 1,
    totalPage: 1,
    movieVideoId: {},

}

export const fetchMovieVideo = createAsyncThunk(
    'movieVideo/fetchMovieVideo',
    async (api) => {
        return await api

    }
);


export const movieVideoSlice = createSlice({
    name: 'movieVideo',
    initialState,
    reducers: {
        setMovieVideo(state, action) {
            state.MovieVideo = action.payload
        },
        setPage(state, action) {
            state.page = action.payload
        },
        setMovieVideoId(state, action) {
            state.movieVideoId = action.payload
        },


    },
    extraReducers: {

        [fetchMovieVideo.pending]: (state) => {
            state.status = 'loading'
        },
        [fetchMovieVideo.fulfilled]: (state, action) => {


                 state.movieVideo.push(action.payload.results[1].key);

            state.totalPage = action.payload.total_pages;
            state.status = 'success'


        },
        [fetchMovieVideo.rejected]: (state) => {
            state.status = 'error'
        },


    }

})


export const {setMovieVideo, setPage, setMovieVideoId} = movieVideoSlice.actions;

export default movieVideoSlice.reducer;